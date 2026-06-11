/**
 * Envio de formulários via Web3Forms (https://web3forms.com) — grátis, sem
 * backend. A chave é pública por design; defina em `.env.local` (e na Vercel):
 *   NEXT_PUBLIC_WEB3FORMS_KEY=sua-access-key
 * Enquanto a chave não existir, o envio retorna uma mensagem de "não configurado".
 */
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export type Web3FormsResult = { ok: boolean; message: string };

export async function submitToWeb3Forms(
  fields: Record<string, string>
): Promise<Web3FormsResult> {
  if (!ACCESS_KEY) {
    return {
      ok: false,
      message: "Formulário ainda não configurado. Tente novamente em breve.",
    };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
    });
    const data = await res.json();
    return data.success
      ? { ok: true, message: "Recebido! Em breve entraremos em contato." }
      : {
          ok: false,
          message: data.message || "Não foi possível enviar. Tente novamente.",
        };
  } catch {
    return { ok: false, message: "Erro de conexão. Tente novamente." };
  }
}
