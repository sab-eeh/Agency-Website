/**
 * -----------------------------------------------------------------------------
 * Agency-X Design System
 * Motion Tokens
 * -----------------------------------------------------------------------------
 */

export const motion = {
  duration: {
    instant: 120,
    fast: 180,
    normal: 280,
    slow: 450,
    slower: 700,
  },

  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
    exit: [0.7, 0, 0.84, 0] as const,
  },

  distance: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },

  scale: {
    hover: 1.02,
    tap: 0.98,
  },
} as const

export type Motion = typeof motion