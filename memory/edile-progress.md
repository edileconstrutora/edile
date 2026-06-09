---
name: edile-progress
description: Roadmap das seções do site EDILE e ONDE PARAMOS. Ler no início de toda conversa do projeto EDILE e atualizar a cada seção concluída.
metadata: 
  node_type: memory
  type: project
  originSessionId: 65909256-9a93-4df4-a37f-f54b56ce91b9
---

# EDILE — progresso da reorganização de seções

Construir **1 seção por vez**, ajustar responsividade, validar build, e **atualizar este arquivo** a cada passo.

## Estrutura-alvo (ordem)
1. **Hero** — ✅ concluído
2. **Sobre** — ✅ feito (`components/sections/sobre.tsx`, Figma 6724:3462). Imagem chanfrada (`sobre.jpg`, canto sup-dir) à esq + `// Sobre` + h2 54px + sub-rótulo "NOSSA VISÃO" + corpo 18px + SplitButton gold sm "Saiba mais".
2b. **Stats** — ✅ feito (`components/sections/stats.tsx`, Figma 6723:3367, logo abaixo do Sobre). Linha hairline no topo + 3 números 86px (#0a0b12, tracking -0.085em, weight 440) com rótulo 18px ao lado: 180+ Empreendimentos entregues · 95% Clientes satisfeitos · 15+ Anos de experiência. `justify-between` desktop, empilha no mobile.
3. **Empreendimentos** — ✅ refeito (`components/sections/empreendimentos.tsx`, Figma 6734:501). Fundo `mist` #f5f6f7 + 3 linhas verticais. Header: eyebrow esq · "Projetos recentes" (66px) centro + subtítulo · SplitButton gold sm "Ver todos" dir (grid `[1fr_auto_1fr]`). Card branco **chanfrado canto sup-dir** (clip-path 4rem): imagem 400×400 + ícone por tipo (`featured.type`: "casa"→`Home` home-smile · "predio"→`Building` building-06) + h3 23px "Villagio Residence" + desc 18px + botão outline sentence-case "Conhecer empreendimento". (era carrossel; agora 1 card destaque)
4. **Propósito** (para investidores e para moradores) — já existe (2 cards); revisar depois
5. **Por que nos escolher** (4 vantagens) — ⬜
6. **FAQ** — ⬜
7. **Formulário "Vamos trabalhar juntos"** — ⬜
8. **Blog "Recentes"** — ⬜
9. **Footer** — já existe; revisar depois

## Estado atual do Hero (✅)
- Imagem `absolute inset-0` full-bleed + parallax (scale começa em **1.0**, sem upscale; y 0→10%). **SEM overlay no desktop** (imagem clara). `quality={90}`.
- Imagens: mobile = `hero-mobile.jpg` (vertical) via `md:hidden`; desktop/tablet (`md+`) = `hero.jpg` (pôr do sol, 1672×941, q92) via `hidden md:block`.
- **Desktop**: painel = imagem chanfrada `/images/hero-panel.png` (cor #05151b) como bg (`-z-10 object-fill md:block`), `isolate` no painel. Painel `md:w-1/2` → borda direita = **linha central**; `px-0` → esquerda = linha 1. **3 linhas verticais** marcam o container **1350px**.
- **Mobile**: imagem full-bleed atrás (limpa, **sem overlay/gradiente**) + painel **sólido `bg-petrol-950`** no topo (`relative z-10`) com a headline; imagem aparece limpa abaixo.
- Conteúdo: h1 (Inter 440, ~66px, tracking -0.065em, `text-balance`), subtítulo (`text-balance`), `SplitButton tone="gold"` "Comece agora" (CTA row `pl-12`=48px só desktop), prova social (3 avatares reais + "Mais de 2 mil clientes satisfeitos").
- Navbar: logo esq · links centro (17px Inter medium, sentence case) · `SplitButton tone="white"` dir. Transparente no topo → sólido #05151b ao rolar.
- **Menu mobile**: hambúrguer abre **overlay full-screen branco** (`bg-paper`, z-60) com logo + X no topo e links grandes (44px) centralizados + CTA gold. Toggle por `open` (visible/opacity).

## Design system atual (inspirado na Calibre/figma do usuário)
- **Fonte: Inter** (`--font-inter`); OpenType `cv11, cv05, ss10, ss08` no corpo.
- **Cores**: `ink` #0a0b12 · `ink-soft` #2b2b2b · `ink-faint` #8a8a8a · `paper` #fbfbfb · `line` #e8e8e8 · `petrol` (950=#05151b, 900=#122e39) · `sage` · acento **`gold` #ffbb0f / `gold-bright` #ffc62e**.
- **Títulos** (`.t-display/.t-h2/.t-h3/.t-h4`): peso **440**, caixa normal, line-height fechado (display 1.03 / h2 1.05), tracking -0.065em (h1/h2). Hero h1 é inline. Corpo: tracking -0.02em. Botão: -0.038em.
- **Eyebrow**: `// label` (`<Eyebrow>`), **sentence case 15px**, cor `ink-soft`. Sub-rótulo tipo "NOSSA VISÃO" é inline (16px uppercase).
- **Tamanhos atualizados (jun): h2 até 54px** (`--text-h2` clamp ...→3.375rem), **corpo 18px** (`--text-body` 1.125rem), `--text-eyebrow` 15px.
- **Padding de seção em PX** (não clamp): `<Section>` = `py-[80px] md:py-[120px]`. Usuário prefere px p/ comunicar com precisão ("seção X = 100px"). Override por seção precisa do `md:` junto (ex.: `pb-[90px] md:pb-[90px]`).
- Sobre: container `max-w-[1280px]` (Stats fica 1350). Body do Sobre = 16px (resto 18px). Chanfro da imagem = 6rem/96px.
- **CTA**: `<SplitButton tone="gold|white" size>` (rótulo + caixa de seta, juntos, sem gap).
- **Sem raio**: cards, imagens, botões retos (exceções: SplitButton 4/8px, avatares circulares).
- Primitivos em `components/ui/`; seções em `components/sections/`; tokens em `app/globals.css`; doc em `DESIGN_SYSTEM.md`.

## Padrões de seção observados nos exemplos (a aplicar)
- Título de seção **54px** #0a0b12 · corpo **18px** #2b2b2b · sub-rótulo tipo "OUR VISION" 16px.
- **Imagens com canto chanfrado** (igual painel do hero).
- **CTA gold** "More about us".
- **Stats**: números **86px** #0a0b12 (ex.: 180+/95%/15+) com rótulo ao lado.
- **Linhas verticais** de coluna no fundo (estender do hero).

## Operacional (importante)
- Preview via MCP (`.claude/launch.json` nome "edile", porta 3000).
- **Mudou `globals.css` OU adicionou classe Tailwind NOVA (utilitário inédito, ex.: `opacity-100`)? REINICIE o dev server** (Turbopack não recompila tokens nem gera utilitários novos via HMR): stop → matar porta 3000 → `rm -rf .next` → start.
- Imagens HEIF/`.avif` quebram a otimização do Next → converter p/ jpg/webp com sharp.
- **Qualidade de imagem**: Next 16 reotimiza em q75 por padrão E exige whitelist em `next.config` (`images.qualities: [75,90]`) p/ usar `quality={90}` no `<Image>`. Hero usa `quality={90}`. NÃO fazer upscale do source (degrada); reencodar do original em res nativa, q≥90. Hero parallax: scale começa em 1.0 (sem upscale). Source do hero é 1672px → em telas >1672 (1920/4K) fica levemente soft; pedir source maior se precisar.
- O screenshot do preview às vezes trava na sessão; validar por `preview_eval`/`preview_inspect` (medições) quando isso acontecer.
- Sempre `npm run lint` + `npm run build` limpos antes de fechar um passo.

## Próximo passo
**Seção 4 — "Propósito" (para investidores e para moradores).** Já existe `components/sections/proposito.tsx` (2 cards) no DS ANTIGO — precisa ser refeita no DS novo (Inter, neutros, gold, `//` eyebrow, chanfros). Aguardar o usuário mandar o Figma da seção (ele tem conduzido por node-id do Figma `aVLsjWvrmgxDDxdZdu4sRI` + prints com inspetor). Depois: 5) Por que nos escolher (4 vantagens), 6) FAQ, 7) Formulário "Vamos trabalhar juntos", 8) Blog "Recentes", 9) revisar Footer.

## Seções já no DS NOVO (concluídas): Hero, Sobre, Stats, Empreendimentos. Ainda no DS ANTIGO (revisar): Propósito, CTA-futuro, Footer. Ordem atual no `app/page.tsx`: Navbar · Hero · Sobre · Stats · Empreendimentos · Proposito · CtaFuturo · Footer.
