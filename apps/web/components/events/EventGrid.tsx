"use client"

import React from "react"
import { EventData } from "@/data/events"
import { EventCard } from "./EventCard"
import { CompassRoseMini } from "./NauticalDecorations"

interface EventGridProps {
  events: EventData[]
  onExploreEvent?: (event: EventData) => void
  onResetFilters?: () => void
}

export function EventGrid({
  events,
  onExploreEvent,
  onResetFilters,
}: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-[#D5C6A6] bg-[#FAF3E3]/60 p-12 text-center text-[#082B3A] shadow-inner">
        <div className="mb-3 rounded-full bg-[#F2E5C9] p-3 text-[#C85A2B]">
          <CompassRoseMini size={36} />
        </div>
        <h4 className="font-serif text-lg font-bold tracking-wider uppercase text-[#082B3A]">
          No Expeditions Recorded in this Quadrant
        </h4>
        <p className="mt-1.5 max-w-md text-xs text-[#526B76]">
          No destinations match your navigational query. Adjust your world
          coordinates or reset the logbook filters.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-5 cursor-pointer rounded-xs border border-[#082B3A] bg-[#082B3A] px-4 py-2 text-xs font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B]"
          >
            Reset Voyage Filters
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <div key={event.id} className="h-full">
          <EventCard
            event={event}
            onExplore={onExploreEvent}
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  )
}
