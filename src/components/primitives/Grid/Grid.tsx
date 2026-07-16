import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { GridProps } from "./Grid.types";

export const gridVariants = cva("grid", {
  variants: { columns: { 1: "grid-cols-1", 2: "grid-cols-1 sm:grid-cols-2", 3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", 4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" }, gap: { sm: "gap-[var(--space-4)]", md: "gap-[var(--space-6)]", lg: "gap-[var(--space-8)]" } },
  defaultVariants: { columns: 1, gap: "md" },
});

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ columns, gap, className, ...props }, ref) => (
  <div ref={ref} className={cn(gridVariants({ columns, gap }), className)} {...props} />
));
Grid.displayName = "Grid";
