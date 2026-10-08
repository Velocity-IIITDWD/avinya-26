"use client"

import React, { useState } from "react"
import { sampleEvents, EventItem } from "./events-preview-data"
import { EventsPreviewFilters } from "./events-preview-filters"
import { EventPreviewCard } from "./event-preview-card"
import { EventsPreviewBanner } from "./events-preview-banner"

export function EventsPreview() {
  const [selectedWorld, setSelectedWorld] = useState<string>("ALL")

  const filteredEvents: EventItem[] =
    selectedWorld === "ALL"
      ? sampleEvents
      : sampleEvents.filter((e) => e.world === selectedWorld)

  return (
    <section className="relative w-full overflow-hidden bg-[#F4E8D1] py-24 text-[#062A3A] transition-colors duration-500 sm:py-32 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              EXPEDITION SPOTLIGHT // FEATURED
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            HIGH-SEAS EXPEDITIONS
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#062A3A]/75 sm:text-base dark:text-[#F4E8D1]/75">
            Sample voyages from our roster of over 30 competitions across coding,
            robotics, esports, battle of the bands, and design.
          </p>
        </div>

        {/* World Filter Navigation */}
        <EventsPreviewFilters
          selectedWorld={selectedWorld}
          onSelectWorld={setSelectedWorld}
        />

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventPreviewCard key={event.id} event={event} />
          ))}
        </div>

        {/* Manifest CTA Banner */}
        <EventsPreviewBanner />
      </div>
    </section>
  )
}
