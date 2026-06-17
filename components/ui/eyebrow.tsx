import { cn } from "@/lib/utils";

/**
 * Rótulo/kicker padronizado, no formato `/ RÓTULO` (UPPERCASE + tracking).
 * O traço-slash funciona como marcador de seção (linguagem de linhas).
 */
export function Eyebrow({
  children,
  className,
  tone = "petrol",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "petrol" | "sage" | "muted" | "light";
}) {
  const tones = {
    petrol: "text-petrol-700",
    sage: "text-ink-soft",
    muted: "text-ink-faint",
    light: "text-paper/70",
  } as const;

  return (
    <span className={cn("t-eyebrow inline-flex items-baseline gap-1.5", tones[tone], className)}>
      <span aria-hidden className="opacity-70">
        {"//"}
      </span>
      {children}
    </span>
  );
}
