"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CompassRose, NauticalSail, ShipWheel } from "../navbar/nautical-icons"

interface WorldData {
  id: string
  name: string
  subtitle: string
  day: string
  date: string
  coordinates: string
  tagline: string
  description: string
  image: string
  color: string
  accentBg: string
  events: string[]
  themeIcon: string
}

const worlds: WorldData[] = [
  {
    id: "outpost",
    name: "THE LAST OUTPOST",
    subtitle: "WORLD I // THE TECHNICAL FRONTIER",
    day: "DAY 01",
    date: "OCTOBER 30, 2026",
    coordinates: "15°28'40\"N  75°01'15\"E",
    tagline: "Endure the code storm at the jagged edge of technology",
    description:
      "A rugged volcanic sanctuary where coders, architects, and technical pioneers test their mettle against uncharted algorithmic horizons. Home to the flagship 24-hour hackathons, system defense tournaments, and cryptographic mysteries.",
    image: "/images/island-outpost.webp",
    color: "#C85A2B", // Terracotta
    accentBg: "rgba(200, 90, 43, 0.15)",
    events: ["Flagship 24H Hackathon", "Algo-Storm Competitive Coding", "Web3 Frontier Challenge", "Capture The Flag (CTF)"],
    themeIcon: "⛰️",
  },
  {
    id: "pandemonium",
    name: "PANDEMONIUM",
    subtitle: "WORLD II // HIGH-ENERGY BATTLEGROUND",
    day: "DAY 02",
    date: "OCTOBER 31, 2026",
    coordinates: "15°29'10\"N  75°01'45\"E",
    tagline: "Where mechanical sparks fly and competitive fervor takes over",
    description:
      "A lush, untamed archipelago transformed into a high-octane battle zone. Witness custom combat bots clash in ironclad arenas, aerial drone sprints, intense LAN gaming championships, and AI agent simulations.",
    image: "/images/island-pandemonium.webp",
    color: "#2E8B57", // Emerald Sea
    accentBg: "rgba(46, 139, 87, 0.15)",
    events: ["RoboWars Metal Clash", "Autonomous Drone Gauntlet", "Neon Drift Esports (Valorant)", "AI Battle Simulators"],
    themeIcon: "⚡",
  },
  {
    id: "carnival",
    name: "THE CARNIVAL ISLAND",
    subtitle: "WORLD III // CULTURAL SPECTACLE & CELEBRATION",
    day: "DAY 03",
    date: "NOVEMBER 01, 2026",
    coordinates: "15°29'55\"N  75°02'20\"E",
    tagline: "Shore leave for the soul — lights, melodies, and grand finale",
    description:
      "A radiant haven of celebration illuminated by carnival lanterns and moonlit tides. The grand finale of Avinya unites national musical headliners, fierce battle of the bands, vibrant dance crews, dramatic performances, and culinary delights.",
    image: "/images/island-carnival.webp",
    color: "#C5A059", // Brass Gold
    accentBg: "rgba(197, 160, 89, 0.15)",
    events: ["Star Celebrity Pro-Nite", "Battle of the Bands", "Choreo-Night Dance Showcase", "Runway Fashion Odyssey"],
    themeIcon: "🎪",
  },
]

