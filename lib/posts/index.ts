/**
 * Blog sem CMS: cada post é um arquivo `lib/posts/<slug>.ts` com blocos
 * tipados — o TypeScript do build valida o conteúdo, e o template
 * (`PostHero` + `PostBody`) cuida de todo o estilo.
 * Como adicionar um post: ver "Blog" no DESIGN_SYSTEM.md.
 */

/** Bloco de conteúdo do corpo do post. O estilo de cada um é fixo no `PostBody`. */
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; cite?: string };

export type Post = {
  /** kebab-case, vira a URL /blog/[slug] */
  slug: string;
  title: string;
  category: string;
  /** Data de exibição em PT-BR, ex.: "9 jun 2025" */
  date: string;
  /** Imagem de capa — /images/*.webp */
  image: string;
  /** Resumo de ~150 caracteres — meta description e Open Graph */
  excerpt: string;
  content: Block[];
};

import { post as indaiatubaValorizacao } from "./indaiatuba-valorizacao";
import { post as condominioFechadoSeguranca } from "./condominio-fechado-seguranca";
import { post as sustentabilidadeETecnologia } from "./sustentabilidade-e-tecnologia";
import { post as morarOuInvestir } from "./morar-ou-investir";
import { post as loteamentoOuCondominio } from "./loteamento-ou-condominio";
import { post as localizacaoEPatrimonio } from "./localizacao-e-patrimonio";

// Ordem = recência (post novo entra NO TOPO).
// A home mostra os 3 primeiros; a página /blog mostra todos.
export const posts: Post[] = [
  indaiatubaValorizacao,
  condominioFechadoSeguranca,
  sustentabilidadeETecnologia,
  morarOuInvestir,
  loteamentoOuCondominio,
  localizacaoEPatrimonio,
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts relacionados: mesma categoria primeiro, depois os mais recentes — sempre sem o post atual. */
export function relatedPosts(slug: string, n = 3): Post[] {
  const current = getPostBySlug(slug);
  const others = posts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, n);
  return [
    ...others.filter((p) => p.category === current.category),
    ...others.filter((p) => p.category !== current.category),
  ].slice(0, n);
}
