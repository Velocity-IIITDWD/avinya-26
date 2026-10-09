"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavItem {
  href: string
  label: string
  voyageLabel?: string
  code?: string
}

interface NavPillProps {
  items: NavItem[]
  onItemClick?: () => void
  className?: string
  leading?: React.ReactNode
}

export function NavPill({
  items,
  onItemClick,
  className = "",
  leading,
}: NavPillProps) {
  const pathname = usePathname()

  return (
    <div
      className={`relative inline-flex items-center rounded-full border border-[#102747]/20 bg-[#CDB07B]/95 px-3 py-1.5 shadow-[0_8px_32px_rgba(16,39,71,0.15)] backdrop-blur-md transition-all duration-300 ${className}`}
      role="menubar"
      aria-label="Maritime voyage navigation"
    >
      {leading}
      {items.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            role="menuitem"
            aria-current={isActive ? "page" : undefined}
            className={`group relative flex flex-col items-center justify-center px-4 py-1.5 transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#B95F3B] ${
              isActive
                ? "font-bold text-[#B95F3B]"
                : "text-[#102747] hover:text-[#B95F3B]"
            }`}
          >
            {/* Primary Destination Label */}
            <span
              className="text-xs tracking-[0.24em] uppercase transition-all duration-300 group-hover:tracking-[0.28em]"
              style={{
                fontFamily:
                  '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
                textShadow: "none",
              }}
            >
              {item.label}
            </span>

            {/* Subtle destination tooltip on hover */}
            {item.voyageLabel && (
              <span
                className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded border border-[#102747]/20 bg-[#CDB07B] px-2 py-0.5 font-mono text-[8px] tracking-[0.2em] whitespace-nowrap text-[#102747] uppercase opacity-0 shadow-[0_4px_12px_rgba(16,39,71,0.15)] backdrop-blur-sm transition-all duration-200 group-hover:-bottom-6 group-hover:opacity-100"
                aria-hidden="true"
              >
                {item.code ? `${item.code} // ` : ""}
                {item.voyageLabel}
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
