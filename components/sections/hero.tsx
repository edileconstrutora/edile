"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SplitButton } from "@/components/ui/split-button";
import { AvatarStack } from "@/components/ui/avatar-stack";

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
        {/* Mobile */}
        <Image
          src="/images/hr-1.jpeg"
          alt="Empreendimento de alto padrão da EDILE"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Desktop */}
        <Image
          src="/images/edile-hrbg.jpeg"
          alt="Empreendimento de alto padrão da EDILE"
          fill
          quality={90}
          sizes="100vw"
          className="hidden object-cover object-center md:block"
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
      <div className="relative z-10 order-1 md:absolute md:inset-x-0 md:top-0 md:flex md:pt-36">
        <Container className="w-full md:px-0 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate mt-32 w-full bg-petrol-950 px-6 pb-10 pt-10 sm:px-8 md:mt-0 md:w-1/2 md:bg-transparent md:px-16 md:py-12"
          >
            {/* Fundo chanfrado (apenas desktop) */}
            <Image
              src="/images/hero-panel.png"
              alt=""
              fill
              sizes="50vw"
              className="-z-10 hidden object-fill md:block"
            />

            <h1 className="t-display-lg text-balance text-paper">
              Hoje, seu lar. Amanhã, seu legado.
            </h1>

            <p className="mt-7 max-w-[30rem] text-balance text-body leading-normal text-paper/85 md:text-body-lg">
              Residenciais exclusivos em Indaiatuba. O privilégio de viver o extraordinário com quem você ama, com a tranquilidade de um investimento sólido.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6 md:mt-12 md:pl-12">
              <SplitButton href="#empreendimentos" tone="gold">
                <span className="md:hidden">Ver empreendimentos</span>
                <span className="hidden md:inline">
                  Conheça os empreendimentos
                </span>
              </SplitButton>

              {/* Prova social — placeholder (confirmar) */}
              <AvatarStack
                ring="petrol"
                labelClassName="text-paper/85"
                label={
                  <>
                    Famílias e investidores
                    <br />
                    que escolheram a Edile
                  </>
                }
              />
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
