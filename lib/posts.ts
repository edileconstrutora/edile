export type Post = {
  image: string;
  category: string;
  date: string;
  title: string;
  href?: string;
};

// Conteúdo dos posts é placeholder — substituir pelos artigos reais.
// A home mostra os 3 primeiros; a página /blog mostra todos.
export const posts: Post[] = [
  {
    image: "/images/blog-1.webp",
    category: "Mercado",
    date: "9 jun 2025",
    title: "Por que Indaiatuba é um dos endereços que mais valorizam no interior paulista",
  },
  {
    image: "/images/blog-2.webp",
    category: "Alto padrão",
    date: "2 jun 2025",
    title: "Condomínio fechado: segurança e liberdade no mesmo endereço",
  },
  {
    image: "/images/blog-3.webp",
    category: "Engenharia",
    date: "26 mai 2025",
    title: "Sustentabilidade e tecnologia: o que faz um imóvel valorizar com o tempo",
  },
  {
    image: "/images/proposito-1.webp",
    category: "Investimento",
    date: "14 mai 2025",
    title: "Comprar para morar ou para investir: como decidir no alto padrão",
  },
  {
    image: "/images/emp-3.webp",
    category: "Arquitetura",
    date: "30 abr 2025",
    title: "Loteamento ou condomínio: qual formato combina com o seu projeto de vida",
  },
  {
    image: "/images/proposito-2.webp",
    category: "Mercado",
    date: "22 abr 2025",
    title: "Perto de Campinas e São Paulo: o que a localização faz pelo seu patrimônio",
  },
];
