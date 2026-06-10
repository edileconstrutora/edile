import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const posts = [
  {
    image: "/images/blog-1.webp",
    category: "Design",
    date: "9 jun 2025",
    title: "Escolhas de materiais que definem a longevidade dos interiores",
  },
  {
    image: "/images/blog-2.webp",
    category: "Arquitetura",
    date: "2 jun 2025",
    title: "Luz natural: o ponto de partida de todo bom projeto",
  },
  {
    image: "/images/blog-3.webp",
    category: "Mercado",
    date: "26 mai 2025",
    title: "O que realmente valoriza um imóvel de alto padrão",
  },
];

export function Blog() {
  return (
    <Section id="blog" tone="paper" className="overflow-hidden bg-mist">
      <Container className="relative">
        {/* Cabeçalho centralizado */}
        <Reveal className="mb-12 md:mb-16">
          <SectionIntro
            align="center"
            eyebrow="Blog"
            title="Ideias recentes"
            titleClassName="text-ink"
            description="Perspectivas sobre arquitetura, materiais, mercado e a forma de morar bem."
            descriptionClassName="max-w-[460px]"
          />
        </Reveal>

        {/* Posts */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#"
                className="group flex h-full flex-col gap-4 rounded-xs bg-paper p-3"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-hair">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2">
                  <div className="flex items-center gap-2.5 text-small text-ink-soft">
                    <span>{p.category}</span>
                    <span className="size-1.5 rounded-full bg-ink-faint/70" />
                    <span>{p.date}</span>
                  </div>
                  <h3 className="t-h4 text-ink transition-colors duration-300 group-hover:text-ink-soft">
                    {p.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
