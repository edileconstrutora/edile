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

export function EmpreendimentoCard({
  slug,
  type,
  name,
  subtitle,
  image,
  description,
  status,
  href,
}: Empreendimento) {
  const TypeIcon = typeIcons[type];
  return (
    <Link
      href={href ?? `/empreendimentos/${slug}`}
      className="group flex h-full flex-col gap-5 rounded-xs bg-paper p-3"
    >
      {/* Imagem com overlay cinza claro no hover (substitui mudança de fundo) */}
      <Chamfer corner="tr" size="3rem" className="aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gray-200/30 opacity-0 transition-opacity duration-300 ease-[var(--ease-out-soft)] group-hover:opacity-100" />
      </Chamfer>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2">
        <div className="flex items-center gap-2.5 text-small text-ink-soft">
          <TypeIcon className="size-4" />
          <span>{typeLabel[type]}</span>
          <span className="size-1.5 rounded-full bg-ink-faint/70" />
          <span>{status}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <h3 className="t-h4 text-ink">{name}</h3>
            {subtitle && <span className="t-small text-ink-faint">{subtitle}</span>}
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="t-body text-ink-soft">
          <span className="line-clamp-2">{description}</span>
        </p>
      </div>
    </Link>
  );
}
