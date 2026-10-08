"use client"

import React from "react"
import { WorldTheme } from "@/lib/theme"
import { AvinyaSailIcon } from "./NauticalDecorations"

interface WorldBackgroundProps {
  theme: WorldTheme
}

export function WorldBackground({ theme }: WorldBackgroundProps) {
  const isOutpost = theme.key === "lastOutpost"
  const isPandemonium = theme.key === "pandemonium"
  const isCarnival = theme.key === "carnivalIsland"
  const isAll = theme.key === "all"

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ─── BASE VINTAGE PARCHMENT GRAIN (PARALLAX LAYER 1: Y 0 -> -20px) ─── */}
      <div
        data-parallax="1"
        className="absolute inset-0 opacity-45 mix-blend-multiply transition-opacity duration-500 will-change-transform"
        style={{
          backgroundImage: "url('/images/parchment-texture.webp')",
          backgroundSize: "360px 360px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* ─── 1. THE LAST OUTPOST ATMOSPHERE (PARALLAX LAYER 2: Y 0 -> -40px) ─── */}
      <div
        data-parallax="2"
        className="absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{ opacity: isOutpost ? 1 : 0 }}
      >
        {/* Subtle 48px technical engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 56, 71, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 56, 71, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Technical crosshair markings (+) every 144px in burnt orange */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(216, 90, 42, 0.8) 1.5px, transparent 2px),
              radial-gradient(circle at 0% 0%, rgba(216, 90, 42, 0.8) 1.5px, transparent 2px)
            `,
            backgroundSize: "144px 144px",
          }}
        />

        {/* Subtle Slow Scan Line (24s sweep across technical sector) */}
        <div className="absolute inset-x-0 h-28 pointer-events-none animate-radar-scan bg-gradient-to-b from-transparent via-[rgba(216,90,42,0.06)] to-transparent" />

        {/* Radar & Bathymetric Elevation Rings */}
        <svg
          className="absolute top-12 -right-24 h-[550px] w-[550px] opacity-[0.08]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="230" stroke="#D85A2A" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="170" stroke="#173847" strokeWidth="1" />
          <circle cx="250" cy="250" r="110" stroke="#D85A2A" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="250" cy="250" r="50" stroke="#173847" strokeWidth="1" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="#173847" strokeWidth="0.8" opacity="0.6" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="#173847" strokeWidth="0.8" opacity="0.6" />
        </svg>

        {/* Secondary Navigation Grid on lower left */}
        <svg
          className="absolute -bottom-20 -left-20 h-[480px] w-[480px] opacity-[0.06]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="#173847" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="#D85A2A" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="20" y1="20" x2="380" y2="380" stroke="#173847" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="380" x2="380" y2="20" stroke="#173847" strokeWidth="0.8" strokeDasharray="4 4" />
        </svg>

        {/* Tiny Orange Ambient Particles */}
        <div className="absolute top-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#D85A2A]/40 animate-particle-drift-1" />
        <div className="absolute top-[45%] right-[22%] h-1 w-1 rounded-full bg-[#D85A2A]/50 animate-particle-drift-2" />
        <div className="absolute top-[70%] left-[28%] h-1.5 w-1.5 rounded-full bg-[#D85A2A]/35 animate-particle-drift-3" />
        <div className="absolute top-[85%] right-[10%] h-1 w-1 rounded-full bg-[#D85A2A]/45 animate-particle-drift-1" />

        {/* Technical Edge Markings & Monospace Telemetry */}
        <div className="absolute top-6 left-8 font-mono text-[9px] tracking-[0.28em] text-[#173847]/25 uppercase">
          SECTOR 01 // SYS_LAT 15°28&apos;40&quot;N • LNG 75°01&apos;15&quot;E // ARCHIVAL CODE REGION
        </div>
      </div>

      {/* ─── 2. PANDEMONIUM ATMOSPHERE (PARALLAX LAYER 2: Y 0 -> -40px) ─── */}
      <div
        data-parallax="2"
        className="absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{ opacity: isPandemonium ? 1 : 0 }}
      >
        {/* Ambient Emerald Energy Radial Glow */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(21, 150, 107, 0.45) 0%, transparent 55%),
              radial-gradient(circle at 15% 85%, rgba(21, 150, 107, 0.35) 0%, transparent 60%)
            `,
          }}
        />

        {/* Precision Engineering Matrix (32px dot pitch) */}
        <div
          className="absolute inset-0 opacity-[0.075]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(21, 150, 107, 0.8) 1px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Printed Circuit Board Traces & Mechanical Nodes (Top Right) */}
        <svg
          className="absolute -top-10 -right-10 h-[600px] w-[600px] opacity-[0.11]"
          viewBox="0 0 600 600"
          fill="none"
        >
          {/* Circuit bus line 1 */}
          <path
            d="M 550 50 L 400 50 L 350 100 L 200 100 L 150 150 L 50 150"
            stroke="#15966B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="550" cy="50" r="4" fill="#15966B" />
          <circle cx="350" cy="100" r="3" fill="#D85A2A" />
          <circle cx="50" cy="150" r="4" fill="#15966B" />

          {/* Circuit bus line 2 */}
          <path
            d="M 580 120 L 450 120 L 400 170 L 300 170 L 250 220 L 100 220"
            stroke="#173847"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="450" cy="120" r="2.5" fill="#15966B" />
          <circle cx="250" cy="220" r="3" fill="#15966B" />

          {/* Circuit bus line 3 */}
          <path
            d="M 520 220 L 420 320 L 320 320 L 280 360 L 180 360"
            stroke="#15966B"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />
          <circle cx="520" cy="220" r="3" fill="#15966B" />
          <circle cx="180" cy="360" r="3.5" fill="#173847" />

          {/* Mechanical reticle crosshair with slow 35s rotation */}
          <g transform="translate(300, 260)" className="origin-[300px_260px] animate-slow-spin">
            <circle cx="0" cy="0" r="30" stroke="#15966B" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="15" stroke="#173847" strokeWidth="0.8" />
            <line x1="-40" y1="0" x2="-20" y2="0" stroke="#15966B" strokeWidth="1" />
            <line x1="20" y1="0" x2="40" y2="0" stroke="#15966B" strokeWidth="1" />
            <line x1="0" y1="-40" x2="0" y2="-20" stroke="#15966B" strokeWidth="1" />
            <line x1="0" y1="20" x2="0" y2="40" stroke="#15966B" strokeWidth="1" />
          </g>
        </svg>

        {/* Mechanical Circuit Details (Bottom Left) */}
        <svg
          className="absolute -bottom-10 -left-10 h-[500px] w-[500px] opacity-[0.09]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 50 450 L 150 450 L 200 400 L 320 400 L 360 360 L 450 360"
            stroke="#15966B"
            strokeWidth="1.4"
          />
          <circle cx="50" cy="450" r="3.5" fill="#15966B" />
          <circle cx="200" cy="400" r="2.5" fill="#D85A2A" />
          <circle cx="450" cy="360" r="4" fill="#15966B" />

          <rect
            x="80"
            y="260"
            width="60"
            height="60"
            stroke="#173847"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <circle cx="110" cy="290" r="4" fill="#15966B" />
        </svg>

        {/* Tiny Green Ambient Particles */}
        <div className="absolute top-[25%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#15966B]/50 animate-particle-drift-1" />
        <div className="absolute top-[50%] right-[18%] h-1 w-1 rounded-full bg-[#15966B]/60 animate-particle-drift-2" />
        <div className="absolute top-[75%] left-[32%] h-1.5 w-1.5 rounded-full bg-[#15966B]/40 animate-particle-drift-3" />
        <div className="absolute top-[15%] right-[35%] h-1 w-1 rounded-full bg-[#15966B]/50 animate-particle-drift-2" />

        {/* Monospace telemetry header */}
        <div className="absolute top-6 left-8 font-mono text-[9px] tracking-[0.28em] text-[#15966B]/35 uppercase">
          SECTOR 02 // HARDWARE &amp; ROBOTICS // 15°29&apos;10&quot;N 75°01&apos;45&quot;E // ACTIVE TELEMETRY
        </div>
      </div>

      {/* ─── 3. THE CARNIVAL ISLAND ATMOSPHERE (PARALLAX LAYER 2: Y 0 -> -40px) ─── */}
      <div
        data-parallax="2"
        className="absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{ opacity: isCarnival ? 1 : 0 }}
      >
        {/* Warm Celebratory Gold & Sunset Ambient Glow */}
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 80% 18%, rgba(214, 168, 73, 0.45) 0%, transparent 60%),
              radial-gradient(circle at 15% 82%, rgba(216, 90, 42, 0.35) 0%, transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(214, 168, 73, 0.20) 0%, transparent 65%)
            `,
          }}
        />

        {/* Celestial Star Constellation Field (Top Half) with Twinkling Stars */}
        <svg
          className="absolute top-0 right-0 h-[500px] w-full opacity-[0.15]"
          viewBox="0 0 1000 500"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Constellation Stars (4-point diamond sparkles) */}
          <g fill="#D6A849">
            {/* Star 1 */}
            <path
              className="animate-star-twinkle"
              d="M 850 60 Q 850 75 835 75 Q 850 75 850 90 Q 850 75 865 75 Q 850 75 850 60 Z"
            />
            {/* Star 2 */}
            <path
              className="animate-star-twinkle [animation-delay:1.5s]"
              d="M 720 140 Q 720 150 710 150 Q 720 150 720 160 Q 720 150 730 150 Q 720 150 720 140 Z"
            />
            {/* Star 3 */}
            <path
              className="animate-star-twinkle [animation-delay:3s]"
              d="M 920 180 Q 920 192 908 192 Q 920 192 920 204 Q 920 192 932 192 Q 920 192 920 180 Z"
            />
            {/* Star 4 */}
            <path
              className="animate-star-twinkle [animation-delay:2s]"
              d="M 620 80 Q 620 90 610 90 Q 620 90 620 100 Q 620 90 630 90 Q 620 90 620 80 Z"
            />
            {/* Star 5 */}
            <path
              className="animate-star-twinkle [animation-delay:4s]"
              d="M 180 110 Q 180 122 168 122 Q 180 122 180 134 Q 180 122 192 122 Q 180 122 180 110 Z"
            />
          </g>

          {/* Faint Constellation Links */}
          <line x1="850" y1="75" x2="720" y2="150" stroke="#D6A849" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
          <line x1="720" y1="150" x2="920" y2="192" stroke="#D6A849" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
          <line x1="720" y1="150" x2="620" y2="90" stroke="#D6A849" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
        </svg>

        {/* Flowing Festive Rhythm Harmonics (Sine Waves) */}
        <svg
          className="absolute bottom-6 left-0 h-40 w-full opacity-[0.09]"
          viewBox="0 0 1200 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 80 Q 150 20, 300 80 T 600 80 T 900 80 T 1200 80"
            stroke="#D6A849"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 100 Q 150 140, 300 100 T 600 100 T 900 100 T 1200 100"
            stroke="#D85A2A"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Tiny Gold Ambient Particles */}
        <div className="absolute top-[30%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#D6A849]/50 animate-particle-drift-1" />
        <div className="absolute top-[60%] right-[24%] h-1 w-1 rounded-full bg-[#D6A849]/60 animate-particle-drift-2" />
        <div className="absolute top-[80%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#D6A849]/40 animate-particle-drift-3" />
        <div className="absolute top-[22%] right-[40%] h-1 w-1 rounded-full bg-[#D6A849]/50 animate-particle-drift-1" />

        {/* Monospace telemetry header */}
        <div className="absolute top-6 left-8 font-mono text-[9px] tracking-[0.28em] text-[#D6A849]/35 uppercase">
          SECTOR 03 // CULTURAL SPECTACLE &amp; PRO-NITE // 15°29&apos;55&quot;N 75°02&apos;20&quot;E // FESTIVAL GROUND
        </div>
      </div>

      {/* ─── 4. ALL WORLDS UNIFIED ATMOSPHERE (PARALLAX LAYER 2: Y 0 -> -40px) ─── */}
      <div
        data-parallax="2"
        className="absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{ opacity: isAll ? 1 : 0 }}
      >
        {/* Subtle bathymetric nautical ocean line contours */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(8, 43, 58, 0.5) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(200, 90, 43, 0.4) 0%, transparent 45%),
              linear-gradient(to right, rgba(8, 43, 58, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(8, 43, 58, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "auto, auto, 64px 64px, 64px 64px",
          }}
        />

        <div className="absolute top-6 left-8 font-mono text-[9px] tracking-[0.28em] text-[#082B3A]/20 uppercase">
          AVINYA EXPEDITION MAP // THREE REALMS ARCHIPELAGO // 15°29&apos;N 75°01&apos;E
        </div>
      </div>

      {/* ─── WATERMARK EMBLEM (PARALLAX LAYER 3: Y 0 -> -60px) ─── */}
      <div
        data-parallax="3"
        className="pointer-events-none absolute -right-16 top-1/4 z-0 opacity-[0.035] select-none transition-transform duration-700 will-change-transform"
      >
        <AvinyaSailIcon variant="navy" size={480} alt="" />
      </div>
    </div>
  )
}
