import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const navColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Edile",
    links: [
      { label: "Início", href: "/" },
      { label: "Empreendimentos", href: "/empreendimentos" },
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Fale conosco", href: "/#contato" },
    ],
  },
  {
    title: "Políticas",
    links: [
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de uso", href: "/termos-de-uso" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-petrol-950 text-paper">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-10">

          {/* Coluna esquerda: logo + descrição + endereço + CNPJ */}
          <div className="lg:max-w-[320px]">
            <Logo className="h-8 w-auto text-paper" />

            <p className="mt-6 text-small leading-relaxed text-paper/60">
              Incorporadora e construtora de condomínios e loteamentos de alto
              padrão em Indaiatuba e região. Responsabilidade com o seu amanhã.
            </p>

            <div className="mt-6 space-y-1 text-small text-paper/50">
              <p>Rua Armando Salles de Oliveira, 1953</p>
              <p>Indaiatuba — SP</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-small text-paper/40">Siga a Edile</span>
              <Link
                href="https://instagram.com/edileconstrutora"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/50 transition-colors hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              <Link
                href="mailto:contato@edile.com.br"
                aria-label="E-mail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/50 transition-colors hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@edileconstrutora"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/50 transition-colors hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Colunas de navegação + contato */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3">
            {navColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-5 text-small font-semibold uppercase tracking-widest text-paper/40">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-small text-paper/70 transition-colors hover:text-paper"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="mb-5 text-small font-semibold uppercase tracking-widest text-paper/40">
                Contato
              </p>
              <ul className="space-y-3">
                <li className="text-small text-paper/70">contato@edile.com.br</li>
                <li>
                  <Link
                    href="https://instagram.com/edileconstrutora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-paper/70 transition-colors hover:text-paper"
                  >
                    @edileconstrutora
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/5519999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-paper/70 transition-colors hover:text-paper"
                  >
                    Atendimento WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 text-small text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EDILE Empreendimentos Imobiliários. Todos os direitos reservados.</p>
          <p>CNPJ 59.780.967/0001-86</p>
        </div>
      </Container>
    </footer>
  );
}
