import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Carousel } from "@/components/ui/carousel";
import { Chamfer } from "@/components/ui/chamfer";
import { ArrowUpRight, Home, Plots } from "@/components/ui/icons";
import {
  empreendimentos,
  type Empreendimento,
  type EmpreendimentoType,
} from "@/lib/empreendimentos";

// Ícone por tipo (atuação horizontal: condomínios e loteamentos).
const typeIcons: Record<EmpreendimentoType, typeof Home> = {
  condominio: Home,
  loteamento: Plots,
};

function EmpreendimentoCard({ item }: { item: Empreendimento }) {
  const TypeIcon = typeIcons[item.type];
  return (
    <Chamfer
      as="article"
      corner="tr"
      size="4rem"
      className="h-full bg-petrol-950 p-6"
    >
      <div className="flex flex-col gap-7 md:flex-row md:gap-8">
        {/* Texto — topo no mobile (order-1), direita no desktop (md:order-2) */}
        <div className="flex flex-1 flex-col items-start gap-4 md:order-2 md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <h3 className="t-h4 text-paper">{item.name}</h3>
            <p className="t-body max-w-[44rem] leading-normal text-paper/70">
              {item.description}
            </p>
          </div>
          {/* Botão visível apenas no desktop */}
          <Link
            href={item.href ?? `/empreendimentos/${item.slug}`}
            className="hidden items-center gap-2.5 rounded-xs border border-paper/30 px-7 py-2.5 text-small text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink md:inline-flex"
          >
            Conhecer empreendimento
            <ArrowUpRight className="size-5" />
          </Link>
        </div>

        {/* Imagem — meio no mobile (order-2), esquerda no desktop (md:order-1) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden md:order-1 md:w-[340px] md:shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover"
          />
        </div>

        {/* Botão visível apenas no mobile — aparece depois da imagem */}
        <Link
          href={item.href ?? `/empreendimentos/${item.slug}`}
          className="inline-flex items-center gap-2.5 rounded-xs border border-paper/30 px-7 py-2.5 text-small text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink md:hidden"
        >
          Conhecer empreendimento
          <ArrowUpRight className="size-5" />
        </Link>
      </div>
    </Chamfer>
  );
}

export function Empreendimentos() {
  return (
    <Section id="empreendimentos" className="overflow-hidden bg-mist">
      <Container className="relative">
        {/* Cabeçalho */}
        <Reveal className="mb-14 flex flex-col gap-4 md:mb-20">
          <Eyebrow>Empreendimentos</Eyebrow>
          <h2 className="t-h2 text-balance text-ink max-w-[16em]">
            Escolha viver com sofisticação e visão de futuro.
          </h2>
          <p className="t-body mt-2 max-w-[480px] leading-snug text-ink-soft">
            A excelência de uma casa Edile se revela em cada detalhe.
          </p>
        </Reveal>

        {/* Carrossel de cards */}
        <Reveal>
          <Carousel
            controls="bottom"
            viewportClassName="md:mx-[calc((100%-100vw)/2)]"
            containerClassName="md:pl-[max(2.5rem,calc((100vw-var(--container-max))/2+2.5rem))] lg:pl-[max(3.5rem,calc((100vw-var(--container-max))/2+3.5rem))]"
            options={{ align: "start", containScroll: "trimSnaps" }}
            slideClassName="basis-full pr-0 md:basis-[640px] md:pr-6 lg:basis-[760px]"
          >
            {empreendimentos.map((item) => (
              <EmpreendimentoCard key={item.name} item={item} />
            ))}
          </Carousel>
        </Reveal>
      </Container>
    </Section>
  );
}
