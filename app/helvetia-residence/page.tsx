import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionIntro } from "@/components/ui/section-intro";
import { SplitButton } from "@/components/ui/split-button";
import { Chamfer } from "@/components/ui/chamfer";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { Stat } from "@/components/ui/stat";
import { HelvetiaLeadForm } from "@/components/sections/helvetia-lead-form";
import {
  CheckCircle,
  MapPin,
  Shield,
  Zap,
  Trees,
  Compass,
  PhoneCall,
  Clock,
  ArrowUpRight,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Helvétia Residence | Condomínio de Alto Padrão em Indaiatuba",
  description:
    "Lotes de alto padrão a partir de 500m² em Indaiatuba. Fiação 100% subterrânea, clube exclusivo com tênis de saibro, spa e segurança 24h. Cadastre-se para receber o material VIP.",
  alternates: { canonical: "https://edile.com.br/helvetia-residence" },
};

const DIFERENCIAIS = [
  {
    icon: Trees,
    title: "Clube Resort Privativo",
    description:
      "Piscina adulto com raia, piscina infantil, spa relaxante, sauna e salão de festas gourmet equipado para seus eventos mais marcantes.",
  },
  {
    icon: Zap,
    title: "Fiação 100% Subterrânea",
    description:
      "Rede elétrica e de fibra óptica inteiramente ocultas sob o solo, garantindo uma estética limpa e paisagismo sem interferência visual.",
  },
  {
    icon: Shield,
    title: "Segurança de Última Geração",
    description:
      "Portaria blindada com controle de acesso biométrico, monitoramento inteligente por IA 24 horas e ronda perimetral constante.",
  },
  {
    icon: Compass,
    title: "Complexo Esportivo de Elite",
    description:
      "Quadras de tênis em saibro oficial, quadras de beach tennis, campo de futebol society e pista de caminhada em meio ao verde.",
  },
];

const TIPOLOGIAS = [
  {
    tag: "MAIS PROCURADA",
    title: "Signature",
    area: "280m² a 300m²",
    front: "Planta Integrada & Autoral",
    description:
      "Arquitetura sofisticada com 4 suítes, conceito aberto, ampla área gourmet privativa e integração harmoniosa com a piscina.",
    highlights: ["4 Suítes espaçosas", "Área gourmet integrativa", "Piscina privativa"],
  },
  {
    tag: "VISTA EXCLUSIVA",
    title: "Nature",
    area: "250m² a 300m²",
    front: "Conexão com a Natureza",
    description:
      "Desenvolvida para valorizar a ventilação e iluminação natural, com vista panorâmica para a vegetação e total privacidade.",
    highlights: ["Amplas aberturas de vidro", "Privacidade total", "Conforto térmico natural"],
  },
  {
    tag: "COLEÇÃO ESPECIAL",
    title: "Urban",
    area: "250m² a 300m²",
    front: "Design Contemporâneo",
    description:
      "Linhas modernas e funcionais com excelente aproveitamento de espaço, perfeita para quem busca praticidade com alto padrão.",
    highlights: ["Design contemporâneo", "Suítes reversíveis", "Acabamento premium"],
  },
];

const LOCALIZACAO_PONTOS = [
  { tempo: "15 min", local: "Aeroporto Int. de Viracopos", desc: "Acesso rápido sem trânsito" },
  { tempo: "20 min", local: "Campinas (Via Santos Dumont)", desc: "Conexão rápida com os principais polos" },
  { tempo: "3 min", local: "Parque Ecológico de Indaiatuba", desc: "Lazer, esportes e qualidade de vida" },
];

