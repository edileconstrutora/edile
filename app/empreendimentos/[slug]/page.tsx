import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Form } from "@/components/sections/form";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionIntro } from "@/components/ui/section-intro";
import { IconBadge } from "@/components/ui/icon-badge";
import { Check } from "@/components/ui/icons";
import { EmpreendimentoCard } from "@/components/ui/empreendimento-card";
import {
  empreendimentos,
  getEmpreendimentoBySlug,
  typeLabel,
} from "@/lib/empreendimentos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return empreendimentos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const emp = getEmpreendimentoBySlug(slug);
  if (!emp) return {};
  return {
    title: emp.name,
    description: emp.description,
    alternates: { canonical: `/empreendimentos/${emp.slug}` },
    openGraph: {
      title: emp.name,
      description: emp.description,
      url: `/empreendimentos/${emp.slug}`,
      images: [{ url: emp.image }],
    },
  };
}

export default async function EmpreendimentoPage({ params }: Props) {
  const { slug } = await params;
  const emp = getEmpreendimentoBySlug(slug);
  if (!emp) notFound();

  const related = empreendimentos.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar solid />
      <main>
        {/* Header: rótulo + nome + tags, com a capa larga abaixo (sem foto de fundo) */}
        <Section className="pb-0 pt-40 md:pb-0 md:pt-48">
          <Container>
            <Reveal>
              <Eyebrow>{typeLabel[emp.type]}</Eyebrow>
              <h1 className="t-display-lg mt-4 max-w-[760px] text-balance text-ink">
                {emp.name}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                {[emp.status, emp.location].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink/[0.05] px-4 py-1.5 text-small text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-hair md:mt-16 md:aspect-[21/9]">
                <Image
                  src={emp.image}
                  alt={emp.name}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1350px) 100vw, 1350px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* Visão geral + diferenciais */}
        <Section tone="paper">
          <Container>
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-[72px]">
              <Reveal className="lg:flex-1">
                <SectionIntro
                  eyebrow="O empreendimento"
                  title="Pensado para morar bem e valorizar."
                  titleClassName="max-w-[460px] text-balance text-ink"
                />
                <p className="t-body mt-6 max-w-[480px] text-ink-soft">
                  {emp.description}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="lg:w-[460px] lg:shrink-0">
                <ul className="flex flex-col">
                  {emp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-4 border-b border-line py-4 first:border-t"
                    >
                      <IconBadge tone="gold" className="p-1.5">
                        <Check className="size-4" />
                      </IconBadge>
                      <span className="t-body text-ink">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Galeria */}
        <Section className="bg-mist">
          <Container>
            <Reveal className="mb-12 md:mb-16">
              <SectionIntro
                align="center"
                eyebrow="Galeria"
                title="Por dentro do projeto"
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {emp.gallery.map((src, i) => (
                <Reveal
                  key={src + i}
                  delay={(i % 2) * 0.08}
                  className={i === 0 ? "sm:col-span-2" : ""}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-hair ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={src}
                      alt={`${emp.name} — imagem ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 660px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* Formulário de contato (mesmo componente da home) */}
        <Form />

        {/* Outros empreendimentos */}
        <Section tone="paper">
          <Container>
            <Reveal className="mb-12 md:mb-16">
              <SectionIntro title="Outros empreendimentos" />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((e, i) => (
                <Reveal key={e.slug} delay={(i % 3) * 0.08}>
                  <EmpreendimentoCard {...e} />
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
