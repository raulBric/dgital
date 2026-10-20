"use client";

export type Consentimiento = "aceptado" | "rechazado" | null;

const CLAVE = "dgital-consent";
const EVENTO = "dgital-consent-change";
export const EVENTO_ABRIR_BANNER = "dgital-consent-open";

export function leerConsentimiento(): Consentimiento {
  try {
    const valor = localStorage.getItem(CLAVE);
    return valor === "aceptado" || valor === "rechazado" ? valor : null;
  } catch {
    return null;
  }
}

export function guardarConsentimiento(valor: Exclude<Consentimiento, null>) {
  try {
    localStorage.setItem(CLAVE, valor);
  } catch {
    // Almacenamiento bloqueado: la elección vale solo para esta visita.
  }
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: valor }));
}

export function alCambiarConsentimiento(callback: (valor: Consentimiento) => void) {
  const handler = (e: Event) => callback((e as CustomEvent<Consentimiento>).detail);
  window.addEventListener(EVENTO, handler);
  return () => window.removeEventListener(EVENTO, handler);
}

export function abrirBannerCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR_BANNER));
}
