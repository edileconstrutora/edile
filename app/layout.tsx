import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://edile.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Edile Empreendimentos | Construtora e Incorporadora",
    template: "%s — EDILE",
  },
  description:
    "Incorporadora e construtora de condomínios e loteamentos de alto padrão em Indaiatuba e região. Engenharia, sustentabilidade e valorização patrimonial. Responsabilidade com o seu amanhã.",
  applicationName: "EDILE",
  authors: [{ name: "EDILE" }],
  creator: "EDILE",
  publisher: "EDILE",
  keywords: [
    "EDILE",
    "incorporadora Indaiatuba",
    "construtora Indaiatuba",
    "condomínio de alto padrão Indaiatuba",
    "loteamento de alto padrão Indaiatuba",
    "imóveis de alto padrão Indaiatuba",
    "condomínio fechado Indaiatuba",
    "lotes em Indaiatuba",
    "investimento imobiliário Indaiatuba",
    "valorização patrimonial",
  ],
  category: "real estate",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "EDILE",
    title: "EDILE — Incorporadora de alto padrão em Indaiatuba",
    description:
      "Condomínios e loteamentos de alto padrão em Indaiatuba. Responsabilidade com o seu amanhã.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EDILE — Responsabilidade com o seu amanhã",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDILE — Incorporadora de alto padrão em Indaiatuba",
    description:
      "Condomínios e loteamentos de alto padrão em Indaiatuba. Responsabilidade com o seu amanhã.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
