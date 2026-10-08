"use client"

import React from "react"

export function JournalHeader() {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-8 bg-[#C85A2B]" />
        <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
          EXPEDITION LOGBOOK // ARCHIVES
        </span>
        <span className="h-px w-8 bg-[#C85A2B]" />
      </div>

      <h2
        className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        THE VOYAGE DISPATCHES
      </h2>
      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
        OFFICIAL CHRONICLES OF IIIT DHARWAD &amp; THE FESTIVAL
      </p>
    </div>
  )
}
