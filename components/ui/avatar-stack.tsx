import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Avatares de clientes (prova social). Reutilizado no hero e na seção "Por quê". */
const avatars = [
  "/images/avatars/a1.webp",
  "/images/avatars/a2.webp",
  "/images/avatars/a3.webp",
];

const ringStyles = {
  paper: "ring-paper",
  petrol: "ring-petrol-950",
} as const;

export function AvatarStack({
  ring = "paper",
  label,
  labelClassName,
  className,
}: {
  /** Cor do anel — deve casar com o fundo onde o stack está apoiado. */
  ring?: keyof typeof ringStyles;
  label?: ReactNode;
  labelClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-2.5">
        {avatars.map((src, i) => (
          <span
            key={src}
            className={cn(
              "relative size-9 overflow-hidden rounded-full ring-2",
              ringStyles[ring]
            )}
          >
            <Image
              src={src}
              alt={`Cliente EDILE ${i + 1}`}
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
        ))}
      </div>
      <p className={cn("t-small leading-tight", labelClassName)}>
        {label ?? (
          <>
            Famílias e investidores
            <br />
            que confiam na Edile
          </>
        )}
      </p>
    </div>
  );
}
