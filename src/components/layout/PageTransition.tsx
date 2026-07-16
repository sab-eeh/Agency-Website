"use client";

import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}

export default PageTransition;
