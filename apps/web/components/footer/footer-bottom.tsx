"use client"

import React from "react"
import { NauticalAnchor } from "@/components/icons"

export function FooterBottom() {
  return (
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
  )
}
