"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { WorldTheme } from "@/lib/theme"
import { AvinyaSailIcon } from "./NauticalDecorations"

interface WorldBackgroundProps {
  theme: WorldTheme
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export function WorldBackground({ theme, containerRef }: WorldBackgroundProps) {
  const isOutpost = theme.key === "lastOutpost"
  const isPandemonium = theme.key === "pandemonium"
  const isCarnival = theme.key === "carnivalIsland"
  const isAll = theme.key === "all"

  return (
    <div
      ref={containerRef}
      id="world-background-canvas"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none transition-[filter,opacity,transform] will-change-[filter,opacity,transform]"
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes dustFloat1 {
          0% { transform: translate3d(0, 0, 0); opacity: 0.3; }
          50% { transform: translate3d(30px, -20px, 0); opacity: 0.7; }
          100% { transform: translate3d(-15px, -40px, 0); opacity: 0.2; }
        }
        @keyframes dustFloat2 {
          0% { transform: translate3d(0, 0, 0); opacity: 0.4; }
          50% { transform: translate3d(-35px, -30px, 0); opacity: 0.8; }
          100% { transform: translate3d(20px, -60px, 0); opacity: 0.3; }
        }
        @keyframes ferrisSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waterGlimmer {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.4; }
          50% { transform: translate3d(20px, 2px, 0); opacity: 0.8; }
        }
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 45px rgba(255, 0, 127, 0.65)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 65px rgba(255, 0, 127, 0.85)); }
        }
        @keyframes scanlineSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes lightPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.95; }
        }
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.9; }
          20%, 24%, 55% { opacity: 0.35; }
        }
      `}</style>

      {/* ─── BASE AMBIENT CANVAS (DEEP CINEMATIC BACKGROUND) ───────────────── */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: theme.colors.background }}
      />

      {/* ─── WORLD 1: THE LAST OUTPOST (DESERT SCI-FI FRONTIER) ───────────── */}
      <div
        data-world-layer="lastOutpost"
        className={`absolute inset-0 transition-opacity duration-700 will-change-transform ${
          isOutpost ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Image: Lone Explorer Beneath a Giant Moon */}
        <div
          data-parallax="1"
          className="absolute -top-8 -bottom-8 inset-x-0"
        >
          <Image
            src="/images/Lone Explorer Beneath a Giant Moon.png"
            alt="The Last Outpost - Lone Explorer Beneath a Giant Moon"
            fill
            sizes="100vw"
            priority={isOutpost}
            className="object-cover object-center md:object-[center_35%]"
          />
          {/* Subtle atmospheric vignette and gradient for text contrast and depth */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#14100E]/70 via-[#14100E]/30 to-[#14100E]/85 pointer-events-none"
          />
        </div>

        {/* Sparse Drifting Desert Dust Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[25%] left-[18%] h-2 w-2 rounded-full bg-[#E05A2B]/40 blur-[0.5px]"
            style={{ animation: "dustFloat1 12s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[40%] right-[24%] h-2.5 w-2.5 rounded-full bg-[#D99036]/45 blur-[0.5px]"
            style={{ animation: "dustFloat2 15s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute top-[65%] left-[32%] h-1.5 w-1.5 rounded-full bg-[#E05A2B]/35 blur-[0.5px]"
            style={{ animation: "dustFloat1 18s ease-in-out infinite 4s" }}
          />
          <div
            className="absolute top-[75%] right-[15%] h-2 w-2 rounded-full bg-[#D99036]/40 blur-[0.5px]"
            style={{ animation: "dustFloat2 14s ease-in-out infinite 1s" }}
          />
        </div>
      </div>

      {/* ─── WORLD 2: THE CARNIVAL ISLAND (TROPICAL NIGHT FESTIVAL) ───────── */}
      <div
        data-world-layer="carnivalIsland"
        className={`absolute inset-0 transition-opacity duration-700 will-change-transform ${
          isCarnival ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Image: Twilight Lights Over the Waterfront Pier */}
        <div
          data-parallax="1"
          className="absolute -top-8 -bottom-8 inset-x-0"
        >
          <Image
            src="/images/Twilight Lights Over the Waterfront Pier.png"
            alt="The Carnival Island - Twilight Lights Over the Waterfront Pier"
            fill
            sizes="100vw"
            priority={isCarnival}
            className="object-cover object-center md:object-[center_40%]"
          />
          {/* Subtle atmospheric vignette and gradient for text contrast and depth */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#061715]/75 via-[#061715]/30 to-[#061715]/85 pointer-events-none"
          />
        </div>

        {/* Floating Golden Lantern Embers & Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[35%] left-[22%] h-2 w-2 rounded-full bg-[#F5C542]/50 blur-[0.5px]"
            style={{ animation: "dustFloat1 10s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[50%] right-[30%] h-2.5 w-2.5 rounded-full bg-[#E85A26]/55 blur-[0.5px]"
            style={{ animation: "dustFloat2 12s ease-in-out infinite 1.5s" }}
          />
          <div
            className="absolute top-[70%] left-[45%] h-1.5 w-1.5 rounded-full bg-[#F5C542]/45 blur-[0.5px]"
            style={{ animation: "dustFloat1 14s ease-in-out infinite 3s" }}
          />
        </div>
      </div>

      {/* ─── WORLD 3: PANDEMONIUM (RETRO FUTURISTIC SYNTHWAVE METROPOLIS) ── */}
      <div
        data-world-layer="pandemonium"
        className={`absolute inset-0 transition-opacity duration-700 will-change-transform ${
          isPandemonium ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Image: Neon Island City at Sunset */}
        <div
          data-parallax="1"
          className="absolute -top-8 -bottom-8 inset-x-0"
        >
          <Image
            src="/images/Neon Island City at Sunset.png"
            alt="Pandemonium - Neon Island City at Sunset"
            fill
            sizes="100vw"
            priority={isPandemonium}
            className="object-cover object-center md:object-[center_35%]"
          />
          {/* Subtle atmospheric vignette and gradient for text contrast and depth */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#090514]/70 via-[#090514]/30 to-[#090514]/85 pointer-events-none"
          />
        </div>

        {/* CRT Scanlines Sweep Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        {/* Floating Neon Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[30%] left-[20%] h-2 w-2 rounded-full bg-[#FF007F]/60 blur-[0.5px]"
            style={{ animation: "dustFloat1 8s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[55%] right-[25%] h-2.5 w-2.5 rounded-full bg-[#00E5FF]/60 blur-[0.5px]"
            style={{ animation: "dustFloat2 10s ease-in-out infinite 1s" }}
          />
          <div
            className="absolute top-[75%] left-[38%] h-1.5 w-1.5 rounded-full bg-[#FF007F]/50 blur-[0.5px]"
            style={{ animation: "dustFloat1 11s ease-in-out infinite 2.5s" }}
          />
        </div>
      </div>

      {/* ─── WORLD 4: UNIFIED ALL (ARCHIPELAGO EXPEDITION MAP) ─────────────── */}
      <div
        data-world-layer="all"
        className={`absolute inset-0 transition-opacity duration-700 will-change-transform ${
          isAll ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Deep oceanic cartographic background */}
        <div
          data-parallax="1"
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(200, 90, 43, 0.22) 0%, rgba(197, 160, 89, 0.12) 40%, transparent 75%), linear-gradient(180deg, #09131E 0%, #0D1C2A 45%, #08121C 100%)",
          }}
        />

        {/* Charted Archipelago Tracks & Nautical Contours */}
        <svg
          data-parallax="2"
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1000 600"
          fill="none"
        >
          {/* Bathymetric contours */}
          <path
            d="M 100 200 Q 300 100, 600 250 T 900 150"
            stroke="#C5A059"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
          <path
            d="M 50 400 Q 350 300, 650 450 T 950 350"
            stroke="#C85A2B"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          {/* Waypoint Sector Marks */}
          <circle cx="250" cy="220" r="8" stroke="#E05A2B" strokeWidth="1.5" />
          <circle cx="250" cy="220" r="3" fill="#E05A2B" />
          <circle cx="500" cy="380" r="8" stroke="#FF007F" strokeWidth="1.5" />
          <circle cx="500" cy="380" r="3" fill="#FF007F" />
          <circle cx="750" cy="260" r="8" stroke="#F5C542" strokeWidth="1.5" />
          <circle cx="750" cy="260" r="3" fill="#F5C542" />
        </svg>

      </div>

      {/* ─── VOYAGE WATERMARK EMBLEM (SUBTLE STABLE VESSEL ANCHOR) ─────────── */}
      <div
        data-parallax="3"
        className="pointer-events-none absolute -right-16 top-1/4 z-0 opacity-[0.04] select-none transition-transform duration-700 will-change-transform"
      >
        <AvinyaSailIcon variant="cream" size={480} alt="" />
      </div>
    </div>
  )
}
