"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import { eventsData, EventData, WORLD_CONFIG } from "@/data/events"
import { EventFilters, FilterValue } from "./EventFilters"
import { EventGrid } from "./EventGrid"
import { EventModal } from "./EventModal"
import {
  AvinyaSailIcon,
  CompassRoseMini,
  WaveDividerLine,
} from "./NauticalDecorations"

export function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)

  // Compute counts per world
  const counts = useMemo(() => {
    const map: Record<FilterValue, number> = {
      ALL: eventsData.length,
      "The Last Outpost": 0,
      Pandemonium: 0,
      "The Carnival Island": 0,
    }

    eventsData.forEach((ev) => {
      if (ev.world in map) {
        map[ev.world]++
      }
    })

    return map
  }, [])

  // Filtered events
  const filteredEvents = useMemo(() => {
    return eventsData.filter((ev) => {
      const matchesWorld =
        activeFilter === "ALL" || ev.world === activeFilter

      const matchesSearch =
        searchQuery.trim() === "" ||
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.venue.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesWorld && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const activeWorldMeta =
    activeFilter !== "ALL" ? WORLD_CONFIG[activeFilter] : null

  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-[#FAF3E3] py-16 text-[#082B3A] transition-colors duration-500 sm:py-24"
    >
      {/* ─── VINTAGE BACKGROUND PARCHMENT GRAIN & NAUTICAL WATERMARK ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-45 mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/parchment-texture.webp')",
          backgroundSize: "360px 360px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Subtle bathymetric nautical ocean line contours */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(8, 43, 58, 0.5) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(200, 90, 43, 0.4) 0%, transparent 45%),
            linear-gradient(to right, rgba(8, 43, 58, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8, 43, 58, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 64px 64px, 64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Decorative large sail watermark on the right edge */}
      <div className="pointer-events-none absolute -right-16 top-1/4 z-0 opacity-[0.04] select-none">
        <AvinyaSailIcon variant="navy" size={480} alt="" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ─── SECTION HEADER ─────────────────────────────────────── */}
        <div className="mb-12 text-center md:mb-16">
          {/* Eyebrow Navigation Coordinates */}
          <div className="mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-[#D5C5A5] bg-[#F2E5C9]/90 px-4 py-1 text-[10px] font-bold tracking-[0.22em] text-[#70583E] uppercase shadow-xs">
            <AvinyaSailIcon variant="orange" size={14} alt="" />
            <span>IIIT DHARWAD • 30 OCT – 01 NOV 2026</span>
            <span className="text-[#C85A2B]">•</span>
            <span className="font-mono text-[#082B3A]">15°29&apos;N 75°01&apos;E</span>
          </div>

          {/* Section Main Title */}
          <h2 className="font-serif text-3xl font-extrabold tracking-[0.04em] text-[#082B3A] uppercase sm:text-4xl lg:text-5xl">
            Choose Your Destination
          </h2>

          {/* Editorial Subtitle */}
          <p className="mx-auto mt-3 max-w-2xl font-serif text-base text-[#47606B] italic sm:text-lg">
            &ldquo;A journey across three unique worlds, three experiences, and
            one unforgettable voyage.&rdquo;
          </p>

          {/* Decorative Divider */}
          <div className="mt-5 flex items-center justify-center gap-3 text-[#C85A2B]">
            <WaveDividerLine width={90} className="text-[#C85A2B]/70" />
            <CompassRoseMini size={22} className="text-[#082B3A]" />
            <WaveDividerLine width={90} className="text-[#C85A2B]/70" />
          </div>
        </div>

        {/* ─── WORLD SHOWCASE NARRATIVE STRIP (WHEN A WORLD IS SELECTED) */}
        {activeWorldMeta && (
          <div
            className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xs border border-[#D5C6A6] bg-[#F3E7CF] p-4 text-[#082B3A] shadow-xs sm:flex-row sm:px-6"
            style={{ borderLeftWidth: "4px", borderLeftColor: activeWorldMeta.color }}
          >
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#D5C6A6] bg-[#082B3A]">
                <Image
                  src={activeWorldMeta.icon}
                  alt={activeWorldMeta.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9.5px] font-bold tracking-widest text-[#C85A2B] uppercase">
                    {activeWorldMeta.day} // {activeWorldMeta.date}
                  </span>
                  <span className="font-mono text-[9px] text-[#7A6348]">
                    {activeWorldMeta.coordinates}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold tracking-wider text-[#082B3A] uppercase sm:text-lg">
                  {activeWorldMeta.name}
                </h3>
                <p className="text-xs text-[#4F6873]">
                  {activeWorldMeta.tagline}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveFilter("ALL")}
              className="shrink-0 cursor-pointer text-[10px] font-bold tracking-widest text-[#70583E] uppercase underline underline-offset-4 hover:text-[#C85A2B]"
            >
              Show All Worlds
            </button>
          </div>
        )}

        {/* ─── FILTERS & SEARCH BAR ───────────────────────────────── */}
        <div className="mb-8">
          <EventFilters
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
            counts={counts}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* ─── STATUS BAR: CHARTS FOUND ───────────────────────────── */}
        <div className="mb-6 flex items-center justify-between border-b border-[#E0D1B4] pb-2 text-[11px] text-[#7A6348]">
          <span className="font-mono tracking-wider">
            VOYAGE LOG:{" "}
            <strong className="text-[#082B3A]">
              {filteredEvents.length} DESTINATION
              {filteredEvents.length === 1 ? "" : "S"} CHARTED
            </strong>
          </span>

          <span className="hidden font-mono text-[10px] sm:inline">
            COORDINATES // 15°28&apos;N - 15°30&apos;N
          </span>
        </div>

        {/* ─── RESPONSIVE EVENT CARDS GRID ────────────────────────── */}
        <EventGrid
          events={filteredEvents}
          onExploreEvent={(ev) => setSelectedEvent(ev)}
          onResetFilters={() => {
            setActiveFilter("ALL")
            setSearchQuery("")
          }}
        />

        {/* ─── VOYAGE LOG FOOTNOTE ─────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center justify-center border-t border-[#DECDB0] pt-8 text-center text-xs text-[#7A6348]">
          <AvinyaSailIcon variant="navy" size={28} className="mb-2" alt="Avinya" />
          <p className="font-serif font-bold tracking-[0.2em] text-[#082B3A] uppercase">
            Avinya 2026 • Techno-Cultural Fest • IIIT Dharwad
          </p>
          <p className="mt-1 text-[11px] text-[#8C7355]">
            Every event is a port of call on the grand nautical expedition. Check in at the Harbour Desk on event days for pass verification.
          </p>
        </div>
      </div>

      {/* ─── EXPEDITION DOSSIER MODAL ────────────────────────────── */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  )
}
