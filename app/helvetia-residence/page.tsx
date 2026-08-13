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
    tag: "MAIS PROCURADO",
    title: "Lotes Prime",
    area: "500m² a 650m²",
    front: "15m a 18m de testada",
    description:
      "Ideais para projetos arquitetônicos autorais com plantas integradas, ampla área de lazer privativa e garagens para 4 carros.",
    highlights: ["Topografia plana", "Excelente insolação", "Próximo ao clube"],
  },
  {
    tag: "VISTA EXCLUSIVA",
    title: "Lotes Horizon",
    area: "700m² a 850m²",
    front: "18m a 22m de testada",
    description:
      "Posicionados estrategicamente em frente às áreas de preservação permanente (APP), garantindo privacidade total e vista limpa.",
    highlights: ["Frente para área verde", "Privacidade máxima", "Lotes mais amplos"],
  },
  {
    tag: "COLEÇÃO ESPECIAL",
    title: "Exclusive Estate",
    area: "900m² a 1.200m²",
    front: "A partir de 25m de testada",
    description:
      "A máxima expressão de espaço e sofisticação no Helvétia Residence. Perfeito para verdadeiras mansões de alto padrão.",
    highlights: ["Testada generosa", "Potencial de ampliação", "Cota limitada"],
  },
];

const LOCALIZACAO_PONTOS = [
  { tempo: "3 min", local: "Helvetia Riding Center & Polo Club", desc: "Tradição equestre internacional" },
  { tempo: "5 min", local: "Aeroporto Int. de Viracopos", desc: "Acesso rápido sem trânsito" },
  { tempo: "8 min", local: "Parque Ecológico de Indaiatuba", desc: "Lazer e qualidade de vida" },
  { tempo: "15 min", local: "Campinas (Via Santos Dumont)", desc: "Conexão rápida com os principais polos" },
];

export default function HelvetiaResidencePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-paper">
        {/* =========================================================================
            HERO SECTION — High-converting template inspired by Danube Dubai Inquiry
           ========================================================================= */}
        <section className="relative min-h-[92svh] overflow-hidden bg-petrol-950 pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Background image & gradient overlays */}
          <Image
            src="/images/edile-hrbg.jpeg"
            alt="Helvétia Residence — Empreendimento Edile"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/70 to-petrol-950/40" />

          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column: Value Prop & Copy */}
              <Reveal className="flex flex-col text-paper">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-micro font-medium text-gold backdrop-blur-sm self-start">
                  <span className="size-1.5 rounded-full bg-gold animate-pulse" />
                  <span>CADASTRO PARA FASE DE LANÇAMENTO</span>
                </div>

                <h1 className="t-display-lg mt-5 font-normal text-balance text-paper leading-[1.08]">
                  Helvétia Residence
                </h1>

                <p className="t-body-lg mt-4 text-paper/85 max-w-[560px] leading-relaxed">
                  O mais exclusivo condomínio fechado de Indaiatuba. Lotes de alto padrão com fiação 100% subterrânea, lazer estilo resort e segurança de nível internacional.
                </p>

                {/* Highlights Bullet List */}
                <div className="mt-8 space-y-3.5">
                  {[
                    "Lotes residenciais de 500m² a 1.200m² com topografia privilegiada",
                    "Rede elétrica e de dados inteiramente subterrâneas",
                    "Clube privativo com quadras de tênis em saibro, spa e piscinas",
                    "Localização nobre ao lado do Helvetia Riding Center e a 5 min de Viracopos",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <CheckCircle className="size-3.5" />
                      </div>
                      <span className="t-body text-paper/90">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Social Proof Stack */}
                <div className="mt-10 pt-8 border-t border-paper/15 flex flex-wrap items-center gap-4">
                  <AvatarStack ring="petrol" />
                  <div className="text-small text-paper/75">
                    <strong className="text-paper font-semibold block">+120 famílias e investidores</strong>
                    já garantiram cota de atendimento VIP
                  </div>
                </div>
              </Reveal>

              {/* Right Column: Lead Form */}
              <Reveal delay={0.15} className="w-full">
                <HelvetiaLeadForm
                  title="Receba a Apresentação Exclusiva & Tabela VIP"
                  subtitle="Preencha os dados abaixo para receber o book em PDF, plantas técnicas e condições facilitadas de lançamento."
                />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            STATS & INDICATORS BAR
           ========================================================================= */}
        <section className="border-y border-paper/10 bg-petrol-900 text-paper py-10 md:py-14">
          <Container>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <Stat
                value="500m²"
                label="Área dos lotes a partir de"
                tone="light"
              />
              <Stat
                value="100%"
                label="Fiação 100% subterrânea"
                tone="light"
              />
              <Stat
                value="5 min"
                label="Do Aeroporto de Viracopos"
                tone="light"
              />
              <Stat
                value="24h"
                label="Segurança & Portaria blindada"
                tone="light"
              />
            </div>
          </Container>
        </section>

        {/* =========================================================================
            ABOUT & CONCEPT — Urbanismo & Arquitetura Edile
           ========================================================================= */}
        <Section className="bg-paper">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="O CONCEITO"
                title="Engenharia superior e respeito ao seu patrimônio em cada m²."
                description="O Helvétia Residence foi desenhado para quem busca espaço, privacidade e uma atmosfera de refúgio sem abrir mão da proximidade com os grandes centros urbanos."
              />
            </Reveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <Chamfer corner="tr" size="3.5rem" className="aspect-[4/3] w-full shadow-lg">
                  <Image
                    src="/images/hr-1.jpeg"
                    alt="Helvétia Residence — Projeto urbanístico de alto padrão"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Chamfer>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="t-h3 font-normal text-ink text-balance">
                    Uma localização ícone no interior paulista com infraestrutura de nível internacional.
                  </h3>
                  <p className="t-body leading-relaxed text-ink-soft">
                    Localizado em uma das regiões mais valorizadas de Indaiatuba, o Helvétia Residence harmoniza um projeto paisagístico autoral com alta tecnologia construtiva. Cada lote foi posicionado para otimizar a ventilação natural e a iluminação solar.
                  </p>
                  <p className="t-body leading-relaxed text-ink-soft">
                    A Edile Incorporadora conduz todas as etapas — do rigor na escolha do terreno até a entrega das chaves — com método, transparência e responsabilidade jurídica absoluta.
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <SplitButton href="#cadastro" tone="gold">
                      Garantir Condições de Lançamento
                    </SplitButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

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
            LOT OPTIONS / TYPOLOGIES
           ========================================================================= */}
        <Section className="bg-paper">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="OPÇÕES DE LOTES"
                title="Metragens projetadas para acomodar a sua arquitetura dos sonhos."
                description="Selecione a tipologia que melhor se adapta às necessidades da sua família."
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
                        <span>Consultar Lotes Disponíveis</span>
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
                    alt="Helvétia Residence — Localização privilegiada em Indaiatuba"
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
