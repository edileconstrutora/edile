import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitButton } from "@/components/ui/split-button";
import { Reveal } from "@/components/ui/reveal";
import { Carousel } from "@/components/ui/carousel";
import { Chamfer } from "@/components/ui/chamfer";
import { IconBadge } from "@/components/ui/icon-badge";
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
      <div className="flex flex-col-reverse gap-7 md:flex-row md:gap-8">
        <div className="relative aspect-[3/4] w-full overflow-hidden md:w-[340px] md:shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-8">
          <IconBadge tone="gold">
            <TypeIcon className="size-8" />
          </IconBadge>

          <div className="flex flex-col items-start gap-6">
            <h3 className="t-h4 text-paper">{item.name}</h3>
            <p className="t-body max-w-[44rem] leading-normal text-paper/70">
              {item.description}
            </p>
            <Link
              href={`/empreendimentos/${item.slug}`}
              className="inline-flex items-center gap-2.5 rounded-xs border border-paper/30 px-7 py-2.5 text-small text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Conhecer empreendimento
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </Chamfer>
  );
}

export function Empreendimentos() {
  return (
    <Section id="empreendimentos" className="overflow-hidden bg-mist">
      <Container className="relative">
        {/* Cabeçalho */}
        <Reveal className="mb-14 flex flex-col gap-8 md:mb-20 md:grid md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-10">
          <Eyebrow className="md:pb-2">Empreendimentos</Eyebrow>

          <div className="md:text-center">
            <h2 className="t-h2 text-balance text-ink md:mx-auto md:max-w-[8em]">
              Onde morar é também investir
            </h2>
            <p className="t-body mt-4 max-w-[500px] leading-snug text-ink-soft md:mx-auto">
              Condomínios e loteamentos de alto padrão em regiões premium de
              Indaiatuba — ativos pensados para crescer em valor.
            </p>
          </div>

          <div className="md:justify-self-end md:pb-2">
            <SplitButton href="/empreendimentos" tone="gold" size="sm">
              Ver todos
            </SplitButton>
          </div>
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
