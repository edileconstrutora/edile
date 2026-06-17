import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SobreHero } from "@/components/sections/sobre/hero";
import { SobrePurpose } from "@/components/sections/sobre/purpose";
import { SobreApproach } from "@/components/sections/sobre/approach";
import { SobreBeliefs } from "@/components/sections/sobre/beliefs";
import { SobreTeam } from "@/components/sections/sobre/team";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Incorporadora e construtora de condomínios e loteamentos de alto padrão em Indaiatuba. Conheça a Edile, nossos valores e o time por trás de cada entrega.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      {/* Navbar transparente sobre o hero escuro (como na home) */}
      <Navbar />
      <main>
        <SobreHero />
        <SobrePurpose />
        <SobreApproach />
        <SobreBeliefs />
        <SobreTeam />
      </main>
      <Footer />
    </>
  );
}
