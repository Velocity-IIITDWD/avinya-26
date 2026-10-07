"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { EventData, WORLD_CONFIG } from "@/data/events"
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
}

export function EventCard({
  event,
  onExplore,
  priority = false,
  className = "",
}: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [supportsTilt, setSupportsTilt] = useState(true)

  const worldConfig = WORLD_CONFIG[event.world] || {
    name: event.world,
    day: event.day,
    color: "#C85A2B",
    accentBg: "rgba(200, 90, 43, 0.12)",
    icon: "/images/worlds/outpost.webp",
  }

  // Detect touch devices and prefers-reduced-motion
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0)

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (isTouch || prefersReducedMotion) {
      setSupportsTilt(false)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsTilt || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Maximum tilt between -2.5 and +2.5 degrees for an elegant, restrained feel
    const rotateX = ((y - centerY) / centerY) * -2.8
    const rotateY = ((x - centerX) / centerX) * 2.8

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  const cardTransform = supportsTilt
    ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${
        isHovered ? "-6px" : "0px"
      })`
    : isHovered
      ? "translateY(-4px)"
      : "translateY(0px)"

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: cardTransform,
        transition: isHovered
          ? "transform 150ms cubic-bezier(0.2, 0, 0, 1), box-shadow 350ms ease, border-color 350ms ease"
          : "transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease, border-color 450ms ease",
      }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-md border border-[#D5C6A6] bg-[#FAF3E3] p-5 sm:p-6 text-[#082B3A] shadow-[0_4px_20px_-4px_rgba(8,43,58,0.08)] hover:border-[#C85A2B]/60 hover:shadow-[0_20px_35px_-10px_rgba(8,43,58,0.22)] will-change-transform ${className}`}
    >
      {/* ─── VINTAGE PARCHMENT PAPER TEXTURE OVERLAY ─────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50"
        style={{
          backgroundImage: "url('/images/parchment-texture.webp')",
          backgroundSize: "320px 320px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* ─── SUBTLE TOP NAVIGATIONAL ENGRAVED LINE ─────────────── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] transition-colors duration-500"
        style={{
          backgroundColor: isHovered ? worldConfig.color : "transparent",
        }}
        aria-hidden="true"
      />

      {/* ─── NAUTICAL FOLIO CORNER NOTCHES ──────────────────────── */}
      <NauticalCornerNotches color="#BCA985" className="z-10" />

      {/* ─── CARD CONTENT WRAPPER ───────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* ─── HEADER: AVINYA SAIL + WORLD BADGE + LOG NO ─────────── */}
        <header className="mb-3.5 flex items-center justify-between border-b border-[#E2D4B7] pb-2.5">
          <div className="flex items-center gap-2">
            {/* Official Avinya Maritime Sail Icon */}
            <div className="relative flex shrink-0 items-center justify-center transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
              <AvinyaSailIcon variant="navy" size={24} alt="Avinya Sail" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-[#C85A2B] uppercase">
                {event.logNumber}
              </span>
              <span className="text-[10px] font-bold tracking-[0.16em] text-[#082B3A]/80 uppercase">
                {event.category}
              </span>
            </div>
          </div>

          {/* World Badge with World Icon & Coordinates */}
          <div className="flex items-center gap-1.5 rounded-full border border-[#D8C7A8] bg-[#F3E7CF]/80 px-2.5 py-0.5 shadow-xs transition-colors duration-300 group-hover:border-[#C85A2B]/40">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: worldConfig.color }}
              aria-hidden="true"
            />
            <span className="text-[9.5px] font-semibold tracking-wider text-[#082B3A] uppercase">
              {event.world.replace("The ", "")}
            </span>
          </div>
        </header>

        {/* ─── EVENT TITLE ─────────────────────────────────────────── */}
        <div className="mb-3">
          <h3 className="font-serif text-[1.28rem] font-bold tracking-[0.03em] leading-snug text-[#082B3A] transition-colors duration-300 group-hover:text-[#C85A2B]">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[#70583E]">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* ─── EVENT ARTWORK / IMAGE CONTAINER ────────────────────── */}
        <div className="relative mb-3.5 aspect-16/10 w-full overflow-hidden rounded-xs border border-[#DECDB0] bg-[#082B3A] shadow-inner">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-108"
            priority={priority}
          />

          {/* Calm State Gradient Scrim */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#082B3A]/70 via-[#082B3A]/15 to-transparent transition-opacity duration-500 group-hover:opacity-40"
            aria-hidden="true"
          />

          {/* Layered Nautical Hover Reveal Scrim */}
          <div
            className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(to top, rgba(8, 43, 58, 0.92) 0%, rgba(8, 43, 58, 0.45) 60%, rgba(8, 43, 58, 0.25) 100%)",
            }}
          >
            {/* Top row in reveal: coordinates watermark & sail badge */}
            <div className="flex items-center justify-between text-[#F4E8D1]">
              <span className="font-mono text-[9px] tracking-widest text-[#E3D1B1] opacity-90">
                {event.coordinates}
              </span>
              <div className="rounded-full bg-[#FAF3E3]/20 p-1 backdrop-blur-xs">
                <CompassRoseMini size={18} className="text-[#F4E8D1]" />
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

          {/* Subtle Avinya watermark emblem bottom right */}
          <div className="pointer-events-none absolute bottom-2 right-2 z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-0">
            <AvinyaSailIcon variant="cream" size={18} alt="" />
          </div>

          {/* Featured Ribbon Badge if applicable */}
          {event.featured && (
            <div className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-xs bg-[#C85A2B] px-2 py-0.5 text-[9px] font-bold tracking-widest text-[#FAF3E3] uppercase shadow-sm">
              <span>★</span>
              <span>FLAGSHIP</span>
            </div>
          )}
        </div>

        {/* ─── DESCRIPTION (LOG SUMMARY) ──────────────────────────── */}
        <p className="mb-4 text-xs leading-relaxed text-[#334D57] line-clamp-2">
          {event.description}
        </p>

        {/* ─── SHIP'S LOG METADATA GRID (DATE, TIME, VENUE) ───────── */}
        <div className="mt-auto rounded-xs border border-[#E4D7BE] bg-[#F5EAD3]/70 p-2.5 transition-colors duration-300 group-hover:bg-[#F3E6CD]">
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            {/* Date & Day */}
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[#082B3A]/10 text-[10px] text-[#082B3A]">
                📅
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
                  Voyage Date
                </span>
                <span className="font-semibold text-[#082B3A]">
                  {event.date}
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[#082B3A]/10 text-[10px] text-[#082B3A]">
                ⏱
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
                  Time
                </span>
                <span className="font-semibold text-[#082B3A]">
                  {event.time.split(" ")[0]} {event.time.split(" ")[1]}
                </span>
              </div>
            </div>
          </div>

          {/* Venue (Port of Call) */}
          <div className="mt-2 flex items-center gap-2 border-t border-[#DECDB0] pt-1.5 text-[11px]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xs bg-[#082B3A]/10 text-[10px] text-[#082B3A]">
              📍
            </span>
            <div className="flex flex-col leading-tight truncate">
              <span className="text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
                Port of Call
              </span>
              <span className="font-semibold text-[#082B3A] truncate">
                {event.venue}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FOOTER: NAUTICAL DIVIDER & EXPLORE ACTION ──────────── */}
      <footer className="relative z-10 mt-4 border-t border-[#E5D7BF] pt-3.5">
        <div className="mb-2.5 flex items-center justify-between text-[#BBA680]">
          <WaveDividerLine width={70} className="text-[#C85A2B]/60 transition-transform duration-500 group-hover:scale-x-110" />
          <span className="font-mono text-[9px] tracking-wider text-[#8A7154]">
            {event.day.toUpperCase()}
          </span>
          <WaveDividerLine width={70} className="text-[#C85A2B]/60 transition-transform duration-500 group-hover:scale-x-110" />
        </div>

        <button
          type="button"
          onClick={() => onExplore?.(event)}
          aria-label={`Explore ${event.title}`}
          className="relative flex w-full items-center justify-between overflow-hidden rounded-xs border border-[#082B3A] bg-[#082B3A] px-4 py-2.5 text-xs font-bold tracking-[0.16em] text-[#F4E8D1] uppercase transition-all duration-300 hover:bg-[#C85A2B] hover:border-[#C85A2B] hover:text-[#FFF4D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A2B] focus-visible:ring-offset-2 active:scale-[0.99] cursor-pointer shadow-xs"
        >
          <span className="flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:rotate-12">🧭</span>
            <span>Explore Destination</span>
          </span>

          <span
            className="flex items-center text-sm transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </footer>
    </article>
  )
}
