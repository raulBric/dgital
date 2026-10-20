import JsonLd from "@/components/JsonLd";
import { CasoDestacado, CtaFinal, Demo, Faq, Hero, Precios, Proceso, Servicios, SobreMi } from "@/components/home";
import { faq } from "@/content/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.pregunta,
    acceptedAnswer: { "@type": "Answer", text: item.respuesta },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <Servicios />
      <Demo />
      <CasoDestacado />
      <Proceso />
      <Precios />
      <SobreMi />
      <Faq />
      <CtaFinal />
    </>
  );
}
