import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Instagram, LinkedIn, Facebook } from "@/components/ui/icons";

const columns = [
  {
    title: "Empreendimentos",
    links: ["Residencial", "Corporativo", "Litoral", "Em lançamento"],
  },
  {
    title: "Institucional",
    links: ["Quem somos", "Investidores", "Sustentabilidade", "Trabalhe conosco"],
  },
  {
    title: "Atendimento",
    links: ["Portal do cliente", "Fale conosco", "WhatsApp", "Imprensa"],
  },
];

const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "LinkedIn", Icon: LinkedIn },
  { label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-petrol-950 text-paper">
      <Container className="py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-3">
            <Logo className="h-8 w-auto text-paper" />
            <p className="t-body mt-5 max-w-sm text-paper/60">
              Incorporadora de alto padrão. Arquitetura, acabamentos e
              experiências em sintonia com o incomum.
            </p>
            <div className="mt-8 flex items-center gap-5">
              {socials.map(({ label, Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-paper/60 transition-colors hover:text-paper"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Colunas */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="t-eyebrow mb-5 text-paper/50">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="t-small text-paper/75 transition-colors hover:text-paper"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 md:flex-row md:items-center">
          <p className="t-small text-paper/50">
            © {new Date().getFullYear()} EDILE Incorporadora. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="t-small text-paper/50 hover:text-paper/80">
              Política de privacidade
            </Link>
            <Link href="#" className="t-small text-paper/50 hover:text-paper/80">
              Termos de uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
