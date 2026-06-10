import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Stat } from "@/components/ui/stat";

const stats = [
  { value: "180+", label: "Empreendimentos entregues" },
  { value: "95%", label: "Clientes satisfeitos" },
  { value: "15+", label: "Anos de experiência" },
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
