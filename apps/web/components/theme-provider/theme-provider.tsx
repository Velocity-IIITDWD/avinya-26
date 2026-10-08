"use client"

import * as React from "react"
import { WorldThemeProvider } from "@/lib/theme"

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WorldThemeProvider>{children}</WorldThemeProvider>
  )
}
