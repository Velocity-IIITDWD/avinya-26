"use client"

import React from "react"
import Link from "next/link"
import { AvinyaLogo } from "@/components/navbar/avinya-logo"
import { CompassRose } from "@/components/icons"

export function FooterBrand() {
  return (
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
  )
}
