"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";
import { submitToWeb3Forms } from "@/lib/web3forms";

type Status = "idle" | "sending" | "ok" | "error";

/** Form de newsletter do rodapé — envia via Web3Forms. */
export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    setStatus("sending");
    setFeedback("");
    const res = await submitToWeb3Forms({
      subject: "Nova inscrição na newsletter EDILE",
      email: String(fd.get("email") || ""),
    });
    if (res.ok) {
      setStatus("ok");
      formEl.reset();
      setFeedback("Inscrição recebida. Obrigado!");
    } else {
      setStatus("error");
      setFeedback(res.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-[360px]">
      <div className="border-b border-paper/25 py-3">
        <input
          type="email"
          name="email"
          required
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          className="w-full bg-transparent text-micro text-paper placeholder:text-paper/50 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-5 inline-flex items-center gap-2.5 text-micro uppercase tracking-wider text-paper disabled:opacity-70"
      >
        {status === "sending" ? "Enviando…" : "Inscrever"}
        <span className="inline-flex size-[18px] items-center justify-center rounded-xs border border-paper/40 bg-paper/15 transition-colors duration-300 group-hover:bg-paper/25">
          <ArrowUpRight className="size-3" />
        </span>
      </button>
      {feedback && (
        <p role="status" className="mt-3 text-micro text-paper/60">
          {feedback}
        </p>
      )}
    </form>
  );
}
