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
    q: "Quais serviços a EDILE oferece?",
    a: "Atuamos na incorporação e construção de empreendimentos residenciais e comerciais de alto padrão — do projeto à entrega das chaves.",
  },
  {
    q: "Como começa um projeto com a EDILE?",
    a: "Tudo parte de uma conversa para entender seu objetivo, morar ou investir, seguida da apresentação dos empreendimentos e condições mais adequados ao seu perfil.",
  },
  {
    q: "É possível personalizar a unidade?",
    a: "Sim. Em empreendimentos selecionados, oferecemos opções de plantas e acabamentos para adequar o imóvel ao seu estilo de vida.",
  },
  {
    q: "Vocês oferecem condições de financiamento?",
    a: "Trabalhamos com as principais instituições e também com planos diretos, com condições negociadas caso a caso.",
  },
  {
    q: "Qual é o prazo médio de entrega?",
    a: "Varia conforme o empreendimento, mas todos seguem cronogramas claros, comunicados de forma transparente desde o início.",
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
