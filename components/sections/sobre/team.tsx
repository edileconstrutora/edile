import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { TeamCard, type TeamMember } from "@/components/ui/team-card";

// Nomes, cargos e fotos são placeholder — trocar pela equipe real da Edile.
const team: TeamMember[] = [
  { name: "Ricardo Almeida", role: "Fundador e CEO", photo: "/images/team/p1.webp" },
  { name: "André Santos", role: "Diretor comercial", photo: "/images/team/p2.webp" },
  { name: "Juliana Castro", role: "Arquiteta-chefe", photo: "/images/team/p3.webp" },
  { name: "Marcos Vieira", role: "Engenheiro responsável", photo: "/images/team/p4.webp" },
  { name: "Felipe Moraes", role: "Incorporação e novos negócios", photo: "/images/team/p5.webp" },
  { name: "Patrícia Lima", role: "Relacionamento com clientes", photo: "/images/team/p6.webp" },
];

/**
 * Seção "Nosso time" (fundo claro): cabeçalho central + grade 3→2→1 de
 * cards de equipe.
 */
export function SobreTeam() {
  return (
    <Section tone="paper">
      <Container>
        <Reveal className="mb-12 md:mb-16">
          <SectionIntro
            align="center"
            eyebrow="Nosso time"
            title="As pessoas por trás de cada entrega."
            titleClassName="max-w-[600px] text-balance text-ink"
            description="Um time multidisciplinar que une engenharia, arquitetura e atendimento para cuidar do seu patrimônio do começo ao fim."
            descriptionClassName="max-w-[520px]"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <TeamCard {...m} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
