"use client"

import React from "react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "01 // HOME / DEPARTURE" },
  { href: "/events", label: "02 // EXPEDITIONS / EVENTS" },
  { href: "/team", label: "03 // THE CREW / MANIFEST" },
]

export function FooterNav() {
  return (
    <div className="md:col-span-3">
      <span className="block font-mono text-xs font-bold tracking-[0.25em] text-[#C85A2B] uppercase">
        NAVIGATION
      </span>
      <ul className="mt-4 space-y-2.5 font-mono text-xs tracking-[0.16em] uppercase">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("/#") ? (
              <a href={link.href} className="transition-colors hover:text-[#C85A2B]">
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="transition-colors hover:text-[#C85A2B]">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
