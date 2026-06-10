import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";

export function Sobre() {
  return (
    <Section tone="paper" id="sobre">
      <Container className="max-w-[1280px]">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-[70px]">
          {/* Imagem chanfrada */}
          <Reveal className="w-full max-w-[490px] lg:shrink-0">
            <Chamfer corner="tr" size="6rem" className="aspect-[490/580] w-full">
              <Image
                src="/images/sobre.jpg"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 100vw, 490px"
                className="object-cover"
              />
            </Chamfer>
          </Reveal>

          {/* Texto */}
          <Reveal delay={0.1} className="w-full flex-1 lg:max-w-[650px]">
            <SectionIntro
              eyebrow="Sobre"
              title="Espaços moldados com propósito, onde o design encontra o morar."
              titleClassName="max-w-[600px] text-balance"
            />

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-14">
              <p className="shrink-0 t-small uppercase text-ink-soft sm:w-[90px]">
                Nossa visão
              </p>
              <div className="flex max-w-[500px] flex-col items-start gap-10">
                <p className="t-body text-ink-soft">
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
