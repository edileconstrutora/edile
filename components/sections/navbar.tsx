"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SplitButton } from "@/components/ui/split-button";
import { Menu, Close } from "@/components/ui/icons";

// `href` = rota direta · `hash` = âncora de seção (vira "/#x" fora da home).
const navLinks: { label: string; hash?: string; href?: string; whatsapp?: boolean }[] = [
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "WhatsApp", href: "https://wa.me/5519999999999", whatsapp: true },
];

/**
 * `solid` força o fundo escuro sempre (use em páginas de fundo claro, onde
 * a navbar transparente ficaria ilegível). Na home (hero escuro) deixe sem.
 */
export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Âncoras funcionam a partir de qualquer página: na home usa "#x",
  // fora dela usa "/#x" (volta pra home e rola até a seção).
  const to = (hash: string) => (onHome ? hash : `/${hash}`);
  // Rota direta usa `href`; âncora usa `hash` (resolvida por `to`).
  const linkHref = (l: { hash?: string; href?: string }) =>
    l.href ?? to(l.hash ?? "#top");
  const homeHref = onHome ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-[var(--ease-out-soft)]",
          solid || scrolled
            ? "border-b border-paper/10 bg-petrol-950/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="relative flex h-20 items-center justify-between text-paper">
          {/* Logo (esquerda) */}
          <Link
            href={homeHref}
            aria-label="EDILE — início"
            className="shrink-0 text-paper"
          >
            <Logo className="h-7 w-auto" />
          </Link>

          {/* Links (centro, desktop) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={linkHref(l)}
                className="flex items-center gap-1.5 text-lead font-medium text-paper/85 transition-colors hover:text-paper"
              >
                {l.whatsapp && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )}
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA (direita, desktop) */}
          <div className="hidden lg:block">
            <SplitButton href={to("#contato")} tone="white" size="sm">
              Portal de clientes
            </SplitButton>
          </div>

          {/* Hambúrguer (mobile) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex size-10 items-center justify-center lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </Container>
      </header>

      {/* Overlay de menu (mobile) */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-paper text-ink lg:hidden",
          "transition-opacity duration-300 ease-[var(--ease-out-soft)]",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <Container className="flex h-20 shrink-0 items-center justify-between">
          <Link
            href={homeHref}
            aria-label="EDILE — início"
            onClick={() => setOpen(false)}
          >
            <Logo className="h-7 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex size-10 items-center justify-center"
          >
            <Close className="size-6" />
          </button>
        </Container>

        <nav className="flex flex-1 flex-col items-center justify-center gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={linkHref(l)}
              onClick={() => setOpen(false)}
              className="t-h3 flex items-center gap-2 transition-colors hover:text-ink-soft"
            >
              {l.whatsapp && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
              {l.label}
            </Link>
          ))}
          <SplitButton
            href={to("#contato")}
            tone="gold"
            className="mt-8"
            onClick={() => setOpen(false)}
          >
            Portal de clientes
          </SplitButton>
        </nav>
      </div>
    </>
  );
}
