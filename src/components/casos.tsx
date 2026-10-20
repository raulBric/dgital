import { ArrowDown, ArrowRight, UserCheck } from "lucide-react";
import { getCaso, type Caso } from "@/data/casos";

function obtenerCaso(slug: string): Caso {
  const caso = getCaso(slug);
  if (!caso) throw new Error(`Caso no encontrado: ${slug}`);
  return caso;
}

export function AvisoValidacion({ caso }: { caso: Caso }) {
  if (caso.resultadosValidados) return null;
  return (
    <p className="mb-4 inline-block rounded-md border border-dashed border-neutral-400 px-3 py-1 text-xs font-medium text-neutral-600">
      [VALIDAR] Cifras pendientes de confirmar con datos reales antes de publicar
    </p>
  );
}

/** Cifras grandes antes → después. */
export function Resultados({ slug }: { slug: string }) {
  const caso = obtenerCaso(slug);
  return (
    <div className="not-prose">
      <AvisoValidacion caso={caso} />
      <dl className="grid grid-cols-1 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
        {caso.resultados.map((r, i) => (
          <div
            key={r.etiqueta}
            className={`border-b border-neutral-200 py-6 sm:px-6 lg:border-b-0 ${i % 2 === 1 ? "sm:border-l" : ""} ${i > 0 ? "lg:border-l" : "sm:pl-0"}`}
          >
            <dt className="sr-only">{r.etiqueta}</dt>
            <dd>
              <span className="block h-5 font-mono text-sm text-neutral-400">
                {r.antes && (
                  <>
                    <span className="line-through">{r.antes}</span>
                    <ArrowRight className="mx-1.5 inline h-3.5 w-3.5 align-[-2px]" aria-label="pasa a" />
                  </>
                )}
              </span>
              <span className="mt-2 block text-4xl font-semibold tracking-tight md:text-[2.75rem]">{r.despues}</span>
              <span className="mt-2 block text-sm text-neutral-600">{r.etiqueta}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Diagrama sencillo del flujo: horizontal en escritorio, vertical en móvil. */
export function FlujoDiagrama({ slug }: { slug: string }) {
  const caso = obtenerCaso(slug);
  return (
    <figure className="not-prose my-10">
      <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {caso.flujo.map((paso, i) => {
          const esIA = paso === "IA";
          const esHumano = paso.toLowerCase().includes("humana");
          return (
            <li key={paso} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row">
              <span
                className={`flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-3 text-center font-mono text-xs font-medium ${
                  esIA
                    ? "bg-accent text-white"
                    : esHumano
                      ? "border-2 border-ink bg-white text-ink"
                      : "border border-neutral-300 bg-white text-neutral-800"
                }`}
              >
                {esHumano && <UserCheck className="h-4 w-4 shrink-0" aria-hidden />}
                {paso}
              </span>
              {i < caso.flujo.length - 1 && (
                <>
                  <ArrowDown className="h-4 w-4 shrink-0 text-neutral-400 md:hidden" aria-hidden />
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-neutral-400 md:block" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-3 text-center text-sm text-neutral-500">
        La IA prepara; una persona revisa antes de enviar.
      </figcaption>
    </figure>
  );
}

export function PasosSolucion({ slug }: { slug: string }) {
  const caso = obtenerCaso(slug);
  return (
    <ol className="not-prose my-8 space-y-4">
      {caso.solucion.map((paso, i) => (
        <li key={paso} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">
            {i + 1}
          </span>
          <p className="pt-1 text-base leading-relaxed text-neutral-800 md:text-lg">{paso}</p>
        </li>
      ))}
    </ol>
  );
}

export function Herramientas({ slug }: { slug: string }) {
  const caso = obtenerCaso(slug);
  return (
    <ul className="not-prose my-6 flex flex-wrap gap-2">
      {caso.herramientas.map((h) => (
        <li key={h} className="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-sm font-medium">
          {h}
        </li>
      ))}
    </ul>
  );
}

export function Frase({ slug }: { slug: string }) {
  const caso = obtenerCaso(slug);
  return (
    <blockquote className="not-prose my-10 border-l-4 border-accent pl-5 text-xl font-medium leading-snug md:text-2xl">
      {caso.frase}
    </blockquote>
  );
}
