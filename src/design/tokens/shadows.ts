/**
 * -----------------------------------------------------------------------------
 * Agency-X Design System
 * Shadow Tokens
 * -----------------------------------------------------------------------------
 *
 * Purposefully subtle.
 * We don't want a SaaS look.
 * Shadows should create depth, not decoration.
 */

export const shadows = {
  none: "none",

  xs: "0 1px 2px rgba(15, 23, 42, 0.04)",

  sm: "0 2px 6px rgba(15, 23, 42, 0.06)",

  md: "0 8px 24px rgba(15, 23, 42, 0.08)",

  lg: "0 16px 40px rgba(15, 23, 42, 0.10)",

  xl: "0 24px 64px rgba(15, 23, 42, 0.12)",

  glow: "0 0 0 1px rgba(37, 99, 235, 0.08)",
} as const;

export type Shadows = typeof shadows;
