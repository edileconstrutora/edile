import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";
import { IconBadge } from "@/components/ui/icon-badge";
import { Frame, Aperture, Columns, Shield } from "@/components/ui/icons";

// Valores que guiam a EDILE.
const values = [
  {
    Icon: Frame,
    title: "Rigor desde o terreno",
    body: "Localizações premium e base jurídica impecável, antes do primeiro tijolo.",
  },
  {
    Icon: Aperture,
    title: "Engenharia inteligente",
    body: "Tecnologia e método em cada etapa, para empreendimentos que envelhecem bem.",
  },
  {
    Icon: Columns,
    title: "Sustentabilidade",
    body: "Critérios severos de eficiência e infraestrutura preparada para o futuro.",
  },
  {
    Icon: Shield,
    title: "Compromisso honrado",
    body: "Prazos, orçamentos e expectativas sempre claros, do início à entrega.",
  },
];

/**
 * Seção "No que acreditamos" (fundo claro): cabeçalho central + imagem
 * chanfrada à esquerda e grade 2×2 de valores à direita.
 */
export function SobreBeliefs() {
  return (
    <Section tone="paper" className="bg-mist">
      <Container>
        <Reveal className="mb-12 md:mb-16">
          <SectionIntro
            align="center"
            eyebrow="No que acreditamos"
            title="O que sustenta cada empreendimento."
            titleClassName="max-w-[620px] text-balance text-ink"
          />
        </Reveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[72px]">
          {/* Imagem chanfrada */}
          <Reveal className="lg:w-[460px] lg:shrink-0">
            <Chamfer
              corner="tr"
              size="5rem"
              className="aspect-[460/520] w-full lg:aspect-auto lg:h-full"
            >
              <Image
                src="/images/why.webp"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </Chamfer>
          </Reveal>

          {/* Grade 2×2 de valores */}
          <Reveal delay={0.1} className="flex-1">
            <div className="grid border-t border-line sm:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex flex-col items-start gap-5 border-b border-line py-8 sm:px-8 lg:py-10 ${
                    i % 2 === 0 ? "sm:border-r sm:pl-0" : ""
                  }`}
                >
                  <IconBadge tone="gold">
                    <v.Icon className="size-7" />
                  </IconBadge>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="t-h4 text-ink">{v.title}</h3>
                    <p className="t-lead max-w-[24rem] text-ink-soft">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
