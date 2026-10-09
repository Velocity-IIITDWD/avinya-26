"use client"

import React from "react"
import Link from "next/link"
import { CompassRose } from "@/components/icons"
import { HeroTelemetryBadges } from "./hero-telemetry-badges"

interface HeroContentProps {
  daysLeft: number
}

export function HeroContent({ daysLeft }: HeroContentProps) {
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-center md:col-span-7">
      {/* Stamped Theme Category */}
      <div className="mb-4 inline-flex items-center gap-2">
=======
    <div className="flex w-full flex-col items-center justify-center text-center">
      {/* Stamped Theme Category */}
      <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-2">
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
        <span className="rounded border border-[#C85A2B]/40 bg-[#C85A2B]/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.22em] text-[#C85A2B] uppercase sm:text-xs">
          TECHNO-CULTURAL FESTIVAL
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
          EDITION 2026
        </span>
      </div>

      {/* Core Festival Catchphrase */}
      <h2
        className="text-xs font-semibold tracking-[0.38em] text-[#C85A2B] uppercase sm:text-sm md:text-base"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        L I F E &nbsp; I S &nbsp; A &nbsp; V O Y A G E
      </h2>

      {/* Large Stencil Wordmark Heading */}
      <h1
        className="mt-2 text-5xl font-black tracking-tight text-[#062A3A] sm:text-6xl md:text-7xl lg:text-8xl dark:text-[#F4E8D1]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        AVINYA
      </h1>

      {/* Underline Decorative Maritime Wave */}
<<<<<<< HEAD
      <div className="mt-2 h-2 w-32 sm:w-44 text-[#C85A2B]">
=======
      <div className="mx-auto mt-2 h-2 w-32 text-[#C85A2B] sm:w-44">
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
        <svg viewBox="0 0 160 12" fill="none" className="h-full w-full">
          <path
            d="M0 6 C 20 1, 40 11, 60 6 C 80 1, 100 11, 120 6 C 140 1, 155 9, 160 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Editorial Description Text */}
<<<<<<< HEAD
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#062A3A]/80 sm:text-lg dark:text-[#F4E8D1]/85">
        A celebration of the cultural soul and technical mind of IIIT Dharwad.
        Embark on an interactive odyssey across three uncharted worlds — bridging
        high-energy coding, robotics, and AI with vibrant music, dance, theatre, and
        the timeless spirit of discovery.
      </p>

      {/* Interactive Call to Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
=======
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#062A3A]/80 sm:text-lg dark:text-[#F4E8D1]/85">
        A celebration of the cultural soul and technical mind of IIIT Dharwad.
        Embark on an interactive odyssey across three uncharted worlds —
        bridging high-energy coding, robotics, and AI with vibrant music, dance,
        theatre, and the timeless spirit of discovery.
      </p>

      {/* Interactive Call to Actions */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
        <a
          href="#destinations"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border-2 border-[#062A3A] bg-[#062A3A] px-6 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#062A3A] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-transparent dark:hover:text-[#F4E8D1]"
        >
          <CompassRose
            size={16}
            className="text-[#C85A2B] transition-transform duration-500 group-hover:rotate-90"
          />
          <span>CHART THE COURSE</span>
        </a>

        <Link
          href="/events"
          className="group inline-flex items-center gap-2 rounded-md border border-[#062A3A]/30 bg-transparent px-6 py-3.5 font-mono text-xs font-semibold tracking-[0.2em] text-[#062A3A] uppercase transition-all duration-300 hover:border-[#C85A2B] hover:text-[#C85A2B] dark:border-[#F4E8D1]/30 dark:text-[#F4E8D1] dark:hover:border-[#C85A2B] dark:hover:text-[#C85A2B]"
        >
          <span>VIEW EXPEDITIONS</span>
<<<<<<< HEAD
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
=======
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
        </Link>
      </div>

      {/* Micro Telemetry Badges */}
      <HeroTelemetryBadges daysLeft={daysLeft} />
    </div>
  )
}
