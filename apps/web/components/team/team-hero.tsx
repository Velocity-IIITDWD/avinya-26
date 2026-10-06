"use client"

import React from "react"
import { CompassRose, NauticalSail } from "../navbar/nautical-icons"

export default function TeamHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#062A3A]/15 bg-[#EFE3C8] pt-28 pb-16 transition-colors sm:pt-32 sm:pb-20 dark:border-[#F4E8D1]/15 dark:bg-[#041B26]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2">
            <span className="rounded border border-[#C85A2B]/40 bg-[#C85A2B]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.22em] text-[#C85A2B] uppercase sm:text-xs">
              THE VOYAGE CREW // MANIFEST
            </span>
            <span className="font-mono text-xs tracking-[0.18em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
              IIIT DHARWAD
            </span>
          </div>

          <h1
            className="mt-3 text-4xl font-black tracking-tight text-[#062A3A] sm:text-5xl md:text-6xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE SHIP&apos;S MANIFEST
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#062A3A]/80 sm:text-base dark:text-[#F4E8D1]/80">
            Meet the architects, helmsmen, and officers charting the course for Avinya &apos;26.
            United by the conviction that life is an adventure of craft, discipline, and discovery.
          </p>

          <div className="mt-8 flex items-center gap-6 font-mono text-xs tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
            <div className="flex items-center gap-1.5">
              <CompassRose size={14} className="text-[#C85A2B]" />
              <span>BRIDGE OFFICERS</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <NauticalSail size={14} className="text-[#C85A2B]" />
              <span>TECHNICAL CREW</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span>CULTURAL FLEET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