export default function HelvetiaResidencePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-paper">
        {/* =========================================================================
            HERO SECTION — Inspired by Danube Dubai Inquiry reference design
           ========================================================================= */}
        <section className="relative min-h-[92svh] overflow-hidden bg-gradient-to-b from-[#1b2010] to-[#3b4123] pt-10 pb-16 md:pt-14 md:pb-24">
          {/* Full-width subtle Tree background image (smooth gradient from #1b2010 to #3b4123) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <Image
              src="/images/hr-hero-tree.jpg"
              alt="Helvétia Residence Paisagismo"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-right opacity-20 md:opacity-25 mix-blend-overlay"
            />
            {/* Soft overlays with 1b2010 -> 3b4123 gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b2010] via-[#1b2010]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b4123] via-transparent to-[#1b2010]/90" />
          </div>

          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column: Official Logo & Copy */}
              <Reveal className="flex flex-col text-paper">
                {/* Logotipo Helvétia Residence (Ampliado e Centralizado) */}
                <div className="mb-6 md:mb-8 flex justify-center w-full">
                  <Image
                    src="/images/logo-hr.png"
                    alt="Helvétia Residence Logo"
                    width={600}
                    height={200}
                    priority
                    className="h-32 sm:h-40 md:h-48 lg:h-52 w-auto object-contain drop-shadow-2xl"
                  />
                </div>

                <p className="t-body-lg text-paper/95 max-w-[560px] leading-relaxed">
                  O mais exclusivo condomínio fechado de Indaiatuba. Casas de alto padrão com fiação 100% subterrânea, lazer estilo resort e segurança de nível internacional.
                </p>

                {/* Highlights Bullet List */}
                <div className="mt-8 space-y-3.5">
                  {[
                    "Casas de alto padrão de 250m² a 300m²",
                    "Rede elétrica e dados inteiramente subterrâneas",
                    "Área de lazer com quadra de tênis, academia e espaço gourmet",
                    "Localização nobre e a 15 minutos de Viracopos",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c9ac8b]/30 text-[#f5ebd9]">
                        <CheckCircle className="size-3.5" />
                      </div>
                      <span className="t-body text-paper/95 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Social Proof Stack (Desktop: inside left column) */}
                <div className="hidden lg:flex mt-10 pt-8 border-t border-paper/15 items-center gap-4">
                  <AvatarStack ring="petrol" label={<></>} />
                  <div className="text-small text-paper/90">
                    <strong className="text-paper font-semibold block">Famílias e Investidores que confiam na Edile</strong>
                    +120 famílias e investidores já garantiram cota de atendimento VIP
                  </div>
                </div>
              </Reveal>

              {/* Right Column: Lead Form (White Box with light grey inputs) */}
              <Reveal delay={0.15} className="w-full">
                <HelvetiaLeadForm
                  title="Conheça sua nova casa"
                  subtitle="Preencha os dados abaixo para receber o book em PDF, plantas e tabela exclusiva de lançamento."
                />

                {/* Social Proof Stack (Mobile: below form, exact design matching user reference image) */}
                <div className="flex lg:hidden mt-6 pt-5 border-t border-white/15 items-center justify-between gap-3 w-full text-white">
                  <AvatarStack
                    ring="petrol"
                    labelClassName="text-white text-xs leading-tight font-normal max-w-[110px]"
                    className="shrink-0"
                  />
                  <div className="text-right text-white max-w-[210px] sm:max-w-[260px]">
                    <strong className="text-white font-bold block text-xs sm:text-sm leading-snug">
                      Famílias e Investidores que confiam na Edile
                    </strong>
                    <span className="block text-xs text-white/90 leading-snug mt-1">
                      +120 famílias e investidores já garantiram cota de atendimento VIP
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            STATS & INDICATORS BAR — Second Scroll with #c9ac8b background
           ========================================================================= */}
        <section className="border-y border-[#b89977] bg-[#c9ac8b] text-[#122e39] py-8 md:py-12 shadow-md">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 items-center justify-between">
              <Stat
                value="250m²"
                label="Área das casas a partir de"
                tone="dark"
              />
              <Stat
                value="100%"
                label="Fiação 100% subterrânea"
                tone="dark"
              />
              <Stat
                value="15 min"
                label="Do Aeroporto de Viracopos"
                tone="dark"
              />
              <Stat
                value="24h"
                label="Segurança & Portaria blindada"
                tone="dark"
              />
            </div>
          </Container>
        </section>

        {/* =========================================================================
            ABOUT & CONCEPT — Full-bleed Split Banner (Villa Anna Style Reference)
           ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#1b2010]">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Column: Full-Bleed Edge-to-Edge Image */}
            <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[640px] xl:min-h-[700px] w-full">
              <Image
                src="/images/hr-1.jpeg"
                alt="Portaria e infraestrutura do Helvétia Residence"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Column: Full-Bleed Typographic Showcase (matching hero green) */}
            <div className="flex flex-col justify-center bg-gradient-to-b from-[#1b2010] to-[#3b4123] text-paper px-8 py-14 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-14 xl:px-20">
              <h2 className="font-montserrat font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.1rem] leading-[1.15] text-[#f8f5ee] tracking-tight">
                Condomínio fechado de<br />
                casas personalizadas
              </h2>

              <div className="mt-6 sm:mt-8 space-y-1">
                <p className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                  250m² a 300m²
                </p>
                <p className="font-montserrat font-normal text-2xl sm:text-3xl text-[#eae3d5]">
                  (4 suítes)
                </p>
              </div>

              <div className="mt-5 sm:mt-6">
                <p className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                  Piscina Privativa
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-small sm:text-lead font-medium text-[#f1ede4]">
                  <span>• Lotes a partir de 500m²</span>
                  <span>• Fiação 100% subterrânea</span>
                  <span>• Segurança 24h</span>
                </div>
                <p className="text-small sm:text-body text-white/85 max-w-xl leading-relaxed mt-2">
                  Engenharia superior e respeito ao seu patrimônio em uma localização ícone no interior paulista.
                </p>
                <div className="mt-6">
                  <SplitButton href="#cadastro" tone="gold">
                    Garantir Condições de Lançamento
                  </SplitButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            AMENITIES & DIFFERENTIALS SHOWCASE
           ========================================================================= */}
        <Section className="bg-mist border-y border-line">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="DIFERENCIAIS EXCLUSIVOS"
                title="Estrutura pensada nos mínimos detalhes para o seu bem-estar."
                description="Conheça os pilares que fazem do Helvétia Residence uma referência em qualidade de vida em Indaiatuba."
              />
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {DIFERENCIAIS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div className="flex h-full flex-col justify-between rounded-xs border border-line bg-paper p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                      <div>
                        <div className="flex size-12 items-center justify-center rounded-xs bg-petrol-900 text-gold mb-6">
                          <IconComponent className="size-6" />
                        </div>
                        <h4 className="t-h5 text-ink font-medium">{item.title}</h4>
                        <p className="t-small mt-3 text-ink-soft leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            HOUSE OPTIONS / TYPOLOGIES
           ========================================================================= */}
        <Section className="bg-paper">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="OPÇÕES DE CASAS"
                title="Três plantas projetadas para acomodar sua família."
                description="Selecione o modelo de casa que melhor se adapta às necessidades da sua família."
              />
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {TIPOLOGIAS.map((lote, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative flex h-full flex-col justify-between rounded-xs border border-line bg-paper p-8 shadow-[var(--shadow-soft)] transition-all hover:border-sage-400">
                    <div className="absolute -top-3 left-6 rounded-full bg-petrol-900 px-3 py-1 text-micro font-semibold uppercase tracking-wider text-gold">
                      {lote.tag}
                    </div>

                    <div>
                      <h4 className="t-h3 mt-2 text-ink">{lote.title}</h4>
                      <div className="mt-4 flex items-baseline gap-2 border-b border-line pb-4">
                        <span className="text-h2 font-semibold text-petrol-900">{lote.area}</span>
                      </div>
                      <p className="t-small mt-2 font-medium text-sage-600">{lote.front}</p>
                      <p className="t-body mt-4 text-ink-soft leading-relaxed">{lote.description}</p>

                      <div className="mt-6 space-y-2 border-t border-line/60 pt-4">
                        {lote.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-small text-ink">
                            <CheckCircle className="size-4 text-gold shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <a
                        href="#cadastro"
                        className="flex w-full items-center justify-center gap-2 rounded-xs border border-petrol-900 bg-transparent px-4 py-3 text-lead font-medium text-petrol-900 transition-colors hover:bg-petrol-900 hover:text-paper"
                      >
                        <span>Consultar Casas Disponíveis</span>
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            LOCATION & CONNECTIVITY
           ========================================================================= */}
        <Section className="bg-petrol-950 text-paper">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="LOCALIZAÇÃO ESTRATÉGICA"
                eyebrowTone="light"
                title="A conveniência de estar perto de tudo, cercado por tranquilidade."
                description="Indaiatuba é eleita constantemente uma das cidades mais seguras e com melhor qualidade de vida do Brasil."
                descriptionClassName="text-[#ffffff]"
              />
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="space-y-4">
                  {LOCALIZACAO_PONTOS.map((ponto, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xs border border-paper/10 bg-petrol-900/60 p-5 backdrop-blur-sm transition-colors hover:border-gold/30"
                    >
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-xs bg-gold/15 text-gold font-semibold text-lead">
                        {ponto.tempo}
                      </div>
                      <div>
                        <h4 className="t-h5 text-paper font-medium">{ponto.local}</h4>
                        <p className="t-small text-paper/70 mt-0.5">{ponto.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
                  <Image
                    src="/images/proposito-1.webp"
                    alt="Helvétia Residence Localização privilegiada em Indaiatuba"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Chamfer>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            BOTTOM CONVERSION FORM / CTA
           ========================================================================= */}
        <Section id="cadastro" className="bg-mist border-t border-line">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Reveal className="text-center mb-10">
                <Eyebrow>QUALIDADE DE VIDA & VALORIZAÇÃO</Eyebrow>
                <h2 className="t-h2 mt-3 text-ink text-balance">
                  Garanta sua cota de atendimento exclusivo no Helvétia Residence.
                </h2>
                <p className="t-body mt-4 text-ink-soft max-w-xl mx-auto">
                  Preencha o formulário abaixo para conversar diretamente com um de nossos executivos de vendas ou agendar uma visita guiada ao local.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <HelvetiaLeadForm
                  className="shadow-2xl"
                  title="Fale com a Equipe de Vendas EDILE"
                  subtitle="Atendimento discreto e personalizado para investidores e futuros moradores."
                />
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
