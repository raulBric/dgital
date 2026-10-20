import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  Mail,
  MessagesSquare,
  Plus,
  Receipt,
  UserPlus,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { config } from "@/content/config";
import { demo } from "@/content/demo";
import {
  casoDestacado,
  ctaFinal,
  faq,
  hero,
  precios,
  proceso,
  servicios,
  sobreMi,
} from "@/content/site";
import { casoDestacadoData as caso } from "@/data/casos";
import BotonReserva from "./BotonReserva";
import { Resultados } from "./casos";
import DemoIA from "./DemoIA";
import LiteYouTube from "./LiteYouTube";
import { Encabezado, Etiqueta, Section, boton } from "./ui";

function Titular() {
  const { titular, titularDestacado } = hero;
  const i = titularDestacado ? titular.indexOf(titularDestacado) : -1;
  if (i < 0) return <>{titular}</>;
  return (
    <>
      {titular.slice(0, i)}
      <span className="text-accent-light">{titularDestacado}</span>
      {titular.slice(i + titularDestacado.length)}
    </>
  );
}

export function Hero() {
  const { ejemplo } = hero;
  return (
    <section className="fondo-degradado -mt-20 pt-20 text-white md:-mt-24 md:pt-24">
      <div className="container grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h1 className="max-w-[15ch] text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem]">
            <Titular />
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-neutral-300 md:text-xl">{hero.subtitulo}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BotonReserva />
            <Link href="/#demo" className={boton("contorno")}>
              {hero.ctaSecundario}
            </Link>
          </div>
          <p className="mt-5 font-mono text-xs text-neutral-500">{hero.nota}</p>
        </div>

        {/* Ejemplo concreto: correo que entra → datos → borrador listo para revisar */}
        <div className="rounded-lg border border-white/10 bg-white/[0.03] font-mono text-[13px]" aria-hidden>
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-neutral-500">
            <span>Bandeja · {ejemplo.bandeja}</span>
            <span>1 nuevo</span>
          </div>

          <div className="border-b border-white/10 px-5 py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-sans text-sm font-semibold text-white">{ejemplo.correo.de}</span>
              <span className="text-neutral-500">{ejemplo.correo.hora}</span>
            </div>
            <p className="mt-1 font-sans text-sm text-neutral-200">{ejemplo.correo.asunto}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-500">{ejemplo.correo.cuerpo}</p>
          </div>

          <dl className="grid gap-x-6 gap-y-2 border-b border-white/10 px-5 py-4 sm:grid-cols-2">
            {ejemplo.datos.map((d) => (
              <div key={d.campo} className="flex justify-between gap-3">
                <dt className="text-neutral-500">{d.campo}</dt>
                <dd className="text-neutral-200">{d.valor}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                <FileText className="h-4 w-4 text-white" />
              </span>
              <span>
                <span className="block font-sans text-sm font-semibold text-white">{ejemplo.borrador.titulo}</span>
                <span className="text-neutral-500">{ejemplo.borrador.hora}</span>
              </span>
            </span>
            <span className="shrink-0 whitespace-nowrap rounded border border-accent-light/40 px-2 py-1 text-[11px] text-accent-light">
              {ejemplo.borrador.estado}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const iconos: Record<string, LucideIcon> = {
  oferta: FileText,
  correo: Mail,
  factura: Receipt,
  lead: UserPlus,
  informe: BarChart3,
  atencion: MessagesSquare,
};

export function Servicios() {
  return (
    <Section id="servicios">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Encabezado numero="01" antetitulo={servicios.antetitulo} titulo={servicios.titulo} />
        </div>
        <ul className="border-t border-neutral-200">
          {servicios.items.map((item) => {
            const Icono = iconos[item.icono];
            return (
              <li
                key={item.titulo}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-1 border-b border-neutral-200 py-6 md:grid-cols-[auto_14rem_1fr] md:items-center"
              >
                <Icono className="row-span-2 mt-0.5 h-5 w-5 text-neutral-400 transition-colors group-hover:text-accent md:row-span-1 md:mt-0" aria-hidden />
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <p className="text-neutral-600">{item.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export function Demo() {
  return (
    <Section id="demo" fondo="gris">
      <Encabezado numero="02" antetitulo={demo.antetitulo} titulo={demo.titulo} texto={demo.texto} />
      <DemoIA />
    </Section>
  );
}

export function CasoDestacado() {
  return (
    <Section id="caso">
      <Etiqueta numero="03">{casoDestacado.antetitulo}</Etiqueta>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.6rem]">{caso.titulo}</h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">{caso.sector}</p>
          <h3 className="mt-10 text-sm font-semibold">{casoDestacado.etiquetas.problema}</h3>
          <p className="mt-2 leading-relaxed text-neutral-700 md:text-lg">{caso.problema}</p>
        </div>
        <div>
          <LiteYouTube videoId={caso.videoId} titulo={caso.titulo} />
          <blockquote className="mt-8 text-lg font-medium leading-snug text-ink">
            <span className="text-accent">“</span>
            {caso.frase}
            <span className="text-accent">”</span>
          </blockquote>
          <Link
            href={`/casos/${caso.slug}`}
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
          >
            {casoDestacado.enlace}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <Resultados slug={caso.slug} />
      </div>
    </Section>
  );
}

export function Proceso() {
  return (
    <Section id="proceso" fondo="gris">
      <Encabezado numero="04" antetitulo={proceso.antetitulo} titulo={proceso.titulo} />
      <ol className="grid gap-0 md:grid-cols-4">
        {proceso.pasos.map((paso, i) => (
          <li key={paso.titulo} className="relative border-l border-neutral-300 pb-10 pl-6 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-8 md:pt-8">
            <span
              className={`absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full md:-top-[5px] md:left-0 ${i === 0 ? "bg-accent" : "bg-ink"}`}
              aria-hidden
            />
            <p className="font-mono text-xs text-neutral-500">
              Paso {i + 1} · {paso.detalle}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{paso.titulo}</h3>
            <p className="mt-2 text-neutral-600">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Precios() {
  return (
    <Section id="precios">
      <Encabezado numero="05" antetitulo={precios.antetitulo} titulo={precios.titulo} texto={precios.texto} />
      <div className="grid max-w-4xl border-y border-neutral-200 md:grid-cols-2">
        {precios.planes.map((plan, i) => (
          <div key={plan.nombre} className={`py-8 md:py-10 ${i > 0 ? "border-t border-neutral-200 md:border-l md:border-t-0 md:pl-10" : "md:pr-10"}`}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">{plan.nombre}</h3>
            <p className="mt-4">
              <span className="mr-2 text-neutral-500">{plan.prefijo}</span>
              <span className="text-5xl font-semibold tracking-tight">{plan.precio}</span>
              {plan.sufijo && <span className="text-xl text-neutral-500">{plan.sufijo}</span>}
            </p>
            <p className="mt-4 max-w-sm text-neutral-600">{plan.texto}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <BotonReserva />
      </div>
    </Section>
  );
}

export function SobreMi() {
  return (
    <Section id="sobre-mi" fondo="gris">
      <div className="grid items-start gap-10 md:grid-cols-[260px_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-md bg-neutral-200">
          {config.fotoFundador ? (
            <Image src={config.fotoFundador} alt={`${sobreMi.nombre}, ${sobreMi.cargo}`} fill sizes="260px" className="object-cover" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-neutral-500">
              <UserRound className="h-14 w-14" aria-hidden />
              <span className="font-mono text-xs">[RELLENAR: foto]</span>
            </div>
          )}
        </div>
        <div className="max-w-2xl">
          <Etiqueta numero="06">{sobreMi.antetitulo}</Etiqueta>
          <p className="text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]">{sobreMi.texto}</p>
          <p className="mt-8 font-semibold">
            {sobreMi.nombre} <span className="font-normal text-neutral-500">· {sobreMi.cargo}</span>
          </p>
          {config.linkedinUrl && (
            <a
              href={config.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
            >
              {sobreMi.linkedin}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Encabezado numero="07" antetitulo={faq.antetitulo} titulo={faq.titulo} />
        <div className="border-t border-neutral-200">
          {faq.items.map((item) => (
            <details key={item.pregunta} className="group border-b border-neutral-200 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.pregunta}
                <Plus className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-neutral-600">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CtaFinal() {
  return (
    <Section id="contacto" fondo="degradado">
      <div className="grid items-end gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="max-w-[18ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">{ctaFinal.titulo}</h2>
          <p className="mt-5 max-w-xl text-lg text-neutral-300">{ctaFinal.texto}</p>
        </div>
        <div className="md:justify-self-end">
          <BotonReserva />
        </div>
      </div>
    </Section>
  );
}

