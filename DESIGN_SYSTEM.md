# EDILE — Design System

Referência única do projeto. **Toda nova página/componente deve usar estes tokens e primitivos.**
Nada de cor, tamanho de fonte, espaçamento ou raio hardcoded fora de `app/globals.css`.

---

## Princípios

1. **Minimalista e premium** — pouco ornamento, muito ar (espaço em branco), tipografia confiante.
2. **Uma só família tipográfica** (Inter), hierarquia feita por tamanho/peso/tracking — nunca por trocar de fonte.
3. **Calma cromática** — fundo off-white quente (`paper`), texto grafite, petróleo da marca como âncora, sage como acento.
4. **Linhas como linguagem** — hairlines (`Divider`) e rótulos `//` estruturam as seções no lugar de caixas/bordas. Toda seção abre com `<SectionIntro>` (rótulo `//` + título grande).
5. **Movimento discreto** — reveals curtos, parallax sutil, micro-interações de hover. Sempre respeitando `prefers-reduced-motion`.

---

## Tokens (definidos em `app/globals.css` → `@theme`)

### Cor
| Token | Uso |
|---|---|
| `petrol-50 … 950` | Primária da marca. `petrol-900` (#122e39) = fundo hero/CTA. `petrol-50` = banda clara sutil. |
| `sage-100 … 600` | Acento secundário (#5d7c7e = `sage-500`). Eyebrows, cards de feature. |
| `gold` / `gold-bright` | Acento de CTA (#ffbb0f). Botão primário do hero (hover = `gold-bright`). |
| `paper` | Superfície clara (branco #ffffff): cards e seções claras. `mist` (#f5f6f7) = banda de seção cinza-clara — cards `paper` se destacam sobre ela. |
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

### Título do herói (regra de página)

Duas decisões **independentes**: o **nível semântico** (a tag) e o **tamanho visual** (a classe `.t-*`). Um `<h1>` pode ter o tamanho de `t-h2` — isso é proposital, não um erro.

**Semântica (sempre igual):** toda página tem **exatamente um `<h1>`** (o título do herói). Toda abertura de seção depois dele é **`<h2>`** (via `<SectionIntro>`). Não pular níveis.

**Tamanho do `<h1>` = pela composição do herói** (quanto o título divide o palco, menor ele é):

| Tipo de herói | Classe | Tamanho | Quando | Exemplos |
|---|---|---|---|---|
| **Declaração** — só rótulo + título (± 1 linha) | `t-display` | 92px | o título **é** o herói, sem CTA/subtítulo/capa competindo | `/sobre`, `/blog`, páginas legais (`PageHero`, `SobreHero`) |
| **Landing/conversão** — título + CTA + prova social | `t-display-lg` | 66px | herói da home, título convive com painel de CTA/subtítulo/avatares | home (`Hero`) |
| **Showcase de produto** — rótulo + título + tags + capa | `t-display-lg` | 66px | página de um produto em destaque (empreendimento), **não** um artigo: ganha mais presença que o editorial mesmo tendo meta + capa | detalhe de empreendimento (`/empreendimentos/[slug]`) |
| **Documento/editorial** — título + metadados + capa | `t-h2` | 54px | título é conteúdo de um artigo/doc, cercado de meta/subtítulo/corpo | post do blog (`PostHero`) |

> **Editorial vs showcase** (mesma estrutura, tamanho diferente): a escolha é por **intenção**. Artigo/conteúdo de leitura → 54px. Produto que vende (empreendimento) → 66px.

**Página nova → 1 pergunta:** o herói é (a) só rótulo + título? → **92px** · (b) landing com CTA/prova social, ou showcase de produto (empreendimento)? → **66px** · (c) título de um artigo/documento de leitura? → **54px**. Seções internas sempre `t-h2` (`SectionIntro`).

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
| `<SectionIntro eyebrow? title description? align eyebrowTone>` | **Abre a seção**: rótulo `//` (opcional) + título (`t-h2`) + descrição opcional. Sem `eyebrow`, o título abre sozinho. `align`: `left` (padrão) / `center`. Use dentro de um `<Reveal>`. |
| `<PageHero eyebrow title description?>` | **Hero de página interna** (ex.: /blog): rótulo `//` numa **coluna de largura fixa (200px, só desktop)** + **h1** grande (`t-display`, 92px, `max-w` p/ não esparramar) + descrição ao lado — o título **começa sempre no mesmo ponto** em qualquer página. Mobile empilha (rótulo acima). Fundo transparente + respiro p/ a navbar. |
| `<ColumnLines tone?>` | **3 linhas verticais** (bordas + centro) como grade de fundo. Ponha num pai `relative` — preenche a altura toda. `tone`: `dark` (fundo claro) / `light` (fundo escuro). |
| `<Divider tone>` | Linha hairline para estruturar seções. tones: `dark` (fundo claro) / `light` (fundo escuro). |
| `<Eyebrow tone>` | Kicker no formato `// RÓTULO`. tones: `petrol`/`sage`/`muted`/`light`. |
| `<SplitButton href tone size>` | **CTA primário** dividido em rótulo + caixa de seta diagonal (segmentos juntos). tones: `gold` (hero/seções) · `white` (sobre fundo escuro, ex.: menu). |
| `<Button variant size withArrow href?>` | CTA genérico (reserva). variants: `solid`/`outline`/`ghost`/`light`. |
| `<IconButton tone>` | Botão circular de ícone (setas de carrossel). |
| `<IconBadge tone>` | Selo quadrado (`rounded-hair`) para um ícone. tones: `gold` (fundo claro/card) · `translucent` (fundo escuro). |
| `<Chamfer corner size as>` | Container com canto(s) chanfrado(s) — assinatura geométrica. `corner`: `tr` / `tr-bl` (define `--cx`/`--cy` via className). Envolve imagens, carrosséis ou cards. |
| `<AvatarStack ring label? labelClassName>` | Prova social: avatares sobrepostos + rótulo. `ring`: `paper` / `petrol` (casa com o fundo). |
| `<Stat variant tone value …>` | Indicador numérico (anima 0→valor). `variant`: `inline` (faixa) / `block` (bento). `tone`: `dark` (texto escuro, fundo claro) / `light` (texto claro, fundo petrol). |
| `<Card hover>` | Superfície de card (reserva). Sem stroke — separação por sombra (`shadow-soft`), elevação no hover. |
| `<Carousel controls arrowTone>` | Carrossel (Embla) para conteúdo variado. Cada filho = um slide. |
| `<FadeCarousel images alt>` | Carrossel de imagens em crossfade automático (barra de progresso). |
| `<BlogCard slug image category date title>` | Card de post (imagem + categoria · data + título), linka para `/blog/[slug]`. Dados em `lib/posts/`. Usado na home, na página `/blog` e nos relacionados do post. Aceita spread de um `Post` (`{...p}`). |
| `<EmpreendimentoCard …>` | Card de empreendimento (capa chanfrada + tipo · status + nome + resumo + seta), linka para `/empreendimentos/[slug]`. **Hover:** fundo `paper` → `petrol-950` com texto invertendo para claro. Dados em `lib/empreendimentos/`. Aceita spread de um `Empreendimento` (`{...e}`). |
| `<PostHero category date title image excerpt>` | **Header de post do blog**: mesma grade do `PageHero`. Coluna central = h1 (`t-h2`, 54px) → subtítulo (`excerpt`) → tags em pílulas (`rounded-full`, data + categoria). Capa larga retangular (`rounded-hair`, **sem chanfro**) abaixo. |
| `<PostBody content>` | **Corpo do post**: renderiza os blocos tipados (`Block[]` de `lib/posts`) com estilo 100% fixo — coluna de leitura de 720px centralizada. |
| `<TeamCard name role photo href?>` | **Card de membro da equipe** (página `/sobre`): retrato quadrado `<Chamfer corner="tr">` + nome (`t-h5`) + cargo (`t-small`) + seta. Hover de scale na foto. `href` externo abre em nova aba. |
| `<LegalDoc updatedAt? blocks>` | **Corpo de documento legal** (Política de Privacidade, Termos de Uso): coluna de leitura ~760px com blocos tipados `heading` (`t-h4`) / `paragraph` (`t-body`) / `list`. Conteúdo nos arquivos de página, estilo fixo aqui. |
| `<Reveal delay y>` | Fade + translate ao entrar na viewport. |
| `<Logo>` | Wordmark EDILE (SVG, `currentColor`). Herda a cor do texto — `text-paper` no escuro. |
| `icons.tsx` | Ícones SVG (setas, chevrons, sociais, menu, glifos). |

### Regras de uso
- **Página nova** = composição de `<Section>` → `<Container>` → primitivos. Veja `app/page.tsx`.
- Abertura de seção: `<SectionIntro>` dentro de um `<Reveal>` (não repetir Eyebrow + h2 manualmente).
- CTA primário = `<SplitButton>` (`tone="gold"` em fundo claro · `tone="white"` em fundo escuro).
- Imagem/card com chanfro = `<Chamfer>`; nunca declarar `clipPath` inline na seção.
- Faltou um componente? **Crie em `components/ui/`** seguindo o padrão (props tipadas, tokens, `cn()`), documente aqui, e só então use.
- **Página interna nova** — dois moldes:
  - **Clara/"banda única"** (ex.: `/blog`): `<Navbar solid />` + `<main className="relative overflow-hidden bg-mist">` com `<ColumnLines />` (grade que desce a página toda) → `<PageHero>` → `<Section className="bg-transparent">`s. A página inteira é uma banda só.
  - **Hero escuro + seções** (ex.: `/sobre`): `<Navbar />` **sem `solid`** (transparente sobre o hero escuro, como na home) + `<main>` com seções de fundo próprio alternando `tone="petrol"`/`paper` (`<Section>`). O hero é uma `<section>` escura full-bleed com imagem + h1 `text-paper` na base. Sem `ColumnLines` global.
  - Em ambos: `app/<rota>/page.tsx`, links de âncora viram `/#secao` fora da home, exporte `metadata`. **Todo hero abre com h1.**
- **Cards de conteúdo:** título com no máx. **3 linhas** (`line-clamp-3` num `<span>` interno — direto no elemento flex o `-webkit-box` quebra). Ver `BlogCard`.
- **CTA primário (`<SplitButton>`):** o tamanho `md` é **responsivo** — menor no mobile, cheio no desktop. Use `md` (padrão) no hero/CTAs grandes; `sm` em botões secundários.

---

## Blog — como adicionar um post

O blog não tem CMS: o cliente manda o conteúdo (texto, imagens, títulos) e o Claude cria o arquivo e commita. O template (`PostHero` + `PostBody`) cuida de todo o estilo — **nunca** estilizar conteúdo no arquivo do post.

1. **Um arquivo por post** em `lib/posts/<slug>.ts` (slug em kebab-case, 3–5 palavras — vira a URL `/blog/<slug>`), exportando `export const post: Post = {...}`.
2. **Registrar no `lib/posts/index.ts`**: importar e adicionar **no topo** do array `posts` (a ordem do array é a recência; a home mostra os 3 primeiros).
3. **Campos:** `slug`, `title`, `category` (ex.: Mercado, Alto padrão, Engenharia, Investimento, Arquitetura), `date` (exibição PT-BR, ex.: `"9 jun 2025"`), `image` (capa `.webp` em `/public/images`), `excerpt` (~150 caracteres — meta description e Open Graph) e `content` (blocos).
4. **Blocos disponíveis** (`Block`) e o que cada um vira:
   - `{ type: "paragraph", text }` → parágrafo de leitura (`t-body-lg`).
   - `{ type: "heading", text }` → subtítulo de seção do artigo (`t-h3`).
   - `{ type: "image", src, alt, caption? }` → imagem 3:2 na coluna de leitura + legenda opcional.
   - `{ type: "quote", text, cite? }` → citação com filete `sage` à esquerda.
5. **Validação:** `next build` quebra se o post estiver fora do shape (TypeScript) — rodar antes do push.

Posts relacionados ("Posts que você pode gostar") são automáticos: mesma categoria primeiro, depois os mais recentes, sem o post atual (`relatedPosts` em `lib/posts`).

---

## Conteúdo
- Idioma: **PT-BR**. Sem termos em inglês ou resíduos de template.
- Tom: incorporadora de alto padrão — sóbrio, confiante, sem exageros publicitários.

## Stack
Next.js (App Router) · Tailwind v4 (tokens em CSS) · Inter (`next/font`) · Lenis (scroll suave) · Framer Motion · Embla.
Deploy: Vercel (`next build` deve passar limpo).
