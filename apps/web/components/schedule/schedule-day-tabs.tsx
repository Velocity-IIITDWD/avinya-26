"use client"

import React from "react"
import { DaySchedule } from "./schedule-data"

interface ScheduleDayTabsProps {
  days: DaySchedule[]
  activeDayIndex: number
  onSelectDay: (index: number) => void
}

export function ScheduleDayTabs({
  days,
  activeDayIndex,
  onSelectDay,
}: ScheduleDayTabsProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
      {days.map((day, idx) => {
        const isSelected = activeDayIndex === idx
        return (
          <button
            key={day.dayNumber}
            type="button"
            onClick={() => onSelectDay(idx)}
            className={`rounded-lg border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
              isSelected
                ? "border-[#C85A2B] bg-[#C85A2B] text-[#F4E8D1] font-bold shadow-md"
                : "border-[#062A3A]/20 bg-[#F8EFE0] text-[#062A3A]/80 hover:border-[#062A3A]/40 dark:border-[#F4E8D1]/20 dark:bg-[#041B26] dark:text-[#F4E8D1]/80"
            }`}
          >
            <span className="block font-bold">{day.dayNumber}</span>
            <span className="block text-[10px] opacity-80">{day.destination}</span>
          </button>
        )
      })}
    </div>
  )
}
