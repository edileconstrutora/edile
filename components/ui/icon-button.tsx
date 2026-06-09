import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

const tones: Record<Tone, string> = {
  dark: "border-line text-ink hover:bg-petrol-900 hover:text-paper hover:border-petrol-900",
  light: "border-paper/40 text-paper hover:bg-paper hover:text-petrol-900",
};

/**
 * Botão circular para ícones (setas de carrossel, etc.).
 */
export function IconButton({
  children,
  className,
  tone = "dark",
  ...rest
}: {
  children: ReactNode;
  tone?: Tone;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border " +
          "transition-colors duration-300 ease-[var(--ease-out-soft)] cursor-pointer " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 " +
          "disabled:opacity-30 disabled:pointer-events-none",
        tones[tone],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
