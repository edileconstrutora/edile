import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "petrol" | "sage";

const toneStyles: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  petrol: "bg-petrol-900 text-paper",
  sage: "bg-sage-500 text-paper",
};

/**
 * Bloco de seção com espaçamento vertical consistente em px
 * (mobile 80px · desktop 120px) e variantes de fundo do design system.
 * Para ajustar por seção, passe ex.: className="py-[100px] md:py-[100px]".
 */
export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[80px] md:py-[120px]",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </section>
  );
}
