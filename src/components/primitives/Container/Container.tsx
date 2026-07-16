import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      narrow: "max-w-3xl",
      default: "max-w-7xl",
      wide: "max-w-[90rem]",
      full: "max-w-none",
    },

    padding: {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-6 lg:px-8",
      lg: "px-8 lg:px-10",
    },
  },

  defaultVariants: {
    size: "default",
    padding: "md",
  },
});

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
} & VariantProps<typeof containerVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
    className?: string;
  };

export function Container<T extends React.ElementType = "div">({
  as,
  size,
  padding,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        containerVariants({
          size,
          padding,
        }),
        className,
      )}
      {...props}
    />
  );
}
