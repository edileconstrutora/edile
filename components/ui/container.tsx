import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Largura máxima consistente (1350px) com padding lateral fluido.
 * Usar em todas as seções para alinhamento coerente.
 */
export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-6 md:px-10 lg:px-14",
        className
      )}
    >
      {children}
    </As>
  );
}
