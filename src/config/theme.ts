/**
 * -----------------------------------------------------------------------------
 * Agency-X Theme Configuration
 * -----------------------------------------------------------------------------
 */

export const themeConfig = {
  defaultTheme: "light",

  enableSystem: true,

  disableTransitionOnChange: true,

  colors: {
    background: "var(--color-background)",

    surface: "var(--color-surface)",

    text: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      tertiary: "var(--color-text-tertiary)",
    },

    accent: "var(--color-accent)",
  },

  layout: {
    containerWidth: "var(--container-width)",

    navbarHeight: "var(--navbar-height)",
  },
} as const

export type ThemeConfig = typeof themeConfig