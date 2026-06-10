import Image from "next/image";
import type { Post } from "@/lib/posts";

/**
 * Card de post: imagem + (categoria · data) + título. Hover de scale só na
 * imagem (card sem sombra). Reutilizado na home e na página /blog.
 */
export function BlogCard({ image, category, date, title, href = "#" }: Post) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col gap-4 rounded-xs bg-paper p-3"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-hair">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <div className="flex items-center gap-2.5 text-small text-ink-soft">
          <span>{category}</span>
          <span className="size-1.5 rounded-full bg-ink-faint/70" />
          <span>{date}</span>
        </div>
        <h3 className="t-h4 text-ink transition-colors duration-300 group-hover:text-ink-soft">
          <span className="line-clamp-3">{title}</span>
        </h3>
      </div>
    </a>
  );
}
