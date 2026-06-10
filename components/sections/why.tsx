import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "@/components/ui/icons";

// Chanfro no canto superior-direito da imagem.
const chamferTR =
  "polygon(0 0, calc(100% - 5rem) 0, 100% 5rem, 100% 100%, 0 100%)";

const avatars = [
  "/images/avatars/a1.webp",
  "/images/avatars/a2.webp",
  "/images/avatars/a3.webp",
];

function Stat({
  title,
  body,
  value,
  unit,
}: {
  title: string;
  body: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="flex flex-1 items-end justify-between gap-4 border-b border-line p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.1875rem] leading-[1.4] tracking-[-0.038em] text-ink">
          {title}
        </h3>
        <p className="max-w-[15rem] text-[1.0625rem] leading-[1.4] text-ink-soft">
          {body}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-center gap-0.5">
        <span className="text-[3.25rem] font-[440] leading-none tracking-[-0.05em] text-ink">
          {value}
        </span>
        <span className="text-[0.9375rem] text-ink-soft">{unit}</span>
      </div>
    </div>
  );
}

export function Why() {
  return (
    <Section id="why" tone="paper">
      <Container>
        {/* Cabeçalho centralizado */}
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center md:mb-16">
          <Eyebrow>Por que a EDILE</Eyebrow>
          <h2 className="t-h2 max-w-[580px] text-balance text-ink">
            Confiança em cada etapa do seu projeto.
          </h2>
        </Reveal>

        {/* Imagem + grid bento */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[72px]">
          {/* Imagem chanfrada */}
          <Reveal className="lg:w-[485px] lg:shrink-0">
            <div
              className="relative aspect-[485/560] w-full overflow-hidden lg:aspect-auto lg:h-[560px]"
              style={{ clipPath: chamferTR }}
            >
              <Image
                src="/images/why.webp"
                alt="Interior de alto padrão EDILE"
                fill
                sizes="(max-width: 1024px) 100vw, 485px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Bento: 2 colunas (no mobile empilha coluna a coluna) */}
          <Reveal delay={0.1} className="flex-1 lg:flex">
            <div className="flex w-full flex-col border-t border-line sm:flex-row lg:h-full">
              {/* Coluna 1 — indicadores */}
              <div className="flex min-w-0 flex-col sm:flex-1 sm:border-r sm:border-line">
                <Stat
                  title="Equipe selecionada"
                  body="Cada projeto é conduzido por profissionais experientes."
                  value="25+"
                  unit="Especialistas"
                />
                <Stat
                  title="Processo cuidadoso"
                  body="Fluxos claros e etapas estruturadas garantem o melhor resultado."
                  value="95%"
                  unit="Satisfação"
                />
              </div>

              {/* Coluna 2 — prova social, entrega e destaque */}
              <div className="flex min-w-0 flex-col sm:flex-1">
                <div className="flex flex-1 flex-col justify-between gap-8 border-b border-line p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {avatars.map((src, i) => (
                        <span
                          key={src}
                          className="relative size-9 overflow-hidden rounded-full ring-2 ring-paper"
                        >
                          <Image
                            src={src}
                            alt={`Cliente EDILE ${i + 1}`}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </span>
                      ))}
                    </div>
                    <p className="text-[1rem] leading-[1.3] text-ink-soft">
                      Mais de 2 mil
                      <br />
                      clientes satisfeitos
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[1.1875rem] leading-[1.4] tracking-[-0.038em] text-ink">
                      Entrega confiável
                    </h3>
                    <p className="text-[1.0625rem] leading-[1.4] text-ink-soft">
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
                    <h3 className="text-[1.4375rem] leading-[1.2] tracking-[-0.043em] text-paper">
                      Espaços que duram
                    </h3>
                    <p className="text-[1.0625rem] leading-[1.4] text-paper/75">
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
