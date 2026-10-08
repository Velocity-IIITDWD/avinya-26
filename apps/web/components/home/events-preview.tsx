"use client"

import React, { useState } from "react"
import Link from "next/link"
import { CompassRose, NauticalSail } from "../navbar/nautical-icons"

export interface EventItem {
  id: string
  title: string
  code: string
  world: "The Last Outpost" | "Pandemonium" | "The Carnival Island"
  category: "Technical" | "Cultural" | "Gaming" | "Flagship"
  date: string
  bounty: string
  teamSize: string
  description: string
  status: "REGISTRATION OPEN" | "LIMITED BERTHS" | "HIGH DEMAND"
}

export const sampleEvents: EventItem[] = [
  {
    id: "hack-odyssey",
    title: "CODE ODYSSEY // 24H HACKATHON",
    code: "EXP-01",
    world: "The Last Outpost",
    category: "Flagship",
    date: "OCTOBER 30",
    bounty: "₹1,50,000",
    teamSize: "2 - 4 CADETS",
    description: "Anchor in the digital tempest. Build cutting-edge AI, Web3, or systems software solutions before the morning tide breaks.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "robowars",
    title: "IRONCLAD ROBO-WARS",
    code: "EXP-02",
    world: "Pandemonium",
    category: "Technical",
    date: "OCTOBER 31",
    bounty: "₹1,00,000",
    teamSize: "1 - 5 CADETS",
    description: "Heavy metal carnage in our reinforced nautical arena. Wired and wireless bots duel to the finish with spinners and flippers.",
    status: "HIGH DEMAND",
  },
  {
    id: "battle-bands",
    title: "BATTLE OF THE BANDS // SOUNDS OF SIKANDAR",
    code: "EXP-03",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    bounty: "₹75,000",
    teamSize: "3 - 8 ARTISTS",
    description: "Rock the open seas. Premier collegiate musical acts clash with guitar solos, thunderous drums, and original compositions.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "algo-storm",
    title: "ALGO-STORM // SPEED PROGRAMMING",
    code: "EXP-04",
    world: "The Last Outpost",
    category: "Technical",
    date: "OCTOBER 30",
    bounty: "₹50,000",
    teamSize: "SOLO VOYAGER",
    description: "Test algorithmic endurance through grueling rounds of dynamic programming, graph traversal, and mathematical optimization.",
    status: "LIMITED BERTHS",
  },
  {
    id: "neon-drift",
    title: "NEON DRIFT // ESPORTS CHAMPIONSHIP",
    code: "EXP-05",
    world: "Pandemonium",
    category: "Gaming",
    date: "OCTOBER 31",
    bounty: "₹60,000",
    teamSize: "5 CADETS",
    description: "Tactical FPS warfare on high-refresh rigs. Compete in Valorant and BGMI bracket play for regional glory.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "choreonite",
    title: "HIGH TIDE CHOREO-NIGHT",
    code: "EXP-06",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    bounty: "₹80,000",
    teamSize: "8 - 25 DANCERS",
    description: "Electrifying synchronized group dance competition featuring thematic Western, Eastern, and Contemporary maritime choreographies.",
    status: "HIGH DEMAND",
  },
]

