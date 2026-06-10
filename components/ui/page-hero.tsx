import type { ReactNode } from "react";
import { Section } from "./section";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

/**
 * Hero padrão de páginas internas (ex.: /blog): rótulo `//` à esquerda +
 * h1 grande (`t-display`, 92px) + descrição na coluna central, texto à
 * esquerda. Fundo transparente + respiro para a navbar fixa — a página define
 * o fundo (`bg-mist`) e as linhas (`<ColumnLines>`), que descem a página toda.
 */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <Section className="bg-transparent pb-0 pt-40 md:pb-0 md:pt-[240px]">
      <Container className="relative">
        {/* Eyebrow à esquerda · título+descrição na coluna central, texto à esquerda */}
        <Reveal className="md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className="mt-6 md:col-start-2 md:mt-0">
            <h1 className="t-display text-balance text-ink">{title}</h1>
            {description && (
              <p className="t-body mt-6 max-w-[440px] text-ink-soft">
                {description}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
