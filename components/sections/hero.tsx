"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SplitButton } from "@/components/ui/split-button";

const avatars = [
  "/images/avatars/a1.webp",
  "/images/avatars/a2.webp",
  "/images/avatars/a3.webp",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-petrol-950 md:block"
    >
      {/* Imagem full-bleed (mobile e desktop) com parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Mobile: imagem vertical */}
        <Image
          src="/images/hero-mobile.jpg"
          alt="Empreendimento de alto padrão da EDILE"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Desktop: imagem horizontal */}
        <Image
          src="/images/hero.jpg"
          alt="Empreendimento de alto padrão da EDILE"
          fill
          quality={90}
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      </motion.div>

      {/* Linhas verticais — container 1350px (apenas desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Container className="relative h-full px-0">
          <span className="absolute inset-y-0 left-0 w-px bg-paper/15" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-paper/15" />
          <span className="absolute inset-y-0 right-0 w-px bg-paper/15" />
        </Container>
      </div>

      {/* Conteúdo — mobile: sobre a imagem (topo) · desktop: painel chanfrado na base-esquerda */}
      <div className="relative z-10 order-1 md:absolute md:inset-x-0 md:bottom-0 md:flex md:pb-16">
        <Container className="w-full md:px-0 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate w-full bg-petrol-950 px-6 pb-10 pt-28 sm:px-8 md:w-1/2 md:bg-transparent md:px-16 md:py-12"
          >
            {/* Fundo chanfrado (apenas desktop) */}
            <Image
              src="/images/hero-panel.png"
              alt=""
              fill
              sizes="50vw"
              className="-z-10 hidden object-fill md:block"
            />

            <h1 className="text-balance text-[clamp(2.25rem,1rem+4vw,4.125rem)] font-[440] leading-[1.06] tracking-[-0.065em] text-paper">
              Cada detalhe pensado para o incomum.
            </h1>

            <p className="mt-7 max-w-[30rem] text-balance text-[clamp(1rem,0.85rem+0.5vw,1.1875rem)] leading-[1.5] text-paper/85">
              Arquitetura, acabamentos e experiências em sintonia com o alto
              padrão — feitos para quem busca o extraordinário.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6 md:mt-12 md:pl-12">
              <SplitButton href="#empreendimentos" tone="gold">
                Comece agora
              </SplitButton>

              {/* Prova social */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatars.map((src, i) => (
                    <span
                      key={src}
                      className="relative size-9 overflow-hidden rounded-full ring-2 ring-petrol-950"
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
                <p className="text-[0.9375rem] leading-[1.25] text-paper/85">
                  Mais de 2 mil
                  <br />
                  clientes satisfeitos
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
