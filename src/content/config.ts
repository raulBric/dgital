// Datos de contacto, URLs y valores que cambian entre entornos.
// Todo lo marcado con [RELLENAR] está pendiente: ver README.md → "Pendiente de rellenar".

const RELLENAR = (campo: string) => `[RELLENAR: ${campo}]`;

export const config = {
  nombre: "Dgital",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgital.io").replace(/\/$/, ""),
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  email: RELLENAR("email"),
  linkedinUrl: "",
  youtubeUrl: "",
  precioProyectoDesde: "1.500 €",
  precioMantenimientoDesde: RELLENAR("X"),
  // false = demo con resultados de ejemplo, sin llamar a la IA. true = demo real con Claude
  // (requiere ANTHROPIC_API_KEY). Se activa con NEXT_PUBLIC_DEMO_IA=true.
  demoConIA: process.env.NEXT_PUBLIC_DEMO_IA === "true",
  // Ruta en /public de la foto de Raúl (p. ej. "/raul.jpg"). Vacío = placeholder.
  fotoFundador: "",
  analytics: {
    proveedor: process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as "plausible" | "ga4" | undefined,
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  },
} as const;

/** Enlace de reserva: Calendly si está configurado; si no, la página de contacto. */
export const enlaceReserva = config.calendlyUrl || "/contacto";

export const esPendiente = (valor: string) => !valor || valor.startsWith("[RELLENAR");
