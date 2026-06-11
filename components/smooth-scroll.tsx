"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { PropsWithChildren } from "react";

/**
 * Volta ao topo a cada troca de rota. Sem isto, o Lenis mantém a posição
 * virtual de scroll e a página nova "abre de baixo". Âncoras (`/#contato`)
 * são respeitadas — não força o topo quando há hash na URL.
 */
function ScrollResetOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

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
      <ScrollResetOnNavigate />
      {children}
    </ReactLenis>
  );
}
