import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Stat } from "@/components/ui/stat";

// Números são placeholder — confirmar com a Edile.
const stats = [
  { value: "108+", label: "Imóveis entregues" },
  { value: "12+", label: "Anos construindo imóveis" },
  { value: "100%", label: "Foco em valorização" },
];

export function Stats() {
  return (
    <section className="bg-paper pb-16">
      <Container>
        <div className="border-t border-line pt-14">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.1} className="sm:w-[300px]">
                <Stat variant="inline" value={s.value} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
