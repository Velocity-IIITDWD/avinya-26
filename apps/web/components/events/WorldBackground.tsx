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
        {/* Layer 1: Distant Dusty Sunset Gradient */}
        <div
          data-parallax="1"
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(224, 90, 43, 0.28) 0%, rgba(217, 144, 54, 0.12) 40%, transparent 75%), linear-gradient(180deg, #18110D 0%, #201511 40%, #14100E 100%)",
          }}
        />

        {/* Layer 2: Giant Planet / Moon Arc in Warm Amber */}
        <div
          data-parallax="1"
          className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 opacity-25"
        >
          <div
            className="h-full w-full rounded-full border border-[#E05A2B]/40"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(224, 90, 43, 0.25) 0%, rgba(217, 144, 54, 0.05) 50%, transparent 80%)",
              boxShadow: "inset 0 0 60px rgba(224, 90, 43, 0.3), 0 0 80px rgba(224, 90, 43, 0.2)",
            }}
          />
          <div className="absolute top-1/2 left-[-20%] h-px w-[140%] -rotate-12 bg-gradient-to-r from-transparent via-[#E05A2B]/40 to-transparent" />
        </div>

        {/* Layer 3: Distant Rugged Desert Mountain Horizon */}
        <svg
          data-parallax="2"
          className="absolute top-20 inset-x-0 h-72 w-full opacity-35"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,208C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L0,320Z"
            fill="#2A1B14"
          />
          <path
            d="M0,230L80,215C160,200,320,170,480,185C640,200,800,260,960,245C1120,230,1280,170,1360,155L1440,140L1440,320L0,320Z"
            fill="#1E140F"
            opacity="0.8"
          />
        </svg>

        {/* Layer 4: Reference Artwork Backdrop (LastOutpost WebP) */}
        <div
          data-parallax="2"
          className="absolute inset-0 opacity-[0.28] mix-blend-lighten"
        >
          <Image
            src="/images/worlds/last-outpost-ref.webp"
            alt="The Last Outpost Frontier"
            fill
            sizes="100vw"
            priority={isOutpost}
            className="object-cover object-top filter contrast-125 brightness-90"
          />
        </div>

        {/* Layer 5: Industrial Scaffolding & Radar Antenna Silhouettes */}
        <svg
          data-parallax="3"
          className="absolute top-12 right-6 h-[460px] w-[460px] opacity-25 hidden md:block"
          viewBox="0 0 500 500"
          fill="none"
        >
          {/* Main transmission tower */}
          <line x1="250" y1="50" x2="200" y2="450" stroke="#E05A2B" strokeWidth="1.5" />
          <line x1="250" y1="50" x2="300" y2="450" stroke="#E05A2B" strokeWidth="1.5" />
          <line x1="220" y1="180" x2="280" y2="180" stroke="#E05A2B" strokeWidth="1" />
          <line x1="210" y1="280" x2="290" y2="280" stroke="#E05A2B" strokeWidth="1" />
          <line x1="200" y1="380" x2="300" y2="380" stroke="#E05A2B" strokeWidth="1" />
          <line x1="220" y1="180" x2="290" y2="280" stroke="#D99036" strokeWidth="0.8" />
          <line x1="280" y1="180" x2="210" y2="280" stroke="#D99036" strokeWidth="0.8" />
          <circle cx="250" cy="50" r="4" fill="#E05A2B" style={{ animation: "lightPulse 2s infinite" }} />
          {/* Radar rings */}
          <circle cx="250" cy="50" r="30" stroke="#E05A2B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="250" cy="50" r="70" stroke="#E05A2B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
        </svg>


        {/* Layer 7: Sparse Drifting Desert Dust Particles */}
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

        {/* Layer 8: Warm Atmospheric Dust Haze Overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 100%, rgba(224, 90, 43, 0.45) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ─── WORLD 2: THE CARNIVAL ISLAND (TROPICAL NIGHT FESTIVAL) ───────── */}
      <div
        data-world-layer="carnivalIsland"
        className={`absolute inset-0 transition-opacity duration-700 will-change-transform ${
          isCarnival ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Layer 1: Dark Tropical Midnight Teal Sky */}
        <div
          data-parallax="1"
          className="absolute inset-0 opacity-85"
          style={{
            background:
              "radial-gradient(circle at 75% 30%, rgba(245, 197, 66, 0.22) 0%, rgba(232, 90, 38, 0.12) 35%, transparent 70%), linear-gradient(180deg, #041210 0%, #071E1B 45%, #051614 100%)",
          }}
        />

        {/* Layer 2: Twinkling Celestial Star Field & Constellations */}
        <svg
          data-parallax="1"
          className="absolute top-0 inset-x-0 h-80 w-full opacity-40"
          viewBox="0 0 1000 300"
          fill="none"
        >
          <g fill="#F5C542">
            <circle cx="150" cy="40" r="1.5" style={{ animation: "starTwinkle 3s infinite 0.2s" }} />
            <circle cx="280" cy="90" r="2" style={{ animation: "starTwinkle 4s infinite 1.2s" }} />
            <circle cx="420" cy="50" r="1.5" style={{ animation: "starTwinkle 3.5s infinite 2.2s" }} />
            <circle cx="650" cy="70" r="2.5" style={{ animation: "starTwinkle 4s infinite 0.7s" }} />
            <circle cx="820" cy="45" r="1.5" style={{ animation: "starTwinkle 3s infinite 1.8s" }} />
            <circle cx="920" cy="110" r="2" style={{ animation: "starTwinkle 4.5s infinite 2.5s" }} />
          </g>
          <line x1="650" y1="70" x2="820" y2="45" stroke="#F5C542" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
          <line x1="820" y1="45" x2="920" y2="110" stroke="#F5C542" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
        </svg>

        {/* Layer 3: Reference Artwork Backdrop (Carnival Island WebP) */}
        <div
          data-parallax="2"
          className="absolute inset-0 opacity-[0.32] mix-blend-lighten"
        >
          <Image
            src="/images/worlds/carnival-island-ref.webp"
            alt="The Carnival Island Celebration"
            fill
            sizes="100vw"
            priority={isCarnival}
            className="object-cover object-center filter saturate-125 contrast-110"
          />
        </div>

        {/* Layer 4: Silhouette Ferris Wheel with Slow Rotation */}
        <div
          data-parallax="3"
          className="absolute top-24 right-10 h-72 w-72 opacity-35 hidden md:block"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
            style={{ animation: "ferrisSpin 60s linear infinite" }}
          >
            <circle cx="100" cy="100" r="80" stroke="#F5C542" strokeWidth="1.2" />
            <circle cx="100" cy="100" r="50" stroke="#F5C542" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="12" fill="#E85A26" />
            {/* Ferris spokes & passenger gondolas */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180
              const x = 100 + 80 * Math.cos(rad)
              const y = 100 + 80 * Math.sin(rad)
              return (
                <g key={deg}>
                  <line x1="100" y1="100" x2={x} y2={y} stroke="#F5C542" strokeWidth="0.8" />
                  <circle cx={x} cy={y} r="3" fill="#F5C542" style={{ animation: "lightPulse 2s infinite" }} />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Layer 5: Tropical Palm Silhouettes */}
        <svg
          data-parallax="2"
          className="absolute top-28 left-4 h-56 w-56 opacity-30 hidden sm:block"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Palm trunk */}
          <path d="M 50 190 Q 60 120 70 80" stroke="#041210" strokeWidth="6" strokeLinecap="round" />
          {/* Palm fronds */}
          <path d="M 70 80 Q 40 60 10 70" stroke="#07221E" strokeWidth="3" />
          <path d="M 70 80 Q 60 40 40 30" stroke="#07221E" strokeWidth="3" />
          <path d="M 70 80 Q 90 40 110 50" stroke="#07221E" strokeWidth="3" />
          <path d="M 70 80 Q 110 70 130 90" stroke="#07221E" strokeWidth="3" />
          <path d="M 70 80 Q 90 90 100 110" stroke="#07221E" strokeWidth="3" />
        </svg>

        {/* Layer 6: Shimmering Water Lagoon Surface & Reflections */}
        <div
          data-parallax="3"
          className="absolute bottom-0 inset-x-0 h-44 opacity-40 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(7, 30, 27, 0.6) 30%, rgba(4, 18, 16, 0.95) 100%)",
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 800 150"
            fill="none"
            style={{ animation: "waterGlimmer 8s ease-in-out infinite" }}
          >
            <path
              d="M0,60 C150,50 250,70 400,60 C550,50 650,70 800,60"
              stroke="#F5C542"
              strokeWidth="1.2"
              opacity="0.4"
            />
            <path
              d="M0,90 C120,80 280,100 450,90 C620,80 720,100 800,90"
              stroke="#E85A26"
              strokeWidth="1"
              opacity="0.35"
            />
            <path
              d="M0,120 C200,110 300,130 500,120 C700,110 750,130 800,120"
              stroke="#F5C542"
              strokeWidth="0.8"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Layer 7: Floating Golden Lantern Embers & Particles */}
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
        {/* Layer 1: Dark Retro Synthwave Void */}
        <div
          data-parallax="1"
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(255, 0, 127, 0.28) 0%, rgba(42, 121, 255, 0.12) 45%, transparent 75%), linear-gradient(180deg, #07030F 0%, #100624 45%, #080312 100%)",
          }}
        />

        {/* Layer 2: Giant Radiant Magenta Sun with Horizontal Cutouts */}
        <div
          data-parallax="1"
          className="absolute top-8 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full overflow-hidden"
          style={{
            animation: "sunPulse 6s ease-in-out infinite",
            background: "linear-gradient(180deg, #FF66B2 0%, #FF007F 60%, #9D4EDD 100%)",
            boxShadow: "0 0 80px rgba(255, 0, 127, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.4)",
          }}
        >
          {/* Horizontal Synthwave Sun Segment Lines */}
          <div className="absolute inset-0 flex flex-col justify-end gap-1.5 pb-3">
            <div className="h-1 w-full bg-[#090514]" />
            <div className="h-1.5 w-full bg-[#090514]" />
            <div className="h-2 w-full bg-[#090514]" />
            <div className="h-2.5 w-full bg-[#090514]" />
            <div className="h-3 w-full bg-[#090514]" />
            <div className="h-3.5 w-full bg-[#090514]" />
          </div>
        </div>

        {/* Layer 3: Distant Neon City Skyline Silhouettes */}
        <svg
          data-parallax="2"
          className="absolute top-44 inset-x-0 h-56 w-full opacity-45"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Futuristic buildings */}
          <rect x="50" y="70" width="35" height="130" fill="#140A2B" stroke="#FF007F" strokeWidth="0.8" opacity="0.6" />
          <rect x="95" y="40" width="45" height="160" fill="#120726" stroke="#00E5FF" strokeWidth="0.8" opacity="0.7" />
          <rect x="150" y="80" width="30" height="120" fill="#140A2B" stroke="#9D4EDD" strokeWidth="0.8" opacity="0.5" />
          <rect x="230" y="30" width="60" height="170" fill="#100522" stroke="#FF007F" strokeWidth="1" opacity="0.8" />
          {/* Antenna spire */}
          <line x1="260" y1="5" x2="260" y2="30" stroke="#FF007F" strokeWidth="1.5" />
          <circle cx="260" cy="5" r="2.5" fill="#00E5FF" style={{ animation: "neonFlicker 3s infinite" }} />
          {/* More buildings right side */}
          <rect x="720" y="50" width="55" height="150" fill="#100522" stroke="#00E5FF" strokeWidth="0.8" opacity="0.7" />
          <rect x="790" y="35" width="40" height="165" fill="#140A2B" stroke="#FF007F" strokeWidth="1" opacity="0.8" />
          <line x1="810" y1="10" x2="810" y2="35" stroke="#00E5FF" strokeWidth="1.2" />
          <circle cx="810" cy="10" r="2.5" fill="#FF007F" style={{ animation: "neonFlicker 2.5s infinite" }} />
          <rect x="840" y="90" width="50" height="110" fill="#120726" stroke="#9D4EDD" strokeWidth="0.8" opacity="0.6" />
        </svg>

        {/* Layer 4: Reference Artwork Backdrop (Pandemonium WebP) */}
        <div
          data-parallax="2"
          className="absolute inset-0 opacity-[0.34] mix-blend-lighten"
        >
          <Image
            src="/images/worlds/pandemonium-ref.webp"
            alt="Pandemonium Retro Metropolis"
            fill
            sizes="100vw"
            priority={isPandemonium}
            className="object-cover object-center filter contrast-125 saturate-135"
          />
        </div>

        {/* Layer 5: Cyberpunk Perspective Grid & Neon Floor */}
        <div
          data-parallax="3"
          className="absolute bottom-0 inset-x-0 h-64 opacity-40 overflow-hidden"
          style={{
            perspective: "400px",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255, 0, 127, 0.15) 60%, rgba(9, 5, 20, 0.95) 100%)",
          }}
        >
          <div
            className="h-[200%] w-full origin-top"
            style={{
              transform: "rotateX(65deg)",
              backgroundImage: `
                linear-gradient(to right, rgba(255, 0, 127, 0.6) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(0, 229, 255, 0.5) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Layer 6: CRT Scanlines Sweep Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)",
            backgroundSize: "100% 4px",
          }}
        />


        {/* Layer 8: Floating Neon Particles */}
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
