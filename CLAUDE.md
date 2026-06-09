@AGENTS.md

# EDILE — site da incorporadora

Antes de criar/alterar qualquer página ou componente, leia **`DESIGN_SYSTEM.md`** (raiz) e siga-o à risca.

Regras inegociáveis:
- Sem cor/tamanho de fonte/espaçamento/raio hardcoded fora de `app/globals.css`. Use os tokens.
- Tipografia só pelas classes semânticas (`.t-display`, `.t-h2`, `.t-eyebrow`, …) e fonte Geist. Nunca trocar de família para criar hierarquia.
- Páginas = composição de `<Section>` → `<Container>` → primitivos de `components/ui/`. Veja `app/page.tsx`.
- Faltou um componente? Crie em `components/ui/` no mesmo padrão (props tipadas, tokens, `cn()`), documente em `DESIGN_SYSTEM.md`, depois use.
- Conteúdo em PT-BR, tom sóbrio de alto padrão.
- `next build` precisa passar limpo (pré-requisito Vercel).
