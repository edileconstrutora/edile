"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Chamfer } from "@/components/ui/chamfer";
import { cn } from "@/lib/utils";
import { submitToWeb3Forms } from "@/lib/web3forms";

const fieldClass =
  "w-full border-b border-line bg-transparent pb-3 text-body text-ink placeholder:text-ink-soft transition-colors duration-300 focus:border-ink focus:outline-none";

type Status = "idle" | "sending" | "ok" | "error";

export function Form() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    setStatus("sending");
    setFeedback("");
    const res = await submitToWeb3Forms({
      subject: "Novo contato pelo site EDILE",
      name: String(fd.get("name") || ""),
      telefone: String(fd.get("telefone") || ""),
      email: String(fd.get("email") || ""),
    });
    if (res.ok) {
      setStatus("ok");
      formEl.reset();
    } else {
      setStatus("error");
    }
    setFeedback(res.message);
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-mist">
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
              <h2 className="t-h2 text-ink">
                Fale com o corretor online
              </h2>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Qual o seu nome?*"
                  aria-label="Qual o seu nome?"
                  className={fieldClass}
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  aria-label="Seu telefone"
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu email*"
                  aria-label="Seu email"
                  className={fieldClass}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-xs bg-gold py-3.5 text-body text-ink transition-colors duration-300 hover:bg-gold-bright disabled:opacity-70"
                >
                  {status === "sending" ? "Enviando…" : "Iniciar Atendimento"}
                </button>

                {feedback && (
                  <p
                    role="status"
                    className={cn(
                      "t-small -mt-3",
                      status === "ok" ? "text-ink" : "text-ink-soft"
                    )}
                  >
                    {feedback}
                  </p>
                )}
              </form>
            </Chamfer>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
