"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from "react"
import {
  WorldFilterId,
  WorldTheme,
  WorldThemeKey,
  worldThemes,
  getWorldTheme,
  getWorldThemeCssVariables,
} from "./world-themes"

interface WorldThemeContextValue {
  activeWorld: WorldFilterId
  theme: WorldTheme
  setActiveWorld: (world: WorldFilterId) => void
  worldThemes: typeof worldThemes
  cssVariables: Record<string, string>
}

const WorldThemeContext = createContext<WorldThemeContextValue | null>(null)

export function WorldThemeProvider({
  children,
  initialWorld = "ALL",
}: {
  children: React.ReactNode
  initialWorld?: WorldFilterId
}) {
  const [activeWorld, setActiveWorld] = useState<WorldFilterId>(initialWorld)

  const theme = useMemo(() => getWorldTheme(activeWorld), [activeWorld])
  const cssVariables = useMemo(() => getWorldThemeCssVariables(theme), [theme])

  // Synchronize CSS custom properties on document.documentElement for global accessibility
  useEffect(() => {
    if (typeof document === "undefined") return

    const root = document.documentElement
    root.setAttribute("data-world-theme", theme.key)

    // Set all theme and world CSS variables
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [theme, cssVariables])

  const value = useMemo(
    () => ({
      activeWorld,
      theme,
      setActiveWorld,
      worldThemes,
      cssVariables,
    }),
    [activeWorld, theme, cssVariables]
  )

  return (
    <WorldThemeContext.Provider value={value}>
      {children}
    </WorldThemeContext.Provider>
  )
}

export function useWorldTheme(): WorldThemeContextValue {
  const context = useContext(WorldThemeContext)
  if (!context) {
    // Graceful fallback for components used outside the provider
    const defaultTheme = worldThemes.all
    return {
      activeWorld: "ALL",
      theme: defaultTheme,
      setActiveWorld: () => {},
      worldThemes,
      cssVariables: getWorldThemeCssVariables(defaultTheme),
    }
  }
  return context
}
