"use client";

import { useEffect, useState } from "react";

export function useCursor() {
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsPointer(target?.tagName === "A" || target?.tagName === "BUTTON");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return isPointer;
}
