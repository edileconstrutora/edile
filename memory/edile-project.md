---
name: edile-project
description: O que é o projeto EDILE e onde está sua fonte de verdade de design
metadata: 
  node_type: memory
  type: project
  originSessionId: 65909256-9a93-4df4-a37f-f54b56ce91b9
---

**EDILE** é o site de uma incorporadora de alto padrão, em `D:\Projetos Claude\Edile`.

Reconstruído do zero (jun/2026) a partir de um layout feio no Figma (`aVLsjWvrmgxDDxdZdu4sRI`), com design system novo, calibrado e tokenizado.

Stack: Next.js (App Router) + Tailwind v4 (tokens em `app/globals.css` `@theme`) + **Inter** + Lenis (scroll suave) + Framer Motion + Embla. Acento de CTA **gold #ffbb0f**. Deploy: Vercel. Estado vivo das seções: ver [[edile-progress]].

**Fonte de verdade do design: `DESIGN_SYSTEM.md` (raiz) + `CLAUDE.md`.** Sempre seguir antes de criar página/componente: nada hardcoded fora de globals.css; tipografia via classes `.t-*`; páginas = `<Section>`→`<Container>`→primitivos de `components/ui/`. Ver [[user-designer]].
