"use client"

import React from "react"
import { FooterBrand } from "./footer-brand"
import { FooterNav } from "./footer-nav"
import { FooterPortInfo } from "./footer-port-info"
import { FooterBottom } from "./footer-bottom"

export function VoyageFooter() {
  return (
    <footer className="relative w-full overflow-hidden border-t-2 border-[#062A3A]/30 bg-[#041B26] pt-16 pb-12 text-[#F4E8D1] transition-colors duration-500">
      {/* Decorative Compass Arc Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, #C85A2B 1px, transparent 1px),
            linear-gradient(to right, #F4E8D1 1px, transparent 1px),
            linear-gradient(to bottom, #F4E8D1 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 120px 120px, 120px 120px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-12 md:gap-8">
          <FooterBrand />
          <FooterNav />
          <FooterPortInfo />
        </div>

        {/* Bottom Rule & Copyright */}
        <FooterBottom />
      </div>
    </footer>
  )
}
