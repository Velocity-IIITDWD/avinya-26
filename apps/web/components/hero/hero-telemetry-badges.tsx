"use client"

import React from "react"

interface HeroTelemetryBadgesProps {
  daysLeft: number
}

export function HeroTelemetryBadges({ daysLeft }: HeroTelemetryBadgesProps) {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#062A3A]/15 pt-6 sm:max-w-lg dark:border-[#F4E8D1]/15">
      <div>
        <span className="block font-mono text-xl font-bold text-[#C85A2B] sm:text-2xl">
          3
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
          DESTINATIONS
        </span>
      </div>
      <div>
        <span className="block font-mono text-xl font-bold text-[#062A3A] sm:text-2xl dark:text-[#F4E8D1]">
          30+
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
          CHALLENGES
        </span>
      </div>
      <div>
        <span className="block font-mono text-xl font-bold text-[#C85A2B] sm:text-2xl">
          {daysLeft}D
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
          UNTIL EMBARKATION
        </span>
      </div>
    </div>
  )
}
