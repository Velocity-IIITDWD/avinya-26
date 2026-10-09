"use client"

import React from "react"
import { NauticalAnchor } from "@/components/icons"

export function HeroScrollIndicator() {
  return (
<<<<<<< HEAD
    <div className="mt-12 flex justify-center pb-2">
      <a
        href="#about"
        className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-[#062A3A]/60 uppercase transition-colors hover:text-[#C85A2B] dark:text-[#F4E8D1]/60 dark:hover:text-[#C85A2B]"
=======
    <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center sm:bottom-5">
      <a
        href="#about"
        className="group flex flex-col items-center gap-1.5 font-mono text-[10px] tracking-[0.28em] text-[#F4E8D1]/75 uppercase transition-colors hover:text-[#C85A2B]"
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
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
