export type LegalBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

/**
 * Corpo de documento legal (Política de Privacidade, Termos de Uso): coluna de
 * leitura estreita com headings de seção, parágrafos e listas. O conteúdo vem
 * em blocos tipados; o estilo é todo fixo aqui.
 */
export function LegalDoc({
  updatedAt,
  blocks,
}: {
  updatedAt?: string;
  blocks: LegalBlock[];
}) {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      {updatedAt && (
        <p className="t-small text-ink-faint">Última atualização: {updatedAt}</p>
      )}
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="t-h4 mt-12 text-ink first:mt-8">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="t-body mt-5 text-ink-soft">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="mt-5 flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="t-body flex gap-3 text-ink-soft">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink-faint/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
