import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  gold: "bg-gold text-ink",
  translucent: "bg-paper/10 text-paper",
} as const;

/**
 * Selo quadrado (canto-fio) para um ícone. Usado em pilares e cards.
 * `gold` sobre fundo claro/card · `translucent` sobre fundo escuro.
 */
export function IconBadge({
  tone = "gold",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center rounded-hair p-2",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
