import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { ColumnLines } from "@/components/ui/column-lines";
import { PostHero } from "@/components/ui/post-hero";
import { PostBody } from "@/components/ui/post-body";
import { BlogCard } from "@/components/ui/blog-card";
import { posts, getPostBySlug, relatedPosts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — EDILE`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar solid />
      <main className="relative overflow-hidden bg-mist">
        <PostHero
          category={post.category}
          date={post.date}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
        />

        {/* Corpo do post */}
        <Section className="bg-transparent pb-0 pt-14 md:pb-0 md:pt-20">
          <Container>
            <Reveal>
              <PostBody content={post.content} />
            </Reveal>
          </Container>
        </Section>

        {/* Posts relacionados — com as 3 linhas verticais de fundo */}
        <Section className="bg-transparent">
          <ColumnLines />
          <Container className="relative">
            <Reveal className="mb-12 md:mb-16">
              <SectionIntro title="Mais ideias" />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts(post.slug).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
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
