import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { ColumnLines } from "@/components/ui/column-lines";
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
      <Navbar solid />
      <main className="relative overflow-hidden">
        <div className="bg-mist">
          <ColumnLines />
          <PageHero
            eyebrow="Empreendimentos"
            title="Onde morar é também investir"
            description="Condomínios e loteamentos de alto padrão em regiões premium de Indaiatuba — ativos pensados para crescer em valor."
          />
        </div>
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