export function ThreeWorlds() {
  const [activeWorldId, setActiveWorldId] = useState<string>("outpost")

  const activeWorld: WorldData = worlds.find((w) => w.id === activeWorldId) ?? worlds[0]!

  return (
    <section
      id="destinations"
      className="relative w-full overflow-hidden bg-[#062A3A] py-24 text-[#F4E8D1] transition-colors duration-500 sm:py-32"
    >
      {/* Bathymetry Oceanic Background Contours */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 75% 30%, rgba(200, 90, 43, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 20% 70%, rgba(46, 139, 87, 0.3) 0%, transparent 50%),
            linear-gradient(to right, rgba(244, 232, 209, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 232, 209, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 80px 80px, 80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              NAUTICAL EXPEDITION MAP
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#F4E8D1] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE THREE WORLDS
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#F4E8D1]/75 sm:text-base">
            Avinya carries voyagers across three distinct realms — each harboring its own
            unique trials, atmospheres, and grand celebrations.
          </p>
        </div>

        {/* Waypoint Selector Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {worlds.map((world, idx) => {
            const isSelected = world.id === activeWorldId
            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                className={`group relative flex items-center gap-3 rounded-lg border px-4 py-3 font-mono text-xs tracking-[0.16em] uppercase transition-all duration-300 sm:px-6 sm:py-3.5 ${
                  isSelected
                    ? "border-[#C85A2B] bg-[#041B26] text-[#F4E8D1] shadow-[0_0_25px_rgba(200,90,43,0.3)]"
                    : "border-[#F4E8D1]/20 bg-[#062A3A]/60 text-[#F4E8D1]/70 hover:border-[#F4E8D1]/40 hover:text-[#F4E8D1]"
                }`}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    backgroundColor: isSelected ? world.color : "rgba(244, 232, 209, 0.15)",
                    color: isSelected ? "#F4E8D1" : "#F4E8D1",
                  }}
                >
                  0{idx + 1}
                </span>

                <div className="text-left">
                  <span className="block font-bold sm:inline">{world.name}</span>
                  <span className="block text-[9px] text-[#F4E8D1]/50 sm:hidden">
                    {world.day}
                  </span>
                </div>

                {isSelected && (
                  <CompassRose size={14} className="ml-1 text-[#C85A2B] animate-spin [animation-duration:12s]" />
                )}
              </button>
            )
          })}
        </div>

        {/* Active Destination Focus Display */}
        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-[#F4E8D1]/15 bg-[#041B26]/90 p-6 shadow-2xl backdrop-blur-md sm:p-10 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            {/* Left: Island Illustration & Chart Frame */}
            <div className="relative flex justify-center md:col-span-5">
              <div className="relative w-full max-w-sm">
                {/* Circular Bathymetry Rings Behind Island */}
                <div
                  className="pointer-events-none absolute inset-0 -m-8 rounded-full border border-dashed border-[#F4E8D1]/10 opacity-70"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 -m-16 rounded-full border border-[#C85A2B]/10 opacity-60"
                  aria-hidden="true"
                />

                {/* Island Graphic Container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#F4E8D1]/20 bg-[#062A3A]/80 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                  <div className="relative h-full w-full">
                    <Image
                      src={activeWorld.image}
                      alt={activeWorld.name}
                      fill
                      className="object-contain p-2 transition-all duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  {/* Waypoint Stamp */}
                  <div className="absolute top-4 left-4 rounded border border-[#F4E8D1]/30 bg-[#041B26]/80 px-2.5 py-1 font-mono text-[9px] tracking-[0.2em] text-[#F4E8D1] uppercase">
                    SECTOR WAYPOINT
                  </div>

                  <div className="absolute right-4 bottom-4 rounded border border-[#C85A2B] bg-[#C85A2B]/20 px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.2em] text-[#F4E8D1] uppercase">
                    {activeWorld.day}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sector Dossier & Event Roster */}
            <div className="flex flex-col justify-center md:col-span-7">
              {/* Sector Telemetry Line */}
              <div className="flex flex-wrap items-center gap-4 border-b border-[#F4E8D1]/15 pb-4 font-mono text-xs tracking-[0.22em] text-[#F4E8D1]/70 uppercase">
                <span className="text-[#C85A2B] font-bold">{activeWorld.subtitle}</span>
                <span>•</span>
                <span>{activeWorld.date}</span>
                <span>•</span>
                <span>{activeWorld.coordinates}</span>
              </div>

              {/* Destination Title */}
              <h3
                className="mt-6 text-3xl font-bold tracking-tight text-[#F4E8D1] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {activeWorld.name}
              </h3>

              {/* Tagline */}
              <p className="mt-2 font-mono text-xs tracking-[0.18em] text-[#C85A2B] uppercase sm:text-sm">
                &ldquo;{activeWorld.tagline}&rdquo;
              </p>

              {/* Narrative Description */}
              <p className="mt-4 text-sm leading-relaxed text-[#F4E8D1]/80 sm:text-base">
                {activeWorld.description}
              </p>

              {/* Signature Events at this World */}
              <div className="mt-6">
                <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[#F4E8D1]/60 uppercase">
                  SIGNATURE EXPEDITIONS IN THIS REALM:
                </span>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {activeWorld.events.map((evt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-md border border-[#F4E8D1]/10 bg-[#062A3A]/60 px-3.5 py-2.5 text-xs text-[#F4E8D1] transition-colors hover:border-[#C85A2B]/40"
                    >
                      <NauticalSail size={14} className="text-[#C85A2B] shrink-0" />
                      <span className="font-medium">{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA to Explore all events in this world */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/events?world=${activeWorld.id}`}
                  className="group inline-flex items-center gap-2 rounded-md bg-[#C85A2B] px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-all duration-300 hover:bg-[#a84920]"
                >
                  <span>INSPECT ALL {activeWorld.name} EVENTS</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <div className="font-mono text-[10px] tracking-[0.2em] text-[#F4E8D1]/50 uppercase">
                  PERMITS OPEN FOR ALL CADETS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Maritime Map Preview / Archival View Link */}
        <div className="mt-12 rounded-xl border border-[#F4E8D1]/15 bg-[#041B26]/40 p-4 text-center sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <ShipWheel size={24} className="text-[#C85A2B] shrink-0" />
              <div>
                <span className="block font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase">
                  THE VOYAGE CHARTER
                </span>
                <span className="block text-xs text-[#F4E8D1]/70">
                  Three islands connected by a single continuous voyage route.
                </span>
              </div>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#C85A2B] uppercase hover:underline"
            >
              <span>ACCESS EXPEDITION MANIFEST</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
