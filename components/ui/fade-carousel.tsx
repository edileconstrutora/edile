"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";
import { ChevronLeft, ChevronRight } from "./icons";

const DURATION = 5000; // ms até trocar automaticamente

/**
 * Carrossel de imagens em crossfade (sem slide), com autoplay,
 * barra de progresso sutil e setas com fundo blur.
 */
export function FadeCarousel({
  images,
  alt,
  sizes,
  className,
}: {
  images: string[];
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  // Autoplay: avança ao fim de cada ciclo (reinicia quando o índice muda).
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), DURATION);
    return () => clearTimeout(t);
  }, [index, count]);

  return (
    <div className={cn("absolute inset-0", className)}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity duration-700 ease-[var(--ease-out-soft)]",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Barra de progresso */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-paper/15">
        <span
          key={index}
          className="block h-full origin-left bg-paper/70"
          style={{ animation: `fade-carousel-progress ${DURATION}ms linear forwards` }}
        />
      </div>

      {/* Setas */}
      <div className="absolute bottom-5 right-5 z-10 flex gap-2.5">
        <IconButton
          tone="light"
          className="bg-paper/10 backdrop-blur-md"
          aria-label="Imagem anterior"
          onClick={() => go(-1)}
        >
          <ChevronLeft className="size-5" />
        </IconButton>
        <IconButton
          tone="light"
          className="bg-paper/10 backdrop-blur-md"
          aria-label="Próxima imagem"
          onClick={() => go(1)}
        >
          <ChevronRight className="size-5" />
        </IconButton>
      </div>
    </div>
  );
}
