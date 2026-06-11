# Guia de edição do site EDILE

> **Para o Claude (leia sempre):** este site é editado **conversando com você**. Quem edita pode ser **o Yago (designer)** ou **um cliente**.
> - Se quem fala **é o Yago** → ele entende de design e código; pode ir direto ao ponto.
> - Se **NÃO é o Yago** → trate como **cliente sem conhecimento de design ou código**. Guie passo a passo, em linguagem simples, **confirme antes de mudar**, nunca quebre o `DESIGN_SYSTEM.md`, e sempre rode `npm run build` antes de publicar. O objetivo é finalizar o site de forma **leve, correta e coerente**.

Este guia diz **o que ainda falta** para o site ficar pronto e **como pedir** cada alteração.

---

## Como funciona (sem painel / sem CMS)

Você **não mexe em código**. Você **conversa com o Claude** (no Claude Code, dentro deste projeto) e descreve o que quer — "troca essa foto", "adiciona um post", "muda esse texto". O Claude edita os arquivos, valida (`npm run build`) e **publica** (`git commit` + `git push`). A publicação atualiza o site no ar (Vercel) automaticamente.

**Fluxo sempre que for editar:**
1. Abrir o projeto no Claude Code.
2. (Recomendado) pedir: *"dá um `git pull` antes de começar"*.
3. Descrever a alteração.
4. No fim, pedir: *"faz o build, commita e dá push"*.

---

## ✅ O que falta para finalizar (checklist)

Itens marcados como `placeholder` no código — devem virar o conteúdo **real** da Edile:

- [ ] **Formulários** (contato + newsletter) — hoje **não enviam nada**. Precisam ser ligados ao **Web3Forms** (grátis). Ver seção "Formulários" abaixo. **Prioridade alta.**
- [ ] **Textos do site** — a copy atual está **quase certa**; revisar e ajustar para o texto oficial da Edile.
- [ ] **Imagens** — várias são genéricas/placeholder; trocar pelas imagens reais.
- [ ] **Empreendimentos** — nomes, status, localização, descrições, diferenciais e fotos são fictícios.
- [ ] **Equipe** (página /sobre) — fotos, nomes, cargos e os **links de Instagram** de cada pessoa são placeholder.
- [ ] **Números (estatísticas)** — ex.: "180+ empreendimentos", "95%", "15+ anos" são chutados.
- [ ] **Telefone do rodapé** — está `+55 19 0000-0000` (placeholder). E-mail, Instagram e cidade **já são reais**.
- [ ] **Textos jurídicos** (Política de Privacidade e Termos de Uso) — texto-base genérico; **validar com o advogado/jurídico** da Edile.
- [ ] **Links soltos** — "Trabalhe conosco" e alguns links do rodapé apontam para `#`. Definir destino.
- [ ] **Links do rodapé** — "Empreendimentos" e "Sobre" no rodapé ainda levam às seções da home (`/#...`); hoje existem as páginas `/empreendimentos` e `/sobre`. "Investidores" pode sair (foi removido do menu). Vale alinhar.

---

## Como pedir cada alteração

### 1. Textos do site
Diga onde está e qual o texto novo. Ex.: *"na seção 'Quem somos' da home, troca o parágrafo por: …"* ou *"o título do hero deve ser: …"*.
> **Claude:** a copy fica nos componentes de seção em `components/sections/` (hero, sobre, stats, empreendimentos, proposito, why, form, faq, blog) e nas páginas em `app/`. Mantenha o tom sóbrio de alto padrão e as regras de tipografia do `DESIGN_SYSTEM.md` (sem viúvas, `text-balance` etc.).

### 2. Imagens
Mande o arquivo (ou diga qual usar) e onde entra. Ex.: *"troca a imagem da seção Sobre por essa"*.
> **Claude:** imagens ficam em `public/images/`. Otimize com `sharp` para `.webp` quando possível, respeitando a proporção do espaço (a maioria já tem `aspect-[...]` definido). Se trocar um arquivo com o **mesmo nome**, limpe `.next` e reinicie o dev server (cache do otimizador).

