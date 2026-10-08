"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { EventData, WORLD_CONFIG } from "@/data/events"
import { useWorldTheme } from "@/lib/theme"
import { useCardTilt } from "@/hooks/useCardTilt"
import {
  AvinyaSailIcon,
  CompassRoseMini,
  WaveDividerLine,
  NauticalCornerNotches,
} from "./NauticalDecorations"

export interface EventCardProps {
  event: EventData
  onExplore?: (event: EventData) => void
  priority?: boolean
  className?: string
  isDimmed?: boolean
  onHoverStateChange?: (hovered: boolean) => void
}

export function EventCard({
  event,
  onExplore,
  priority = false,
  className = "",
  isDimmed = false,
  onHoverStateChange,
}: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const accentLineRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useWorldTheme()

  // 3D Mouse Tilt, Internal Parallax & World-Specific Cursor Light via GSAP quickTo
  const {
    onMouseEnter: handleMouseEnterTilt,
    onMouseMove,
    onMouseLeave: handleMouseLeaveTilt,
  } = useCardTilt({
    cardRef,
    imageRef,
    titleRef,
    accentLineRef,
    lightRef,
  })

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverStateChange?.(true)
    handleMouseEnterTilt()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverStateChange?.(false)
    handleMouseLeaveTilt()
  }

  return (
    <div
      className={`group event-card-item relative h-full select-none transition-opacity duration-300 ${
        isDimmed ? "opacity-[0.82]" : "opacity-100"
      } ${className}`}
    >
      {/* ─── PHYSICAL SECONDARY BACKING LAYER (EXPEDITION DEPTH) ─── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-md border border-[var(--theme-border)] bg-[var(--theme-card)]/50 shadow-xs transition-transform duration-500 ease-out translate-x-1.5 translate-y-2 group-hover:translate-x-2 group-hover:translate-y-3.5 group-hover:opacity-90"
        aria-hidden="true"
      />

      {/* ─── PRIMARY EXPEDITION CARD WITH GSAP 3D HOVER TILT ─── */}
      <article
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-md border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 sm:p-6 text-[var(--theme-primary)] shadow-[0_6px_22px_-4px_rgba(0,0,0,0.4)] hover:border-[var(--theme-card-hover-border)] hover:shadow-[0_22px_48px_-10px_var(--theme-glow)] will-change-transform transition-[border-color,box-shadow,background-color] duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* ─── MOUSE-FOLLOWING SPOTLIGHT LAYER (WORLD-SPECIFIC TINT) ─── */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-0 z-20 rounded-md opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* ─── ANIMATED TOP ENGRAVED ACCENT LINE (GSAP TRANSFORM) ──── */}
        <div
          ref={accentLineRef}
          className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] origin-center scale-x-0 z-30"
          style={{
            backgroundColor: "var(--theme-accent)",
            boxShadow: "0 0 12px var(--theme-glow)",
          }}
          aria-hidden="true"
        />

        {/* ─── NAUTICAL FOLIO CORNER NOTCHES ──────────────────────── */}
        <NauticalCornerNotches
          color={isHovered ? "var(--theme-accent)" : "var(--theme-border)"}
          className="z-10 transition-colors duration-300"
        />

        {/* ─── CARD CONTENT WRAPPER ───────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col">
          {/* ─── HEADER: INDEPENDENT ARTWORK/ICON + BADGE + LOG NO ── */}
          <header className="mb-3.5 flex items-center justify-between border-b border-[var(--theme-border)] pb-2.5 transition-colors duration-400">
            <div className="flex items-center gap-2">
              {/* Official Avinya Maritime Sail Icon - Moves Independently */}
              <div className="relative flex shrink-0 items-center justify-center transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110">
                <AvinyaSailIcon variant="cream" size={24} alt="Avinya Sail" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-[var(--theme-accent)] uppercase transition-colors duration-300">
                  {event.logNumber}
                </span>
                <span className="text-[10px] font-bold tracking-[0.14em] text-[var(--theme-primary)]/90 uppercase">
                  {event.displayCategory || event.category}
                </span>
              </div>
            </div>

            {/* World Badge with World Accent & Category Tag */}
            <div className="flex items-center gap-1.5">
              {/* Category Pill Tag */}
              <span
                className={`rounded-xs px-2 py-0.5 font-mono text-[8.5px] font-bold tracking-wider uppercase border transition-colors duration-300 ${
                  event.category === "technical"
                    ? "border-[var(--theme-accent)]/50 bg-[var(--theme-accent-soft)] text-[var(--theme-accent)]"
                    : "border-[#F5C542]/50 bg-[#F5C542]/15 text-[#F5C542]"
                }`}
              >
                {event.category}
              </span>

              {/* World Realm Marker */}
              <div className="flex items-center gap-1 rounded-full border border-[var(--theme-border)] bg-[var(--theme-accent-soft)] px-2 py-0.5 shadow-xs transition-colors duration-300 group-hover:border-[var(--theme-accent)]/60">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    boxShadow: "0 0 6px var(--theme-glow)",
                  }}
                  aria-hidden="true"
                />
                <span className="text-[9px] font-semibold tracking-wider text-[var(--theme-primary)] uppercase">
                  {event.world.replace("The ", "")}
                </span>
              </div>
            </div>
          </header>

          {/* ─── EVENT TITLE (WITH GSAP INTERNAL PARALLAX) ─────────── */}
          <div className="mb-3">
            <h3
              ref={titleRef}
              className="font-serif text-[1.28rem] font-bold tracking-[0.03em] leading-snug text-[var(--theme-primary)] transition-colors duration-300 group-hover:text-[var(--theme-accent)] will-change-transform"
            >
              {event.title}
            </h3>
            {event.subtitle && (
              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[var(--theme-muted-foreground)]">
                {event.subtitle}
              </p>
            )}
          </div>

          {/* ─── EVENT ARTWORK / IMAGE CONTAINER (CLIPPED + GSAP PARALLAX) ─── */}
          <div
            ref={imageRef}
            className="relative mb-3.5 aspect-[16/10] w-full overflow-hidden rounded-xs border border-[var(--theme-border)] bg-[#0C121A] shadow-inner transition-colors duration-300 will-change-transform"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={800}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.045]"
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />

            {/* Calm State Gradient Scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0C121A]/85 via-[#0C121A]/20 to-transparent transition-opacity duration-500 group-hover:opacity-30"
              aria-hidden="true"
            />

            {/* Layered Hover Reveal Scrim */}
            <div
              className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(12, 18, 26, 0.95) 0%, rgba(12, 18, 26, 0.60) 60%, rgba(12, 18, 26, 0.35) 100%)",
              }}
            >
              {/* Top row in reveal: coordinates watermark & compass badge */}
              <div className="flex items-center justify-between text-[#F4E8D1]">
                <span className="font-mono text-[9px] tracking-widest text-[#E3D1B1] opacity-90">
                  {event.coordinates}
                </span>
                <div className="rounded-full bg-white/10 p-1 backdrop-blur-xs transition-transform duration-500 group-hover:rotate-45">
                  <CompassRoseMini size={18} className="text-[var(--theme-accent)]" />
                </div>
              </div>

              {/* Bottom reveal stats */}
              <div className="flex items-end justify-between text-[#F4E8D1]">
                {event.prizePool && (
                  <div className="flex flex-col">
                    <span className="text-[9px] font-semibold tracking-wider text-[#D8C7A8] uppercase">
                      Prize Bounty
                    </span>
                    <span className="font-serif text-sm font-bold text-[#FFF4D6]">
                      {event.prizePool}
                    </span>
                  </div>
                )}

                {event.teamSize && (
                  <div className="flex flex-col text-right">
                    <span className="text-[9px] font-semibold tracking-wider text-[#D8C7A8] uppercase">
                      Expedition Crew
                    </span>
                    <span className="text-xs font-semibold text-[#FFF4D6]">
                      {event.teamSize}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Watermark emblem bottom right */}
            <div className="pointer-events-none absolute bottom-2 right-2 z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-0">
              <AvinyaSailIcon variant="cream" size={18} alt="" />
            </div>

            {/* Featured Ribbon Badge */}
            {event.featured && (
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-xs bg-[var(--theme-accent)] px-2 py-0.5 text-[9px] font-bold tracking-widest text-[#FAF3E3] uppercase shadow-sm transition-colors duration-300">
                <span>★</span>
                <span>FLAGSHIP</span>
              </div>
            )}
          </div>

          {/* ─── DESCRIPTION (LOG SUMMARY) ──────────────────────────── */}
          <p className="mb-4 text-xs leading-relaxed text-[var(--theme-muted-foreground)] line-clamp-2">
            {event.description}
          </p>

          {/* ─── SHIP'S LOG METADATA GRID (DATE, TIME, VENUE) ───────── */}
          <div className="mt-auto rounded-xs border border-[var(--theme-border)] bg-[var(--theme-accent-soft)]/25 p-2.5 transition-colors duration-400 group-hover:bg-[var(--theme-accent-soft)]/45">
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {/* Date & Day */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[var(--theme-primary)]/10 text-[10px] text-[var(--theme-accent)] transition-colors duration-300">
                  📅
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
                    Voyage Date
                  </span>
                  <span className="font-semibold text-[var(--theme-primary)]">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[var(--theme-primary)]/10 text-[10px] text-[var(--theme-accent)] transition-colors duration-300">
                  ⏱
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
                    Time
                  </span>
                  <span className="font-semibold text-[var(--theme-primary)]">
                    {event.time.split(" ")[0]} {event.time.split(" ")[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Venue (Port of Call) */}
            <div className="mt-2 flex items-center gap-2 border-t border-[var(--theme-border)] pt-1.5 text-[11px]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[var(--theme-primary)]/10 text-[10px] text-[var(--theme-accent)] transition-colors duration-300">
                📍
              </span>
              <div className="flex flex-col leading-tight truncate">
                <span className="text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
                  Port of Call
                </span>
                <span className="font-semibold text-[var(--theme-primary)] truncate">
                  {event.venue}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── FOOTER: NAUTICAL DIVIDER & EXPLORE ACTION ──────────── */}
        <footer className="relative z-10 mt-4 border-t border-[var(--theme-border)] pt-3.5 transition-colors duration-400">
          <div className="mb-2.5 flex items-center justify-between text-[var(--theme-muted-foreground)]">
            <WaveDividerLine
              width={70}
              className="text-[var(--theme-accent)]/60 transition-all duration-500 group-hover:scale-x-110"
            />
            <span className="font-mono text-[9px] tracking-wider text-[var(--theme-muted-foreground)]">
              {event.day.toUpperCase()}
            </span>
            <WaveDividerLine
              width={70}
              className="text-[var(--theme-accent)]/60 transition-all duration-500 group-hover:scale-x-110"
            />
          </div>

          <button
            type="button"
            onClick={() => onExplore?.(event)}
            aria-label={`Explore ${event.title}`}
            className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-xs border border-[var(--theme-border)] bg-[var(--theme-primary)] px-4 py-2.5 text-xs font-bold tracking-[0.16em] text-[var(--theme-background)] uppercase transition-all duration-300 hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] focus-visible:ring-offset-2 active:scale-[0.99] cursor-pointer shadow-md"
          >
            <span className="flex items-center gap-2">
              <span className="transition-transform duration-300 group-hover/btn:rotate-45">🧭</span>
              <span>EXPLORE EVENT</span>
            </span>

            <span
              className="flex items-center text-sm transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </footer>
      </article>
    </div>
  )
}
