"use client"

import React, { useState } from "react"
import { CompassRose, NauticalAnchor, ShipWheel } from "../navbar/nautical-icons"

interface ScheduleItem {
  time: string
  title: string
  venue: string
  category: "Technical" | "Cultural" | "Keynote" | "Ceremony"
  description: string
}

interface DaySchedule {
  dayNumber: string
  date: string
  destination: string
  tagline: string
  coordinates: string
  items: ScheduleItem[]
}

const scheduleData: DaySchedule[] = [
  {
    dayNumber: "DAY 01",
    date: "FRIDAY // OCTOBER 30, 2026",
    destination: "THE LAST OUTPOST",
    tagline: "Anchors Aweigh & The Technical Frontier",
    coordinates: "15°28'40\"N  75°01'15\"E",
    items: [
      {
        time: "09:00 AM",
        title: "ANCHORS AWEIGH // OPENING CEREMONY",
        venue: "Main Auditorium, IIIT Dharwad",
        category: "Ceremony",
        description: "Official inaugural address by Director, lighting of the lamps, and voyage theme unveiling.",
      },
      {
        time: "11:00 AM",
        title: "FLAGSHIP CODE ODYSSEY // 24-HOUR HACKATHON KICKOFF",
        venue: "Turing Computing Block",
        category: "Technical",
        description: "Over 100 teams begin 24 hours of non-stop development across AI, Web3, and Open Innovation tracks.",
      },
      {
        time: "02:30 PM",
        title: "ALGO-STORM // COMPETITIVE CODING ROUND 01",
        venue: "Lab Complex Alpha",
        category: "Technical",
        description: "Speed algorithm challenges and data structure optimization duels.",
      },
      {
        time: "06:30 PM",
        title: "SUNSET HARBOR // ACOUSTIC VOYAGE & TECH TALKS",
        venue: "Amphitheatre",
        category: "Cultural",
        description: "Unplugged musical performances under the evening sky coupled with guest keynote lectures.",
      },
    ],
  },
  {
    dayNumber: "DAY 02",
    date: "SATURDAY // OCTOBER 31, 2026",
    destination: "PANDEMONIUM",
    tagline: "Into the Storm — High Stakes & Mechanical Clashes",
    coordinates: "15°29'10\"N  75°01'45\"E",
    items: [
      {
        time: "10:00 AM",
        title: "ROBO-WARS // ARENA CLASH OF METALS",
        venue: "The Central Arena",
        category: "Technical",
        description: "Combat robots duel in high-impact survival matches with pneumatic flippers and spinning drums.",
      },
      {
        time: "11:30 AM",
        title: "HACKATHON JURY DEFENSE & DEMOS",
        venue: "Innovation Pavilion",
        category: "Technical",
        description: "Top 20 hackathon finalist teams pitch live working prototypes to industry evaluators.",
      },
      {
        time: "02:00 PM",
        title: "NEON DRIFT // ESPORTS FINALS (VALORANT & BGMI)",
        venue: "E-Gaming Arena",
        category: "Technical",
        description: "High-octane collegiate esports finals broadcast live on mega screens.",
      },
      {
        time: "05:30 PM",
        title: "STREET DANCE BATTLE & DRAMA SHOWCASE",
        venue: "Open Courtyard",
        category: "Cultural",
        description: "Electrifying 1-on-1 freestyle battles and thought-provoking street theatre.",
      },
      {
        time: "08:00 PM",
        title: "WAVE RUNNER // ELECTRONIC DANCE SPECTACLE",
        venue: "Main Ground Stage",
        category: "Cultural",
        description: "Visual projection mapping, laser choreography, and headline DJ set.",
      },
    ],
  },
  {
    dayNumber: "DAY 03",
    date: "SUNDAY // NOVEMBER 01, 2026",
    destination: "THE CARNIVAL ISLAND",
    tagline: "Shore Leave Euphoria & The Grand Pro-Nite",
    coordinates: "15°29'55\"N  75°02'20\"E",
    items: [
      {
        time: "10:30 AM",
        title: "THE NAUTICAL BAZAAR & CARNIVAL SHOWCASES",
        venue: "Campus Boulevard",
        category: "Cultural",
        description: "Student art stalls, gaming arcades, VR simulations, and coastal culinary delights.",
      },
      {
        time: "02:30 PM",
        title: "BATTLE OF THE BANDS // SOUNDS OF SIKANDAR",
        venue: "Main Outdoor Arena",
        category: "Cultural",
        description: "Top collegiate rock and fusion bands battle with original compositions for national honors.",
      },
      {
        time: "05:30 PM",
        title: "GRAND VALEDICTORY & BOUNTY AWARDS",
        venue: "Main Auditorium",
        category: "Ceremony",
        description: "Honoring champions of all 30+ technical and cultural expeditions with trophies and bounties.",
      },
      {
        time: "07:30 PM",
        title: "STAR PRO-NITE // THE CELEBRATION SPECTACULAR",
        venue: "Festival Main Grounds",
        category: "Cultural",
        description: "Unforgettable headline concert by celebrated national artists to conclude Avinya '26.",
      },
    ],
  },
]

