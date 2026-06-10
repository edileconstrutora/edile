---
name: edile-progress
description: Roadmap/estado do site EDILE. Ler no início de toda conversa do projeto. O site está COMPLETO (todas as seções no DS novo) — agora é polir/ajustar.
metadata:
  node_type: memory
  type: project
  originSessionId: 65909256-9a93-4df4-a37f-f54b56ce91b9
---

# EDILE — estado do site

**SITE COMPLETO** ✅ — todas as seções construídas no design system novo. Fase atual: **polimento/ajustes finos** (responsividade, copy, imagens reais). Construído conduzido pelo Figma `aVLsjWvrmgxDDxdZdu4sRI` (o usuário manda node-id por seção; textos/imagens do Figma são placeholders, ele troca depois).

## Ordem das seções (`app/page.tsx`)
Navbar · **Hero** · **Sobre** · **Stats** · **Empreendimentos** · **Propósito** · **Why** · **Formulário** · **FAQ** · **Blog** · **Footer**
(CtaFuturo foi **deletado** — o Formulário virou o CTA final.)

## Seções (todas no DS novo)
- **Hero** (`hero.tsx`) — imagem full-bleed + parallax (scale 1.0→1.12, sem upscale). Desktop: painel chanfrado `hero-panel.png` na metade esq, no **topo** (`md:top-0 md:pt-36`, ~63px abaixo do menu). Mobile: imagem atrás + painel sólido `bg-petrol-950` empurrado `mt-32` (respiro do menu). h1 inline `clamp(2.75rem→4.125rem)` (**mobile 44px**).
- **Sobre** (`sobre.tsx`, Figma 6724:3462) — imagem chanfrada (`sobre.jpg`) + texto. **Mobile: `flex-col-reverse`** (texto em cima, imagem embaixo).
- **Stats** (`stats.tsx`) — 3 números via `<Stat variant="inline">` (`.t-stat` 52px mobile → **`md:text-stat-lg` 86px desktop**) + rótulo ao lado. Hairline no topo. (O bento do Why usa `.t-stat` 52px fixo.)
- **Empreendimentos** (`empreendimentos.tsx`) — **carrossel** (Embla) de **5 cards** dark (`emp-1..5.webp`, imagens **3:4**), ícone gold por tipo (casa→`Home`/predio→`Building`). **Setas embaixo** (`controls="bottom"`), centralizadas, 52px. **Bleed nos 2 lados** (viewport vaza até a borda da tela via `viewportClassName` margem negativa + `containerClassName` padding-calha; 1º card alinhado ao container). **Scroll por wheel/trackpad** (plugin `embla-carousel-wheel-gestures`), sem scrollbar.
- **Propósito** (`proposito.tsx`, Figma 6767:243) — **dark** (petrol-950) + 3 linhas verticais claras. Eyebrow + h2 branco + **imagem chanfrada (2 cantos: sup-dir + inf-esq)** que é um **`FadeCarousel`** de 3 interiores (`proposito-1..3.webp`): crossfade, **autoplay 5s + barra de progresso** sutil, setas com **blur** no canto inf-dir. 3 pilares (ícone `bg-paper/10` + título 23px + corpo) com ícones novos `Frame`/`Aperture`/`Columns`.
- **Why** (`why.tsx`, Figma 6772:344) — header central + imagem chanfrada esq + **bento**. Estrutura = **2 colunas** (não grid 2×2): col-esq = 2 stats (25+/95%, números **52px**), col-dir = (prova social + Entrega) e **card escuro** "Espaços que duram". Assim o **mobile empilha coluna-a-coluna** na ordem certa.
- **Formulário** (`form.tsx`, Figma 6773:850, `id="contato"`) — card branco chanfrado "Vamos trabalhar juntos" + campos underline + botão gold, sobre imagem de fundo (`form.webp`). Client (`onSubmit` preventDefault, sem backend).
- **FAQ** (`faq.tsx`, Figma 6773:470) — client. Esq: eyebrow + "Ficou com dúvidas?" + botão gold. Dir: **accordion** (cards brancos, toggle **+/−** em CSS, 1º aberto, altura animada via `grid-rows-[0fr/1fr]`).
- **Blog** (`blog.tsx`, Figma 6774:898 — o node "Section - Blog"; cuidado: 6774:899 é só as linhas-guia) — header central "Ideias recentes" + **3 cards** (`blog-1..3.webp` 4:3, categoria · data + título), grid 3→2→1. **Antes do footer.**
- **Footer** (`footer.tsx`, Figma 6773:572) — petrol-950. Newsletter (input + INSCREVER) + 3 colunas (Contato/Navegação/Mais) + **marca d'água gigante** (componente `Logo` em `text-paper/[0.05]`, com `mb` p/ respiro da linha) + barra inferior. **Mobile**: Contato `col-span-2` (linha cheia), Navegação/Mais lado a lado.

