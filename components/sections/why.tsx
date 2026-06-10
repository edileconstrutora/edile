import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";
import { Stat } from "@/components/ui/stat";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { ArrowUpRight } from "@/components/ui/icons";

export function Why() {
  return (
    <Section id="why" tone="paper">
      <Container>
        {/* Cabeçalho centralizado */}
        <Reveal className="mb-12 md:mb-16">
          <SectionIntro
            align="center"
            eyebrow="Por que a EDILE"
            title="Confiança em cada etapa do seu projeto."
            titleClassName="max-w-[580px] text-balance text-ink"
          />
        </Reveal>

        {/* Imagem + grid bento */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[72px]">
          {/* Imagem chanfrada */}
          <Reveal className="lg:w-[485px] lg:shrink-0">
            <Chamfer
              corner="tr"
              size="5rem"
              className="aspect-[485/560] w-full lg:aspect-auto lg:h-[560px]"
            >
              <Image
                src="/images/why.webp"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 100vw, 485px"
                className="object-cover"
              />
            </Chamfer>
          </Reveal>

          {/* Bento: 2 colunas (no mobile empilha coluna a coluna) */}
          <Reveal delay={0.1} className="flex-1 lg:flex">
            <div className="flex w-full flex-col border-t border-line sm:flex-row lg:h-full">
              {/* Coluna 1 — indicadores */}
              <div className="flex min-w-0 flex-col sm:flex-1 sm:border-r sm:border-line">
                <Stat
                  variant="block"
                  title="Equipe selecionada"
                  body="Cada projeto é conduzido por profissionais experientes."
                  value="25+"
                  unit="Especialistas"
                />
                <Stat
                  variant="block"
                  title="Processo cuidadoso"
                  body="Fluxos claros e etapas estruturadas garantem o melhor resultado."
                  value="95%"
                  unit="Satisfação"
                />
              </div>

              {/* Coluna 2 — prova social, entrega e destaque */}
              <div className="flex min-w-0 flex-col sm:flex-1">
                <div className="flex flex-1 flex-col justify-between gap-8 border-b border-line p-6">
                  <AvatarStack ring="paper" labelClassName="text-ink-soft" />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="t-h5 text-ink">Entrega confiável</h3>
                    <p className="t-lead text-ink-soft">
                      Prazos, orçamentos e expectativas sempre claros.
                    </p>
                  </div>
                </div>

                {/* Card escuro de destaque */}
                <a
                  href="#contato"
                  className="group flex flex-1 items-end justify-between gap-4 bg-petrol-950 p-6 text-paper"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="t-h4 text-paper">Espaços que duram</h3>
                    <p className="t-lead text-paper/75">
                      Projetamos ambientes que envelhecem bem e se adaptam à vida
                      real.
                    </p>
                  </div>
                  <ArrowUpRight className="size-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
