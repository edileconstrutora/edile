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

**Regra dos títulos (inegociável):** peso leve (**440** — nunca bold), em **caixa normal** (sentence case), tracking levemente fechado. Escreva o texto em caixa normal no JSX.
**Caixa alta é exclusiva do hero** (assinatura da marca) e dos **rótulos** (`.t-eyebrow`). Não usar uppercase em títulos de seção/card.

Escala generosa/premium (títulos grandes, corpo confortável). **Sempre via as classes `.t-*` — nunca `text-[...]`:**

| Classe | Papel | Tamanho · peso · tracking |
|---|---|---|
| `.t-display` | Título de impacto (CTA grande). | 48px (mobile) / **92px (desktop)** · 440 · -0.065em |
| `.t-display-lg` | h1 do hero · título de seção em destaque (Empreendimentos). | 44px / **66px** · 440 · -0.065em |
| `.t-h2` | Título de seção (padrão). | 40px / **54px** · 440 · -0.065em |
| `.t-h3` | Título grande (links do menu mobile). | 1.875rem · 440 · -0.05em |
| `.t-h4` | Título de card / post / pilar. | 1.4375rem · 440 · -0.043em |
| `.t-h5` | Subtítulo de card / bloco. | 1.1875rem · 440 · -0.038em |
| `.t-stat` | Número de indicador (use via `<Stat>`). | 3.25rem · 440 · -0.06em |
| `.t-body-lg` / `.t-body` / `.t-lead` / `.t-small` | Texto corrido (caixa normal). | 1.25 / 1.125 / 1.0625 / 0.9375rem |
| `.t-eyebrow` | Rótulo/kicker. Use via `<Eyebrow>` (formato `// RÓTULO`). | 0.9375rem · 400 · -0.01em |

**Tamanhos fixos (não fluidos):** os títulos têm **px fixo no desktop** (≥768px) — não escalam com a largura da janela. O tamanho menor do mobile (<768px) é aplicado por `@media (max-width)` nas classes em `globals.css`. Assim, um título é sempre o mesmo px em qualquer tela desktop (diferenças entre máquinas = zoom do navegador ou escala do SO, não o site).

Os tokens também geram **utilitários de tamanho** (só `font-size`): `text-micro` (13px), `text-small`, `text-lead`, `text-body`, `text-body-lg`, `text-h5`, `text-h3`, `text-h2`. Use-os para casos pontuais (links de UI) ou para alternância responsiva — ex.: subtítulo do hero `text-body md:text-body-lg`; título de card que precisa caber em 2 linhas no mobile `text-h3 sm:text-h2`. Leading via utilitários padrão (`leading-snug`/`leading-normal`/`leading-tight`).

**Sem "viúvas" (órfãs):** nunca deixe uma palavra sozinha na última linha. Parágrafos (`p`) já recebem `text-wrap: pretty` no base (`globals.css`); títulos usam `text-balance`. Se ainda assim sobrar palavra solta, reescreva/encurte o texto para equilibrar as linhas.

**Títulos com mais de 3 palavras:** sempre `text-balance` (quebra equilibrada em 2+ linhas — nunca 1 linha longa nem linhas desiguais). `<SectionIntro>` já aplica por padrão; em h2/h1 soltos, adicione `text-balance`. Para frases que devem ficar 1 por linha (ex.: CTA do form), use `<span className="whitespace-nowrap">` por frase em vez de `<br>`.

### Raio · Sombra · Layout · Motion
- **Geometria quase reta.** Cantos-fio sutis via tokens: `rounded-hair` (1px), `rounded-xs` (2px), `rounded-sm` (4px) — badges, cards de conteúdo e botões. `IconButton` é circular (setas de slider). Cortes diagonais (chanfros) via `<Chamfer>`. Nunca `rounded-[Npx]`.
- Sombra: `shadow-[var(--shadow-soft)]` · `shadow-[var(--shadow-lift)]` (hover de card). Premium = pouca sombra.
- Container: largura máx `--container-max` (1350px) via `<Container>`.
- Easing padrão: `ease-[var(--ease-out-soft)]`.

