"use client"

import React from "react"
import Image from "next/image"
import { CompassRose } from "@/components/icons"

export function JournalFest() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        {/* Folio Header */}
        <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-3 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/70">
          <span>LOGBOOK ENTRY 02</span>
          <span>ANNUAL CONVERGENCE</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#C85A2B] uppercase">
              ABOUT
            </span>
            <h3
              className="text-2xl font-bold tracking-wide text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              THE FEST // AVINYA
            </h3>
          </div>
          <CompassRose size={26} className="text-[#C85A2B]" />
        </div>

        {/* Editorial Body Text */}
        <p className="mt-6 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
          <span className="float-left mr-3 font-serif text-4xl font-bold leading-none text-[#C85A2B]">
            A
          </span>
          vinya, the annual techno-cultural fest of IIIT Dharwad, is a celebration
          of the cultural soul of the student community — dance, music, drama,
          and art — as well as thriving as a vibrant crucible of student innovation
          through coding, robotics, and AI showcases.
        </p>

        {/* The Signature Theme Quotation */}
        <blockquote className="my-6 rounded-r-lg border-l-4 border-[#C85A2B] bg-[#C85A2B]/10 p-4 italic text-[#062A3A] dark:text-[#F4E8D1]">
          <p
            className="text-base font-medium leading-relaxed sm:text-lg"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;It’s a journey across three unique worlds, three experiences
            and one unforgettable voyage, bringing people together through
            music, art, technology, culture, food and endless experiences.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Bottom Feature Graphic from Brochure Page 3 */}
      <div className="mt-4 overflow-hidden rounded-lg border border-[#062A3A]/20 bg-[#EFE3C8] dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/images/brochure-page-3.webp"
            alt="Avinya Techno-Cultural Celebration & Ocean Art"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className="flex items-center justify-between border-t border-[#062A3A]/15 bg-[#F4E8D1]/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1]/70">
          <span>EXPEDITION MANIFEST</span>
          <span>CULTURE × TECHNOLOGY</span>
        </div>
      </div>
    </div>
  )
}
