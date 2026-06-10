"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Número com contagem de entrada (0 → valor) ao surgir na viewport, uma vez.
 * Preserva prefixo/sufixo não numérico (ex.: "180+", "100%"). Respeita
 * prefers-reduced-motion (mostra o valor final direto).
 */
function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || reduce || !inView) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    setDisplay("0" + suffix);
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

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
          <span className="t-stat text-ink">
            <AnimatedValue value={value} />
          </span>
          <span className="t-small text-ink-soft">{unit}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <p className="t-stat text-ink md:text-stat-lg">
        <AnimatedValue value={value} />
      </p>
      <p className="t-body max-w-[8rem] leading-snug text-ink-soft">{label}</p>
    </div>
  );
}
