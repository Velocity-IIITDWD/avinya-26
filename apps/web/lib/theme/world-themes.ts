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
  lightColor: string
  logoAccent: string
}

export interface WorldThemeMotifs {
  type: "nautical" | "technical" | "engineering" | "tropical"
  badgePrefix: string
  cardDescriptor: string
  statusIndicator: string
  coordinateGrid: string
  icon: string
  islandImage: string
  bgImage: string
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
    tagline: "Endure the code storm at the jagged edge of civilization",
    heroTitle: "The Last Outpost",
    heroEyebrow: "SECTOR 01 // VOYAGE DAY 01 • OCTOBER 30, 2026",
    heroSubtitle:
      "A rugged desert frontier where abandoned industrial spires overlook an endless expanse. 24-hour hackathons, algorithmic tempests, and naval cybersecurity expeditions.",
    heroBadge: "DESERT FRONTIER // SECTOR 01",
    colors: {
      background: "#14100E",
      primary: "#F6ECE1",
      accent: "#E05A2B",
      accentSoft: "rgba(224, 90, 43, 0.16)",
      secondaryAccent: "#D99036",
      border: "rgba(224, 90, 43, 0.32)",
      muted: "#2A201A",
      mutedForeground: "#C4AEA0",
      card: "#1C1512",
      cardHoverBorder: "rgba(224, 90, 43, 0.85)",
      glow: "rgba(224, 90, 43, 0.35)",
      tabActiveBg: "#E05A2B",
      tabActiveText: "#14100E",
      tabUnderline: "#E05A2B",
      badgeBg: "rgba(224, 90, 43, 0.18)",
      badgeText: "#F27A4B",
      lightColor: "rgba(224, 90, 43, 0.24)",
      logoAccent: "#E05A2B",
    },
    motifs: {
      type: "technical",
      badgePrefix: "OUTPOST //",
      cardDescriptor: "FRONTIER LOG",
      statusIndicator: "EXPEDITION ACTIVE",
      coordinateGrid: "SECTOR 01 // 15°28'40\"N 75°01'15\"E",
      icon: "/images/worlds/last-outpost.webp",
      islandImage: "/images/LastOutpost.webp",
      bgImage: "/images/Lone Explorer Beneath a Giant Moon.png",
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
    tagline: "A dark synthwave metropolis beneath a glowing magenta sun",
    heroTitle: "Pandemonium",
    heroEyebrow: "SECTOR 02 // VOYAGE DAY 02 • OCTOBER 31, 2026",
    heroSubtitle:
      "High-voltage retro-futurism where mechanical sparks fly and competitive fervor takes over. Full-contact combat robotics, supersonic drone gauntlets, and tournament esports.",
    heroBadge: "NEON METROPOLIS // SECTOR 02",
    colors: {
      background: "#090514",
      primary: "#FAF2FF",
      accent: "#FF007F",
      accentSoft: "rgba(255, 0, 127, 0.18)",
      secondaryAccent: "#00E5FF",
      border: "rgba(255, 0, 127, 0.34)",
      muted: "#1B0E33",
      mutedForeground: "#C7A6DF",
      card: "#120924",
      cardHoverBorder: "rgba(255, 0, 127, 0.85)",
      glow: "rgba(255, 0, 127, 0.38)",
      tabActiveBg: "#FF007F",
      tabActiveText: "#FFFFFF",
      tabUnderline: "#FF007F",
      badgeBg: "rgba(255, 0, 127, 0.20)",
      badgeText: "#FF3399",
      lightColor: "rgba(255, 0, 127, 0.25)",
      logoAccent: "#FF007F",
    },
    motifs: {
      type: "engineering",
      badgePrefix: "SYNTH //",
      cardDescriptor: "METROPOLIS LOG",
      statusIndicator: "OVERDRIVE ENGAGED",
      coordinateGrid: "SECTOR 02 // 15°29'10\"N 75°01'45\"E",
      icon: "/images/worlds/pandemonium.webp",
      islandImage: "/images/pandemonium.webp",
      bgImage: "/images/Neon Island City at Sunset.png",
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
    tagline: "A magical tropical nighttime festival ablaze with lights and melody",
    heroTitle: "The Carnival Island",
    heroEyebrow: "SECTOR 03 // VOYAGE DAY 03 • NOVEMBER 01, 2026",
    heroSubtitle:
      "Shore leave for the soul — palm shadows, glowing Ferris wheel, and waterside celebration. Sonic battle of the bands, choreo showcase, and celebrity star pro-nite finale.",
    heroBadge: "FESTIVAL LAGOON // SECTOR 03",
    colors: {
      background: "#061715",
      primary: "#F0FAF7",
      accent: "#F5C542",
      accentSoft: "rgba(245, 197, 66, 0.16)",
      secondaryAccent: "#E85A26",
      border: "rgba(245, 197, 66, 0.30)",
      muted: "#0C2B26",
      mutedForeground: "#94C7BD",
      card: "#0B2320",
      cardHoverBorder: "rgba(245, 197, 66, 0.85)",
      glow: "rgba(245, 197, 66, 0.35)",
      tabActiveBg: "#F5C542",
      tabActiveText: "#061715",
      tabUnderline: "#F5C542",
      badgeBg: "rgba(245, 197, 66, 0.18)",
      badgeText: "#F5C542",
      lightColor: "rgba(245, 197, 66, 0.25)",
      logoAccent: "#F5C542",
    },
    motifs: {
      type: "tropical",
      badgePrefix: "CARNIVAL //",
      cardDescriptor: "FESTIVAL LOG",
      statusIndicator: "CELEBRATION ON",
      coordinateGrid: "SECTOR 03 // 15°29'55\"N 75°02'20\"E",
      icon: "/images/worlds/carnival-island.webp",
      islandImage: "/images/carnivalisland.webp",
      bgImage: "/images/Twilight Lights Over the Waterfront Pier.png",
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
      background: "#0B1724",
      primary: "#F6EFE2",
      accent: "#C85A2B",
      accentSoft: "rgba(200, 90, 43, 0.16)",
      secondaryAccent: "#C5A059",
      border: "rgba(200, 90, 43, 0.30)",
      muted: "#152A3D",
      mutedForeground: "#A2BAC9",
      card: "#102130",
      cardHoverBorder: "rgba(200, 90, 43, 0.85)",
      glow: "rgba(200, 90, 43, 0.32)",
      tabActiveBg: "#C85A2B",
      tabActiveText: "#FAF3E3",
      tabUnderline: "#C85A2B",
      badgeBg: "rgba(200, 90, 43, 0.18)",
      badgeText: "#E06D3E",
      lightColor: "rgba(200, 90, 43, 0.22)",
      logoAccent: "#C85A2B",
    },
    motifs: {
      type: "nautical",
      badgePrefix: "LOG //",
      cardDescriptor: "VOYAGE LOG",
      statusIndicator: "ARCHIPELAGO ACTIVE",
      coordinateGrid: "COORDINATES // 15°28'N - 15°30'N",
      icon: "/images/worlds/outpost.webp",
      islandImage: "/images/island-outpost.webp",
      bgImage: "/images/worlds/last-outpost-ref.webp",
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
    "--theme-light-color": theme.colors.lightColor,
    "--theme-logo-accent": theme.colors.logoAccent,
    // Aliases
    "--world-bg": theme.colors.background,
    "--world-primary": theme.colors.primary,
    "--world-accent": theme.colors.accent,
    "--world-border": theme.colors.border,
    "--world-muted": theme.colors.muted,
    "--world-card": theme.colors.card,
    "--world-glow": theme.colors.glow,
    "--world-light-color": theme.colors.lightColor,
    "--world-logo-accent": theme.colors.logoAccent,
  }
}
