import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionIntro } from "@/components/ui/section-intro";
import { SplitButton } from "@/components/ui/split-button";
import { Chamfer } from "@/components/ui/chamfer";

export const metadata: Metadata = {
  title: "Helvétia Residence",
  description:
    "Condomínio fechado de alto padrão em Indaiatuba. Conheça o Helvétia Residence, o mais novo empreendimento da Edile Incorporadora.",
  alternates: { canonical: "/helvetiaresidence" },
};

export default function HelvétiaResidencePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — fundo escuro com imagem, igual /sobre */}
        <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-petrol-950 md:min-h-[80svh]">
          <Image
            src="/images/edile-hrbg.jpeg"
            alt="Helvétia Residence — Edile Incorporadora"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-petrol-950/55" />
          <Container className="relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
            <Eyebrow tone="light">A vida é feita de escolhas</Eyebrow>
            <h1 className="t-display mt-5 max-w-[900px] text-balance text-paper">
              Helvétia Residence
            </h1>
          </Container>
        </section>

        {/* Vídeo + texto + CTA */}
        <Section>
          <Container>
            <Reveal className="flex flex-col items-center gap-10">
              {/* Player de vídeo — substituir src pelo vídeo real */}
              <div className="relative w-full max-w-[860px] overflow-hidden rounded-xs bg-petrol-950 aspect-video">
                <video
                  controls
                  poster="/images/edile-hrbg.jpeg"
                  className="h-full w-full object-cover"
                  preload="none"
                >
                  {/* placeholder — trocar pela URL real do vídeo */}
                  <source src="" type="video/mp4" />
                </video>
              </div>

              {/* Texto + CTA */}
              <div className="flex w-full max-w-[860px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="t-body max-w-[520px] leading-relaxed text-ink-soft">
                  Em Indaiatuba, a Edile incorpora e constrói condomínios e
                  loteamentos de alto padrão. Nossa responsabilidade começa
                  antes do primeiro tijolo — no rigor do terreno e na base
                  jurídica — para entregar engenharia superior e valorização
                  patrimonial real.
                </p>
                <SplitButton href="/#contato" tone="gold" className="shrink-0">
                  Fale conosco
                </SplitButton>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* Do terreno à entrega — texto + imagens */}
        <Section tone="petrol" className="bg-petrol-950">
          <Container>
            <Reveal className="flex flex-col gap-8 md:grid md:grid-cols-[1fr_1.6fr] md:gap-10">
              <Eyebrow tone="light">Como trabalhamos</Eyebrow>
              <div className="max-w-[680px]">
                <h2 className="t-h2 text-balance text-paper">
                  Do terreno à entrega, cada projeto conduzido com método e
                  proximidade.
                </h2>
                <p className="t-body mt-6 max-w-[520px] leading-relaxed text-paper/70">
                  Trabalhamos lado a lado com arquitetos, engenheiros e parceiros
                  para reformar localizações únicas com um empreendimento nos
                  padrões, timelines e elaboração — do primeiro esboço à entrega
                  das chaves.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
              <Reveal>
                <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
                  <Image
                    src="/images/hr-1.jpeg"
                    alt="Helvétia Residence — planejamento e entrega"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Chamfer>
                <p className="mt-4 text-small uppercase tracking-widest text-paper/50">
                  Planejamento e terreno
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
                  <Image
                    src="/images/proposito-1.webp"
                    alt="Helvétia Residence — acabamento de alto padrão"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Chamfer>
                <p className="mt-4 text-small uppercase tracking-widest text-paper/50">
                  Acabamento e entrega
                </p>
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
