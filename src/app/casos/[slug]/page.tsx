import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BotonReserva from "@/components/BotonReserva";
import JsonLd from "@/components/JsonLd";
import LiteYouTube from "@/components/LiteYouTube";
import { config } from "@/content/config";
import { ctaFinal } from "@/content/site";
import { casos, getCaso } from "@/data/casos";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const caso = getCaso(params.slug);
  if (!caso) return {};
  return {
    title: caso.tituloSeo,
    description: caso.descripcionSeo,
    alternates: { canonical: `/casos/${caso.slug}` },
    openGraph: { type: "article", title: caso.tituloSeo, description: caso.descripcionSeo, publishedTime: caso.fecha },
  };
}

export default async function CasoPage({ params }: Props) {
  const caso = getCaso(params.slug);
  if (!caso) notFound();

  const { default: Articulo } = await import(`@/content/casos/${caso.slug}.mdx`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caso.tituloSeo,
    description: caso.descripcionSeo,
    datePublished: caso.fecha,
    author: { "@type": "Person", name: "Raúl" },
    publisher: { "@type": "Organization", name: "Dgital", logo: { "@type": "ImageObject", url: `${config.url}/logo.svg` } },
    mainEntityOfPage: `${config.url}/casos/${caso.slug}`,
  };

  return (
    <article className="py-12 md:py-20">
      <JsonLd data={schema} />
      <div className="container max-w-3xl">
        <Link href="/casos" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Todos los casos
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-accent">{caso.sector}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{caso.tituloSeo}</h1>
        <p className="mt-4 text-xl text-neutral-600">{caso.titulo}.</p>

        <div className="mt-10">
          <LiteYouTube videoId={caso.videoId} titulo={caso.tituloSeo} />
        </div>

        <div className="prose prose-lg prose-neutral mt-12 max-w-none">
          <Articulo />
        </div>

        <aside className="mt-16 fondo-degradado rounded-lg p-8 text-white md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{ctaFinal.titulo}</h2>
          <p className="mt-3 text-neutral-300">{ctaFinal.texto}</p>
          <BotonReserva variante="oscuro" className="mt-6" />
        </aside>
      </div>
    </article>
  );
}
