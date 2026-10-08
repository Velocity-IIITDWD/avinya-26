"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CompassRose, NauticalSail } from "@/components/icons"
import { WorldData } from "./worlds-data"

interface WorldCardProps {
  world: WorldData
}

export function WorldCard({ world }: WorldCardProps) {
  return (
    <div
      className="mt-10 overflow-hidden rounded-2xl border-2 bg-[#041B26]/80 p-6 shadow-2xl backdrop-blur-sm sm:p-10 md:p-12 transition-all duration-500"
      style={{ borderColor: world.color }}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Narrative Details */}
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            {/* Top Subtitle Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{
                  backgroundColor: world.accentBg,
                  color: world.color,
                  border: `1px solid ${world.color}`,
                }}
              >
                {world.subtitle}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#F4E8D1]/60 uppercase">
                {world.coordinates}
              </span>
            </div>

            {/* World Title */}
            <h3
              className="mt-4 text-3xl font-black tracking-tight text-[#F4E8D1] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {world.name}
            </h3>

            {/* Tagline */}
            <p
              className="mt-2 text-sm font-semibold tracking-wide sm:text-base"
              style={{ color: world.color }}
            >
              &ldquo;{world.tagline}&rdquo;
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-[#F4E8D1]/80 sm:text-base sm:leading-loose">
              {world.description}
            </p>

            {/* Key Events Pills */}
            <div className="mt-6">
              <span className="block font-mono text-[10px] font-bold tracking-[0.25em] text-[#F4E8D1]/60 uppercase">
                KEY EXPEDITIONS IN THIS REALM:
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {world.events.map((evt) => (
                  <span
                    key={evt}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F4E8D1]/20 bg-[#062A3A] px-3 py-1 font-mono text-xs text-[#F4E8D1]/90"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: world.color }}
                    />
                    {evt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#F4E8D1]/15 pt-6">
            <Link
              href={`/events?world=${encodeURIComponent(world.name)}`}
              className="group inline-flex items-center gap-2 rounded-md border px-5 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: world.color,
                backgroundColor: world.color,
                color: "#F4E8D1",
              }}
            >
              <span>EXPLORE {world.name}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#F4E8D1]/60 uppercase">
              <CompassRose size={14} className="text-[#C85A2B]" />
              <span>PERMIT STATUS: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Right Column: World Artwork */}
        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border-2 border-[#F4E8D1]/20 bg-[#041B26] p-2 shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={world.image}
                alt={`${world.name} - Avinya Destination Realm`}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>

            {/* Bottom Stamp Badge */}
            <div className="flex items-center justify-between border-t border-[#F4E8D1]/15 bg-[#062A3A] px-3.5 py-2 font-mono text-[9px] tracking-[0.2em] uppercase text-[#F4E8D1]/80">
              <div className="flex items-center gap-1.5">
                <NauticalSail size={12} style={{ color: world.color }} />
                <span>REALM CHART {world.day}</span>
              </div>
              <span style={{ color: world.color }}>{world.coordinates}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
