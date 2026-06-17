import Image from "next/image";
import Link from "next/link";
import {
  typeLabel,
  type Empreendimento,
  type EmpreendimentoType,
} from "@/lib/empreendimentos";
import { Chamfer } from "./chamfer";
import { Home, Plots, ArrowUpRight } from "./icons";

const typeIcons: Record<EmpreendimentoType, typeof Home> = {
  condominio: Home,
  loteamento: Plots,
};

/**
 * Card de empreendimento (grade da página `/empreendimentos`): capa chanfrada +
 * (tipo · status) + nome + resumo + seta. Linka para `/empreendimentos/[slug]`.
 */
export function EmpreendimentoCard({
  slug,
  type,
  name,
  image,
  description,
  status,
  href,
}: Empreendimento) {
  const TypeIcon = typeIcons[type];
  return (
    <Link
      href={href ?? `/empreendimentos/${slug}`}
      className="group flex h-full flex-col gap-5 rounded-xs bg-paper p-3 transition-colors duration-500 ease-[var(--ease-out-soft)] hover:bg-petrol-950"
    >
      <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
      </Chamfer>
      <div className="flex flex-1 flex-col gap-3 px-2 pb-2">
        <div className="flex items-center gap-2.5 text-small text-ink-soft transition-colors duration-500 group-hover:text-paper/70">
          <TypeIcon className="size-4" />
          <span>{typeLabel[type]}</span>
          <span className="size-1.5 rounded-full bg-ink-faint/70 transition-colors duration-500 group-hover:bg-paper/40" />
          <span>{status}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="t-h4 text-ink transition-colors duration-500 group-hover:text-paper">
            {name}
          </h3>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-faint transition-[transform,color] duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
        </div>
        <p className="t-body text-ink-soft transition-colors duration-500 group-hover:text-paper/75">
          <span className="line-clamp-2">{description}</span>
        </p>
      </div>
    </Link>
  );
}
