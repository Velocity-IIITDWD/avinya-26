"use client"

import React from "react"
import Image from "next/image"
import { NauticalSail } from "@/components/icons"

export function JournalInstitute() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        {/* Folio Header */}
        <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-3 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/70">
          <span>LOGBOOK ENTRY 01</span>
          <span>EST. 2015 // GOI</span>
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
              IIIT DHARWAD
            </h3>
          </div>
          <NauticalSail size={28} className="text-[#062A3A] dark:text-[#F4E8D1]" />
        </div>

        {/* Editorial Body Text */}
        <p className="mt-6 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
          <span className="float-left mr-3 font-serif text-4xl font-bold leading-none text-[#C85A2B]">
            I
          </span>
          IIT Dharwad, established in 2015 under the Ministry of Education
          (GoI), is a premier technical institute focused on high-end IT and
          interdisciplinary learning.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
          With its modern 60-acre campus, industry-aligned curriculum, and
          growing national presence, IIIT Dharwad stands as a premier hub for
          talent, discovery, and cutting-edge research in North Karnataka.
        </p>
      </div>

      {/* Campus Lithograph Illustration Frame */}
      <div className="mt-8 overflow-hidden rounded-lg border border-[#062A3A]/20 bg-[#EFE3C8] dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/campus-lithograph.webp"
            alt="IIIT Dharwad Campus Architecture Lithograph"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className="flex items-center justify-between border-t border-[#062A3A]/15 bg-[#F4E8D1]/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1]/70">
          <span>CAMPUS LAT 15.4856° N</span>
          <span>SANCTUARY OF CODE</span>
        </div>
      </div>
    </div>
  )
}
