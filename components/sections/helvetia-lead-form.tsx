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
  title = "Solicite Informações VIP",
  subtitle = "Preencha abaixo para receber o book em PDF, plantas e a tabela de lançamento diretamente no seu WhatsApp.",
  sourceLocation = "Helvetia Residence Landing Page",
}: HelvetiaLeadFormProps) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [interesse, setInteresse] = useState("lote");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nomeCompleto = `${nome} ${sobrenome}`.trim();
    if (!nomeCompleto || !email || !telefone) return;

    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      setEnviado(true);
    }, 600);
  }

  const nomeCompleto = `${nome} ${sobrenome}`.trim();
  const whatsappMessage = encodeURIComponent(
    `Olá! Solicitei o material do Helvétia Residence através do site.\nMeu Nome: ${nomeCompleto}\nInteresse: ${
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
        "relative rounded-md bg-white p-6 shadow-2xl md:p-8 text-gray-900 border border-gray-100/80",
        className
      )}
    >
      {enviado ? (
        <div className="flex flex-col items-center justify-center text-center py-6 animate-fadeIn">
          <div className="flex size-14 items-center justify-center rounded-full bg-[#c9ac8b]/20 text-[#a88764] mb-4">
            <CheckCircle className="size-8" />
          </div>
          <h3 className="t-h4 text-gray-900 font-semibold">Solicitação Recebida!</h3>
          <p className="t-body mt-2 text-gray-600 max-w-sm">
            Obrigado, <strong className="text-gray-900">{nomeCompleto}</strong>! Nossa equipe VIP já está enviando o material completo para você.
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
                setSobrenome("");
                setEmail("");
                setTelefone("");
              }}
              className="text-small text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
            >
              Enviar outra solicitação
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 text-center">
            <h3 className="t-h4 text-gray-900 font-semibold text-balance">{title}</h3>
            <p className="t-small mt-1.5 text-gray-500 leading-relaxed max-w-xs mx-auto">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <input
                  id="nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome *"
                  className="w-full rounded-xs bg-[#f3f4f6] px-3.5 py-3 text-body text-gray-900 placeholder:text-gray-400 border border-transparent focus:border-[#c9ac8b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9ac8b] transition-all"
                />
              </div>
              <div>
                <input
                  id="sobrenome"
                  type="text"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                  placeholder="Sobrenome"
                  className="w-full rounded-xs bg-[#f3f4f6] px-3.5 py-3 text-body text-gray-900 placeholder:text-gray-400 border border-transparent focus:border-[#c9ac8b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9ac8b] transition-all"
                />
              </div>
            </div>

            <div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                className="w-full rounded-xs bg-[#f3f4f6] px-3.5 py-3 text-body text-gray-900 placeholder:text-gray-400 border border-transparent focus:border-[#c9ac8b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9ac8b] transition-all"
              />
            </div>

            <div>
              <input
                id="telefone"
                type="tel"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="WhatsApp com DDD *"
                className="w-full rounded-xs bg-[#f3f4f6] px-3.5 py-3 text-body text-gray-900 placeholder:text-gray-400 border border-transparent focus:border-[#c9ac8b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9ac8b] transition-all"
              />
            </div>

            <div>
              <select
                id="interesse"
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
                className="w-full rounded-xs bg-[#f3f4f6] px-3.5 py-3 text-body text-gray-700 border border-transparent focus:border-[#c9ac8b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9ac8b] transition-all"
              >
                <option value="lote">Selecione o Objetivo *</option>
                <option value="lote">Lote Residencial Prime (500m² - 1.200m²)</option>
                <option value="moradia">Construção para Morar</option>
                <option value="investimento">Investimento Patrimonial</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="mt-2 group flex w-full items-center justify-center gap-2 rounded-xs bg-[#c9ac8b] hover:bg-[#b89977] px-5 py-4 text-lead font-semibold text-white uppercase tracking-wider transition-all duration-300 active:scale-[0.99] disabled:opacity-50 shadow-md"
            >
              <span>{carregando ? "Processando..." : "ENVIAR SOLICITAÇÃO"}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-micro text-gray-400 pt-1">
              <ShieldCheck className="size-3.5 text-[#c9ac8b] shrink-0" />
              <span>Seus dados estão 100% seguros e protegidos.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

