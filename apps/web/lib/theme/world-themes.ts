export type AvinyaWorld =
  | "The Last Outpost"
  | "Pandemonium"
  | "The Carnival Island"

export type WorldFilterId = "ALL" | AvinyaWorld
export type FilterValue = WorldFilterId

export type WorldThemeKey = "all" | "lastOutpost" | "pandemonium" | "carnivalIsland"

export interface WorldThemeColors {
  background: string
  primary: string
  accent: string
  accentSoft: string
  secondaryAccent: string
  border: string
  muted: string
  mutedForeground: string
  card: string
  cardHoverBorder: string
  glow: string
  tabActiveBg: string
  tabActiveText: string
  tabUnderline: string
  badgeBg: string
  badgeText: string
}

export interface WorldThemeMotifs {
  type: "nautical" | "technical" | "engineering" | "tropical"
  badgePrefix: string
  cardDescriptor: string
  statusIndicator: string
  coordinateGrid: string
  icon: string
  islandImage: string
}

export interface WorldTheme {
  id: WorldFilterId
  key: WorldThemeKey
  name: string
  shortLabel: string
  day: string
  date: string
  coordinates: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  heroEyebrow: string
  heroBadge: string
  colors: WorldThemeColors
  motifs: WorldThemeMotifs
}

/**
 * Centralized theme configuration for the Three Worlds of Avinya.
 * Single source of truth driving all visual styles, palettes, motifs,
 * background layers, and interactive states.
 */
export const worldThemes: Record<WorldThemeKey, WorldTheme> = {
  lastOutpost: {
    id: "The Last Outpost",
    key: "lastOutpost",
    name: "THE LAST OUTPOST",
    shortLabel: "LAST OUTPOST",
    day: "DAY 01",
    date: "OCTOBER 30, 2026",
    coordinates: "15°28'40\"N  75°01'15\"E",
    tagline: "Endure the code storm at the jagged edge of technology",
    heroTitle: "The Last Outpost",
    heroEyebrow: "SECTOR 01 // VOYAGE DAY 01 • OCTOBER 30, 2026",
    heroSubtitle:
      "Endure the code storm at the jagged edge of technology. 24-hour hackathons, algorithmic tempests, and naval cybersecurity expeditions.",
    heroBadge: "TECHNICAL FRONTIER",
    colors: {
      background: "#FAF3E3",
      primary: "#173847",
      accent: "#D85A2A",
      accentSoft: "rgba(216, 90, 42, 0.12)",
      secondaryAccent: "#3E5A69",
      border: "rgba(23, 56, 71, 0.20)",
      muted: "#E8D9BD",
      mutedForeground: "#47606B",
      card: "#FAF3E3",
      cardHoverBorder: "rgba(216, 90, 42, 0.65)",
      glow: "rgba(216, 90, 42, 0.25)",
      tabActiveBg: "#173847",
      tabActiveText: "#F4E8D1",
      tabUnderline: "#D85A2A",
      badgeBg: "rgba(216, 90, 42, 0.12)",
      badgeText: "#D85A2A",
    },
    motifs: {
      type: "technical",
      badgePrefix: "TECH //",
      cardDescriptor: "FIELD LOG",
      statusIndicator: "EXPEDITION ACTIVE",
      coordinateGrid: "SECTOR 01 // 15°28'40\"N 75°01'15\"E",
      icon: "/images/worlds/outpost.webp",
      islandImage: "/images/island-outpost.webp",
    },
  },
  pandemonium: {
    id: "Pandemonium",
    key: "pandemonium",
    name: "PANDEMONIUM",
    shortLabel: "PANDEMONIUM",
    day: "DAY 02",
    date: "OCTOBER 31, 2026",
    coordinates: "15°29'10\"N  75°01'45\"E",
    tagline: "Where mechanical sparks fly and competitive fervor takes over",
    heroTitle: "Pandemonium",
    heroEyebrow: "SECTOR 02 // VOYAGE DAY 02 • OCTOBER 31, 2026",
    heroSubtitle:
      "Where mechanical sparks fly and competitive fervor takes over. Full-contact combat robotics, high-speed drone gauntlets, and tournament esports.",
    heroBadge: "ROBOTICS & HARDWARE",
    colors: {
      background: "#F1E3C8",
      primary: "#173847",
      accent: "#15966B",
      accentSoft: "rgba(21, 150, 107, 0.14)",
      secondaryAccent: "#D85A2A",
      border: "rgba(21, 150, 107, 0.26)",
      muted: "#D8E5DC",
      mutedForeground: "#365349",
      card: "#FAF4E8",
      cardHoverBorder: "rgba(21, 150, 107, 0.65)",
      glow: "rgba(21, 150, 107, 0.30)",
      tabActiveBg: "#173847",
      tabActiveText: "#F4E8D1",
      tabUnderline: "#15966B",
      badgeBg: "rgba(21, 150, 107, 0.14)",
      badgeText: "#15966B",
    },
    motifs: {
      type: "engineering",
      badgePrefix: "MECH //",
      cardDescriptor: "ENGINEERING LOG",
      statusIndicator: "SYSTEM ENGAGED",
      coordinateGrid: "SECTOR 02 // 15°29'10\"N 75°01'45\"E",
      icon: "/images/worlds/pandemonium.webp",
      islandImage: "/images/island-pandemonium.webp",
    },
  },
  carnivalIsland: {
    id: "The Carnival Island",
    key: "carnivalIsland",
    name: "THE CARNIVAL ISLAND",
    shortLabel: "CARNIVAL ISLAND",
    day: "DAY 03",
    date: "NOVEMBER 01, 2026",
    coordinates: "15°29'55\"N  75°02'20\"E",
    tagline: "Shore leave for the soul — lights, melodies, and grand celebration",
    heroTitle: "The Carnival Island",
    heroEyebrow: "SECTOR 03 // VOYAGE DAY 03 • NOVEMBER 01, 2026",
    heroSubtitle:
      "Shore leave for the soul — lights, melodies, and grand celebration. Sonic battle of the bands, inter-collegiate choreo showcase, and celebrity star pro-nite finale.",
    heroBadge: "CULTURAL SPECTACLE",
    colors: {
      background: "#F1E3C8",
      primary: "#173847",
      accent: "#D6A849",
      accentSoft: "rgba(214, 168, 73, 0.16)",
      secondaryAccent: "#D85A2A",
      border: "rgba(214, 168, 73, 0.35)",
      muted: "#EDE3CA",
      mutedForeground: "#5C4D2E",
      card: "#FAF4E6",
      cardHoverBorder: "rgba(214, 168, 73, 0.70)",
      glow: "rgba(214, 168, 73, 0.35)",
      tabActiveBg: "#173847",
      tabActiveText: "#F4E8D1",
      tabUnderline: "#D6A849",
      badgeBg: "rgba(214, 168, 73, 0.16)",
      badgeText: "#D6A849",
    },
    motifs: {
      type: "tropical",
      badgePrefix: "FEST //",
      cardDescriptor: "FESTIVAL LOG",
      statusIndicator: "CELEBRATION ON",
      coordinateGrid: "SECTOR 03 // 15°29'55\"N 75°02'20\"E",
      icon: "/images/worlds/carnival.webp",
      islandImage: "/images/island-carnival.webp",
    },
  },
  all: {
    id: "ALL",
    key: "all",
    name: "ALL DESTINATIONS",
    shortLabel: "ALL",
    day: "ALL DAYS",
    date: "30 OCT – 01 NOV 2026",
    coordinates: "15°29'N  75°01'E",
    tagline: "A journey across three unique worlds, three experiences, and one unforgettable voyage",
    heroTitle: "Choose Your Destination",
    heroEyebrow: "IIIT DHARWAD • 30 OCT – 01 NOV 2026 • 15°29'N 75°01'E",
    heroSubtitle:
      "“A journey across three unique worlds, three experiences, and one unforgettable voyage.”",
    heroBadge: "VOYAGE ARCHIPELAGO",
    colors: {
      background: "#FAF3E3",
      primary: "#082B3A",
      accent: "#C85A2B",
      accentSoft: "rgba(200, 90, 43, 0.12)",
      secondaryAccent: "#C5A059",
      border: "rgba(8, 43, 58, 0.16)",
      muted: "#E8D9BD",
      mutedForeground: "#47606B",
      card: "#FAF3E3",
      cardHoverBorder: "rgba(200, 90, 43, 0.60)",
      glow: "rgba(200, 90, 43, 0.20)",
      tabActiveBg: "#082B3A",
      tabActiveText: "#F4E8D1",
      tabUnderline: "#C85A2B",
      badgeBg: "rgba(200, 90, 43, 0.12)",
      badgeText: "#C85A2B",
    },
    motifs: {
      type: "nautical",
      badgePrefix: "LOG //",
      cardDescriptor: "VOYAGE LOG",
      statusIndicator: "ARCHIPELAGO ACTIVE",
      coordinateGrid: "COORDINATES // 15°28'N - 15°30'N",
      icon: "/images/worlds/outpost.webp",
      islandImage: "/images/island-outpost.webp",
    },
  },
}

