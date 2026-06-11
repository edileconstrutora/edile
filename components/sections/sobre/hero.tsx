import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Hero da página /sobre: imagem escura full-bleed + headline na base-esquerda.
 * Mais baixo que o hero da home e sem painel/CTA (o CTA vem na seção logo
 * abaixo). A navbar fica transparente sobre ele (como na home).
 */
export function SobreHero() {
  return (
    <section className="relative flex min-h-[64svh] items-end overflow-hidden bg-petrol-950 md:min-h-[72svh]">
      {/* Imagem de fundo — placeholder (trocar pela real) */}
      <Image
        src="/images/hero.jpg"
        alt="Empreendimento de alto padrão da EDILE em Indaiatuba"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      {/* Tinta chapada de petrol para legibilidade (sem gradiente) */}
      <div className="absolute inset-0 bg-petrol-950/55" />

      <Container className="relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
        <Eyebrow tone="light">Alto padrão em Indaiatuba</Eyebrow>
        <h1 className="t-display mt-5 max-w-[900px] text-balance text-paper">
          Construímos hoje o legado de amanhã.
        </h1>
      </Container>
    </section>
  );
}
