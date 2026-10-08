"use client"

import React, { useState } from "react"
import { CompassRose, NauticalSail } from "@/components/icons"
import { scheduleData } from "./schedule-data"
import { ScheduleDayTabs } from "./schedule-day-tabs"
import { ScheduleTimeline } from "./schedule-timeline"

export function ScheduleVoyage() {
  const [activeDayIndex, setActiveDayIndex] = useState(0)
  const currentDay = scheduleData[activeDayIndex] || scheduleData[0]!

  return (
    <section
      id="schedule"
      className="relative w-full overflow-hidden bg-[#EFE3C8] py-24 text-[#062A3A] transition-colors duration-500 sm:py-32 dark:bg-[#041B26] dark:text-[#F4E8D1]"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              THE 3-DAY ROUTE // ITINERARY
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CHRONICLE OF EVENTS
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#062A3A]/75 sm:text-base dark:text-[#F4E8D1]/75">
            Follow the hour-by-hour nautical schedule across three distinct island destinations.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <ScheduleDayTabs
          days={scheduleData}
          activeDayIndex={activeDayIndex}
          onSelectDay={setActiveDayIndex}
        />

        {/* Current Day Header Card */}
        <div className="overflow-hidden rounded-2xl border-2 border-[#062A3A]/20 bg-[#F4E8D1] p-6 shadow-md sm:p-8 dark:border-[#F4E8D1]/20 dark:bg-[#062A3A]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C85A2B] uppercase">
                {currentDay.dayNumber} // DESTINATION
              </span>
              <h3
                className="mt-1 text-2xl font-bold tracking-tight text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {currentDay.destination}
              </h3>
            </div>

            <div className="text-right">
              <span className="font-mono text-xs text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                {currentDay.date}
              </span>
              <div className="font-mono text-[10px] text-[#C85A2B]">
                {currentDay.coordinates}
              </div>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs text-[#062A3A]/80 italic dark:text-[#F4E8D1]/80">
            &ldquo;{currentDay.tagline}&rdquo;
          </p>

          {/* Timeline Sequence */}
          <ScheduleTimeline items={currentDay.items} />

          {/* Registration Prompt */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-[#062A3A]/25 bg-[#EFE3C8] p-5 sm:p-6 dark:border-[#F4E8D1]/25 dark:bg-[#041B26]">
            <div className="flex items-center gap-3">
              <NauticalSail size={22} className="text-[#C85A2B]" />
              <div className="text-xs">
                <span className="font-bold text-[#062A3A] dark:text-[#F4E8D1]">
                  CADET ATTENDANCE MANDATORY
                </span>
                <span className="block text-[#062A3A]/70 dark:text-[#F4E8D1]/70">
                  Arrive 15 minutes before scheduled slot with registration pass.
                </span>
              </div>
            </div>

            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded border border-[#062A3A] bg-[#062A3A] px-4 py-2 font-mono text-xs font-bold text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
            >
              <span>REGISTER FOR SESSIONS</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
