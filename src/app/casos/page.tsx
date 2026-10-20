import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { casos } from "@/data/casos";

export const metadata: Metadata = {
  title: "Casos de automatización con IA",
  description:
    "Casos reales de pymes que han automatizado ofertas, correo, facturas y otras tareas repetitivas con IA. Problema, solución y resultados.",
  alternates: { canonical: "/casos" },
};

export default function CasosPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-accent">Casos</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Casos de automatización con IA</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Qué problema tenía cada empresa, qué montamos y qué cambió. Con cifras.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {casos.map((caso) => (
            <li key={caso.slug}>
              <Link
                href={`/casos/${caso.slug}`}
                className="group flex h-full flex-col rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 md:p-8"
              >
                <p className="text-sm font-medium text-neutral-500">{caso.sector}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{caso.tituloSeo}</h2>
                <p className="mt-3 flex-1 text-neutral-600">{caso.titulo}.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent">
                  Leer caso
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
