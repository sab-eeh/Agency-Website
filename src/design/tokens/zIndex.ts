/**
 * -----------------------------------------------------------------------------
 * Agency-X Design System
 * Z-Index Tokens
 * -----------------------------------------------------------------------------
 */

export const zIndex = {
  hide: -1,

  base: 0,

  content: 10,

  navigation: 100,

  sticky: 200,

  dropdown: 300,

  overlay: 400,

  drawer: 500,

  modal: 600,

  popover: 700,

  tooltip: 800,

  toast: 900,

  maximum: 9999,
} as const;

export type ZIndex = typeof zIndex;
