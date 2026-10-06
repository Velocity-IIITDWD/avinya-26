"use client"

import React from "react"
import Link from "next/link"
import { AvinyaLogo } from "../navbar/avinya-logo"
import { CompassRose, NauticalAnchor, NauticalSail } from "../navbar/nautical-icons"

export function VoyageFooter() {
  return (
    <footer className="relative w-full overflow-hidden border-t-2 border-[#062A3A]/30 bg-[#041B26] pt-16 pb-12 text-[#F4E8D1] transition-colors duration-500">
      {/* Decorative Compass Arc Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, #C85A2B 1px, transparent 1px),
            linear-gradient(to right, #F4E8D1 1px, transparent 1px),
            linear-gradient(to bottom, #F4E8D1 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 120px 120px, 120px 120px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-12 md:gap-8">
          {/* Brand & Mission */}
          <div className="flex flex-col md:col-span-5">
            <Link href="/" aria-label="Avinya Home" className="inline-block">
              <AvinyaLogo theme="dark" showTagline={true} />
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#F4E8D1]/75 sm:text-sm">
              The flagship annual techno-cultural festival of IIIT Dharwad.
              Three uncharted worlds, thirty high-seas expeditions, and one
              unforgettable journey of intellect, art, and adventure.
            </p>

            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#C85A2B] uppercase">
              <CompassRose size={14} className="animate-spin [animation-duration:15s]" />
              <span>COORDINATES: 15°29&apos;N 75°01&apos;E // DHARWAD</span>
            </div>
          </div>

          {/* Quick Navigational Chart */}
          <div className="md:col-span-3">
            <span className="block font-mono text-xs font-bold tracking-[0.25em] text-[#C85A2B] uppercase">
              NAVIGATION
            </span>
            <ul className="mt-4 space-y-2.5 font-mono text-xs tracking-[0.16em] uppercase">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  01 // HOME / DEPARTURE
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  02 // ABOUT THE FEST
                </a>
              </li>
              <li>
                <a
                  href="/#destinations"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  03 // THE THREE WORLDS
                </a>
              </li>
              <li>
                <Link
                  href="/events"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  04 // EXPEDITION MANIFEST
                </Link>
              </li>
              <li>
                <a
                  href="/#schedule"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  05 // 3-DAY ROUTE
                </a>
              </li>
              <li>
                <Link
                  href="/team"
                  className="transition-colors hover:text-[#C85A2B]"
                >
                  06 // THE CREW / MANIFEST
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Anchor */}
          <div className="md:col-span-4">
            <span className="block font-mono text-xs font-bold tracking-[0.25em] text-[#C85A2B] uppercase">
              PORT OF HOSTING
            </span>
            <div className="mt-4 space-y-2 text-xs leading-relaxed text-[#F4E8D1]/80">
              <p className="font-semibold text-[#F4E8D1]">
                Indian Institute of Information Technology Dharwad
              </p>
              <p className="text-[#F4E8D1]/70">
                Established 2015 by Ministry of Education, Government of India.
              </p>
              <p className="text-[#F4E8D1]/70">
                Itigatti Road, Near Sattur Colony, Dharwad, Karnataka — 580009
              </p>
              <div className="pt-2 font-mono text-xs text-[#C85A2B]">
                <a href="mailto:events@iiitdwd.ac.in" className="hover:underline">
                  events@iiitdwd.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rule & Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#F4E8D1]/15 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#F4E8D1]/60 uppercase">
            <NauticalAnchor size={12} className="text-[#C85A2B]" />
            <span>&copy; 2026 AVINYA TECHNO-CULTURAL FESTIVAL. ALL VOYAGE RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-[#F4E8D1]/50 uppercase">
            <span>IIIT DHARWAD</span>
            <span>•</span>
            <span>LIFE IS A VOYAGE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
