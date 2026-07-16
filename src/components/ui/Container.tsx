import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "md" | "xl";
};

const sizeMap = {
  md: "max-w-5xl",
  xl: "max-w-7xl",
};

export function Container({ children, className = "", size = "xl" }: ContainerProps) {
  return <div className={`mx-auto w-full px-6 lg:px-8 ${sizeMap[size]} ${className}`.trim()}>{children}</div>;
}

export default Container;
