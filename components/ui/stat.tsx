"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Número com contagem de entrada (0 → valor) ao surgir na viewport, uma vez.
 * Preserva prefixo/sufixo não numérico (ex.: "180+", "100%"). Respeita
 * prefers-reduced-motion (mostra o valor final direto). A contagem é dirigida
 * por um MotionValue (sem setState em effect) e renderizada via useTransform.
 */
function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const match = useMemo(() => value.match(/^(\d+)(.*)$/), [value]);

  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const count = useMotionValue(reduce ? target : 0);
  const text = useTransform(count, (v) =>
    match ? Math.round(v) + suffix : value
  );

  useEffect(() => {
    if (!match) return;
    if (reduce) {
      count.set(target);
      return;
    }
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, count, target, match]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}

/**
 * Indicador numérico. Dois formatos:
 * - `inline`: número grande + rótulo ao lado (faixa de stats).
 * - `block`: título + descrição à esquerda, número + unidade à direita (bento).
 */
export function Stat({
  variant = "inline",
  tone = "dark",
  value,
  label,
  title,
  body,
  unit,
  className,
}: {
  variant?: "inline" | "block";
  /** `dark` = texto escuro (fundo claro) · `light` = texto claro (fundo petrol). */
  tone?: "dark" | "light";
  value: string;
  /** inline: rótulo ao lado do número. */
  label?: string;
  /** block: título e descrição do indicador. */
  title?: string;
  body?: string;
  unit?: string;
  className?: string;
}) {
  const light = tone === "light";
  const strong = light ? "text-paper" : "text-ink";
  const soft = light ? "text-paper/70" : "text-ink-soft";
  const border = light ? "border-paper/15" : "border-line";

  if (variant === "block") {
    return (
      <div
        className={cn(
          "flex flex-1 items-end justify-between gap-4 border-b p-6",
          border,
          className
        )}
      >
        <div className="flex flex-col gap-2">
          <h3 className={cn("t-h5", strong)}>{title}</h3>
          <p className={cn("t-lead max-w-[15rem]", soft)}>{body}</p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-0.5">
          <span className={cn("t-stat", strong)}>
            <AnimatedValue value={value} />
          </span>
          <span className={cn("t-small", soft)}>{unit}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <p className={cn("t-stat md:text-stat-lg", strong)}>
        <AnimatedValue value={value} />
      </p>
      <p className={cn("t-body max-w-[8rem] leading-snug", soft)}>{label}</p>
    </div>
  );
}
