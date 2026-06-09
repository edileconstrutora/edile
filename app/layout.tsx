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
  title: "EDILE — Incorporadora de alto padrão",
  description:
    "Arquitetura, acabamentos e experiências em sintonia com o alto padrão. Empreendimentos pensados para quem busca o incomum.",
  metadataBase: new URL("https://edile.com.br"),
  openGraph: {
    title: "EDILE — Incorporadora de alto padrão",
    description:
      "Arquitetura, acabamentos e experiências em sintonia com o alto padrão.",
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
