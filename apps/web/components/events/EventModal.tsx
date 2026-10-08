"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { EventData } from "@/data/events"
import { useWorldTheme } from "@/lib/theme"
import {
  AvinyaSailIcon,
  CompassRoseMini,
  NauticalCornerNotches,
} from "./NauticalDecorations"

interface EventModalProps {
  event: EventData | null
  onClose: () => void
}

export function EventModal({ event, onClose }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const { theme } = useWorldTheme()

  // Close on Escape key and lock background scroll
  useEffect(() => {
    if (!event) return

    setIsRegistered(false)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [event, onClose])

  if (!event) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-md border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 sm:p-8 text-[var(--theme-primary)] shadow-2xl shadow-black/80 transition-colors duration-400"
      >
        <NauticalCornerNotches color="var(--theme-border)" className="z-10" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dossier"
          className="absolute top-4 right-4 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] text-[var(--theme-primary)] transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="relative z-10 mb-4 border-b border-[var(--theme-border)] pb-4">
          <div className="flex items-center gap-2">
            <AvinyaSailIcon variant="cream" size={26} alt="Avinya" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[var(--theme-accent)] uppercase">
              {event.logNumber} • {theme.motifs.cardDescriptor}
            </span>
          </div>

          <h2
            id="modal-event-title"
            className="mt-2 font-serif text-2xl font-bold tracking-[0.02em] text-[var(--theme-primary)] sm:text-3xl"
          >
            {event.title}
          </h2>

          {event.subtitle && (
            <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--theme-muted-foreground)] uppercase">
              {event.subtitle}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px]">
            <span className="rounded-xs border border-[var(--theme-border)] bg-[var(--theme-accent-soft)] px-2.5 py-0.5 font-bold tracking-wider text-[var(--theme-primary)] uppercase">
              {event.world}
            </span>
            <span
              className={`rounded-xs px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase border ${
                event.category === "technical"
                  ? "border-[var(--theme-accent)]/50 bg-[var(--theme-accent-soft)] text-[var(--theme-accent)]"
                  : "border-[#F5C542]/50 bg-[#F5C542]/15 text-[#F5C542]"
              }`}
            >
              {event.category}
            </span>
            {event.displayCategory && (
              <span className="rounded-xs border border-[var(--theme-border)] bg-[var(--theme-accent-soft)]/60 px-2.5 py-0.5 font-semibold text-[var(--theme-primary)]">
                {event.displayCategory}
              </span>
            )}
            <span className="font-mono text-[var(--theme-muted-foreground)]">
              {event.coordinates}
            </span>
          </div>
        </div>

        {/* Modal Image */}
        <div className="relative z-10 mb-5 aspect-16/9 w-full overflow-hidden rounded-xs border border-[var(--theme-border)] shadow-sm">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-[#FAF3E3] uppercase drop-shadow-md">
            PORT OF CALL: {event.venue}
          </div>
        </div>

        {/* Key Logistics Grid */}
        <div className="relative z-10 mb-5 grid grid-cols-2 gap-3 rounded-xs border border-[var(--theme-border)] bg-[var(--theme-accent-soft)]/20 p-3.5 sm:grid-cols-4">
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
              Voyage Date
            </span>
            <span className="text-xs font-bold text-[var(--theme-primary)]">
              {event.date}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
              Time
            </span>
            <span className="text-xs font-bold text-[var(--theme-primary)]">
              {event.time}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
              Prize Bounty
            </span>
            <span className="text-xs font-bold text-[var(--theme-accent)]">
              {event.prizePool ?? "Fest Honours"}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--theme-muted-foreground)] uppercase">
              Crew Size
            </span>
            <span className="text-xs font-bold text-[var(--theme-primary)]">
              {event.teamSize ?? "Open"}
            </span>
          </div>
        </div>

        {/* Full Expedition Description */}
        <div className="relative z-10 mb-5 space-y-2 text-xs leading-relaxed text-[var(--theme-muted-foreground)]">
          <h4 className="font-serif text-sm font-bold tracking-wider text-[var(--theme-primary)] uppercase">
            Expedition Briefing
          </h4>
          <p>{event.fullDescription ?? event.description}</p>
        </div>

        {/* Expedition Guidelines / Rules */}
        {event.rules && event.rules.length > 0 && (
          <div className="relative z-10 mb-6 space-y-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[var(--theme-primary)] uppercase">
              Voyage Regulations
            </h4>
            <ul className="space-y-1.5 pl-4 text-xs text-[var(--theme-muted-foreground)]">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="list-disc leading-relaxed">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col gap-3 border-t border-[var(--theme-border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[var(--theme-muted-foreground)]">
            <CompassRoseMini size={18} className="text-[var(--theme-accent)]" />
            <span className="font-mono text-[10px] tracking-wider uppercase">
              AVINYA 2026 • IIIT DHARWAD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xs border border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-2 text-xs font-bold tracking-wider text-[var(--theme-primary)] uppercase hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)] cursor-pointer"
            >
              Back to Map
            </button>

            <button
              type="button"
              onClick={() => setIsRegistered(true)}
              className={`rounded-xs px-5 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                isRegistered
                  ? "bg-[#10B981] text-[#FFFFFF]"
                  : "bg-[var(--theme-accent)] text-[#0B1015] hover:bg-[var(--theme-primary)] hover:text-[#FFFFFF]"
              }`}
            >
              {isRegistered ? "✓ Berth Booked (Registered)" : "Book Passage (Register)"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
