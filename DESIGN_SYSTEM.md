# EDILE — Design System

Referência única do projeto. **Toda nova página/componente deve usar estes tokens e primitivos.**
Nada de cor, tamanho de fonte, espaçamento ou raio hardcoded fora de `app/globals.css`.

---

## Princípios

1. **Minimalista e premium** — pouco ornamento, muito ar (espaço em branco), tipografia confiante.
2. **Uma só família tipográfica** (Inter), hierarquia feita por tamanho/peso/tracking — nunca por trocar de fonte.
3. **Calma cromática** — fundo off-white quente (`paper`), texto grafite, petróleo da marca como âncora, sage como acento.
4. **Linhas como linguagem** — hairlines (`Divider`) e rótulos `/` estruturam as seções no lugar de caixas/bordas. Toda seção abre com `SectionHeader` (regra + `/` + título grande).
5. **Movimento discreto** — reveals curtos, parallax sutil, micro-interações de hover. Sempre respeitando `prefers-reduced-motion`.

---

## Tokens (definidos em `app/globals.css` → `@theme`)

### Cor
| Token | Uso |
|---|---|
| `petrol-50 … 950` | Primária da marca. `petrol-900` (#122e39) = fundo hero/CTA. `petrol-50` = banda clara sutil. |
| `sage-100 … 600` | Acento secundário (#5d7c7e = `sage-500`). Eyebrows, cards de feature. |
| `gold` / `gold-bright` | Acento de CTA (#ffbb0f). Botão primário do hero (hover = `gold-bright`). |
| `paper` | Fundo padrão (off-white quente #f6f5f2). |
| `ink` / `ink-soft` / `ink-faint` | Texto principal / secundário / terciário. |
| `line` | Bordas e divisores. |
| `neutral-100 … 700` | Neutros de apoio. |

Use sempre via utilitários Tailwind: `bg-petrol-900`, `text-ink-soft`, `border-line`, etc.

### Tipografia — use as classes semânticas (não setar tamanho manualmente)

**Regra dos títulos (inegociável):** peso leve (300/400 — **nunca bold**), em **caixa normal** (sentence case), tracking levemente fechado. Escreva o texto em caixa normal no JSX.
**Caixa alta é exclusiva do hero** (assinatura da marca) e dos **rótulos** (`.t-eyebrow`). Não usar uppercase em títulos de seção/card.

Escala generosa/premium (títulos grandes, corpo confortável):

| Classe | Papel | Tamanho · peso · tracking |
|---|---|---|
| `.t-display` | Títulos de impacto (CTA). | clamp 3→5.75rem · 300 · -0.02em |
| `.t-h2` | Título de seção. | clamp 2.5→4rem · 300 · -0.015em |
| `.t-h3` | Título de card/bloco. | 1.875rem · 400 · -0.01em |
| `.t-h4` | Subtítulo/destaque. | 1.5rem · 400 · 0 |
| `.t-body-lg` / `.t-body` / `.t-small` | Texto corrido (caixa normal). | 1.25 / 1.0625 / 0.9375rem |
| `.t-eyebrow` | Rótulo/kicker UPPERCASE. Use via `<Eyebrow>` (formato `/ RÓTULO`). | 0.8125rem · 500 · 0.12em |
| Hero (h1) | Único título em **CAIXA ALTA**: peso 300, espaçado. Inline em `hero.tsx`. | — |

### Raio · Sombra · Layout · Motion
- **Tudo reto (sem raio): botões, cards e imagens.** Exceção única: `IconButton` (setas de slider) é circular por design, conforme a referência. Tokens `rounded-*` reservados para casos pontuais futuros.
- Sombra: `shadow-[var(--shadow-soft)]` · `shadow-[var(--shadow-lift)]` (hover de card). Premium = pouca sombra.
- Container: largura máx `--container-max` (1350px) via `<Container>`.
- Easing padrão: `ease-[var(--ease-out-soft)]`.

---

## Primitivos (`components/ui/`)

| Componente | Para quê |
|---|---|
| `<Container>` | Largura máxima + padding lateral fluido. Envolve o conteúdo de toda seção. |
| `<Section tone>` | Bloco com padding vertical generoso (clamp 96→176px) e fundo (`paper`/`petrol`/`sage`). |
| `<SectionHeader eyebrow title action? tone>` | **Abre toda seção**: regra hairline no topo + rótulo `/` + título grande (`t-h2`), alinhado à esquerda. |
| `<Divider tone>` | Linha hairline para estruturar seções. tones: `dark` (fundo claro) / `light` (fundo escuro). |
| `<Eyebrow tone>` | Kicker no formato `/ RÓTULO`. tones: `petrol`/`sage`/`muted`/`light`. |
| `<Button variant size withArrow href?>` | CTA. variants: `solid`/`outline`/`ghost`/`light`. Renderiza `<a>` se receber `href`. |
| `<SplitButton href tone size>` | **CTA primário** dividido em rótulo + caixa de seta diagonal (segmentos juntos). tones: `gold` (hero/seções) · `white` (sobre fundo escuro, ex.: menu). |
| `<IconButton tone>` | Botão circular de ícone (setas de carrossel). |
| `<Card hover>` | Superfície de card. **Cantos retos (sem raio) e sem stroke** — separação por sombra sutil (`shadow-soft`), elevação no hover. |
| `<Carousel controls arrowTone>` | Carrossel (Embla). Cada filho = um slide. |
| `<Reveal delay y>` | Fade + translate ao entrar na viewport. |
| `<Logo>` | Wordmark EDILE (SVG, `currentColor`). Herda a cor do texto — `text-paper` no escuro. |
| `icons.tsx` | Ícones SVG (setas, chevrons, sociais, menu). |

### Regras de uso
- **Página nova** = composição de `<Section>` → `<Container>` → primitivos. Veja `app/page.tsx`.
- Título de seção: padrão `Eyebrow` + `h2.t-h2`, centralizado, dentro de um `<Reveal>`.
- CTA primário sobre fundo claro = `<Button variant="solid">`; sobre fundo escuro = `variant="light"`.
- Faltou um componente? **Crie em `components/ui/`** seguindo o padrão (props tipadas, tokens, `cn()`), documente aqui, e só então use.

---

## Conteúdo
- Idioma: **PT-BR**. Sem termos em inglês ou resíduos de template.
- Tom: incorporadora de alto padrão — sóbrio, confiante, sem exageros publicitários.

## Stack
Next.js (App Router) · Tailwind v4 (tokens em CSS) · Geist · Lenis (scroll suave) · Framer Motion · Embla.
Deploy: Vercel (`next build` deve passar limpo).
