"use client"

import React from "react"
import { CompassRose, NauticalSail } from "../navbar/nautical-icons"

export interface CrewMember {
  id: string
  code: string
  name: string
  role: string
  division: "Secretariat" | "Technical" | "Cultural" | "Operations" | "Advisory"
  station: string
  quote?: string
  avatarInitial: string
  github?: string
  linkedin?: string
}

interface CrewCardProps {
  member: CrewMember
}

export function CrewCard({ member }: CrewCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C85A2B] hover:shadow-xl dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
      {/* Corner Rivet / Nautical Accent */}
      <div className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
      <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
      <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
      <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#C5A059]" />

      <div>
        {/* Folio Top Header */}
        <div className="flex items-center justify-between border-b border-dashed border-[#062A3A]/20 pb-3 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/20 dark:text-[#F4E8D1]/70">
          <span>{member.code}</span>
          <span className="text-[#C85A2B] font-bold">{member.division}</span>
        </div>

        {/* Vintage Mariner Portrait Frame */}
        <div className="relative mx-auto mt-6 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-[#062A3A]/30 bg-[#EFE3C8] shadow-inner transition-transform duration-500 group-hover:scale-105 dark:border-[#F4E8D1]/30 dark:bg-[#062A3A]">
          {/* Subtle Nautical Compass Lines in Avatar Background */}
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <CompassRose size={144} className="text-[#062A3A] dark:text-[#F4E8D1]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span
              className="text-4xl font-bold tracking-tight text-[#062A3A] dark:text-[#F4E8D1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {member.avatarInitial}
            </span>
            <NauticalSail size={16} className="mt-1 text-[#C85A2B]" />
          </div>
        </div>

        {/* Identity & Rank */}
        <div className="mt-6 text-center">
          <h3
            className="text-xl font-bold tracking-tight text-[#062A3A] sm:text-2xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {member.name}
          </h3>

          <p className="mt-1 font-mono text-xs font-semibold tracking-[0.2em] text-[#C85A2B] uppercase">
            {member.role}
          </p>

          <p className="mt-2 text-xs italic text-[#062A3A]/75 dark:text-[#F4E8D1]/75">
            &ldquo;{member.quote || "Navigating the uncharted waters of Avinya '26."}&rdquo;
          </p>
        </div>
      </div>

      {/* Duty Station & Clearance Footer */}
      <div className="mt-6 border-t border-dashed border-[#062A3A]/20 pt-4 font-mono text-[9px] tracking-[0.18em] uppercase dark:border-[#F4E8D1]/20">
        <div className="flex justify-between text-[#062A3A]/60 dark:text-[#F4E8D1]/60">
          <span>STATION</span>
          <span className="font-semibold text-[#062A3A] dark:text-[#F4E8D1]">{member.station}</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="text-[#062A3A]/60 dark:text-[#F4E8D1]/60">DUTY STATUS</span>
          <span className="flex items-center gap-1.5 font-bold text-[#C85A2B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C85A2B] animate-pulse" />
            ON VOYAGE
          </span>
        </div>
      </div>
    </article>
  )
}
