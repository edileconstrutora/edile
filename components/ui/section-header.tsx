import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Divider } from "./divider";

/**
 * Cabeçalho de seção editorial: regra hairline no topo + rótulo `/` + título grande.
 * Padrão do design system para abrir qualquer seção (linguagem de linhas).
 */
export function SectionHeader({
  eyebrow,
  title,
  action,
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Divider tone={tone} />
      <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          <Eyebrow tone={tone === "light" ? "light" : "petrol"}>{eyebrow}</Eyebrow>
          <h2 className={cn("t-h2 mt-5 max-w-3xl", tone === "light" && "text-paper")}>
            {title}
          </h2>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
