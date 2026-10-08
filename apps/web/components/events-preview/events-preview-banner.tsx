"use client"

import React from "react"
import Link from "next/link"
import { CompassRose, NauticalSail } from "@/components/icons"

export function EventsPreviewBanner() {
  return (
    <div className="mt-16 rounded-2xl border-2 border-[#062A3A]/20 bg-[#062A3A] p-8 text-center text-[#F4E8D1] shadow-xl sm:p-12 dark:border-[#F4E8D1]/20">
      <div className="mx-auto max-w-2xl">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#C85A2B] uppercase sm:text-xs">
          <CompassRose size={14} className="animate-spin [animation-duration:12s]" />
          <span>FULL HARBOR MANIFEST // 30+ TOTAL CHALLENGES</span>
        </div>

        <h3
          className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          READY TO INSPECT ALL EXPEDITIONS?
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-[#F4E8D1]/75 sm:text-sm">
          Browse rulebooks, submission timelines, judging criteria, and register your
          crews for the flagship tournaments across all three worlds.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 rounded-lg border-2 border-[#C85A2B] bg-[#C85A2B] px-8 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#C85A2B]"
          >
            <NauticalSail size={16} />
            <span>OPEN EXPEDITION DIRECTORY</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
