/**
 * Fonte única dos empreendimentos — usada na seção da home, na lista
 * `/empreendimentos` e nas páginas de detalhe `/empreendimentos/[slug]`.
 * Nomes, status, localizações, galerias e diferenciais são placeholder —
 * substituir pelos dados reais da Edile.
 */

export type EmpreendimentoType = "condominio" | "loteamento";

export const typeLabel: Record<EmpreendimentoType, string> = {
  condominio: "Condomínio",
  loteamento: "Loteamento",
};

export type Empreendimento = {
  slug: string;
  type: EmpreendimentoType;
  name: string;
  /** Rótulo curto abaixo do nome (ex.: "Unidade Residencial"). */
  subtitle?: string;
  /** Capa (card + hero da página de detalhe). */
  image: string;
  /** Resumo curto (card + meta description). */
  description: string;
  /** Ex.: "Lançamento", "Em obras", "Pronto para morar". */
  status: string;
  /** Ex.: "Indaiatuba, SP". */
  location: string;
  /** Imagens da galeria na página de detalhe. */
  gallery: string[];
  /** Diferenciais/destaques listados na página de detalhe. */
  highlights: string[];
  /** Sobrescreve o link padrão /empreendimentos/[slug] quando definido. */
  href?: string;
};

export const empreendimentos: Empreendimento[] = [
  {
    slug: "helvetia-residence",
    type: "condominio",
    name: "Helvétia Residence",
    subtitle: "Condomínio de casas",
    image: "/images/emp-helvetia-residence.webp",
    description:
      "Condomínio fechado de alto padrão em região premium de Indaiatuba: a segurança e a liberdade de morar bem, com infraestrutura completa e valorização garantida.",
    status: "Em obras",
    location: "Indaiatuba, SP",
    href: "https://www.edile.com.br/helvetia-residence",
    gallery: ["/images/emp-1.webp", "/images/proposito-1.webp", "/images/why.webp"],
    highlights: [
      "Portaria e segurança 24 horas",
      "Área de lazer completa",
      "Localização premium em Indaiatuba",
      "Infraestrutura e paisagismo entregues",
    ],
  },
  {
    slug: "terra-nobre",
    type: "loteamento",
    name: "Ville Saint Clair",
    subtitle: "Condomínio de casas",
    image: "/images/emp-ville-saint-clair.webp",
    description:
      "Loteamento de lotes amplos em localização estratégica, pronto para receber o seu projeto, com base jurídica impecável e potencial de valorização a longo prazo.",
    status: "Lançamento",
    location: "Indaiatuba, SP",
    gallery: ["/images/emp-2.webp", "/images/proposito-2.webp", "/images/sobre.jpg"],
    highlights: [
      "Lotes amplos e bem posicionados",
      "Infraestrutura completa entregue",
      "Base jurídica regularizada",
      "Alto potencial de valorização",
    ],
  },
  {
    slug: "bosque-sereno",
    type: "condominio",
    name: "Jardins di Roma",
    subtitle: "Unidade Residencial",
    image: "/images/emp-jardins-di-roma.webp",
    description:
      "Casas integradas ao verde, com amplos panos de vidro e privacidade total: sofisticação que se traduz em qualidade de vida e patrimônio.",
    status: "Em obras",
    location: "Indaiatuba, SP",
    gallery: ["/images/emp-4.webp", "/images/sobre.jpg", "/images/proposito-1.webp"],
    highlights: [
      "Casas integradas à natureza",
      "Privacidade e amplos jardins",
      "Lazer e bem-estar",
      "Segurança 24 horas",
    ],
  },
  {
    slug: "villa-toscana",
    type: "condominio",
    name: "Helvétia Park",
    subtitle: "Unidade Residencial",
    image: "/images/emp-helvetia-park.webp",
    description:
      "Residências de linhas contemporâneas e engenharia inteligente, planejadas sob critérios severos de sustentabilidade e conforto para cada fase da vida.",
    status: "Pronto para morar",
    location: "Indaiatuba, SP",
    gallery: ["/images/emp-3.webp", "/images/proposito-3.webp", "/images/why.webp"],
    highlights: [
      "Arquitetura contemporânea",
      "Engenharia inteligente e sustentável",
      "Acabamento de alto padrão",
      "Pronto para morar",
    ],
  },
  {
    slug: "altos-da-mata",
    type: "loteamento",
    name: "Altos da Mata",
    image: "/images/emp-5.webp",
    description:
      "Lotes em uma das frentes de maior crescimento de Indaiatuba: o endereço certo para morar com elegância ou investir com visão de futuro.",
    status: "Lançamento",
    location: "Indaiatuba, SP",
    gallery: ["/images/emp-5.webp", "/images/proposito-2.webp", "/images/why.webp"],
    highlights: [
      "Frente de crescimento de Indaiatuba",
      "Lotes prontos para construir",
      "Infraestrutura completa",
      "Excelente liquidez e valorização",
    ],
  },
];

export function getEmpreendimentoBySlug(slug: string): Empreendimento | undefined {
  return empreendimentos.find((e) => e.slug === slug);
}
