import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaFuturo() {
  return (
    <Section
      id="contato"
      tone="petrol"
      className="overflow-hidden bg-gradient-to-b from-petrol-900 to-petrol-950"
    >
      {/* marca d'água sutil */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-[-3rem] select-none text-[16rem] font-medium leading-none tracking-[0.1em] text-paper/[0.03] md:text-[22rem]"
      >
        E
      </span>

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="mb-6 justify-center">
            Para viver o incomparável
          </Eyebrow>
          <h2 className="t-display text-balance text-paper">
            Engenharia que valoriza o seu futuro
          </h2>
          <p className="t-body-lg mx-auto mt-6 max-w-xl text-paper/70">
            Da concepção à entrega, cada projeto da EDILE é construído para
            durar, inspirar e valorizar. Vamos conversar sobre o seu próximo
            endereço.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#" variant="light" withArrow>
              Falar com um especialista
            </Button>
            <Button
              href="#empreendimentos"
              variant="outline"
              className="border-paper/30 text-paper hover:border-paper hover:text-paper"
            >
              Ver empreendimentos
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
