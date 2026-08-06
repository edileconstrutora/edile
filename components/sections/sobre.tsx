import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";
import { FadeCarousel } from "@/components/ui/fade-carousel";
import { Stat } from "@/components/ui/stat";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { ArrowUpRight } from "@/components/ui/icons";

const sobreImages = [
  "/images/Edile-1.jpeg",
  "/images/Edile-2.png",
  "/images/Edile-3.png",
];

export function Sobre() {
  return (
    <Section tone="paper" id="sobre">
      <Container>
        <Reveal className="mb-12 md:mb-16">
          <SectionIntro
            eyebrow="Por que a EDILE"
            title="Responsabilidade em cada etapa, da fundação à entrega."
            titleClassName="max-w-[520px] text-balance text-ink"
          />
        </Reveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[72px]">
          {/* Carrossel de imagens */}
          <Reveal className="lg:w-[485px] lg:shrink-0">
            <Chamfer
              corner="tr"
              size="6rem"
              className="relative aspect-[490/580] w-full overflow-hidden lg:aspect-auto lg:h-[560px]"
            >
              <FadeCarousel
                images={sobreImages}
                alt="Edile — sede e ambientes"
                sizes="(max-width: 1024px) 100vw, 490px"
              />
            </Chamfer>
          </Reveal>

          {/* Bento: diferenciais */}
          <Reveal delay={0.1} className="flex-1 lg:flex">
            <div className="flex w-full flex-col border-t border-line sm:flex-row lg:h-full">
              {/* Coluna 1 — indicadores */}
              <div className="flex min-w-0 flex-col sm:flex-1 sm:border-r sm:border-line">
                <Stat
                  variant="block"
                  className="max-lg:px-0 max-lg:pt-16"
                  title="Rigor desde o terreno"
                  body="Localizações premium e base jurídica impecável, antes do primeiro tijolo."
                  value="100%"
                  unit="Regiões premium"
                />
                <Stat
                  variant="block"
                  className="max-lg:px-0 max-lg:pt-16"
                  title="Engenharia superior"
                  body="Inovação e sustentabilidade em cada projeto."
                  value="15+"
                  unit="Anos de visão"
                />
              </div>

              {/* Coluna 2 — prova social + card escuro */}
              <div className="flex min-w-0 flex-col sm:flex-1">
                <div className="flex flex-1 flex-col justify-between gap-8 border-b border-line p-6 max-lg:px-0 max-lg:pt-16">
                  <AvatarStack
                    ring="paper"
                    labelClassName="text-ink-soft"
                    label={
                      <>
                        Famílias e investidores
                        <br />
                        em Indaiatuba
                      </>
                    }
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="t-h5 text-ink">Cada assinatura honrada</h3>
                    <p className="t-lead text-ink-soft">
                      Prazos, orçamentos e expectativas sempre claros.
                    </p>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="group flex flex-1 items-end justify-between gap-4 bg-petrol-950 p-6 text-paper max-lg:pt-16"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="t-h4 text-paper">Mais que imóveis, legados</h3>
                    <p className="t-lead text-paper/75">
                      Criamos ativos que acompanham o tempo e elevam a qualidade
                      de vida.
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
