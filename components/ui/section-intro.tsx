import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type EyebrowTone = "petrol" | "sage" | "muted" | "light";

/**
 * Abertura de seção: rótulo `/` + título grande + descrição opcional.
 * Substitui a repetição de Eyebrow + h2 nas seções. Use dentro de um `<Reveal>`.
 * `align="center"` aperta os espaçamentos (cabeçalhos centralizados).
 * `eyebrow` é opcional — sem ele, o título abre a seção sozinho.
 */
export function SectionIntro({
  eyebrow,
  eyebrowTone = "petrol",
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: string;
  eyebrowTone?: EyebrowTone;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  const center = align === "center";
  return (
    <div className={cn("flex flex-col", center && "items-center text-center", className)}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "t-h2 text-balance",
          eyebrow && (center ? "mt-2" : "mt-3"),
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "t-body text-ink-soft",
            center ? "mt-2" : "mt-4",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
