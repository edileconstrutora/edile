import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Stats } from "@/components/sections/stats";
import { Empreendimentos } from "@/components/sections/empreendimentos";
import { Proposito } from "@/components/sections/proposito";
import { Form } from "@/components/sections/form";
import { Blog } from "@/components/sections/blog";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Empreendimentos />
        <Stats />
        <Sobre />
        <Proposito />
        <Form />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
