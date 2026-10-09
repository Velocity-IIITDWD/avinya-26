"use client"

import React from "react"
import { NauticalAnchor } from "@/components/icons"

export function HeroScrollIndicator() {
  return (
    <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center sm:bottom-5">
      <a
        href="#about"
        className="group flex flex-col items-center gap-1.5 font-mono text-[10px] tracking-[0.28em] text-[#F4E8D1]/75 uppercase transition-colors hover:text-[#C85A2B]"
      >
        <span>SCROLL TO LOGBOOK</span>
        <NauticalAnchor
          size={18}
          className="text-[#C85A2B] transition-transform duration-300 group-hover:translate-y-1"
        />
      </a>
    </div>
  )
}
