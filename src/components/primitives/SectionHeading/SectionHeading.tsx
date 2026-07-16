import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Stack } from "../Stack";

const sectionHeadingVariants = cva("", {
  variants: {
    align: {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    },

    width: {
      sm: "max-w-2xl",
      md: "max-w-3xl",
      lg: "max-w-4xl",
      full: "max-w-none",
    },
  },

  defaultVariants: {
    align: "left",
    width: "md",
  },
});

export interface SectionHeadingProps extends VariantProps<
  typeof sectionHeadingVariants
> {
  eyebrow?: React.ReactNode;

  title: React.ReactNode;

  description?: React.ReactNode;

  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align,
  width,
  className,
}: SectionHeadingProps) {
  return (
    <Stack
      gap="md"
      align={
        align === "center" ? "center" : align === "right" ? "end" : "start"
      }
      className={cn(
        sectionHeadingVariants({
          align,
          width,
        }),
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2 className="heading-xl text-balance">{title}</h2>

      {description && <p className="body-lg text-pretty">{description}</p>}
    </Stack>
  );
}
