"use client"

import React from "react"
import { NauticalAnchor } from "@/components/icons"

export function HeroScrollIndicator() {
  return (
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
  )
}
