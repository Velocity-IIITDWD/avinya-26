"use client"

import React from "react"
import { JournalHeader } from "./journal-header"
import { JournalInstitute } from "./journal-institute"
import { JournalFest } from "./journal-fest"

export function AboutJournal() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#EFE3C8] py-20 text-[#062A3A] transition-colors duration-500 sm:py-28 dark:bg-[#041B26] dark:text-[#F4E8D1]"
    >
      {/* Subtle Top & Bottom Nautical Rope/Divider Borders */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#C85A2B]/40 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#C85A2B]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <JournalHeader />

        {/* Vintage Open Journal Book Spread */}
        <div className="relative mx-auto max-w-6xl rounded-2xl border-2 border-[#062A3A]/20 bg-[#F4E8D1] p-6 shadow-[0_25px_60px_rgba(6,42,58,0.12)] sm:p-10 md:p-12 dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:shadow-[0_25px_60px_rgba(4,27,38,0.5)]">
          {/* Subtle Center Crease / Book Spine on md+ screens */}
          <div className="pointer-events-none absolute top-8 bottom-8 left-1/2 hidden w-px -translate-x-1/2 bg-[#062A3A]/15 md:block dark:bg-[#F4E8D1]/15" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <JournalInstitute />
            <JournalFest />
          </div>
        </div>
      </div>
    </section>
  )
}
