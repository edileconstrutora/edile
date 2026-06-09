"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos (para escalonar elementos). */
  delay?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Revela o conteúdo ao entrar na viewport (fade + translate).
 * Animação curta e discreta — premium, sem exageros.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