### 3. Blog (adicionar / editar post)
Mande **título, categoria, data, imagem de capa, um resumo curto e o texto** (em parágrafos; pode ter subtítulos, citações e imagens). Ex.: *"adiciona um post: título X, categoria Mercado, com esse texto…"*.
> **Claude:** siga o guia **"Blog — como adicionar um post"** no `DESIGN_SYSTEM.md`. Cada post é um arquivo em `lib/posts/<slug>.ts`, registrado **no topo** de `lib/posts/index.ts`. Blocos: `paragraph`, `heading`, `image`, `quote`.

### 4. Empreendimentos (adicionar / editar)
Mande **nome, tipo (condomínio ou loteamento), status (Lançamento/Em obras/Pronto), cidade, descrição, lista de diferenciais e as fotos**. Ex.: *"adiciona o empreendimento Y…"*.
> **Claude:** dados em `lib/empreendimentos/index.ts` (tipo `Empreendimento`). A lista (`/empreendimentos`) e o detalhe (`/empreendimentos/[slug]`) e a seção da home se atualizam sozinhos.

### 5. Equipe (página /sobre)
Mande **foto, nome, cargo e o link do Instagram** de cada pessoa. Ex.: *"a equipe é: Fulano – Diretor – @fulano…"*.
> **Claude:** dados em `components/sections/sobre/team.tsx` (array `team`). Fotos em `public/images/team/`. Trocar o `href` de cada um pelo Instagram individual (hoje aponta para o IG institucional como placeholder).

### 6. Números / estatísticas
Diga os números certos. Ex.: *"são 32 empreendimentos entregues e 18 anos de atuação"*.
> **Claude:** ficam em `components/sections/stats.tsx`, `components/sections/why.tsx` e `components/sections/sobre/purpose.tsx`. Mantêm a animação de contagem.

### 7. Telefone e contatos (rodapé)
Diga o telefone real. Ex.: *"o telefone é (19) 9999-9999"*.
> **Claude:** `components/sections/footer.tsx`, coluna "Contato" (label + `href="tel:..."`). E-mail, Instagram e cidade já estão corretos.

### 8. Formulários (Web3Forms) — **importante**
Hoje os formulários de **contato** e de **newsletter** são só visuais: **não enviam e-mail**. Para funcionarem, use o **Web3Forms** (plano grátis, sem backend):

1. Acesse **https://web3forms.com**, informe o e-mail que vai **receber** as mensagens (ex.: `contato@edile.com.br`) e copie o **Access Key** gratuito.
2. Diga ao Claude: ***"configura os formulários (contato e newsletter) com Web3Forms, minha access key é XXXXXXXX"**.*
3. Pronto — os envios passam a cair no e-mail da Edile.

> **Claude (como ligar):** os formulários estão em `components/sections/form.tsx` (contato) e `components/sections/footer.tsx` (newsletter). Torne-os client components que fazem `POST` para `https://api.web3forms.com/submit` (JSON), com o campo `access_key` + os campos do form; trate estados de enviando/sucesso/erro com feedback simples ao usuário, sem quebrar o layout nem o `DESIGN_SYSTEM.md`. A access key do Web3Forms pode ficar no código (ela é pública por design), mas o ideal é uma variável de ambiente `NEXT_PUBLIC_WEB3FORMS_KEY`.

### 9. Textos jurídicos
As páginas **Política de Privacidade** e **Termos de Uso** têm um texto-base genérico (LGPD), **marcado como placeholder no código**. **Não publique como definitivo sem revisão de um advogado.** Quando tiver o texto oficial, mande que o Claude substitui.
> **Claude:** conteúdo em `app/politica-de-privacidade/page.tsx` e `app/termos-de-uso/page.tsx` (blocos do `LegalDoc`).

---

## Regras que o Claude sempre segue (não negociáveis)

- Seguir o `DESIGN_SYSTEM.md` à risca (tokens, tipografia, primitivos). **Nunca** inventar cores/tamanhos soltos.
- Conteúdo em **PT-BR**, tom sóbrio de alto padrão. Identidade real: Indaiatuba/SP, condomínios e loteamentos horizontais, slogan "Responsabilidade com o seu amanhã".
- Rodar **`npm run build`** (tem que passar limpo) **antes** de publicar.
- Trocar **apenas** o que foi pedido; em dúvida, **perguntar** antes.

## Publicar (colocar no ar)
Peça: *"faz o build, commita e dá push pra main"*. O deploy na Vercel sai do `main` automaticamente. Em poucos minutos o site no ar reflete a mudança.
