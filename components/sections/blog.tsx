import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { BlogCard } from "@/components/ui/blog-card";
import { posts } from "@/lib/posts";

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

        {/* 3 posts mais recentes */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <BlogCard {...p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
