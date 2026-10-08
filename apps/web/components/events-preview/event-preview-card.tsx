"use client"

import React from "react"
import Link from "next/link"
import { EventItem } from "./events-preview-data"

const WORLD_COLOR_MAP: Record<string, string> = {
  "The Last Outpost": "#C85A2B",
  Pandemonium: "#2E8B57",
  "The Carnival Island": "#C5A059",
}

interface EventPreviewCardProps {
  event: EventItem
}

export function EventPreviewCard({ event }: EventPreviewCardProps) {
  const worldColor = WORLD_COLOR_MAP[event.world] || "#C85A2B"

  return (
    <article className="group relative flex flex-col justify-between rounded-xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C85A2B] hover:shadow-xl dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
      {/* Top Header Row: ID, Category & World Badge */}
      <div>
        <div className="flex items-center justify-between border-b border-dashed border-[#062A3A]/20 pb-3 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/20 dark:text-[#F4E8D1]/70">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#062A3A] dark:text-[#F4E8D1]">
              {event.code}
            </span>
            <span>•</span>
            <span style={{ color: worldColor }} className="font-semibold">
              {event.category}
            </span>
          </div>
          <span>{event.date}</span>
        </div>

        {/* Title */}
        <h3
          className="mt-4 text-xl font-bold tracking-tight text-[#062A3A] transition-colors group-hover:text-[#C85A2B] sm:text-2xl dark:text-[#F4E8D1]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {event.title}
        </h3>

        {/* World Tag */}
        <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: worldColor }}
          />
          <span className="text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
            {event.world}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-[#062A3A]/75 dark:text-[#F4E8D1]/75">
          {event.description}
        </p>
      </div>

      {/* Bottom Telemetry & Bounty Row */}
      <div className="mt-6 border-t border-dashed border-[#062A3A]/20 pt-4 dark:border-[#F4E8D1]/20">
        <div className="flex items-center justify-between">
          <div>
            <span className="block font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
              PRIZE BOUNTY
            </span>
            <span className="font-mono text-base font-bold text-[#C85A2B]">
              {event.bounty}
            </span>
          </div>

          <div className="text-right">
            <span className="block font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
              CREW COMPLEMENT
            </span>
            <span className="font-mono text-xs font-semibold text-[#062A3A] dark:text-[#F4E8D1]">
              {event.teamSize}
            </span>
          </div>
        </div>

        {/* Action Link to Full Events page with query */}
        <div className="mt-4 pt-2">
          <Link
            href={`/events?world=${encodeURIComponent(event.world)}`}
            className="flex items-center justify-between rounded border border-[#062A3A]/20 bg-[#EFE3C8] px-3.5 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase transition-all duration-300 hover:border-[#C85A2B] hover:bg-[#C85A2B] hover:text-[#F4E8D1] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1] dark:hover:bg-[#C85A2B] dark:hover:border-[#C85A2B]"
          >
            <span>INSPECT EXPEDITION PERMIT</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
