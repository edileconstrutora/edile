import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { LegalDoc, type LegalBlock } from "@/components/ui/legal-doc";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Edile coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

// PLACEHOLDER — texto-base orientado à LGPD. VALIDAR com o jurídico da Edile
// antes de publicar (encarregado/DPO, bases legais, prazos de retenção, etc.).
const updatedAt = "10 de junho de 2026";
const blocks: LegalBlock[] = [
  { type: "heading", text: "1. Quem somos" },
  {
    type: "paragraph",
    text: "Esta Política de Privacidade descreve como a EDILE Empreendimentos Imobiliários Ltda. (CNPJ 59.780.967/0001-86), com sede em Indaiatuba/SP, trata os dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
  },
  { type: "heading", text: "2. Dados que coletamos" },
  {
    type: "paragraph",
    text: "Coletamos apenas os dados que você nos fornece voluntariamente ao interagir com o site:",
  },
  {
    type: "list",
    items: [
      "Cadastro na newsletter: endereço de e-mail.",
      "Formulário de contato: nome, e-mail, telefone e a mensagem enviada.",
      "Dados de navegação eventualmente coletados de forma automática, quando aplicável.",
    ],
  },
  { type: "heading", text: "3. Para que usamos seus dados" },
  {
    type: "paragraph",
    text: "Utilizamos seus dados para responder a solicitações de contato, enviar novidades e lançamentos quando você opta por recebê-los, e aprimorar a experiência no site. As bases legais para o tratamento são o seu consentimento e o legítimo interesse, nos termos da LGPD.",
  },
  { type: "heading", text: "4. Compartilhamento de dados" },
  {
    type: "paragraph",
    text: "Não vendemos seus dados pessoais. Eles podem ser compartilhados apenas com prestadores de serviço que apoiam nossa operação (por exemplo, ferramentas de e-mail ou hospedagem), sempre limitados à finalidade informada, ou quando exigido por obrigação legal ou regulatória.",
  },
  { type: "heading", text: "5. Cookies" },
  {
    type: "paragraph",
    text: "Este site pode utilizar cookies essenciais ao seu funcionamento. Caso venham a ser adotadas ferramentas de análise ou marketing, você será informado e poderá gerenciar o seu consentimento.",
  },
  { type: "heading", text: "6. Armazenamento e segurança" },
  {
    type: "paragraph",
    text: "Adotamos medidas técnicas e organizacionais para proteger seus dados, que são mantidos apenas pelo tempo necessário às finalidades descritas nesta Política ou conforme exigido por lei.",
  },
  { type: "heading", text: "7. Seus direitos como titular" },
  {
    type: "paragraph",
    text: "A qualquer momento, você pode solicitar:",
  },
  {
    type: "list",
    items: [
      "Confirmação da existência de tratamento e acesso aos seus dados;",
      "Correção de dados incompletos, inexatos ou desatualizados;",
      "Eliminação dos dados tratados com base no consentimento;",
      "Informações sobre o compartilhamento e a portabilidade dos dados;",
      "Revogação do consentimento, a qualquer tempo.",
    ],
  },
  { type: "heading", text: "8. Contato e encarregado (DPO)" },
  {
    type: "paragraph",
    text: "Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato pelo e-mail contato@edile.com.br.",
  },
  { type: "heading", text: "9. Alterações desta Política" },
  {
    type: "paragraph",
    text: "Esta Política poderá ser atualizada periodicamente. A data da última atualização é sempre indicada no topo desta página.",
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Navbar solid />
      <main className="relative overflow-hidden bg-mist">
        <PageHero
          eyebrow="Legal"
          title="Política de privacidade"
          description="Como a Edile coleta, usa e protege os seus dados pessoais."
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
