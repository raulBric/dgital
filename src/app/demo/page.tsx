import type { Metadata } from "next";
import DemoIA from "@/components/DemoIA";
import { demo } from "@/content/demo";

export const metadata: Metadata = {
  title: "Demo: prueba la IA con un correo real",
  description:
    "Pega un correo de cliente y mira cómo la IA lo clasifica, extrae los datos clave y prepara la respuesta. Demo gratuita de automatización para pymes.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-accent">{demo.antetitulo}</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{demo.titulo}</h1>
          <p className="mt-4 text-lg text-neutral-600">{demo.texto}</p>
        </div>
        <DemoIA />
      </div>
    </section>
  );
}
