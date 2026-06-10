"use client";

import {
  Children,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";
import { ChevronLeft, ChevronRight } from "./icons";

type CarouselProps = {
  children: ReactNode;
  options?: EmblaOptionsType;
  className?: string;
  viewportClassName?: string;
  containerClassName?: string;
  slideClassName?: string;
  /** Posição das setas de navegação. */
  controls?: "sides" | "bottom" | "none";
  arrowTone?: "dark" | "light";
};

/**
 * Carrossel base (Embla) com setas e estados de navegação.
 * Cada filho vira um slide.
 */
export function Carousel({
  children,
  options,
  className,
  viewportClassName,
  containerClassName,
  slideClassName,
  controls = "sides",
  arrowTone = "dark",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: false,
      ...options,
    },
    [WheelGesturesPlugin()]
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    // sincroniza o estado inicial num microtask (sem setState síncrono nem depender de rAF)
    queueMicrotask(onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slides = Children.toArray(children);

  const PrevBtn = (
    <IconButton tone={arrowTone} onClick={prev} disabled={!canPrev} aria-label="Anterior">
      <ChevronLeft className="size-5" />
    </IconButton>
  );
  const NextBtn = (
    <IconButton tone={arrowTone} onClick={next} disabled={!canNext} aria-label="Próximo">
      <ChevronRight className="size-5" />
    </IconButton>
  );

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className={cn("overflow-hidden", viewportClassName)}>
        <div className={cn("flex", containerClassName)}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cn("min-w-0 shrink-0 grow-0 basis-full", slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {controls === "sides" && (
        <>
          <div className="pointer-events-none absolute inset-y-0 -left-5 z-10 hidden items-center lg:flex xl:-left-6">
            <span className="pointer-events-auto">{PrevBtn}</span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 -right-5 z-10 hidden items-center lg:flex xl:-right-6">
            <span className="pointer-events-auto">{NextBtn}</span>
          </div>
          <div className="mt-6 flex justify-center gap-3 lg:hidden">
            {PrevBtn}
            {NextBtn}
          </div>
        </>
      )}

      {controls === "bottom" && (
        <div className="mt-10 flex justify-center gap-4">
          <IconButton
            tone={arrowTone}
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
            className="size-[52px]"
          >
            <ChevronLeft className="size-[1.375rem]" />
          </IconButton>
          <IconButton
            tone={arrowTone}
            onClick={next}
            disabled={!canNext}
            aria-label="Próximo"
            className="size-[52px]"
          >
            <ChevronRight className="size-[1.375rem]" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
