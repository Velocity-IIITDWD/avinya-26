"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { WorldThemeProvider } from "@/lib/theme"
import { ThemeHotkey } from "./theme-hotkey"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      <WorldThemeProvider>{children}</WorldThemeProvider>
    </NextThemesProvider>
  )
}
