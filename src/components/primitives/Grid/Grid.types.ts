import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import type { gridVariants } from "./Grid";
export type GridProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof gridVariants>;
