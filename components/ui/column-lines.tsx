import { Container } from "./container";

/**
 * 3 linhas verticais (bordas + centro do container) como grade de fundo.
 * Coloque dentro de um pai `relative` — preenche toda a altura dele.
 * Só desktop. Em fundo escuro, passe `tone="light"`.
 */
export function ColumnLines({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "bg-paper/[0.08]" : "bg-ink/[0.07]";
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <Container className="relative h-full px-0">
        <span className={`absolute inset-y-0 left-0 w-px ${color}`} />
        <span className={`absolute inset-y-0 left-1/2 w-px ${color}`} />
        <span className={`absolute inset-y-0 right-0 w-px ${color}`} />
      </Container>
    </div>
  );
}
