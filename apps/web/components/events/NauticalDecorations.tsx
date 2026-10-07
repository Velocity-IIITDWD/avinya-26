"use client"

import React from "react"
import Image from "next/image"

export function AvinyaSailIcon({
  variant = "navy",
  size = 28,
  className = "",
  alt = "Avinya Sail Emblem",
}: {
  variant?: "navy" | "cream" | "orange"
  size?: number
  className?: string
  alt?: string
}) {
  const src =
    variant === "navy"
      ? "/images/avinya-sail-navy.png"
      : variant === "cream"
        ? "/images/avinya-sail-cream.png"
        : "/images/avinya-sail-orange.png"

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain transition-transform duration-500 will-change-transform"
        priority={size > 40}
      />
    </div>
  )
}

export function CompassRoseMini({
  size = 24,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Outer subtle dashed circle */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.45"
      />
      {/* Inner concentric ring */}
      <circle
        cx="20"
        cy="20"
        r="14"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      {/* Crosshair lines */}
      <line
        x1="20"
        y1="2"
        x2="20"
        y2="38"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <line
        x1="2"
        y1="20"
        x2="38"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.35"
      />
      {/* 4 Cardinal Diamond Star Points */}
      {/* North (Terracotta) */}
      <polygon points="20,4 22,18 20,17 18,18" fill="#C85A2B" />
      {/* South */}
      <polygon points="20,36 22,22 20,23 18,22" fill="currentColor" opacity="0.75" />
      {/* East */}
      <polygon points="36,20 22,22 23,20 22,18" fill="currentColor" opacity="0.75" />
      {/* West */}
      <polygon points="4,20 18,22 17,20 18,18" fill="currentColor" opacity="0.75" />
      {/* Center Brass Hub */}
      <circle cx="20" cy="20" r="1.6" fill="#C85A2B" />
      <circle cx="20" cy="20" r="0.8" fill="#FAF3E3" />
    </svg>
  )
}

export function WaveDividerLine({
  className = "",
  width = 100,
}: {
  className?: string
  width?: number
}) {
  return (
    <svg
      width={width}
      height="6"
      viewBox="0 0 100 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 3 C 12 0.5, 18 5.5, 30 3 C 42 0.5, 48 5.5, 60 3 C 72 0.5, 78 5.5, 90 3 C 95 1.5, 98 4, 100 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function NauticalCornerNotches({
  color = "currentColor",
  className = "",
}: {
  color?: string
  className?: string
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Top Left */}
      <div className="absolute top-2 left-2 h-2.5 w-2.5 border-t border-l opacity-35" style={{ borderColor: color }} />
      <div className="absolute top-2.5 left-2.5 h-0.5 w-0.5 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />

      {/* Top Right */}
      <div className="absolute top-2 right-2 h-2.5 w-2.5 border-t border-r opacity-35" style={{ borderColor: color }} />
      <div className="absolute top-2.5 right-2.5 h-0.5 w-0.5 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />

      {/* Bottom Left */}
      <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l opacity-35" style={{ borderColor: color }} />
      <div className="absolute bottom-2.5 left-2.5 h-0.5 w-0.5 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />

      {/* Bottom Right */}
      <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r opacity-35" style={{ borderColor: color }} />
      <div className="absolute bottom-2.5 right-2.5 h-0.5 w-0.5 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />
    </div>
  )
}

export function DottedVoyageLine({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 6 Q 50 1, 100 6 T 198 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.3"
      />
      <circle cx="4" cy="6" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="6" r="1.5" fill="#C85A2B" opacity="0.8" />
      <circle cx="196" cy="6" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
