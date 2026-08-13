"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, ShieldCheck, PhoneCall } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface HelvetiaLeadFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  sourceLocation?: string;
}

export function HelvetiaLeadForm({
  className,
  title = "Receba o Material Exclusivo",
  subtitle = "Preencha abaixo para receber a tabela de valores atualizada, plantas e o book do empreendimento diretamente no seu WhatsApp.",
  sourceLocation = "Helvetia Residence Landing Page",
}: HelvetiaLeadFormProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [interesse, setInteresse] = useState<"moradia" | "investimento" | "lote">("lote");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !email || !telefone) return;

    setCarregando(true);
    // Simula envio de lead (pode ser integrado a webhook CRM / API)
    setTimeout(() => {
      setCarregando(false);
      setEnviado(true);
    }, 600);
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Solicitei o material do Helvétia Residence através do site.\nMeu Nome: ${nome}\nInteresse: ${
      interesse === "moradia"
        ? "Construir para Morar"
        : interesse === "investimento"
        ? "Investimento Patrimonial"
        : "Lote Residencial Prime"
    }`
  );

  return (
    <div
      className={cn(
        "relative rounded-sm border border-paper/15 bg-petrol-950/90 p-6 backdrop-blur-md shadow-[var(--shadow-lift)] md:p-8 text-paper",
        className
      )}
    >
      {/* Decorative accent top bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-sage-400 to-gold rounded-t-sm" />

      {enviado ? (
        <div className="flex flex-col items-center justify-center text-center py-6 animate-fadeIn">
          <div className="flex size-14 items-center justify-center rounded-full bg-gold/20 text-gold mb-4">
            <CheckCircle className="size-8" />
          </div>
          <h3 className="t-h4 text-paper font-medium">Solicitação Recebida!</h3>
          <p className="t-body mt-2 text-paper/80 max-w-sm">
            Obrigado, <strong className="text-paper">{nome}</strong>! Nossa equipe de atendimento VIP já está separando o material exclusivo para você.
          </p>

          <div className="mt-6 w-full space-y-3">
            <a
              href={`https://wa.me/5519999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-[#25D366] px-5 py-3.5 text-lead font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="size-5" />
              <span>Receber Imediatamente no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setEnviado(false);
                setNome("");
                setEmail("");
                setTelefone("");
              }}
              className="text-small text-paper/60 hover:text-paper underline underline-offset-4 transition-colors"
            >
              Enviar outra solicitação
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <span className="inline-block rounded-xs bg-gold/15 px-2.5 py-1 text-micro font-semibold uppercase tracking-wider text-gold">
              Atendimento VIP & Exclusivo
            </span>
            <h3 className="t-h4 mt-2 text-paper text-balance">{title}</h3>
            <p className="t-small mt-1.5 text-paper/70 leading-relaxed">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-small font-medium text-paper/85 mb-1">
                Nome completo *
              </label>
              <input
                id="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-xs border border-paper/20 bg-petrol-900/60 px-3.5 py-2.5 text-body text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-small font-medium text-paper/85 mb-1">
                  E-mail principal *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-xs border border-paper/20 bg-petrol-900/60 px-3.5 py-2.5 text-body text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-small font-medium text-paper/85 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(19) 99999-9999"
                  className="w-full rounded-xs border border-paper/20 bg-petrol-900/60 px-3.5 py-2.5 text-body text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-small font-medium text-paper/85 mb-1.5">
                Qual seu principal objetivo?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "lote", label: "Lote Prime" },
                  { id: "moradia", label: "Moradia" },
                  { id: "investimento", label: "Investimento" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setInteresse(opt.id as any)}
                    className={cn(
                      "rounded-xs border py-2 text-micro font-medium transition-all text-center",
                      interesse === opt.id
                        ? "border-gold bg-gold/20 text-gold shadow-sm"
                        : "border-paper/15 bg-petrol-900/40 text-paper/70 hover:border-paper/40 hover:text-paper"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="group flex w-full items-center justify-center gap-2 rounded-xs bg-gold px-5 py-3.5 text-lead font-semibold text-petrol-950 transition-all duration-300 hover:bg-gold-bright active:scale-[0.99] disabled:opacity-50"
            >
              <span>{carregando ? "Processando..." : "Solicitar Apresentação VIP"}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-micro text-paper/60 pt-1">
              <ShieldCheck className="size-3.5 text-gold shrink-0" />
              <span>Dados 100% protegidos. Respeitamos sua privacidade.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
