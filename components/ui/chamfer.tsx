import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Corner = "tr" | "tr-bl";

/**
 * Constrói o clip-path do chanfro.
 * - `tr`: canto superior-direito, tamanho fixo.
 * - `tr-bl`: superior-direito + inferior-esquerdo, lendo `--cx`/`--cy`
 *   (responsivo — o consumidor define os vars via className).
 */
function clipFor(corner: Corner, size: string) {
  if (corner === "tr-bl") {
    return "polygon(0 0, calc(100% - var(--cx)) 0, 100% var(--cy), 100% 100%, var(--cx) 100%, 0 calc(100% - var(--cy)))";
  }
  return `polygon(0 0, calc(100% - ${size}) 0, 100% ${size}, 100% 100%, 0 100%)`;
}

/**
 * Container com canto(s) chanfrado(s) — a "assinatura" geométrica da EDILE.
 * Envolve imagens, carrosséis ou cards. Para `tr-bl`, defina `--cx`/`--cy`
 * via className (ex.: `[--cx:4.5rem] [--cy:3rem] md:[--cx:10rem]`).
 */
export function Chamfer({
  as: As = "div",
  corner = "tr",
  size = "4rem",
  className,
  style,
  children,
}: {
  as?: ElementType;
  corner?: Corner;
  size?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <As
      className={cn("relative overflow-hidden", className)}
      style={{ clipPath: clipFor(corner, size), ...style }}
    >
      {children}
    </As>
  );
}
