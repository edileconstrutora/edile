import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FadeCarousel } from "@/components/ui/fade-carousel";
import { Frame, Aperture, Columns } from "@/components/ui/icons";

// Imagem chanfrada nos cantos superior-direito e inferior-esquerdo.
const imageChamfer =
  "polygon(0 0, calc(100% - var(--cx)) 0, 100% var(--cy), 100% 100%, var(--cx) 100%, 0 calc(100% - var(--cy)))";

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
    title: "Materiais honestos",
    body: "Trabalhamos com texturas naturais e acabamentos refinados, escolhidos para envelhecer com elegância ao longo do tempo e do uso.",
  },
  {
    Icon: Aperture,
    title: "Clareza espacial",
    body: "Cada planta é desenhada para equilíbrio, fluidez e uma sensação de calma na rotina de quem vive o espaço.",
  },
  {
    Icon: Columns,
    title: "Design duradouro",
    body: "Priorizamos decisões atemporais em vez de tendências, garantindo ambientes que permanecem relevantes e funcionais.",
  },
];

export function Proposito() {
  return (
    <Section id="proposito" tone="petrol" className="overflow-hidden bg-petrol-950">
      {/* Linhas verticais de coluna */}
      <div className="pointer-events-none absolute inset-0">
        <Container className="relative h-full px-0">
          <span className="absolute inset-y-0 left-0 w-px bg-paper/[0.08]" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-paper/[0.08]" />
          <span className="absolute inset-y-0 right-0 w-px bg-paper/[0.08]" />
        </Container>
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-12 md:gap-[70px]">
          {/* Cabeçalho */}
          <Reveal className="max-w-[760px]">
            <Eyebrow tone="light">Filosofia de projeto</Eyebrow>
            <h2 className="t-h2 mt-4 text-balance text-paper">
              Espaços projetados com clareza, sobriedade e intenção.
            </h2>
          </Reveal>

          {/* Imagem chanfrada */}
          <Reveal>
            <div
              className="relative aspect-[3/2] w-full overflow-hidden [--cx:4.5rem] [--cy:3rem] md:aspect-[1350/600] md:[--cx:10rem] md:[--cy:8.5rem]"
              style={{ clipPath: imageChamfer }}
            >
              <FadeCarousel
                images={interiores}
                alt="Interior de projeto EDILE"
                sizes="(max-width: 1024px) 100vw, 1350px"
              />
            </div>
          </Reveal>

          {/* Pilares */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="flex flex-col items-start gap-7"
              >
                <span className="inline-flex items-center justify-center rounded-[1px] bg-paper/10 p-2 text-paper">
                  <p.Icon className="size-8" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[1.4375rem] leading-[1.2] tracking-[-0.043em] text-paper">
                    {p.title}
                  </h3>
                  <p className="max-w-[26rem] text-[1.125rem] leading-[1.4] text-paper/60">
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
