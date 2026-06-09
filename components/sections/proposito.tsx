import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    label: "Investidor",
    title: "Invista com segurança em imóveis que valorizam",
    body: "Oportunidades sólidas, com retorno consistente e qualidade construtiva acima da média. Rentabilidade, liquidez e localização estratégica em cada projeto.",
  },
  {
    label: "Moradia",
    title: "Seu novo lar começa aqui",
    body: "Projetos pensados para o seu conforto, segurança e bem-estar. Ambientes planejados para criar memórias, construir família e viver com tranquilidade.",
  },
];

export function Proposito() {
  return (
    <Section id="proposito" className="bg-petrol-50">
      <Container>
        <Reveal className="mb-14 md:mb-20">
          <SectionHeader
            eyebrow="Nosso propósito"
            title="Nosso propósito é entender o seu"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <Card hover className="flex h-full flex-col gap-6 p-8 md:p-12">
                <Eyebrow tone="sage">{p.label}</Eyebrow>
                <h3 className="t-h3 text-balance">{p.title}</h3>
                <p className="t-body text-ink-soft">{p.body}</p>
                <div className="mt-auto pt-2">
                  <Button href="#contato" variant="solid" withArrow>
                    Agendar conversa
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
