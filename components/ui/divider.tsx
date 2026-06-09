import { cn } from "@/lib/utils";

/**
 * Linha hairline para estruturar seções (linguagem de linhas do design system).
 * tone "dark" para fundos claros; "light" para fundos escuros.
 */
export function Divider({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <hr
      className={cn(
        "h-px w-full border-0",
        tone === "dark" ? "bg-line" : "bg-paper/15",
        className
      )}
    />
  );
}
