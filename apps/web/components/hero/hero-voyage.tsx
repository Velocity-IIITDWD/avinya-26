"use client"

import React, { useState, useEffect } from "react"
import { HeroBackground } from "./hero-background"
import { HeroTelemetryHeader } from "./hero-telemetry-header"
import { HeroContent } from "./hero-content"
<<<<<<< HEAD
import { HeroPoster } from "./hero-poster"
import { HeroScrollIndicator } from "./hero-scroll-indicator"

export function HeroVoyage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [daysLeft, setDaysLeft] = useState(24)

  useEffect(() => {
    // Only track mouse on devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return

    let rafId: number | null = null
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window
        const x = (e.clientX / innerWidth - 0.5) * 20
        const y = (e.clientY / innerHeight - 0.5) * 20
        setMousePos({ x, y })
        rafId = null
      })
    }

    // Dynamic countdown calculation to Oct 30, 2026
    const festDate = new Date("2026-10-30T09:00:00").getTime()
    const now = new Date().getTime()
    const diff = Math.max(0, Math.ceil((festDate - now) / (1000 * 60 * 60 * 24)))
    setDaysLeft(diff > 0 ? diff : 0)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#F4E8D1] pt-24 pb-16 text-[#062A3A] transition-colors duration-500 sm:pt-28 md:pt-32 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-8 md:px-12 lg:px-16">
        <HeroTelemetryHeader />

        <div className="grid grid-cols-1 items-center gap-12 pt-8 md:grid-cols-12 md:gap-8 lg:gap-12 lg:pt-12">
          <HeroContent daysLeft={daysLeft} />
          <HeroPoster mousePos={mousePos} />
        </div>

        <HeroScrollIndicator />
      </div>
=======
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
>>>>>>> 9c0e38c (HOME PAGE UPDATE)
    </section>
  )
}
