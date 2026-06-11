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
        {/* Rótulo numa coluna de largura fixa (só desktop) → o título sempre
            começa no mesmo ponto em qualquer página. No mobile o hero empilha
            (rótulo acima do título, largura cheia). */}
        <Reveal className="md:grid md:grid-cols-[200px_1fr] md:items-start md:gap-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className="mt-6 md:mt-0">
            {/* max-w impede que títulos longos esparramem pela coluna inteira */}
            <h1 className="t-display max-w-[640px] text-balance text-ink">
              {title}
            </h1>
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
