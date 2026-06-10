import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Chamfer } from "@/components/ui/chamfer";

// Imagens são placeholder — trocar pelas reais.
const shots = [
  {
    src: "/images/proposito-2.webp",
    alt: "Planejamento de empreendimento EDILE",
    caption: "Planejamento e terreno",
  },
  {
    src: "/images/why.webp",
    alt: "Obra de empreendimento EDILE",
    caption: "Obra acompanhada de perto",
  },
];

/**
 * Seção "Como trabalhamos" (fundo claro): eyebrow + título/parágrafo à direita
 * e, abaixo, duas imagens legendadas lado a lado.
 */
export function SobreApproach() {
  return (
    <Section tone="paper">
      <Container>
        <Reveal className="md:grid md:grid-cols-[1fr_1.5fr] md:items-start md:gap-10">
          <Eyebrow>Como trabalhamos</Eyebrow>
          <div className="mt-5 md:mt-0">
            <h2 className="t-h2 max-w-[680px] text-balance text-ink">
              Do terreno à entrega, cada projeto conduzido com método e
              proximidade.
            </h2>
            <p className="t-body mt-6 max-w-[560px] text-ink-soft">
              Trabalhamos lado a lado com arquitetos, engenheiros e parceiros
              para transformar localizações premium em empreendimentos coesos,
              funcionais e valorizados — da primeira análise à entrega das
              chaves.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-6">
          {shots.map((s, i) => (
            <Reveal key={s.caption} delay={i * 0.08}>
              <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Chamfer>
              <Eyebrow tone="muted" className="mt-4">
                {s.caption}
              </Eyebrow>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
