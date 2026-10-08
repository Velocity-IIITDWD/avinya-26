"use client"

import React, { useState, useEffect, useRef } from "react"
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

function RevealCardItem({
  event,
  index,
  onExplore,
  priority,
  isDimmed,
  onHoverStateChange,
}: {
  event: EventData
  index: number
  onExplore?: (event: EventData) => void
  priority: boolean
  isDimmed: boolean
  onHoverStateChange: (hovered: boolean) => void
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setReducedMotion(true)
      setIsVisible(true)
      return
    }

    if (!itemRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: "40px 0px",
      }
    )

    observer.observe(itemRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Stagger delay: card 1 -> 0ms, card 2 -> 80ms, card 3 -> 160ms, card 4 -> 240ms...
  const delay = Math.min(index * 80, 560)

  return (
    <div
      ref={itemRef}
      style={{
        opacity: isVisible || reducedMotion ? 1 : 0,
        transform:
          isVisible || reducedMotion
            ? "translateY(0px) scale(1)"
            : "translateY(45px) scale(0.97)",
        transition: reducedMotion
          ? "none"
          : `opacity 450ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 450ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className="h-full will-change-transform"
    >
      <EventCard
        event={event}
        onExplore={onExplore}
        priority={priority}
        isDimmed={isDimmed}
        onHoverStateChange={onHoverStateChange}
      />
    </div>
  )
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

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-[#D5C6A6] bg-[#FAF3E3]/80 p-12 text-center text-[#173847] shadow-inner transition-all duration-400">
        <div className="mb-3 rounded-full bg-[#F2E5C9] p-3 text-[var(--theme-accent)] shadow-xs">
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
            className="mt-5 cursor-pointer rounded-xs border border-[var(--theme-primary)] bg-[var(--theme-primary)] px-4 py-2 text-xs font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] shadow-xs"
          >
            Reset Voyage Filters
          </button>
        )}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      data-parallax="5"
      onMouseLeave={() => setHoveredEventId(null)}
      key={`grid-${categoryKey}`}
      className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 will-change-transform"
    >
      {events.map((event, index) => {
        const isDimmed =
          supportsHover &&
          hoveredEventId !== null &&
          hoveredEventId !== event.id

        return (
          <RevealCardItem
            key={event.id}
            event={event}
            index={index}
            onExplore={onExploreEvent}
            priority={index < 3}
            isDimmed={isDimmed}
            onHoverStateChange={(hovered) => {
              if (!supportsHover) return
              setHoveredEventId(hovered ? event.id : null)
            }}
          />
        )
      })}
    </div>
  )
}
