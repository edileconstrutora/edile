import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EDILE — Alto padrão em Indaiatuba",
  description:
    "Incorporadora e construtora de condomínios e loteamentos de alto padrão em Indaiatuba e região. Engenharia, sustentabilidade e valorização patrimonial. Responsabilidade com o seu amanhã.",
  metadataBase: new URL("https://edile.com.br"),
  openGraph: {
    title: "EDILE — Alto padrão em Indaiatuba",
    description:
      "Condomínios e loteamentos de alto padrão em Indaiatuba. Responsabilidade com o seu amanhã.",
    locale: "pt_BR",
    type: "website",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
