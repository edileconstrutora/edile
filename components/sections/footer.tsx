import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ArrowUpRight } from "@/components/ui/icons";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Contato",
    links: [
      // Telefone é placeholder — confirmar com a Edile.
      { label: "+55 19 0000-0000", href: "tel:+551900000000" },
      { label: "contato@edile.com.br", href: "mailto:contato@edile.com.br" },
      { label: "Indaiatuba, SP", href: "#" },
      {
        label: "@edileconstrutora",
        href: "https://instagram.com/edileconstrutora",
      },
    ],
  },
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/" },
      { label: "Empreendimentos", href: "/#empreendimentos" },
      { label: "Sobre", href: "/#sobre" },
      { label: "Investidores", href: "/#proposito" },
    ],
  },
  {
    title: "Mais",
    links: [
      { label: "Fale conosco", href: "/#contato" },
      { label: "Blog", href: "/blog" },
      { label: "Trabalhe conosco", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-petrol-950 text-paper">
      <Container className="pt-[70px]">
        {/* Newsletter + colunas */}
        <div className="flex flex-col gap-12 pt-12 lg:flex-row lg:justify-between lg:gap-10">
          {/* Newsletter */}
          <div className="lg:max-w-[360px] lg:flex-1">
            <p className="text-small text-paper/60">Newsletter</p>
            <p className="mt-1.5 t-h5 text-paper">
              Receba novidades e lançamentos
            </p>

            <form className="mt-8 w-full max-w-[360px]">
              <div className="border-b border-paper/25 py-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full bg-transparent text-micro text-paper placeholder:text-paper/50 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="group mt-5 inline-flex items-center gap-2.5 text-micro uppercase tracking-wider text-paper"
              >
                Inscrever
                <span className="inline-flex size-[18px] items-center justify-center rounded-xs border border-paper/40 bg-paper/15 transition-colors duration-300 group-hover:bg-paper/25">
                  <ArrowUpRight className="size-3" />
                </span>
              </button>
            </form>
          </div>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
            {columns.map((col, i) => (
              <div
                key={col.title}
                className={i === 0 ? "col-span-2 sm:col-span-1" : undefined}
              >
                <p className="mb-5 text-small text-paper/60">{col.title}</p>
                <ul className="space-y-[6px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-small text-paper/85 transition-colors duration-300 hover:text-paper"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Assinatura da marca */}
        <p className="mt-14 t-h5 text-paper/80 md:mt-20">
          Responsabilidade com o seu amanhã.
        </p>

        {/* Marca d'água */}
        <div className="mb-10 mt-8 overflow-hidden md:mb-14 md:mt-10" aria-hidden>
          <Logo className="h-auto w-full text-paper/[0.05]" />
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col gap-3 border-t border-paper/10 py-6 text-small text-paper/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} EDILE Empreendimentos Imobiliários.
            Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-paper"
            >
              Política de privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="transition-colors hover:text-paper"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
