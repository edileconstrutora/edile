/**
 * Dados estruturados (Schema.org / JSON-LD) para o Google entender que a EDILE
 * é uma incorporadora de Indaiatuba — ajuda em busca local e em rich results.
 * Renderizado uma vez no layout raiz. Atualize e-mail/telefone/endereço quando
 * os dados reais forem confirmados (telefone ainda é placeholder no rodapé).
 */
const SITE_URL = "https://edile.com.br";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent"],
        "@id": `${SITE_URL}/#organization`,
        name: "EDILE",
        legalName: "EDILE Incorporadora",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        image: `${SITE_URL}/og.png`,
        description:
          "Incorporadora e construtora de condomínios e loteamentos de alto padrão em Indaiatuba e região.",
        slogan: "Responsabilidade com o seu amanhã",
        email: "contato@edile.com.br",
        areaServed: [
          { "@type": "City", name: "Indaiatuba" },
          { "@type": "State", name: "São Paulo" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indaiatuba",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        sameAs: ["https://instagram.com/edileconstrutora"],
        knowsAbout: [
          "Incorporação imobiliária",
          "Condomínios de alto padrão",
          "Loteamentos de alto padrão",
          "Investimento imobiliário",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "EDILE",
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON estático e confiável — sem entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
