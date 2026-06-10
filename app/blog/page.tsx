import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { ColumnLines } from "@/components/ui/column-lines";
import { BlogCard } from "@/components/ui/blog-card";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — EDILE",
  description:
    "Perspectivas sobre o mercado de Indaiatuba, alto padrão e a arte de morar e investir bem.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar solid />
      {/* A página inteira é uma banda só: fundo + grade de linhas descem até embaixo */}
      <main className="relative overflow-hidden bg-mist">
        <ColumnLines />

        <PageHero
          eyebrow="Blog"
          title="Notícias e ideias"
          description="Perspectivas sobre o mercado de Indaiatuba, alto padrão e a arte de morar e investir bem."
        />

        {/* Grade de posts */}
        <Section className="bg-transparent pt-14 md:pt-20">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.08}>
                  <BlogCard {...p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
