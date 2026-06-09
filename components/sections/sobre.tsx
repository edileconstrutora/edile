import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";

// Canto chanfrado apenas no superior-direito (estilo dos exemplos).
const chamferTR =
  "polygon(0 0, calc(100% - 6rem) 0, 100% 6rem, 100% 100%, 0 100%)";

export function Sobre() {
  return (
    <Section tone="paper" id="sobre">
      <Container className="max-w-[1280px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-[70px]">
          {/* Imagem chanfrada */}
          <Reveal className="w-full max-w-[490px] lg:shrink-0">
            <div
              className="relative aspect-[490/580] w-full overflow-hidden"
              style={{ clipPath: chamferTR }}
            >
              <Image
                src="/images/sobre.jpg"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 100vw, 490px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={0.1} className="w-full flex-1 lg:max-w-[650px]">
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="t-h2 mt-3 max-w-[600px] text-balance">
              Espaços moldados com propósito, onde o design encontra o morar.
            </h2>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-14">
              <p className="shrink-0 text-[1rem] uppercase tracking-[-0.02em] text-ink-soft sm:w-[90px]">
                Nossa visão
              </p>
              <div className="flex max-w-[500px] flex-col items-start gap-10">
                <p className="text-base leading-[1.6] text-ink-soft">
                  Desenvolvemos empreendimentos residenciais e comerciais que
                  equilibram estética, função e durabilidade — criando espaços
                  intencionais, refinados e profundamente conectados à forma como
                  as pessoas vivem.
                </p>
                <SplitButton href="#sobre" tone="gold" size="sm">
                  Saiba mais
                </SplitButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
