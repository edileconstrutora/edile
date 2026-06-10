import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

// Conteúdo dos posts é placeholder — substituir pelos artigos reais.
const posts = [
  {
    image: "/images/blog-1.webp",
    category: "Mercado",
    date: "9 jun 2025",
    title: "Por que Indaiatuba é um dos endereços que mais valorizam no interior paulista",
  },
  {
    image: "/images/blog-2.webp",
    category: "Alto padrão",
    date: "2 jun 2025",
    title: "Condomínio fechado: segurança e liberdade no mesmo endereço",
  },
  {
    image: "/images/blog-3.webp",
    category: "Engenharia",
    date: "26 mai 2025",
    title: "Sustentabilidade e tecnologia: o que faz um imóvel valorizar com o tempo",
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
            description="Perspectivas sobre o mercado de Indaiatuba, alto padrão e a arte de morar e investir bem."
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
