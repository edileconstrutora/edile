import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Superfície de card padronizada (raio, borda, elevação opcional).
 */
export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        // sem raio e sem stroke — elevação por sombra sutil
        "bg-white shadow-[var(--shadow-soft)]",
        hover &&
          "transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        className
      )}
    >
      {children}
    </div>
  );
}
