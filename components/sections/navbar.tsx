"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SplitButton } from "@/components/ui/split-button";
import { Menu, Close, ArrowUpRight } from "@/components/ui/icons";

const navLinks: { label: string; hash?: string; href?: string }[] = [
  { label: "Início", href: "/" },
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Sobre a Edile", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IG_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YT_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  const to = (hash: string) => (onHome ? hash : `/${hash}`);
  const linkHref = (l: { hash?: string; href?: string }) =>
    l.href ?? to(l.hash ?? "#top");
  const homeHref = onHome ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-[var(--ease-out-soft)]",
          "border-b border-paper/10 bg-petrol-950/80 backdrop-blur-xl backdrop-saturate-150"
        )}
      >
        {/*
          Layout de 3 colunas via flexbox — sem absolute no nav,
          eliminando colisão entre logo, links e CTAs em qualquer tamanho.
        */}
        <Container className="flex h-20 items-center gap-4 text-paper">
          {/* Logo (esquerda — shrink-0 para não comprimir) */}
          <Link
            href={homeHref}
            aria-label="EDILE — início"
            className="shrink-0 text-paper"
          >
            <Logo className="h-7 w-auto" />
          </Link>

          {/* Links (centro — flex-1 com justify-center garante que nunca toca logo/CTA) */}
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={linkHref(l)}
                className="whitespace-nowrap text-lead font-medium text-paper/85 transition-colors hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTAs (direita, desktop) + hambúrguer (mobile) — sempre no fim do flex */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group/sb hidden items-stretch lg:inline-flex"
            >
              <span className="flex h-11 items-center whitespace-nowrap rounded-sm bg-[#5E7C7E] px-5 text-lead font-medium text-paper transition-colors duration-300 group-hover/sb:bg-[#4e6a6c]">
                Atendimento
              </span>
              <span className="flex size-11 items-center justify-center rounded-sm bg-[#5E7C7E] text-paper transition-colors duration-300 group-hover/sb:bg-[#4e6a6c]">
                {WA_ICON}
              </span>
            </Link>
            <div className="hidden lg:block">
              <SplitButton
                href="https://cliente.edile.com.br"
                target="_blank"
                rel="noopener noreferrer"
                tone="white"
                size="sm"
              >
                Portal do Cliente
              </SplitButton>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex size-10 items-center justify-center lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Menu mobile — fundo petrol, links à esquerda, redes sociais no rodapé */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-petrol-950 text-paper lg:hidden",
          "transition-[opacity,visibility] duration-300 ease-[var(--ease-out-soft)]",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {/* Topo: logo + fechar */}
        <Container className="flex h-20 shrink-0 items-center justify-between border-b border-paper/10">
          <Link
            href={homeHref}
            aria-label="EDILE — início"
            onClick={() => setOpen(false)}
            className="text-paper"
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

        {/* Links — alinhados à esquerda com mesma margem dos botões */}
        <nav className="flex flex-1 flex-col overflow-y-auto">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={linkHref(l)}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 px-6 py-5 text-[1.75rem] font-[440] tracking-[-0.045em] text-paper transition-colors hover:text-paper/70"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Botões de ação — ghost outlined, brancos, mesma largura */}
          <div className="flex flex-col gap-3 px-6 pt-8">
            <Link
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-between rounded-sm border border-paper/50 px-5 text-lead font-medium text-paper transition-colors duration-200 hover:border-paper hover:bg-paper/10"
            >
              <span>Atendimento</span>
              {WA_ICON}
            </Link>
            <Link
              href="https://cliente.edile.com.br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-between rounded-sm border border-paper/50 px-5 text-lead font-medium text-paper transition-colors duration-200 hover:border-paper hover:bg-paper/10"
            >
              <span>Portal do Cliente</span>
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          {/* Rodapé: redes sociais alinhadas com mesma margem */}
          <div className="mt-auto border-t border-paper/10 px-6 py-6">
            <p className="mb-4 text-small font-semibold uppercase tracking-widest text-paper/40">
              Siga a Edile
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="https://instagram.com/edileconstrutora"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Instagram"
                className="text-paper/60 transition-colors hover:text-paper"
              >
                {IG_ICON}
              </Link>
              <Link
                href="https://youtube.com/@edileconstrutora"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="YouTube"
                className="text-paper/60 transition-colors hover:text-paper"
              >
                {YT_ICON}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
