import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
  padding?: "sm" | "md" | "lg";
};

const paddingMap = {
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-24 lg:py-32",
};

const backgroundMap = {
  default: "bg-white",
  muted: "bg-slate-50",
};

export function Section({ children, className = "", background = "default", padding = "md" }: SectionProps) {
  return <section className={`${backgroundMap[background]} ${paddingMap[padding]} ${className}`.trim()}>{children}</section>;
}
