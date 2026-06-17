import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";
import { FadeCarousel } from "@/components/ui/fade-carousel";

const sobreImages = [
  "/images/Edile-1.jpeg",
  "/images/Edile-2.png",
  "/images/Edile-3.png",
];

export function Sobre() {
  return (
    <Section tone="paper" id="sobre">
      <Container className="max-w-[1280px]">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-[70px]">
          {/* Carrossel de imagens */}
          <Reveal className="w-full max-w-[490px] lg:shrink-0">
            <Chamfer corner="tr" size="6rem" className="relative aspect-[490/580] w-full overflow-hidden">
              <FadeCarousel
                images={sobreImages}
                alt="Edile — sede e ambientes"
                sizes="(max-width: 1024px) 100vw, 490px"
              />
            </Chamfer>
          </Reveal>

          {/* Texto */}
          <Reveal delay={0.1} className="w-full flex-1 lg:max-w-[650px]">
            <SectionIntro
              eyebrow="Sobre Nós"
              title="Sobre a Edile"
              titleClassName="max-w-[600px] text-balance"
            />

            <div className="mt-8 flex max-w-[500px] flex-col items-start gap-10">
              <p className="t-body text-ink-soft">
                Sediada em Indaiatuba, a Edile é incorporadora e construtora de
                condomínios e loteamentos de alto padrão. Nossa responsabilidade
                começa antes do primeiro tijolo — no rigor da escolha do
                terreno, em localizações premium e numa base jurídica impecável
                — para entregar engenharia superior e valorização patrimonial
                real.
              </p>
              <SplitButton href="/sobre" tone="teal" size="sm">
                Sobre a Edile
              </SplitButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
