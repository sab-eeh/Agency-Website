/**
 * -----------------------------------------------------------------------------
 * Agency-X Design System
 * Typography Tokens
 * -----------------------------------------------------------------------------
 */

export const typography = {
  fontFamily: {
    heading: "var(--font-general-sans)",
    body: "var(--font-inter)",
    mono: "var(--font-geist-mono)",
  },

  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
    "8xl": "6rem",      // 96px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.05,
    heading: 1.1,
    display: 1.05,
    body: 1.65,
    relaxed: 1.8,
  },

  letterSpacing: {
    tighter: "-0.06em",
    tight: "-0.04em",
    normal: "-0.02em",
    wide: "0.02em",
  },
} as const

export type Typography = typeof typography