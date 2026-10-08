"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CompassRose, NauticalAnchor, ShipWheel } from "../navbar/nautical-icons"

export function HeroVoyage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [daysLeft, setDaysLeft] = useState(24)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }

    // Dynamic countdown calculation to Oct 30, 2026
    const festDate = new Date("2026-10-30T09:00:00").getTime()
    const now = new Date().getTime()
    const diff = Math.max(0, Math.ceil((festDate - now) / (1000 * 60 * 60 * 24)))
    setDaysLeft(diff > 0 ? diff : 0)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#F4E8D1] pt-24 pb-16 text-[#062A3A] transition-colors duration-500 sm:pt-28 md:pt-32 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      {/* Decorative Vintage Bathymetry / Nautical Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #062A3A 1px, transparent 1px),
            linear-gradient(to right, #062A3A 1px, transparent 1px),
            linear-gradient(to bottom, #062A3A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 120px 120px, 120px 120px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Circular Compass Route Arcs */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full border border-[#C85A2B]/10 sm:h-[800px] sm:w-[800px] md:h-[1000px] md:w-[1000px]" />
        <div className="absolute inset-8 rounded-full border border-dashed border-[#062A3A]/10 dark:border-[#F4E8D1]/10" />
        <div className="absolute inset-24 rounded-full border border-[#C85A2B]/15" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
            <span className="inline-block h-2 w-2 rounded-full bg-[#C85A2B] animate-pulse" />
            <span>PORT OF CALL // IIIT DHARWAD</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
            <span className="hidden sm:inline">COORDINATES: 15°29&apos;N 75°01&apos;E</span>
            <span className="text-[#C85A2B]">EXPEDITION: OCT 30 – NOV 01</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 items-center gap-12 pt-8 md:grid-cols-12 md:gap-8 lg:gap-12 lg:pt-12">
          {/* Left Column: Bold Editorial Typography & Manifesto */}
          <div className="flex flex-col justify-center md:col-span-7">
            {/* Stamped Theme Category */}
            <div className="mb-4 inline-flex items-center gap-2">
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
            <div className="mt-2 h-2 w-32 sm:w-44 text-[#C85A2B]">
              <svg viewBox="0 0 160 12" fill="none" className="h-full w-full">
                <path
                  d="M0 6 C 20 1, 40 11, 60 6 C 80 1, 100 11, 120 6 C 140 1, 155 9, 160 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Editorial Description Text (grounded in the official brochure) */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#062A3A]/80 sm:text-lg dark:text-[#F4E8D1]/85">
              A celebration of the cultural soul and technical mind of IIIT Dharwad.
              Embark on an interactive odyssey across three uncharted worlds — bridging
              high-energy coding, robotics, and AI with vibrant music, dance, theatre, and
              the timeless spirit of discovery.
            </p>

            {/* Interactive Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#destinations"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border-2 border-[#062A3A] bg-[#062A3A] px-6 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#062A3A] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-transparent dark:hover:text-[#F4E8D1]"
              >
                <CompassRose size={16} className="text-[#C85A2B] transition-transform duration-500 group-hover:rotate-90" />
                <span>CHART THE COURSE</span>
              </a>

              <Link
                href="/events"
                className="group inline-flex items-center gap-2 rounded-md border border-[#062A3A]/30 bg-transparent px-6 py-3.5 font-mono text-xs font-semibold tracking-[0.2em] text-[#062A3A] uppercase transition-all duration-300 hover:border-[#C85A2B] hover:text-[#C85A2B] dark:border-[#F4E8D1]/30 dark:text-[#F4E8D1] dark:hover:border-[#C85A2B] dark:hover:text-[#C85A2B]"
              >
                <span>VIEW EXPEDITIONS</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Micro Telemetry Badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#062A3A]/15 pt-6 sm:max-w-lg dark:border-[#F4E8D1]/15">
              <div>
                <span className="block font-mono text-xl font-bold text-[#C85A2B] sm:text-2xl">
                  3
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
                  DESTINATIONS
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl font-bold text-[#062A3A] sm:text-2xl dark:text-[#F4E8D1]">
                  30+
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
                  CHALLENGES
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl font-bold text-[#C85A2B] sm:text-2xl">
                  {daysLeft}D
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/70 uppercase sm:text-xs dark:text-[#F4E8D1]/70">
                  UNTIL EMBARKATION
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork / Poster Frame */}
          <div className="relative flex justify-center md:col-span-5">
            <div
              className="relative w-full max-w-md transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
              }}
            >
              {/* Vintage Woodcut Frame */}
              <div className="relative overflow-hidden rounded-xl border-2 border-[#062A3A]/25 bg-[#EFE3C8] p-2.5 shadow-[0_20px_50px_rgba(6,42,58,0.18)] dark:border-[#F4E8D1]/25 dark:bg-[#041B26] dark:shadow-[0_20px_50px_rgba(4,27,38,0.6)]">
                {/* Vintage Inner Border */}
                <div className="relative overflow-hidden rounded-lg border border-dashed border-[#062A3A]/40 dark:border-[#F4E8D1]/40">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/images/brochure-page-1.png"
                      alt="Avinya Techno-Cultural Fest Poster - Life is a Voyage"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  {/* Stamp Overlay Badge in Corner */}
                  <div className="absolute right-3 bottom-3 rounded border border-[#C85A2B] bg-[#F4E8D1]/90 px-2.5 py-1 text-center font-mono text-[9px] font-bold tracking-[0.2em] text-[#062A3A] uppercase backdrop-blur-xs shadow-sm dark:bg-[#062A3A]/90 dark:text-[#F4E8D1]">
                    <span>SEALED AT DHARWAD</span>
                    <span className="block text-[8px] text-[#C85A2B]">OFFICIAL VOYAGE PERMIT</span>
                  </div>
                </div>

                {/* Decorative Brass Rivets / Corner Accents */}
                <div className="absolute top-1 left-1 h-2 w-2 rounded-full border border-[#062A3A]/40 bg-[#C5A059] dark:border-[#F4E8D1]/40" />
                <div className="absolute top-1 right-1 h-2 w-2 rounded-full border border-[#062A3A]/40 bg-[#C5A059] dark:border-[#F4E8D1]/40" />
                <div className="absolute bottom-1 left-1 h-2 w-2 rounded-full border border-[#062A3A]/40 bg-[#C5A059] dark:border-[#F4E8D1]/40" />
                <div className="absolute right-1 bottom-1 h-2 w-2 rounded-full border border-[#062A3A]/40 bg-[#C5A059] dark:border-[#F4E8D1]/40" />
              </div>

              {/* Floating Nautical Dial Widget */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-[#062A3A]/20 bg-[#F4E8D1]/95 p-3.5 shadow-lg backdrop-blur-md sm:flex items-center gap-3 dark:border-[#F4E8D1]/20 dark:bg-[#062A3A]/95">
                <ShipWheel size={28} className="text-[#C85A2B] animate-[spin_20s_linear_infinite]" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]">
                    BEARING 284° WNW
                  </span>
                  <span className="font-mono text-[9px] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                    STATUS: READY TO SAIL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="mt-12 flex justify-center pb-2">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-[#062A3A]/60 uppercase transition-colors hover:text-[#C85A2B] dark:text-[#F4E8D1]/60 dark:hover:text-[#C85A2B]"
          >
            <span>SCROLL TO LOGBOOK</span>
            <NauticalAnchor
              size={18}
              className="text-[#C85A2B] transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