export function EventsPreview() {
  const [selectedWorld, setSelectedWorld] = useState<string>("ALL")

  const filteredEvents =
    selectedWorld === "ALL"
      ? sampleEvents
      : sampleEvents.filter((e) => e.world === selectedWorld)

  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-[#F4E8D1] py-24 text-[#062A3A] transition-colors duration-500 sm:py-32 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              EXPEDITION MANIFEST
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            FLAGSHIP EXPEDITIONS
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#062A3A]/75 sm:text-base dark:text-[#F4E8D1]/75">
            Boarding passes and voyage permits are now issued for high-seas technical
            combats, algorithmic challenges, and grand cultural spectacles.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "ALL", label: "ALL DESTINATIONS" },
              { id: "The Last Outpost", label: "THE LAST OUTPOST" },
              { id: "Pandemonium", label: "PANDEMONIUM" },
              { id: "The Carnival Island", label: "THE CARNIVAL ISLAND" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedWorld(filter.id)}
                className={`rounded-md border px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-all duration-200 ${
                  selectedWorld === filter.id
                    ? "border-[#C85A2B] bg-[#C85A2B] text-[#F4E8D1] shadow-sm"
                    : "border-[#062A3A]/20 bg-[#EFE3C8]/60 text-[#062A3A]/80 hover:border-[#062A3A]/40 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]/60 dark:text-[#F4E8D1]/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vintage Ticket / Passport Passes Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border-2 border-[#062A3A]/25 bg-[#F8EFE0] p-6 shadow-[0_8px_24px_rgba(6,42,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C85A2B] hover:shadow-[0_16px_36px_rgba(6,42,58,0.16)] dark:border-[#F4E8D1]/25 dark:bg-[#041B26] dark:shadow-none dark:hover:border-[#C85A2B]"
            >
              {/* Perforated Ticket Notches on Top Left and Top Right */}
              <div className="pointer-events-none absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-[#062A3A]/25 bg-[#F4E8D1] dark:border-[#F4E8D1]/25 dark:bg-[#062A3A]" />

              {/* Top Ticket Header */}
              <div>
                <div className="flex items-center justify-between border-b border-dashed border-[#062A3A]/20 pb-3 dark:border-[#F4E8D1]/20">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#062A3A] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.2em] text-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]">
                      {event.code}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#C85A2B] uppercase font-semibold">
                      {event.category}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                    {event.date}
                  </span>
                </div>

                {/* World Tag */}
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                  <CompassRose size={12} className="text-[#C85A2B]" />
                  <span>SECTOR: {event.world}</span>
                </div>

                {/* Event Title */}
                <h3
                  className="mt-2 text-xl font-bold tracking-tight text-[#062A3A] sm:text-2xl dark:text-[#F4E8D1]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="mt-3 text-xs leading-relaxed text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
                  {event.description}
                </p>
              </div>

              {/* Bottom Ticket Perforation & Details */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#062A3A]/20 dark:border-[#F4E8D1]/20">
                <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-[#062A3A]/70 dark:text-[#F4E8D1]/70">
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-[#062A3A]/50 dark:text-[#F4E8D1]/50">
                      BOUNTY
                    </span>
                    <span className="font-bold text-[#C85A2B] text-xs">
                      {event.bounty}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-[#062A3A]/50 dark:text-[#F4E8D1]/50">
                      CREW SIZE
                    </span>
                    <span className="font-semibold text-xs">
                      {event.teamSize}
                    </span>
                  </div>
                </div>

                {/* Registration Button */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#C85A2B] font-bold uppercase">
                    {event.status}
                  </span>

                  <Link
                    href={`/events#${event.id}`}
                    className="inline-flex items-center gap-1.5 rounded border border-[#062A3A] bg-[#062A3A] px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.18em] text-[#F4E8D1] uppercase transition-colors hover:bg-transparent hover:text-[#062A3A] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-transparent dark:hover:text-[#F4E8D1]"
                  >
                    <span>CLAIM PERMIT</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 rounded-lg border-2 border-[#062A3A] bg-[#062A3A] px-8 py-4 font-mono text-xs font-bold tracking-[0.25em] text-[#F4E8D1] uppercase shadow-md transition-all duration-300 hover:bg-transparent hover:text-[#062A3A] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-transparent dark:hover:text-[#F4E8D1]"
          >
            <NauticalSail size={18} className="text-[#C85A2B] transition-transform duration-300 group-hover:scale-110" />
            <span>ACCESS FULL EXPEDITION CATALOG (30+ EVENTS)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
            OFFICIAL RULEBOOKS, SCHEDULES &amp; SPOT REGISTRATIONS AVAILABLE
          </span>
        </div>
      </div>
    </section>
  )
}
