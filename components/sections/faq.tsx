"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "O que a Edile faz?",
    a: "Somos incorporadora e construtora de condomínios e loteamentos de alto padrão em Indaiatuba e região. Atuamos com rigor da escolha do terreno à entrega.",
  },
  {
    q: "Por que investir em Indaiatuba?",
    a: "A cidade está entre os endereços mais valorizados do interior paulista, próxima a Campinas e São Paulo, com demanda crescente por alto padrão e alta taxa de valorização.",
  },
  {
    q: "Como começa um projeto com a Edile?",
    a: "Tudo parte de uma conversa para entender seu objetivo, morar ou investir, e apresentar o empreendimento mais adequado ao seu perfil.",
  },
  {
    q: "Os empreendimentos têm potencial de valorização?",
    a: "Sim. Escolhemos regiões premium pelo potencial de crescimento a longo prazo: cada projeto é pensado como um ativo que cresce em valor com o tempo.",
  },
  {
    q: "A Edile oferece condições de pagamento?",
    a: "Trabalhamos com as principais instituições e também com planos diretos, com condições negociadas caso a caso.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-hair bg-mist">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 p-6 text-left"
      >
        <span className="t-h5 text-ink">{q}</span>
        {/* Toggle +/- */}
        <span className="relative mt-0.5 size-6 shrink-0">
          <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-ink-soft" />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-ink-soft transition-transform duration-300 ease-[var(--ease-out-soft)]",
              open && "scale-y-0"
            )}
          />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-[var(--ease-out-soft)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="t-body max-w-[640px] px-6 pb-6 leading-snug text-ink-soft">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Coluna esquerda */}
          <Reveal className="lg:w-[460px] lg:shrink-0">
            <SectionIntro
              eyebrow="FAQ"
              title="Ficou com dúvidas?"
              titleClassName="text-balance text-ink"
              description="Reunimos as perguntas mais comuns sobre como trabalhamos."
              descriptionClassName="max-w-[420px]"
            />
            <div className="mt-9">
              <SplitButton href="#contato" tone="gold">
                Fale conosco
              </SplitButton>
            </div>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1} className="flex-1 lg:max-w-[750px]">
            <div className="flex flex-col gap-1.5">
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