export function ScheduleVoyage() {
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  const activeDay = scheduleData[activeDayIndex] ?? scheduleData[0]!

  return (
    <section
      id="schedule"
      className="relative w-full overflow-hidden bg-[#EFE3C8] py-24 text-[#062A3A] transition-colors duration-500 sm:py-32 dark:bg-[#041B26] dark:text-[#F4E8D1]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              VOYAGE ITINERARY
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE 3-DAY ROUTE
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#062A3A]/75 sm:text-base dark:text-[#F4E8D1]/75">
            Follow the chronological course through the three worlds from opening bell
            to grand valedictory concert.
          </p>
        </div>

        {/* Day Selector Waypoints */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6">
          {scheduleData.map((day, idx) => {
            const isSelected = activeDayIndex === idx
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDayIndex(idx)}
                className={`group flex items-center gap-3.5 rounded-lg border px-5 py-3.5 font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 ${
                  isSelected
                    ? "border-[#062A3A] bg-[#062A3A] text-[#F4E8D1] shadow-lg dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
                    : "border-[#062A3A]/20 bg-[#F4E8D1]/60 text-[#062A3A]/80 hover:border-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A]/60 dark:text-[#F4E8D1]/80"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    isSelected
                      ? "bg-[#C85A2B] text-[#F4E8D1]"
                      : "bg-[#062A3A]/10 text-[#062A3A] dark:bg-[#F4E8D1]/10 dark:text-[#F4E8D1]"
                  }`}
                >
                  0{idx + 1}
                </span>

                <div className="text-left">
                  <span className="block font-bold">{day.dayNumber}</span>
                  <span className="block text-[9px] opacity-75">{day.destination}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Schedule Destination Banner Card */}
        <div className="mt-10 rounded-xl border border-[#062A3A]/20 bg-[#F4E8D1] p-6 shadow-md dark:border-[#F4E8D1]/20 dark:bg-[#062A3A]">
          <div className="flex flex-col justify-between gap-4 border-b border-[#062A3A]/15 pb-4 md:flex-row md:items-center dark:border-[#F4E8D1]/15">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C85A2B] uppercase">
                {activeDay.dayNumber} // {activeDay.destination}
              </span>
              <h3
                className="mt-1 text-2xl font-bold tracking-tight text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {activeDay.tagline}
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
              <CompassRose size={14} className="text-[#C85A2B]" />
              <span>{activeDay.coordinates}</span>
            </div>
          </div>

          {/* Timeline Route Items */}
          <div className="mt-8 space-y-6">
            {activeDay.items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-4 rounded-lg border border-[#062A3A]/10 bg-[#F8EFE0] p-5 transition-all duration-300 hover:border-[#C85A2B]/40 hover:bg-[#fff9ed] sm:flex-row sm:items-center sm:justify-between dark:border-[#F4E8D1]/10 dark:bg-[#041B26] dark:hover:border-[#C85A2B]/40 dark:hover:bg-[#052230]"
              >
                {/* Time & Venue */}
                <div className="flex flex-col sm:w-1/4">
                  <span className="font-mono text-sm font-bold tracking-[0.16em] text-[#C85A2B]">
                    {item.time}
                  </span>
                  <span className="mt-0.5 font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                    📍 {item.venue}
                  </span>
                </div>

                {/* Event Title & Summary */}
                <div className="sm:w-1/2">
                  <h4
                    className="text-base font-bold tracking-wide text-[#062A3A] dark:text-[#F4E8D1]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#062A3A]/75 dark:text-[#F4E8D1]/75">
                    {item.description}
                  </p>
                </div>

                {/* Category Stamp */}
                <div className="flex sm:w-1/4 sm:justify-end">
                  <span className="inline-block rounded border border-[#062A3A]/20 bg-[#062A3A]/5 px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[0.2em] text-[#062A3A] uppercase dark:border-[#F4E8D1]/20 dark:bg-[#F4E8D1]/5 dark:text-[#F4E8D1]">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
