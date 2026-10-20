"use client";

type Props = Record<string, string | number>;

declare global {
  interface Window {
    plausible?: (evento: string, opciones?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento al proveedor activo (Plausible o GA4). Si no hay ninguno, no hace nada. */
export function track(evento: "demo_usada" | "demo_cta_click" | "reserva_click", props?: Props) {
  if (typeof window === "undefined") return;
  window.plausible?.(evento, props ? { props } : undefined);
  window.gtag?.("event", evento, props ?? {});
}
