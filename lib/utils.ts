import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge precisa conhecer os utilitários de tamanho customizados
 * (gerados pelos tokens `--text-*`), senão os confunde com cor e remove a
 * cor do texto ao mesclar (ex.: `text-ink` + `text-lead`).
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "micro",
            "eyebrow",
            "small",
            "lead",
            "body",
            "body-lg",
            "h5",
            "h4",
            "h3",
            "h2",
            "stat",
            "stat-lg",
            "display-lg",
            "display",
          ],
        },
      ],
    },
  },
});

/** Combina classes condicionais e resolve conflitos do Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
