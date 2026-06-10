import { cn } from "@/lib/utils";

/**
 * Indicador numérico. Dois formatos:
 * - `inline`: número grande + rótulo ao lado (faixa de stats).
 * - `block`: título + descrição à esquerda, número + unidade à direita (bento).
 */
export function Stat({
  variant = "inline",
  value,
  label,
  title,
  body,
  unit,
  className,
}: {
  variant?: "inline" | "block";
  value: string;
  /** inline: rótulo ao lado do número. */
  label?: string;
  /** block: título e descrição do indicador. */
  title?: string;
  body?: string;
  unit?: string;
  className?: string;
}) {
  if (variant === "block") {
    return (
      <div
        className={cn(
          "flex flex-1 items-end justify-between gap-4 border-b border-line p-6",
          className
        )}
      >
        <div className="flex flex-col gap-2">
          <h3 className="t-h5 text-ink">{title}</h3>
          <p className="t-lead max-w-[15rem] text-ink-soft">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-0.5">
          <span className="t-stat text-ink">{value}</span>
          <span className="t-small text-ink-soft">{unit}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <p className="t-stat text-ink md:text-stat-lg">{value}</p>
      <p className="t-body max-w-[8rem] leading-snug text-ink-soft">{label}</p>
    </div>
  );
}
