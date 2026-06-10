"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Chamfer } from "@/components/ui/chamfer";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border-b border-line bg-transparent pb-3 text-body text-ink placeholder:text-ink-soft transition-colors duration-300 focus:border-ink focus:outline-none";

export function Form() {
  return (
    <section id="contato" className="relative overflow-hidden bg-mist">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/form.webp"
          alt="Ambiente de alto padrão EDILE"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="relative">
        <div className="flex py-16 md:py-24 lg:min-h-[720px] lg:items-center">
          <Reveal className="w-full max-w-[580px]">
            <Chamfer corner="tr" size="3rem" className="bg-paper p-8 sm:p-10 md:p-12">
              <h2 className="t-h2 text-ink">Vamos trabalhar juntos</h2>
              <p className="t-body mt-4 max-w-[340px] leading-snug text-ink-soft">
                Envie sua mensagem e retornamos o mais breve possível.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-10 flex flex-col gap-8"
              >
                <input
                  type="text"
                  required
                  placeholder="Seu nome*"
                  aria-label="Seu nome"
                  className={fieldClass}
                />
                <div className="grid gap-8 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    aria-label="Seu telefone"
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu e-mail*"
                    aria-label="Seu e-mail"
                    className={fieldClass}
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="Sua mensagem*"
                  aria-label="Sua mensagem"
                  className={cn(fieldClass, "resize-none")}
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xs bg-gold py-3.5 text-body text-ink transition-colors duration-300 hover:bg-gold-bright"
                >
                  Enviar mensagem
                </button>
              </form>
            </Chamfer>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
