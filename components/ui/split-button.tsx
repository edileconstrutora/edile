import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./icons";

type Tone = "gold" | "white";
type Size = "sm" | "md";

const tones: Record<Tone, string> = {
  gold: "bg-gold group-hover/sb:bg-gold-bright",
  white: "bg-white group-hover/sb:bg-paper",
};

const sizes: Record<Size, { box: string; label: string; arrow: string }> = {
  sm: { box: "h-11", label: "px-5 text-lead", arrow: "size-11" },
  md: { box: "h-12", label: "px-6 text-h5", arrow: "size-12" },
};

/**
 * CTA primário (padrão dos exemplos): botão dividido em rótulo + caixa de
 * seta diagonal, segmentos juntos (sem gap). Texto quase-preto (`ink`).
 * tones: `gold` (hero/seções) ou `white` (sobre fundos escuros, ex.: menu).
 */
export function SplitButton({
  children,
  href,
  tone = "gold",
  size = "md",
  className,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  tone?: Tone;
  size?: Size;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const s = sizes[size];
  return (
    <Link
      href={href}
      className={cn("group/sb inline-flex items-stretch", className)}
      {...rest}
    >
      <span
        className={cn(
          "flex items-center whitespace-nowrap rounded-sm font-medium text-ink transition-colors duration-300",
          tones[tone],
          s.box,
          s.label
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "flex items-center justify-center rounded-sm text-ink transition-colors duration-300",
          tones[tone],
          s.arrow
        )}
      >
        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/sb:translate-x-0.5 group-hover/sb:-translate-y-0.5" />
      </span>
    </Link>
  );
}
