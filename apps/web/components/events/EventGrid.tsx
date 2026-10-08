"use client"

import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { EventData } from "@/data/events"
import { EventCard } from "./EventCard"
import { CompassRoseMini } from "./NauticalDecorations"

interface EventGridProps {
  events: EventData[]
  onExploreEvent?: (event: EventData) => void
  onResetFilters?: () => void
  categoryKey?: string
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export function EventGrid({
  events,
  onExploreEvent,
  onResetFilters,
  categoryKey = "all",
  containerRef,
}: EventGridProps) {
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null)
  const [supportsHover, setSupportsHover] = useState(true)
  const localGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768

    if (isTouch) {
      setSupportsHover(false)
    }
  }, [])

  // GSAP Category Switch & Staggered Reveal Animation
  useEffect(() => {
    const targetGrid = containerRef?.current || localGridRef.current
    if (!targetGrid) return

    const cardElements = targetGrid.querySelectorAll(".event-card-reveal-item")
    if (cardElements.length === 0) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      gsap.set(cardElements, { opacity: 1, y: 0, scale: 1 })
      return
    }

    // GSAP staggered discovery: opacity 0 -> 1, y 40px -> 0, scale 0.97 -> 1, stagger 0.08s
    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.08,
        overwrite: "auto",
      }
    )
  }, [categoryKey, events, containerRef])

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)]/80 p-12 text-center text-[var(--theme-primary)] shadow-inner transition-all duration-400">
        <div className="mb-3 rounded-full bg-[var(--theme-accent-soft)] p-3 text-[var(--theme-accent)] shadow-xs">
          <CompassRoseMini size={36} />
        </div>
        <h4 className="font-serif text-lg font-bold tracking-wider uppercase text-[var(--theme-primary)]">
          No Expeditions Recorded in this Quadrant
        </h4>
        <p className="mt-1.5 max-w-md text-xs text-[var(--theme-muted-foreground)]">
          No destinations match your active voyage coordinates and category filter. Adjust your world sector or discipline selection to resume charting.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-5 cursor-pointer rounded-xs border border-[var(--theme-border)] bg-[var(--theme-primary)] px-4 py-2 text-xs font-bold tracking-widest text-[var(--theme-background)] uppercase transition-colors hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] shadow-sm"
          >
            Reset Voyage Filters
          </button>
        )}
      </div>
    )
  }

  return (
    <div
      ref={(node) => {
        localGridRef.current = node
        if (containerRef && "current" in containerRef) {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      }}
      data-parallax="5"
      onMouseLeave={() => setHoveredEventId(null)}
      className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 will-change-transform"
    >
      {events.map((event, index) => {
        const isDimmed =
          supportsHover &&
          hoveredEventId !== null &&
          hoveredEventId !== event.id

        return (
          <div
            key={event.id}
            className="event-card-reveal-item h-full will-change-transform"
          >
            <EventCard
              event={event}
              onExplore={onExploreEvent}
              priority={index < 3}
              isDimmed={isDimmed}
              onHoverStateChange={(hovered) => {
                if (!supportsHover) return
                setHoveredEventId(hovered ? event.id : null)
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
