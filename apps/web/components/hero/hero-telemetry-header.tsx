"use client"

import React from "react"

export function HeroTelemetryHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
        <span className="inline-block h-2 w-2 rounded-full bg-[#C85A2B] animate-pulse" />
        <span>PORT OF CALL // IIIT DHARWAD</span>
      </div>

      <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
        <span className="hidden sm:inline">COORDINATES: 15°29&apos;N 75°01&apos;E</span>
        <span className="text-[#C85A2B]">EXPEDITION: OCT 30 – NOV 01</span>
      </div>
    </div>
  )
}