export const WORLD_THEMES_BY_ID: Record<WorldFilterId, WorldTheme> = {
  ALL: worldThemes.all,
  "The Last Outpost": worldThemes.lastOutpost,
  Pandemonium: worldThemes.pandemonium,
  "The Carnival Island": worldThemes.carnivalIsland,
}

export function getWorldTheme(idOrKey: WorldFilterId | WorldThemeKey | string): WorldTheme {
  if (idOrKey in WORLD_THEMES_BY_ID) {
    return WORLD_THEMES_BY_ID[idOrKey as WorldFilterId]
  }
  if (idOrKey in worldThemes) {
    return worldThemes[idOrKey as WorldThemeKey]
  }
  return worldThemes.all
}

export function getWorldThemeCssVariables(theme: WorldTheme): Record<string, string> {
  return {
    "--theme-background": theme.colors.background,
    "--theme-primary": theme.colors.primary,
    "--theme-accent": theme.colors.accent,
    "--theme-accent-soft": theme.colors.accentSoft,
    "--theme-secondary-accent": theme.colors.secondaryAccent,
    "--theme-border": theme.colors.border,
    "--theme-muted": theme.colors.muted,
    "--theme-muted-foreground": theme.colors.mutedForeground,
    "--theme-card": theme.colors.card,
    "--theme-card-hover-border": theme.colors.cardHoverBorder,
    "--theme-glow": theme.colors.glow,
    "--theme-tab-active-bg": theme.colors.tabActiveBg,
    "--theme-tab-active-text": theme.colors.tabActiveText,
    "--theme-tab-underline": theme.colors.tabUnderline,
    "--theme-badge-bg": theme.colors.badgeBg,
    "--theme-badge-text": theme.colors.badgeText,
    // CSS variable aliases requested in prompt
    "--world-bg": theme.colors.background,
    "--world-primary": theme.colors.primary,
    "--world-accent": theme.colors.accent,
    "--world-border": theme.colors.border,
    "--world-muted": theme.colors.muted,
  }
}
