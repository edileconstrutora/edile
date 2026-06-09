import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight, Home, Building } from "@/components/ui/icons";

// Canto chanfrado superior-direito do card.
const cardChamfer =
  "polygon(0 0, calc(100% - 4rem) 0, 100% 4rem, 100% 100%, 0 100%)";

// Empreendimento em destaque. type: "casa" → ícone home-smile · "predio" → ícone building.
const featured = {
  type: "casa" as "casa" | "predio",
  name: "Villagio Residence",
  image: "/images/villagio.jpg",
  description:
    "Tradição e modernidade no coração do nosso negócio. Com a capacidade de antecipar tendências, a EDILE traz soluções inovadoras para os segmentos em que atua — sempre para surpreender, inspirar e transformar quem vive cada projeto.",
};

export function Empreendimentos() {
  const TypeIcon = featured.type === "predio" ? Building : Home;
  return (
    <section
      id="empreendimentos"
      className="relative overflow-hidden bg-mist py-[80px] md:py-[120px]"
    >
      {/* Linhas verticais de coluna */}
      <div className="pointer-events-none absolute inset-0">
        <Container className="relative h-full px-0">
          <span className="absolute inset-y-0 left-0 w-px bg-ink/[0.06]" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-ink/[0.06]" />
          <span className="absolute inset-y-0 right-0 w-px bg-ink/[0.06]" />
        </Container>
      </div>

      <Container className="relative">
        {/* Cabeçalho */}
        <Reveal className="mb-14 flex flex-col gap-8 md:mb-20 md:grid md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-10">
          <Eyebrow className="md:pb-2">Empreendimentos</Eyebrow>

          <div className="md:text-center">
            <h2 className="text-[clamp(2.5rem,5vw,4.125rem)] font-[440] leading-[1.05] tracking-[-0.065em] text-ink">
              Projetos recentes
            </h2>
            <p className="mt-4 max-w-[500px] text-[1.125rem] leading-[1.4] text-ink-soft md:mx-auto">
              Uma seleção de projetos residenciais e comerciais que mostram nossa
              forma de pensar o espaço.
            </p>
          </div>

          <div className="md:justify-self-end md:pb-2">
            <SplitButton href="#" tone="gold" size="sm">
              Ver todos
            </SplitButton>
          </div>
        </Reveal>

        {/* Card em destaque */}
        <Reveal>
          <article
            className="relative bg-white p-6"
            style={{ clipPath: cardChamfer }}
          >
            <div className="flex flex-col gap-7 md:flex-row md:gap-8">
              <div className="relative aspect-square w-full overflow-hidden md:w-[400px] md:shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-8">
                <span className="inline-flex w-fit items-center justify-center rounded-[1px] bg-line p-2 text-ink">
                  <TypeIcon className="size-8" />
                </span>

                <div className="flex flex-col items-start gap-6">
                  <h3 className="text-[1.4375rem] leading-[1.2] tracking-[-0.04em] text-ink">
                    {featured.name}
                  </h3>
                  <p className="max-w-[44rem] text-[1.125rem] leading-[1.5] text-ink-soft">
                    {featured.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 rounded-[2px] border border-ink-soft/40 px-7 py-2.5 text-[1rem] tracking-[-0.02em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Conhecer empreendimento
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
