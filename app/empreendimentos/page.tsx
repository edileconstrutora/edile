import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { EmpreendimentoCard } from "@/components/ui/empreendimento-card";
import { empreendimentos } from "@/lib/empreendimentos";

export const metadata: Metadata = {
  title: "Empreendimentos",
  description:
    "Condomínios e loteamentos de alto padrão em Indaiatuba e região. Conheça os empreendimentos da Edile.",
  alternates: { canonical: "/empreendimentos" },
};

export default function EmpreendimentosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero escuro — mesmo padrão do /sobre */}
        <section className="relative flex min-h-[64svh] items-end overflow-hidden bg-petrol-950 md:min-h-[72svh]">
          <Image
            src="/images/hero.jpg"
            alt="Empreendimentos de alto padrão da EDILE em Indaiatuba"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-petrol-950/55" />
          <Container className="relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
            <Eyebrow tone="light">Empreendimentos</Eyebrow>
            <h1 className="t-display mt-5 max-w-[900px] text-balance text-paper">
              Onde morar é também investir.
            </h1>
          </Container>
        </section>

        {/* Grade de empreendimentos */}
        <Section className="bg-paper pt-14 md:pt-20">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {empreendimentos.map((e, i) => (
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
