import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

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
              <Reveal
                key={s.value}
                delay={i * 0.1}
                className="flex items-center gap-4 sm:w-[300px]"
              >
                <p className="text-[3.25rem] font-[440] leading-none tracking-[-0.085em] text-ink">
                  {s.value}
                </p>
                <p className="t-body max-w-[8rem] leading-[1.4] text-ink-soft">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