## Design system (resumo)
- **Fonte Inter** (pacote `geist` removido — era resíduo não usado). Cores: `ink` #0a0b12 · `ink-soft` #2b2b2b · `ink-faint` #8a8a8a · `paper` #fbfbfb · `mist` #f5f6f7 · `line` #e8e8e8 · `petrol` (950=#05151b, 900=#122e39) · acento **`gold` #ffbb0f / `gold-bright`**.
- Tipografia **só por classes** `.t-display / .t-display-lg / .t-h2 / .t-h3 / .t-h4(23px) / .t-h5(19px) / .t-stat / .t-body-lg / .t-body / .t-lead(17px) / .t-small / .t-eyebrow` (peso 440, tracking fechado). Tokens geram também utilitários de tamanho (`text-micro` 13px, `text-small`, `text-lead`, `text-body`, `text-body-lg`, `text-h5`) p/ casos pontuais e responsivo (ex.: hero subtítulo `text-body md:text-body-lg`). **`--text-h2` min mobile = 2.5rem (40px)**; **h1 hero = `.t-display-lg`**.
- `<Eyebrow>` = `// label` 15px (tons: petrol/sage/muted/**light** p/ fundo escuro). `<Section tone="paper|petrol|sage">` py-80/md:120 (mist via `className="bg-mist"`). `<Container>` max-w 1350, px-6/md:10/lg:14.
- **Chanfros** via primitivo **`<Chamfer corner="tr|tr-bl" size>`** (nunca `clip-path` inline). Raios via tokens `rounded-hair`(1px)/`xs`(2px)/`sm`(4px) — **nunca `rounded-[Npx]`**. CTA = `<SplitButton tone gold|white>`.
- **PENTE FINO (10/06/2026):** site 100% tokenizado/componentizado, **zero hardcode** de fonte/cor/raio fora de `globals.css` (`next build` limpo). Primitivos extraídos: **`SectionIntro`** (abre seção, align left/center — substituiu o `SectionHeader` morto, deletado), **`Chamfer`**, **`Stat`** (variant inline/block), **`AvatarStack`**, **`IconBadge`** (gold/translucent). Classes novas: `.t-display-lg/.t-h4/.t-h5/.t-lead/.t-stat` + `text-micro`. `.t-h4` agora = título de card 23px (antes 24px, fundido). 5 imagens órfãs deletadas (villagio.png/.jpg, sustentabilidade, visao, engenharia ~2,4 MB). `Button`/`Card` seguem como primitivos de reserva (não usados).
- **Regras tipográficas (obrigatórias):** **sem viúvas** — `p` tem `text-wrap: pretty` no base; títulos `text-balance`. **Títulos >3 palavras** → sempre `text-balance` (2+ linhas equilibradas); `SectionIntro` aplica por padrão. Frase-por-linha sem `<br>`: `<span className="whitespace-nowrap">` por frase (ex.: h2 do form, que usa `text-h3 sm:text-h2` p/ caber em 2 linhas no mobile). `tailwind-merge` registra TODOS os tamanhos `--text-*` no grupo font-size (`lib/utils.ts`) — senão a cor do texto é descartada ao mesclar com `text-*`.
- **`<Stat>` anima** (count-up 0→valor na entrada, 1x, via framer-motion `animate`+`useInView`, respeita reduced-motion). É client component. Preserva sufixo (+/%).
- Primitivos de fases anteriores: `fade-carousel.tsx`, ícones `Frame/Aperture/Columns`; `carousel.tsx` com wheel-gestures + `containerClassName`/`viewportClassName`.

## Operacional (importante)
- Preview MCP `.claude/launch.json` "edile" (porta 3000, `autoPort:true`).
- **Trocar imagem com MESMO nome → limpar `.next` + reiniciar** (cache do otimizador serve a antiga). Idem ao mudar `globals.css` ou usar utilitário Tailwind inédito (Turbopack). Imagem com nome NOVO aparece de primeira.
- **`sharp` está nos node_modules** → usar p/ resize/crop/webp (scripts `.mjs` temporários). Imagens novas do Unsplash: via `WebFetch` na página de busca → URLs `images.unsplash.com/photo-...`.
- **Preview headless tem `requestAnimationFrame` throttled** → carrosséis Embla, autoplay e screenshots **não pintam/travam**. Validar por **medição no DOM** (`preview_eval`); p/ estado do Embla, pegar a API via React fiber (`__reactFiber$` → hook com `canScrollNext`/`scrollTo`).
- `next.config` exige `images.qualities: [75,90]` p/ `quality={90}`. Não fazer upscale de source.
- Sempre `npm run lint` + `npm run build` limpos antes de fechar.
- **Junction da memória nesta máquina**: o caminho tem `01.` (ponto) e o `setup-junction.ps1` NÃO normaliza ponto — o junction foi criado **manualmente** no caminho exato do harness (`...projects\C--Users-yagob-Documents-01--Projetos-Claude-Edile\memory`). Ver [[memory-sync-git]].

## Identidade real da empresa (copy reformulada em 10/06/2026 a partir dos PDFs do cliente)
- **EDILE Empreendimentos Imobiliários Ltda** · CNPJ 59.780.967/0001-86 · **Indaiatuba/SP** · IG **@edileconstrutora** · www.edile.com.br.
- Incorporadora + construtora de **condomínios e loteamentos de alto padrão** (HORIZONTAL — não faz prédio/torre) em Indaiatuba e região (perto de Campinas/SP).
- Eixos da copy: rigor desde o terreno (localização premium + base jurídica), **engenharia inteligente/tecnologia**, **sustentabilidade**, **valorização patrimonial / legado**, cliente no centro, confiança.
- Slogan **"Responsabilidade com o seu amanhã."** (usado como assinatura no footer). Hero h1 = "Hoje, seu lar. Amanhã, seu legado." Banco de CTAs do BP disponível p/ variações.
- Empreendimentos agora com tipos **condominio/loteamento** (ícones `Home`/`Plots` novo em icons.tsx; `Building` virou reserva não usada).

## Próximo / pendências de polimento
- **Placeholders ainda a confirmar** (marcados com comentário no código): números da faixa de Stats e dos blocos do Why, prova social (AvatarStack), **nomes dos empreendimentos** (BP não trouxe nomes reais), telefone do footer.
- Imagens dos empreendimentos/blog ainda são genéricas (trocar pelas reais).
- Formulário e newsletter sem backend (só UI). Links `#` a apontar.
- Revisitar responsividade fina conforme o usuário aponta por print/anotação.
