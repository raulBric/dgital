import type { ReactNode } from "react";

export const botonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60";

export const botonVariantes = {
  primario: "bg-accent text-white hover:bg-accent-hover",
  secundario: "border border-neutral-300 bg-white text-ink hover:border-ink",
  oscuro: "bg-white text-ink hover:bg-neutral-200",
  contorno: "border border-white/25 text-white hover:border-white",
} as const;

export type VarianteBoton = keyof typeof botonVariantes;

export const boton = (variante: VarianteBoton = "primario", extra = "") =>
  `${botonBase} ${botonVariantes[variante]} ${extra}`;

export function Section({
  id,
  children,
  className = "",
  fondo = "blanco",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  fondo?: "blanco" | "gris" | "degradado";
}) {
  const fondos = {
    blanco: "bg-white",
    gris: "bg-neutral-50 border-y border-neutral-200",
    degradado: "fondo-degradado text-white",
  };
  return (
    <section id={id} className={`${fondos[fondo]} py-20 md:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Etiqueta de sección: "01 — Qué automatizamos", en mono y con una línea fina. */
export function Etiqueta({
  numero,
  children,
  oscuro = false,
}: {
  numero?: string;
  children: ReactNode;
  oscuro?: boolean;
}) {
  return (
    <p
      className={`mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] ${
        oscuro ? "text-neutral-400" : "text-neutral-500"
      }`}
    >
      {numero && <span className={oscuro ? "text-accent-light" : "text-accent"}>{numero}</span>}
      <span className={`h-px w-8 ${oscuro ? "bg-white/25" : "bg-neutral-300"}`} aria-hidden />
      {children}
    </p>
  );
}

export function Encabezado({
  numero,
  antetitulo,
  titulo,
  texto,
  oscuro = false,
}: {
  numero?: string;
  antetitulo: string;
  titulo: string;
  texto?: string;
  oscuro?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <Etiqueta numero={numero} oscuro={oscuro}>
        {antetitulo}
      </Etiqueta>
      <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.6rem]">{titulo}</h2>
      {texto && <p className={`mt-5 text-lg ${oscuro ? "text-neutral-300" : "text-neutral-600"}`}>{texto}</p>}
    </div>
  );
}
