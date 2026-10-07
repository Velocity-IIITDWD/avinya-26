"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { EventData, WORLD_CONFIG } from "@/data/events"
import {
  AvinyaSailIcon,
  CompassRoseMini,
  WaveDividerLine,
  NauticalCornerNotches,
} from "./NauticalDecorations"

interface EventModalProps {
  event: EventData | null
  onClose: () => void
}

export function EventModal({ event, onClose }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isRegistered, setIsRegistered] = useState(false)

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

  const worldConfig = WORLD_CONFIG[event.world] || {
    name: event.world,
    day: event.day,
    color: "#C85A2B",
    icon: "/images/worlds/outpost.webp",
  }

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
        className="fixed inset-0 bg-[#082B3A]/80 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-md border border-[#D5C6A6] bg-[#FAF3E3] p-6 sm:p-8 text-[#082B3A] shadow-2xl shadow-[#082B3A]/40"
      >
        {/* Parchment texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/parchment-texture.webp')",
            backgroundSize: "320px 320px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />

        <NauticalCornerNotches color="#BCA985" className="z-10" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dossier"
          className="absolute top-4 right-4 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#D8C7A8] bg-[#F4E8D1] text-[#082B3A] transition-colors hover:border-[#C85A2B] hover:bg-[#C85A2B] hover:text-[#FAF3E3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A2B]"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="relative z-10 mb-4 border-b border-[#E2D4B7] pb-4">
          <div className="flex items-center gap-2">
            <AvinyaSailIcon variant="navy" size={26} alt="Avinya" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[#C85A2B] uppercase">
              {event.logNumber} • EXPEDITION DOSSIER
            </span>
          </div>

          <h2
            id="modal-event-title"
            className="mt-2 font-serif text-2xl font-bold tracking-[0.02em] text-[#082B3A] sm:text-3xl"
          >
            {event.title}
          </h2>

          {event.subtitle && (
            <p className="mt-1 text-xs font-semibold tracking-wide text-[#70583E] uppercase">
              {event.subtitle}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px]">
            <span className="rounded-xs border border-[#D8C7A8] bg-[#F2E5C9] px-2.5 py-0.5 font-bold tracking-wider text-[#082B3A] uppercase">
              {event.world}
            </span>
            <span className="rounded-xs border border-[#D8C7A8] bg-[#F2E5C9] px-2.5 py-0.5 font-semibold text-[#082B3A]">
              {event.category}
            </span>
            <span className="font-mono text-[#7A6348]">
              {event.coordinates}
            </span>
          </div>
        </div>

        {/* Modal Image */}
        <div className="relative z-10 mb-5 aspect-16/9 w-full overflow-hidden rounded-xs border border-[#DECDB0] shadow-sm">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B3A]/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-[#FAF3E3] uppercase drop-shadow-md">
            PORT OF CALL: {event.venue}
          </div>
        </div>

        {/* Key Logistics Grid */}
        <div className="relative z-10 mb-5 grid grid-cols-2 gap-3 rounded-xs border border-[#E2D4B7] bg-[#F4E8D1]/80 p-3.5 sm:grid-cols-4">
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
              Voyage Date
            </span>
            <span className="text-xs font-bold text-[#082B3A]">
              {event.date}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
              Time
            </span>
            <span className="text-xs font-bold text-[#082B3A]">
              {event.time}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
              Prize Bounty
            </span>
            <span className="text-xs font-bold text-[#C85A2B]">
              {event.prizePool ?? "Fest Honours"}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[#7A6348] uppercase">
              Crew Size
            </span>
            <span className="text-xs font-bold text-[#082B3A]">
              {event.teamSize ?? "Open"}
            </span>
          </div>
        </div>

        {/* Full Expedition Description */}
        <div className="relative z-10 mb-5 space-y-2 text-xs leading-relaxed text-[#2E434D]">
          <h4 className="font-serif text-sm font-bold tracking-wider text-[#082B3A] uppercase">
            Expedition Briefing
          </h4>
          <p>{event.fullDescription ?? event.description}</p>
        </div>

        {/* Expedition Guidelines / Rules */}
        {event.rules && event.rules.length > 0 && (
          <div className="relative z-10 mb-6 space-y-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#082B3A] uppercase">
              Voyage Regulations
            </h4>
            <ul className="space-y-1.5 pl-4 text-xs text-[#3A535E]">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="list-disc leading-relaxed">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col gap-3 border-t border-[#E5D7BF] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[#7A6348]">
            <CompassRoseMini size={18} />
            <span className="font-mono text-[10px] tracking-wider uppercase">
              AVINYA 2026 • IIIT DHARWAD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xs border border-[#D8C7A8] bg-[#F4E8D1] px-4 py-2 text-xs font-bold tracking-wider text-[#082B3A] uppercase hover:bg-[#EBDDC1]"
            >
              Back to Map
            </button>

            <button
              type="button"
              onClick={() => setIsRegistered(true)}
              className={`rounded-xs px-5 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 ${
                isRegistered
                  ? "bg-[#2E8B57] text-[#FAF3E3]"
                  : "bg-[#082B3A] text-[#F4E8D1] hover:bg-[#C85A2B] hover:text-[#FAF3E3]"
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
