"use client";

import { useEffect, useState } from "react";

export function useParallax(offset = 0.2) {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallax(window.scrollY * offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return parallax;
}
