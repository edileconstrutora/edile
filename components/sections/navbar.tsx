"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SplitButton } from "@/components/ui/split-button";
import { Menu, Close } from "@/components/ui/icons";

const navLinks = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Empreendimentos", href: "#empreendimentos" },
  { label: "Investidores", href: "#proposito" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          scrolled
            ? "border-b border-paper/10 bg-petrol-950/50 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="relative flex h-20 items-center justify-between text-paper">
          {/* Logo (esquerda) */}
          <Link
            href="#top"
            aria-label="EDILE — início"
            className="shrink-0 text-paper"
          >
            <Logo className="h-7 w-auto" />
          </Link>

          {/* Links (centro, desktop) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-lead font-medium text-paper/85 transition-colors hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA (direita, desktop) */}
          <div className="hidden lg:block">
            <SplitButton href="#contato" tone="white" size="sm">
              Comece agora
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
            href="#top"
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
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="t-h3 transition-colors hover:text-ink-soft"
            >
              {l.label}
            </Link>
          ))}
          <SplitButton
            href="#contato"
            tone="gold"
            className="mt-8"
            onClick={() => setOpen(false)}
          >
            Comece agora
          </SplitButton>
        </nav>
      </div>
    </>
  );
}
