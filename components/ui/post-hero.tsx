import Image from "next/image";
import type { Post } from "@/lib/posts";
import { Section } from "./section";
import { Container } from "./container";
import { Reveal } from "./reveal";

/**
 * Header de post do blog: mesmos respiros do `PageHero`, mas sem eyebrow. Na
 * coluna central: h1 (`t-h2`, 54px) → subtítulo (excerpt) → tags em pílulas
 * (data, categoria). Capa larga retangular (sem chanfro) abaixo. A página
 * define o fundo (`bg-mist`).
 */
export function PostHero({
  category,
  date,
  title,
  image,
  excerpt,
}: Pick<Post, "category" | "date" | "title" | "image" | "excerpt">) {
  const tags = [date, category];
  return (
    <Section className="bg-transparent pb-0 pt-40 md:pb-0 md:pt-[240px]">
      <Container className="relative">
        <Reveal className="md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-10">
          <div className="md:col-start-2">
            <h1 className="t-h2 max-w-[820px] text-balance text-ink">{title}</h1>
            <p className="t-body mt-5 max-w-[560px] text-ink-soft">{excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-ink/[0.05] px-4 py-1.5 text-small text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Capa larga retangular, proporção mais baixa no desktop para não virar um bloco altíssimo */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-hair md:mt-16 md:aspect-[21/9]">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1350px) 100vw, 1350px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
