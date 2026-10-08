"use client"

import React from "react"
import Image from "next/image"
import { ShipWheel } from "@/components/icons"

interface HeroPosterProps {
  mousePos: { x: number; y: number }
}

export function HeroPoster({ mousePos }: HeroPosterProps) {
  return (
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
                src="/images/brochure-page-1.webp"
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
  )
}
