import React from "react"

/**
 * Fallback explorer/pirate character. No character asset was supplied,
 * so this small SVG stands on the deck of the supplied sailboat.
 */
export function ExplorerFigure({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" className={className} aria-hidden="true">
      {/* hat */}
      <path d="M8 13 Q20 2 32 13 Q20 10 8 13Z" fill="#062A3A" />
      <path d="M13 11 Q20 3 27 11Z" fill="#062A3A" />
      <rect x="13" y="10.5" width="14" height="1.6" fill="#C85A2B" />
      {/* head */}
      <circle cx="20" cy="17" r="4.6" fill="#E8C9A0" />
      {/* coat */}
      <path d="M13 23 Q20 20 27 23 L29 44 L11 44Z" fill="#062A3A" />
      <path d="M20 22 L20 44" stroke="#C85A2B" strokeWidth="1.2" />
      {/* arm + spyglass */}
      <path
        d="M26 25 L33 19"
        stroke="#062A3A"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect
        x="31"
        y="13.5"
        width="9"
        height="3"
        rx="1"
        transform="rotate(-35 31 15)"
        fill="#B8873B"
      />
      {/* legs */}
      <path
        d="M15 44 L15 60 M25 44 L25 60"
        stroke="#041B26"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
