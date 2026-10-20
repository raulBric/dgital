import type { Metadata } from "next";
import { config } from "@/content/config";
import { contacto } from "@/content/site";

export const metadata: Metadata = {
  title: "Reserva un diagnóstico gratuito",
  description: "Reserva 30 minutos con Dgital para ver qué tareas de tu empresa se pueden automatizar con IA.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{contacto.titulo}</h1>
          <p className="mt-4 text-lg text-neutral-600">{contacto.texto}</p>
        </div>

        {config.calendlyUrl ? (
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              src={`${config.calendlyUrl}${config.calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1`}
              title="Calendario de reservas de Dgital"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-8 text-neutral-700">
            {contacto.sinCalendly} <strong>{config.email}</strong>.
          </div>
        )}
      </div>
    </section>
  );
}
