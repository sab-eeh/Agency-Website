"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenisScript = document.createElement("script");
    lenisScript.src = "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.1.21/dist/lenis.min.js";
    lenisScript.async = true;
    document.head.appendChild(lenisScript);

    return () => {
      lenisScript.remove();
    };
  }, []);
}
