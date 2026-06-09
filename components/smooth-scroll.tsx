"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

/**
 * Provider global de scroll suave (Lenis).
 * Respeita prefers-reduced-motion automaticamente desativando o lerp.
 */
export function SmoothScroll({ children }: PropsWithChildren) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        lerp: prefersReduced ? 1 : 0.1,
        duration: 1.1,
        smoothWheel: !prefersReduced,
      }}
    >
      {children}
    </ReactLenis>
  );
}
