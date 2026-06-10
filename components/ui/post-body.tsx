import Image from "next/image";
import type { Block } from "@/lib/posts";

/**
 * Corpo do post: mapeia os blocos tipados (`lib/posts`) para o markup do
 * design system — o conteúdo só fornece texto/imagens, o estilo é todo daqui.
 * Coluna de leitura estreita (720px) e centralizada.
 */
export function PostBody({ content }: { content: Block[] }) {
  return (
    <div className="mx-auto w-full max-w-[720px] [&>*:first-child]:mt-0">
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="t-body-lg mt-6 text-ink-soft">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="t-h3 mt-12 text-balance text-ink md:mt-14">
                {block.text}
              </h2>
            );
          case "image":
            return (
              <figure key={i} className="mt-10">
                {/* Proporção fixa de propósito: o template controla o estilo, não o conteúdo */}
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-hair">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="t-small mt-3 text-ink-faint">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="mt-10 border-l-2 border-sage-500 pl-6 md:pl-8"
              >
                <p className="t-h5 text-ink">{block.text}</p>
                {block.cite && (
                  <cite className="t-small mt-3 block not-italic text-ink-faint">
                    {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          default: {
            // Exaustivo: bloco novo sem renderização quebra o build aqui.
            const exhaustive: never = block;
            return exhaustive;
          }
        }
      })}
    </div>
  );
}
