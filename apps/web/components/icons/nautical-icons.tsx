"use client"

import React from "react"

export function CompassRose({
  size = 36,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer fine dashed navigational ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.35"
      />

      {/* Crosshairs */}
      <line
        x1="50"
        y1="3"
        x2="50"
        y2="97"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <line
        x1="3"
        y1="50"
        x2="97"
        y2="50"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />

      {/* Cardinal Labels */}
      <text
        x="50"
        y="14"
        textAnchor="middle"
        fontSize="7"
        fontFamily="serif"
        fill="currentColor"
        fontWeight="bold"
      >
        N
      </text>
      <text
        x="50"
        y="93"
        textAnchor="middle"
        fontSize="7"
        fontFamily="serif"
        fill="currentColor"
        fontWeight="bold"
      >
        S
      </text>
      <text
        x="88"
        y="52.5"
        textAnchor="middle"
        fontSize="7"
        fontFamily="serif"
        fill="currentColor"
        fontWeight="bold"
      >
        E
      </text>
      <text
        x="12"
        y="52.5"
        textAnchor="middle"
        fontSize="7"
        fontFamily="serif"
        fill="currentColor"
        fontWeight="bold"
      >
        W
      </text>

      {/* 8-point Mariner's Star Points */}
      {/* North Point */}
      <polygon points="50,16 53,46 50,44 47,46" fill="#C85A2B" />
      <polygon points="50,16 47,46 50,44" fill="#C85A2B" opacity="0.8" />
      {/* South Point */}
      <polygon points="50,84 53,54 50,56 47,54" fill="currentColor" />
      {/* East Point */}
      <polygon points="84,50 54,53 56,50 54,47" fill="currentColor" />
      {/* West Point */}
      <polygon points="16,50 46,53 44,50 46,47" fill="currentColor" />

      {/* Diagonal Points (NE, NW, SE, SW) */}
      <polygon
        points="74,26 53,47 52,48 50,50"
        fill="currentColor"
        opacity="0.6"
      />
      <polygon
        points="26,26 47,47 48,48 50,50"
        fill="currentColor"
        opacity="0.6"
      />
      <polygon
        points="74,74 53,53 52,52 50,50"
        fill="currentColor"
        opacity="0.6"
      />
      <polygon
        points="26,74 47,53 48,52 50,50"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Center Brass Rivet */}
      <circle cx="50" cy="50" r="3" fill="#C85A2B" />
      <circle cx="50" cy="50" r="1.5" fill="#F2E5C9" />
    </svg>
  )
}

export function WaveDivider({
  className = "",
  width = 120,
}: {
  className?: string
  width?: number
}) {
  return (
    <svg
      width={width}
      height="8"
      viewBox="0 0 120 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 4 C 15 1, 25 7, 40 4 C 55 1, 65 7, 80 4 C 95 1, 105 7, 120 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function NauticalMarker({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" />
      <circle cx="5" cy="5" r="1.5" fill="#F2E5C9" />
    </svg>
  )
}

export function NauticalSail({
  size = 24,
  className = "",
  style,
}: {
  size?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M4 20h16" />
      <path d="M12 20V4l8 12H12" />
      <path d="M12 7 5 16h7" />
    </svg>
  )
}

export function NauticalAnchor({
  size = 24,
  className = "",
  style,
}: {
  size?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <path d="M5 14a7 7 0 0 0 14 0" />
    </svg>
  )
}

export function ShipWheel({
  size = 24,
  className = "",
  style,
}: {
  size?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="1" x2="12" y2="23" />
      <line x1="1" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="4.22" x2="19.78" y2="19.78" />
      <line x1="19.78" y1="4.22" x2="4.22" y2="19.78" />
    </svg>
  )
}
