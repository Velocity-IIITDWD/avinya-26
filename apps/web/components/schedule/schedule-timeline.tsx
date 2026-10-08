"use client"

import React from "react"
import { CompassRose } from "@/components/icons"
import { ScheduleItem } from "./schedule-data"

const CATEGORY_STYLE: Record<string, { bg: string; text: string }> = {
  Technical: { bg: "bg-[#C85A2B]/15", text: "text-[#C85A2B]" },
  Cultural: { bg: "bg-[#2E8B57]/15", text: "text-[#2E8B57]" },
  Keynote: { bg: "bg-[#C5A059]/15", text: "text-[#C5A059]" },
  Ceremony: { bg: "bg-[#062A3A]/15 dark:bg-[#F4E8D1]/15", text: "text-[#062A3A] dark:text-[#F4E8D1]" },
}

interface ScheduleTimelineProps {
  items: ScheduleItem[]
}

export function ScheduleTimeline({ items }: ScheduleTimelineProps) {
  return (
    <div className="relative mt-8 space-y-6 before:absolute before:inset-0 before:left-3 before:h-full before:w-0.5 before:bg-[#062A3A]/15 sm:before:left-5 dark:before:bg-[#F4E8D1]/15">
      {items.map((item, index) => {
        const catStyle = CATEGORY_STYLE[item.category] || CATEGORY_STYLE.Technical

        return (
          <div key={index} className="relative flex items-start gap-4 sm:gap-6">
            {/* Timeline Node Compass Marker */}
            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C85A2B] bg-[#F4E8D1] sm:h-10 sm:w-10 dark:bg-[#062A3A]">
              <CompassRose size={16} className="text-[#C85A2B]" />
            </div>

            {/* Timeline Entry Card */}
            <div className="flex-1 rounded-xl border border-[#062A3A]/15 bg-[#F8EFE0] p-5 shadow-xs transition-all hover:border-[#C85A2B]/40 hover:shadow-md dark:border-[#F4E8D1]/15 dark:bg-[#041B26]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-[#062A3A]/15 pb-2.5 dark:border-[#F4E8D1]/15">
                <span className="font-mono text-xs font-bold text-[#C85A2B]">
                  {item.time}
                </span>

                <span
                  className={`rounded px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.16em] uppercase ${catStyle?.bg} ${catStyle?.text}`}
                >
                  {item.category}
                </span>
              </div>

              <h4
                className="mt-3 text-base font-bold tracking-tight text-[#062A3A] sm:text-lg dark:text-[#F4E8D1]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h4>

              <p className="mt-1 text-xs leading-relaxed text-[#062A3A]/75 dark:text-[#F4E8D1]/75">
                {item.description}
              </p>

              <div className="mt-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                <span>VENUE:</span>
                <span className="font-semibold text-[#062A3A] dark:text-[#F4E8D1]">
                  {item.venue}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
