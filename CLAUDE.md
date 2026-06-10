@AGENTS.md

# EDILE — site da incorporadora

Antes de criar/alterar qualquer página ou componente, leia **`DESIGN_SYSTEM.md`** (raiz) e siga-o à risca. Ele é a referência completa de tokens, primitivos e regras.

## Regras inegociáveis

- **Zero hardcode** de cor, tamanho de fonte, raio ou sombra fora de `app/globals.css`. Use sempre os tokens (`bg-petrol-900`, `text-ink`, `rounded-sm`, `shadow-[var(--shadow-soft)]`, …).
- **Tipografia só pelas classes semânticas** (`.t-display`, `.t-h2`, `.t-h4`, `.t-body`, `.t-eyebrow`, …) na fonte **Inter**. Hierarquia por tamanho/peso/tracking — **nunca** trocar de família. Os tamanhos de título são **fixos no desktop** (sem `clamp`/fluido); o menor do mobile vem de `@media` em `globals.css`.
- **Sem "viúvas" e títulos balanceados:** parágrafos usam `text-wrap: pretty`; títulos com **mais de 3 palavras** usam `text-balance` (quebra em 2+ linhas equilibradas). Nunca deixe uma palavra sozinha na última linha. Para forçar 1 frase por linha, use `<span className="whitespace-nowrap">` por frase — **nunca `<br>`**.
- **Páginas = composição** de `<Section>` → `<Container>` → primitivos de `components/ui/`. Toda seção abre com `<SectionIntro>` dentro de `<Reveal>`. CTA primário = `<SplitButton>`. Chanfro = `<Chamfer>`. Veja `app/page.tsx`.
- **Faltou um componente?** Crie em `components/ui/` no mesmo padrão (props tipadas, tokens, `cn()`), documente em `DESIGN_SYSTEM.md`, e só então use. Não repita markup entre seções.
- **Conteúdo em PT-BR**, tom sóbrio de alto padrão. A identidade real (Indaiatuba/SP, condomínios e loteamentos de alto padrão, slogan "Responsabilidade com o seu amanhã") já está nas seções — não inventar dados nem voltar a copy genérica de template.
- `next build` precisa passar limpo (pré-requisito Vercel).

## Placeholders a confirmar com o cliente

Estão marcados com comentário `placeholder` no código e **devem ser trocados pelos reais** quando disponíveis:
- Números das estatísticas (faixa de Stats e indicadores do Why) e a prova social (avatares).
- **Nomes dos empreendimentos** (os atuais são fictícios) e as imagens.
- Telefone do rodapé. (E-mail `contato@edile.com.br`, Instagram `@edileconstrutora` e cidade já são reais.)
- Newsletter e formulário são só UI (sem backend) — integrar a um serviço de e-mail/CRM quando definido.
