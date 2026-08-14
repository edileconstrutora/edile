import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Chamfer } from "@/components/ui/chamfer";
import { SplitButton } from "@/components/ui/split-button";
import { Stat } from "@/components/ui/stat";

// Números são placeholder — confirmar com a Edile.
const stats = [
  { value: "108", label: "Unidades entregues" },
  { value: "04", label: "Certificações" },
  { value: "12+", label: "Anos de atuação" },
];

/**
 * Seção "Sobre nós" (fundo petrol): eyebrow + parágrafo de apresentação + CTA,
 * e abaixo duas imagens chanfradas ao lado de três indicadores.
 */
export function SobrePurpose() {
  return (
    <Section tone="petrol" className="bg-petrol-950">
      <Container>
        {/* Eyebrow à esquerda · parágrafo + CTA à direita */}
        <Reveal className="flex flex-col gap-8 md:grid md:grid-cols-[1fr_1.6fr] md:gap-10">
          <Eyebrow tone="light">Sobre nós</Eyebrow>
          <div className="max-w-[680px]">
            <p className="t-h4 text-balance leading-snug text-paper">
              Em Indaiatuba, a Edile incorpora e constrói condomínios e
              loteamentos de alto padrão. Nossa responsabilidade começa antes do
              primeiro tijolo, no rigor do terreno e na base jurídica, para
              entregar engenharia superior e valorização patrimonial real.
            </p>
            <SplitButton href="/#contato" tone="gold" className="mt-9">
              Fale conosco
            </SplitButton>
          </div>
        </Reveal>

        {/* Imagens chanfradas + indicadores */}
        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="flex items-end gap-4">
            <Chamfer
              corner="tr"
              size="2.5rem"
              className="aspect-[3/4] w-[42%]"
            >
              <Image
                src="/images/sobre.jpg"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 42vw, 280px"
                className="object-cover"
              />
            </Chamfer>
            <Chamfer corner="tr" size="4rem" className="aspect-[4/3] w-[58%]">
              <Image
                src="/images/proposito-1.webp"
                alt="Ambiente de projeto EDILE"
                fill
                sizes="(max-width: 1024px) 58vw, 420px"
                className="object-cover"
              />
            </Chamfer>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col gap-10 border-t border-paper/15 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
          >
            {stats.map((s) => (
              <Stat
                key={s.value}
                variant="inline"
                tone="light"
                value={s.value}
                label={s.label}
              />
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
