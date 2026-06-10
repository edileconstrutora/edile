import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { LegalDoc, type LegalBlock } from "@/components/ui/legal-doc";

export const metadata: Metadata = {
  title: "Termos de uso — EDILE",
  description: "As regras de uso do site da Edile.",
};

// PLACEHOLDER — texto-base. VALIDAR com o jurídico da Edile antes de publicar.
const updatedAt = "10 de junho de 2026";
const blocks: LegalBlock[] = [
  { type: "heading", text: "1. Aceitação dos termos" },
  {
    type: "paragraph",
    text: "Ao acessar e utilizar o site da EDILE Empreendimentos Imobiliários Ltda. (CNPJ 59.780.967/0001-86), você declara estar de acordo com estes Termos de Uso. Caso não concorde, recomendamos que não utilize o site.",
  },
  { type: "heading", text: "2. Sobre o conteúdo" },
  {
    type: "paragraph",
    text: "Este site tem caráter informativo e institucional. As informações sobre empreendimentos são apresentadas para fins de apresentação e podem ser alteradas a qualquer momento, sem aviso prévio.",
  },
  { type: "heading", text: "3. Imagens e valores ilustrativos" },
  {
    type: "paragraph",
    text: "Imagens, plantas, perspectivas, áreas e eventuais valores exibidos são meramente ilustrativos e não constituem oferta, proposta ou compromisso de venda. As condições comerciais são formalizadas exclusivamente em documentos próprios.",
  },
  { type: "heading", text: "4. Propriedade intelectual" },
  {
    type: "paragraph",
    text: "A marca EDILE, os textos, as imagens e os demais elementos deste site são protegidos por lei e não podem ser copiados, reproduzidos ou utilizados sem autorização prévia e por escrito.",
  },
  { type: "heading", text: "5. Uso adequado" },
  {
    type: "paragraph",
    text: "Você se compromete a utilizar o site de forma lícita, sem prejudicar o seu funcionamento, a sua segurança ou os direitos de terceiros.",
  },
  { type: "heading", text: "6. Links de terceiros" },
  {
    type: "paragraph",
    text: "O site pode conter links para páginas externas, como redes sociais. Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses sites.",
  },
  { type: "heading", text: "7. Limitação de responsabilidade" },
  {
    type: "paragraph",
    text: "Empenhamo-nos para manter as informações corretas e o site disponível, mas não garantimos ausência de erros ou interrupções. O uso do site é de responsabilidade do usuário.",
  },
  { type: "heading", text: "8. Privacidade" },
  {
    type: "paragraph",
    text: "O tratamento dos dados pessoais coletados neste site é regido pela nossa Política de Privacidade.",
  },
  { type: "heading", text: "9. Alterações destes Termos" },
  {
    type: "paragraph",
    text: "Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página.",
  },
  { type: "heading", text: "10. Legislação e foro" },
  {
    type: "paragraph",
    text: "Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Indaiatuba/SP para dirimir eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.",
  },
];

export default function TermosDeUsoPage() {
  return (
    <>
      <Navbar solid />
      <main className="relative overflow-hidden bg-mist">
        <PageHero
          eyebrow="Legal"
          title="Termos de uso"
          description="As regras para a utilização do site da Edile."
        />
        <Section className="bg-transparent pt-14 md:pt-20">
          <Container>
            <Reveal>
              <LegalDoc updatedAt={updatedAt} blocks={blocks} />
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