---

## Primitivos (`components/ui/`)

| Componente | Para quê |
|---|---|
| `<Container>` | Largura máxima + padding lateral fluido. Envolve o conteúdo de toda seção. |
| `<Section tone>` | Bloco com padding vertical (80px mobile · 120px desktop) e fundo (`paper`/`petrol`/`sage`). Para `mist`, passe `className="bg-mist"`. |
| `<SectionIntro eyebrow title description? align eyebrowTone>` | **Abre a seção**: rótulo `//` + título (`t-h2`) + descrição opcional. `align`: `left` (padrão) / `center`. Use dentro de um `<Reveal>`. |
| `<Divider tone>` | Linha hairline para estruturar seções. tones: `dark` (fundo claro) / `light` (fundo escuro). |
| `<Eyebrow tone>` | Kicker no formato `// RÓTULO`. tones: `petrol`/`sage`/`muted`/`light`. |
| `<SplitButton href tone size>` | **CTA primário** dividido em rótulo + caixa de seta diagonal (segmentos juntos). tones: `gold` (hero/seções) · `white` (sobre fundo escuro, ex.: menu). |
| `<Button variant size withArrow href?>` | CTA genérico (reserva). variants: `solid`/`outline`/`ghost`/`light`. |
| `<IconButton tone>` | Botão circular de ícone (setas de carrossel). |
| `<IconBadge tone>` | Selo quadrado (`rounded-hair`) para um ícone. tones: `gold` (fundo claro/card) · `translucent` (fundo escuro). |
| `<Chamfer corner size as>` | Container com canto(s) chanfrado(s) — assinatura geométrica. `corner`: `tr` / `tr-bl` (define `--cx`/`--cy` via className). Envolve imagens, carrosséis ou cards. |
| `<AvatarStack ring label? labelClassName>` | Prova social: avatares sobrepostos + rótulo. `ring`: `paper` / `petrol` (casa com o fundo). |
| `<Stat variant value …>` | Indicador numérico. `variant`: `inline` (faixa de stats) / `block` (bento — título + descrição + número + unidade). |
| `<Card hover>` | Superfície de card (reserva). Sem stroke — separação por sombra (`shadow-soft`), elevação no hover. |
| `<Carousel controls arrowTone>` | Carrossel (Embla) para conteúdo variado. Cada filho = um slide. |
| `<FadeCarousel images alt>` | Carrossel de imagens em crossfade automático (barra de progresso). |
| `<Reveal delay y>` | Fade + translate ao entrar na viewport. |
| `<Logo>` | Wordmark EDILE (SVG, `currentColor`). Herda a cor do texto — `text-paper` no escuro. |
| `icons.tsx` | Ícones SVG (setas, chevrons, sociais, menu, glifos). |

### Regras de uso
- **Página nova** = composição de `<Section>` → `<Container>` → primitivos. Veja `app/page.tsx`.
- Abertura de seção: `<SectionIntro>` dentro de um `<Reveal>` (não repetir Eyebrow + h2 manualmente).
- CTA primário = `<SplitButton>` (`tone="gold"` em fundo claro · `tone="white"` em fundo escuro).
- Imagem/card com chanfro = `<Chamfer>`; nunca declarar `clipPath` inline na seção.
- Faltou um componente? **Crie em `components/ui/`** seguindo o padrão (props tipadas, tokens, `cn()`), documente aqui, e só então use.

---

## Conteúdo
- Idioma: **PT-BR**. Sem termos em inglês ou resíduos de template.
- Tom: incorporadora de alto padrão — sóbrio, confiante, sem exageros publicitários.

## Stack
Next.js (App Router) · Tailwind v4 (tokens em CSS) · Inter (`next/font`) · Lenis (scroll suave) · Framer Motion · Embla.
Deploy: Vercel (`next build` deve passar limpo).
