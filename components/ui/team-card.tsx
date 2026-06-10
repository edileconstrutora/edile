import Image from "next/image";
import Link from "next/link";
import { Chamfer } from "./chamfer";
import { ArrowUpRight } from "./icons";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  href?: string;
};

/**
 * Card de membro da equipe: retrato quadrado chanfrado (canto sup-dir) +
 * nome + cargo + seta. Hover de scale na foto (padrão do `BlogCard`).
 * Se `href` for externo (LinkedIn etc.), abre em nova aba.
 */
export function TeamCard({ name, role, photo, href }: TeamMember) {
  const external = !!href && /^https?:/.test(href);
  return (
    <Link
      href={href ?? "#"}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex flex-col gap-4"
    >
      <Chamfer corner="tr" size="3rem" className="aspect-square w-full">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
      </Chamfer>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="t-h5 text-ink">{name}</h3>
          <p className="t-small text-ink-soft">{role}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
      </div>
    </Link>
  );
}
