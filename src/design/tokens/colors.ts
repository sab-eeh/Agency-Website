/**
 * -----------------------------------------------------------------------------
 * Agency-X Design System
 * Color Tokens
 * -----------------------------------------------------------------------------
 */

export const colors = {
  background: {
    primary: "#F8F8F5",
    secondary: "#FFFFFF",
    elevated: "#FFFFFF",
  },

  surface: {
    primary: "#FFFFFF",
    secondary: "#F5F5F2",
    muted: "#ECECE7",
  },

  text: {
    primary: "#111111",
    secondary: "#52525B",
    tertiary: "#71717A",
    inverse: "#FFFFFF",
  },

  border: {
    subtle: "#E7E7E4",
    default: "#DCDCD7",
    strong: "#C7C7C2",
  },

  accent: {
    primary: "#2563EB",
    hover: "#1D4ED8",
    subtle: "#DBEAFE",
  },

  success: {
    primary: "#059669",
    subtle: "#D1FAE5",
  },

  warning: {
    primary: "#D97706",
    subtle: "#FEF3C7",
  },

  danger: {
    primary: "#DC2626",
    subtle: "#FEE2E2",
  },
} as const;

export type Colors = typeof colors;
