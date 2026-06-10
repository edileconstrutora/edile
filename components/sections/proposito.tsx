import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { Chamfer } from "@/components/ui/chamfer";
import { IconBadge } from "@/components/ui/icon-badge";
import { FadeCarousel } from "@/components/ui/fade-carousel";
import { Frame, Aperture, Columns } from "@/components/ui/icons";

// Interiores de projetos (carrossel em crossfade).
const interiores = [
  "/images/proposito-1.webp",
  "/images/proposito-2.webp",
  "/images/proposito-3.webp",
];

// Copy provisória (a ajustar) — pilares da filosofia de projeto da EDILE.
const pillars = [
  {
    Icon: Frame,
    title: "Engenharia inteligente",
    body: "Tecnologia e engenharia aplicadas para que cada empreendimento evolua com você ao longo do tempo.",
  },
  {
    Icon: Aperture,
    title: "Sustentabilidade",
    body: "Projetos guiados por critérios severos de sustentabilidade, eficiência e infraestrutura de ponta.",
  },
  {
    Icon: Columns,
    title: "Valorização real",
    body: "Localizações premium e visão de longo prazo: ativos que crescem em valor real, não só em estética.",
  },
];

export function Proposito() {
  return (
    <Section id="proposito" tone="petrol" className="overflow-hidden bg-petrol-950">
      <Container className="relative">
        <div className="flex flex-col gap-12 md:gap-[70px]">
          {/* Cabeçalho */}
          <Reveal className="max-w-[760px]">
            <SectionIntro
              eyebrow="Filosofia de projeto"
              eyebrowTone="light"
              title="Engenharia que valoriza o seu futuro."
              titleClassName="mt-4 text-balance text-paper"
            />
          </Reveal>

          {/* Imagem chanfrada */}
          <Reveal>
            <Chamfer
              corner="tr-bl"
              className="aspect-[3/2] w-full [--cx:4.5rem] [--cy:3rem] md:aspect-[1350/600] md:[--cx:10rem] md:[--cy:8.5rem]"
            >
              <FadeCarousel
                images={interiores}
                alt="Interior de projeto EDILE"
                sizes="(max-width: 1024px) 100vw, 1350px"
              />
            </Chamfer>
          </Reveal>

          {/* Pilares */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="flex flex-col items-start gap-7"
              >
                <IconBadge tone="translucent">
                  <p.Icon className="size-8" />
                </IconBadge>
                <div className="flex flex-col gap-1.5">
                  <h3 className="t-h4 text-paper">{p.title}</h3>
                  <p className="t-body max-w-[26rem] leading-snug text-paper/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
