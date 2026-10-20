"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Loader2, RotateCcw, Sparkles } from "lucide-react";
import { config } from "@/content/config";
import { MAX_CARACTERES, MIN_CARACTERES, demo, etiquetasPrioridad, etiquetasTipo } from "@/content/demo";
import type { DemoRespuesta, DemoResultado } from "@/lib/demo-schema";
import { track } from "@/lib/analytics";
import BotonReserva from "./BotonReserva";
import { boton } from "./ui";

type Estado =
  | { fase: "inicial" }
  | { fase: "cargando" }
  | { fase: "ok"; resultado: DemoResultado }
  | { fase: "error"; tipo: "limite" | "servicio" | "validacion" };

// Sin IA conectada: el visitante elige un ejemplo y se muestra su resultado ya preparado.
const simulada = !config.demoConIA;
const DURACION_SIMULACION = 3800;

const coloresPrioridad: Record<string, string> = {
  alta: "bg-ink text-white",
  media: "bg-accent-soft text-accent",
  baja: "bg-neutral-100 text-neutral-700",
};

export default function DemoIA() {
  const [texto, setTexto] = useState("");
  const [ejemplo, setEjemplo] = useState<number | null>(null);
  const [estado, setEstado] = useState<Estado>({ fase: "inicial" });
  const [mensaje, setMensaje] = useState(0);
  const [copiado, setCopiado] = useState(false);
  const resultadoRef = useRef<HTMLDivElement>(null);

  const longitud = texto.trim().length;
  const valido = longitud >= MIN_CARACTERES && longitud <= MAX_CARACTERES;

  useEffect(() => {
    if (estado.fase !== "cargando") return;
    setMensaje(0);
    const id = setInterval(() => setMensaje((m) => Math.min(m + 1, demo.cargando.length - 1)), simulada ? 1250 : 1600);
    return () => clearInterval(id);
  }, [estado.fase]);

  useEffect(() => {
    if (estado.fase === "ok" || estado.fase === "error") {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [estado.fase]);

  async function procesar() {
    if (!valido) {
      setEstado({ fase: "error", tipo: "validacion" });
      return;
    }
    setEstado({ fase: "cargando" });
    setCopiado(false);
    if (simulada) {
      const elegido = ejemplo === null ? null : demo.ejemplos[ejemplo];
      if (!elegido) return setEstado({ fase: "inicial" });
      await new Promise((r) => setTimeout(r, DURACION_SIMULACION));
      setEstado({ fase: "ok", resultado: elegido.resultado });
      track("demo_usada", { tipo: elegido.resultado.tipo, modo: "ejemplo" });
      return;
    }
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto }),
      });
      const data = (await res.json()) as DemoRespuesta;
      if (data.ok) {
        setEstado({ fase: "ok", resultado: data.resultado });
        track("demo_usada", { tipo: data.resultado.tipo });
      } else {
        setEstado({ fase: "error", tipo: data.error });
      }
    } catch {
      setEstado({ fase: "error", tipo: "servicio" });
    }
  }

  async function copiar(contenido: string) {
    try {
      await navigator.clipboard.writeText(contenido);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Portapapeles no disponible (p. ej. sin HTTPS): no hacemos nada.
    }
  }

  const cargando = estado.fase === "cargando";

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Entrada */}
      <div>
        <p className="mb-3 text-sm font-medium text-neutral-700">{demo.ejemplosTitulo}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {demo.ejemplos.map((ej, i) => (
            <button
              key={ej.etiqueta}
              type="button"
              disabled={cargando}
              aria-pressed={ejemplo === i}
              onClick={() => {
                setTexto(ej.texto);
                setEjemplo(i);
                setEstado({ fase: "inicial" });
              }}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors disabled:opacity-50 ${
                ejemplo === i
                  ? "border-ink bg-ink text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-ink hover:text-ink"
              }`}
            >
              {ej.etiqueta}
            </button>
          ))}
        </div>

        <label htmlFor="demo-correo" className="sr-only">
          Texto del correo
        </label>
        <textarea
          id="demo-correo"
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value.slice(0, MAX_CARACTERES));
            setEjemplo(null);
          }}
          readOnly={simulada}
          maxLength={MAX_CARACTERES}
          rows={11}
          placeholder={demo.placeholder}
          disabled={cargando}
          className="w-full resize-y rounded-lg border border-neutral-300 bg-white p-4 text-base leading-relaxed text-ink placeholder:text-neutral-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-neutral-50"
        />
        <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
          <span>{demo.legal}</span>
          {!simulada && (
            <span className={`shrink-0 pl-4 tabular-nums ${texto.length >= MAX_CARACTERES ? "text-ink font-semibold" : ""}`}>
              {texto.length}/{MAX_CARACTERES}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={procesar}
          disabled={cargando || longitud === 0}
          className={boton("primario", "mt-5 w-full sm:w-auto")}
        >
          {cargando ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Sparkles className="h-4 w-4" aria-hidden />}
          {cargando ? demo.botonCargando : demo.boton}
        </button>
      </div>

      {/* Resultado */}
      <div ref={resultadoRef} aria-live="polite" className="min-h-[16rem]">
        {estado.fase === "inicial" && (
          <div className="flex h-full min-h-[16rem] items-center justify-center rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500">
            El resultado aparecerá aquí: clasificación, datos extraídos y acción propuesta.
          </div>
        )}

        {cargando && (
          <div className="flex h-full min-h-[16rem] flex-col items-center justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-8">
            <Loader2 className="h-6 w-6 animate-spin text-accent" aria-hidden />
            <p key={mensaje} className="animate-aparecer text-sm font-medium text-neutral-700">
              {demo.cargando[mensaje]}
            </p>
          </div>
        )}

        {estado.fase === "error" && (
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            {estado.tipo === "limite" ? (
              <>
                <p className="text-base text-neutral-800">{demo.errores.limite}</p>
                <BotonReserva evento="demo_cta_click" className="mt-5" />
              </>
            ) : (
              <>
                <p className="text-base text-neutral-800">
                  {estado.tipo === "validacion" ? demo.errores.longitud : demo.errores.generico}
                </p>
                {estado.tipo === "servicio" && (
                  <button type="button" onClick={procesar} className={boton("secundario", "mt-5")}>
                    <RotateCcw className="h-4 w-4" aria-hidden />
                    {demo.errores.reintentar}
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {estado.fase === "ok" && (
          <Resultado resultado={estado.resultado} copiado={copiado} onCopiar={copiar} />
        )}
      </div>
    </div>
  );
}

function Resultado({
  resultado,
  copiado,
  onCopiar,
}: {
  resultado: DemoResultado;
  copiado: boolean;
  onCopiar: (texto: string) => void;
}) {
  const bloque = "animate-aparecer rounded-lg border border-neutral-200 bg-white p-5";
  const titulo = "mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500";

  return (
    <div className="space-y-4">
      <div className={bloque}>
        <p className={titulo}>{demo.bloques.clasificacion}</p>
        <dl className="grid grid-cols-3 gap-3 text-sm">
          <div>
            <dt className="text-neutral-500">{demo.bloques.tipo}</dt>
            <dd className="mt-1 font-semibold">{etiquetasTipo[resultado.tipo]}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">{demo.bloques.prioridad}</dt>
            <dd className="mt-1">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${coloresPrioridad[resultado.prioridad]}`}>
                {etiquetasPrioridad[resultado.prioridad]}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500">{demo.bloques.departamento}</dt>
            <dd className="mt-1 font-semibold">{resultado.departamento}</dd>
          </div>
        </dl>
        <p className="mt-4 border-t border-neutral-100 pt-3 text-sm text-neutral-700">{resultado.resumen}</p>
      </div>

      <div className={bloque} style={{ animationDelay: "250ms" }}>
        <p className={titulo}>{demo.bloques.datos}</p>
        {resultado.datos.length > 0 ? (
          <table className="w-full text-sm">
            <tbody>
              {resultado.datos.map((d, i) => (
                <tr key={`${d.campo}-${i}`} className="border-t border-neutral-100 first:border-0">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-normal text-neutral-500">
                    {d.campo}
                  </th>
                  <td className="py-2 font-medium">{d.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-sm text-neutral-500">{demo.bloques.sinDatos}</p>
        )}
      </div>

      <div className={bloque} style={{ animationDelay: "500ms" }}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{resultado.accion.titulo}</p>
          <button
            type="button"
            onClick={() => onCopiar(resultado.accion.contenido)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover"
          >
            {copiado ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
            {copiado ? demo.copiado : demo.copiar}
          </button>
        </div>
        <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-800">{resultado.accion.contenido}</p>
      </div>

      <div className="animate-aparecer rounded-lg bg-ink p-6 text-white" style={{ animationDelay: "750ms" }}>
        <p className="text-base font-medium">{demo.cta.texto}</p>
        <BotonReserva texto={demo.cta.boton} variante="oscuro" evento="demo_cta_click" className="mt-4" />
      </div>
    </div>
  );
}
