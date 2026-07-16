import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      none: "py-0",
      xs: "py-8",
      sm: "py-12",
      md: "py-20",
      lg: "py-28",
      xl: "py-36",
    },

    background: {
      transparent: "bg-transparent",
      default: "bg-background",
      surface: "bg-white",
      muted: "bg-neutral-50",
    },
  },

  defaultVariants: {
    spacing: "lg",
    background: "transparent",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export function Section({
  className,
  spacing,
  background,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          spacing,
          background,
        }),
        className
      )}
      {...props}
    />
  );
}