"use client"

import React, { useState, useEffect } from "react"
import { HeroBackground } from "./hero-background"
import { HeroTelemetryHeader } from "./hero-telemetry-header"
import { HeroContent } from "./hero-content"
import { HeroRiver } from "./hero-river"
import { HeroScrollIndicator } from "./hero-scroll-indicator"

export function HeroVoyage() {
  const [daysLeft, setDaysLeft] = useState(24)

  useEffect(() => {
    // Dynamic countdown calculation to Oct 30, 2026
    const festDate = new Date("2026-10-30T09:00:00").getTime()
    const now = new Date().getTime()
    const diff = Math.max(
      0,
      Math.ceil((festDate - now) / (1000 * 60 * 60 * 24))
    )
    setDaysLeft(diff > 0 ? diff : 0)
  }, [])

  return (
    <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#F4E8D1] pt-24 pb-[170px] text-[#062A3A] transition-colors duration-500 sm:pt-28 sm:pb-[210px] dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      <HeroBackground />

      <HeroRiver />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 sm:px-8 md:px-12 lg:px-16">
        <HeroTelemetryHeader />

        <div className="flex flex-1 items-center justify-center pt-4 lg:pt-6">
          <HeroContent daysLeft={daysLeft} />
        </div>
      </div>
      <HeroScrollIndicator />
    </section>
  )
}
