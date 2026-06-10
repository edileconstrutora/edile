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
- **Stats** (`stats.tsx`) — 3 números **52px** (era 86; fixo agora) + rótulo ao lado. Hairline no topo.
- **Empreendimentos** (`empreendimentos.tsx`) — **carrossel** (Embla) de **5 cards** dark (`emp-1..5.webp`, imagens **3:4**), ícone gold por tipo (casa→`Home`/predio→`Building`). **Setas embaixo** (`controls="bottom"`), centralizadas, 52px. **Bleed nos 2 lados** (viewport vaza até a borda da tela via `viewportClassName` margem negativa + `containerClassName` padding-calha; 1º card alinhado ao container). **Scroll por wheel/trackpad** (plugin `embla-carousel-wheel-gestures`), sem scrollbar.
- **Propósito** (`proposito.tsx`, Figma 6767:243) — **dark** (petrol-950) + 3 linhas verticais claras. Eyebrow + h2 branco + **imagem chanfrada (2 cantos: sup-dir + inf-esq)** que é um **`FadeCarousel`** de 3 interiores (`proposito-1..3.webp`): crossfade, **autoplay 5s + barra de progresso** sutil, setas com **blur** no canto inf-dir. 3 pilares (ícone `bg-paper/10` + título 23px + corpo) com ícones novos `Frame`/`Aperture`/`Columns`.
- **Why** (`why.tsx`, Figma 6772:344) — header central + imagem chanfrada esq + **bento**. Estrutura = **2 colunas** (não grid 2×2): col-esq = 2 stats (25+/95%, números **52px**), col-dir = (prova social + Entrega) e **card escuro** "Espaços que duram". Assim o **mobile empilha coluna-a-coluna** na ordem certa.
- **Formulário** (`form.tsx`, Figma 6773:850, `id="contato"`) — card branco chanfrado "Vamos trabalhar juntos" + campos underline + botão gold, sobre imagem de fundo (`form.webp`). Client (`onSubmit` preventDefault, sem backend).
- **FAQ** (`faq.tsx`, Figma 6773:470) — client. Esq: eyebrow + "Ficou com dúvidas?" + botão gold. Dir: **accordion** (cards brancos, toggle **+/−** em CSS, 1º aberto, altura animada via `grid-rows-[0fr/1fr]`).
- **Blog** (`blog.tsx`, Figma 6774:898 — o node "Section - Blog"; cuidado: 6774:899 é só as linhas-guia) — header central "Ideias recentes" + **3 cards** (`blog-1..3.webp` 4:3, categoria · data + título), grid 3→2→1. **Antes do footer.**
- **Footer** (`footer.tsx`, Figma 6773:572) — petrol-950. Newsletter (input + INSCREVER) + 3 colunas (Contato/Navegação/Mais) + **marca d'água gigante** (componente `Logo` em `text-paper/[0.05]`, com `mb` p/ respiro da linha) + barra inferior. **Mobile**: Contato `col-span-2` (linha cheia), Navegação/Mais lado a lado.

## Design system (resumo)
- **Fonte Inter**. Cores: `ink` #0a0b12 · `ink-soft` #2b2b2b · `ink-faint` #8a8a8a · `paper` #fbfbfb · `mist` #f5f6f7 · `line` #e8e8e8 · `petrol` (950=#05151b, 900=#122e39) · acento **`gold` #ffbb0f / `gold-bright`**.
- Tipografia por classes `.t-display/.t-h2/.t-h3/.t-h4/.t-body/.t-small/.t-eyebrow` (peso 440, tracking fechado). **`--text-h2` min mobile = 2.5rem (40px)**; **h1 do hero mobile = 44px**.
- `<Eyebrow>` = `// label` 15px (tons: petrol/sage/muted/**light** p/ fundo escuro). `<Section tone="paper|petrol|sage">` py-80/md:120. `<Container>` max-w 1350, px-6/md:10/lg:14.
- **Chanfros** via `clip-path polygon` (sup-dir, ou 2 cantos). **Sem raio** geral (cards/imagens retos; exceções pontuais 1-2px). CTA = `<SplitButton tone gold|white>`.
- Primitivos novos desta fase: `fade-carousel.tsx`, ícones `Frame/Aperture/Columns`; `carousel.tsx` ganhou wheel-gestures + `containerClassName`/`viewportClassName`.

## Operacional (importante)
- Preview MCP `.claude/launch.json` "edile" (porta 3000, `autoPort:true`).
- **Trocar imagem com MESMO nome → limpar `.next` + reiniciar** (cache do otimizador serve a antiga). Idem ao mudar `globals.css` ou usar utilitário Tailwind inédito (Turbopack). Imagem com nome NOVO aparece de primeira.
- **`sharp` está nos node_modules** → usar p/ resize/crop/webp (scripts `.mjs` temporários). Imagens novas do Unsplash: via `WebFetch` na página de busca → URLs `images.unsplash.com/photo-...`.
- **Preview headless tem `requestAnimationFrame` throttled** → carrosséis Embla, autoplay e screenshots **não pintam/travam**. Validar por **medição no DOM** (`preview_eval`); p/ estado do Embla, pegar a API via React fiber (`__reactFiber$` → hook com `canScrollNext`/`scrollTo`).
- `next.config` exige `images.qualities: [75,90]` p/ `quality={90}`. Não fazer upscale de source.
- Sempre `npm run lint` + `npm run build` limpos antes de fechar.
- **Junction da memória nesta máquina**: o caminho tem `01.` (ponto) e o `setup-junction.ps1` NÃO normaliza ponto — o junction foi criado **manualmente** no caminho exato do harness (`...projects\C--Users-yagob-Documents-01--Projetos-Claude-Edile\memory`). Ver [[memory-sync-git]].

## Próximo / pendências de polimento
- Trocar **copy e imagens** placeholder pelas reais (o usuário envia).
- Formulário e newsletter sem backend (só UI). Links `#` a apontar.
- Revisitar responsividade fina conforme o usuário aponta por print/anotação.
