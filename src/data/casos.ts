// Casos de cliente. Para añadir uno: nuevo objeto aquí + su artículo en src/content/casos/<slug>.mdx

export type Resultado = {
  /** Valor anterior (opcional). Se muestra tachado antes de la flecha. */
  antes?: string;
  despues: string;
  etiqueta: string;
};

export type Caso = {
  slug: string;
  titulo: string;
  /** Título del artículo para Google (h1 y <title> de la página del caso). */
  tituloSeo: string;
  descripcionSeo: string;
  sector: string;
  fecha: string;
  /** ID del vídeo de YouTube (lo que va tras "v=" en la URL). null = "Vídeo próximamente". */
  videoId: string | null;
  problema: string;
  solucion: string[];
  /** Flujo resumido para el diagrama. */
  flujo: string[];
  herramientas: string[];
  resultados: Resultado[];
  /** Mientras sea false, se muestra un aviso de "cifras pendientes de validar". */
  resultadosValidados: boolean;
  frase: string;
  destacado?: boolean;
};

export const casos: Caso[] = [
  {
    slug: "ofertas-ingenieria",
    titulo: "Ofertas técnicas en 15 minutos en vez de 3 horas",
    tituloSeo: "Cómo automatizar las ofertas técnicas de una ingeniería con IA",
    descripcionSeo:
      "Caso real: una ingeniería industrial de 10 personas pasó de 3 horas a 15-20 minutos por oferta con un flujo de n8n y Claude. Problema, solución paso a paso y resultados.",
    sector: "Ingeniería industrial, 10 personas",
    fecha: "2026-10-20",
    videoId: null,
    problema:
      "Cada petición de oferta llegaba por correo con planos, especificaciones y requisitos dispersos. Un técnico tenía que leerlo todo, buscar ofertas parecidas anteriores, calcular horas y redactar el documento en Word. Unas 3 horas por oferta y entre 6 y 8 ofertas a la semana. Las ofertas salían tarde y algunas oportunidades se perdían por no responder a tiempo.",
    solucion: [
      "El correo con la petición llega a una dirección específica (ofertas@).",
      "Un flujo en n8n extrae el texto del correo y de los adjuntos (PDF, Word).",
      "Claude analiza la petición: tipo de servicio, alcance, plazos, datos que faltan.",
      "Busca las 3 ofertas anteriores más parecidas en el histórico de la empresa.",
      "Genera un borrador de oferta en la plantilla corporativa, con horas estimadas y precio según la tarifa de la empresa.",
      "Si faltan datos, prepara un correo al cliente pidiendo la información.",
      "El técnico recibe el borrador en su carpeta, lo revisa, ajusta y envía.",
    ],
    flujo: ["Correo", "Extracción", "IA", "Borrador", "Revisión humana", "Envío"],
    herramientas: ["n8n", "Claude", "Google Drive / SharePoint", "Plantilla Word corporativa"],
    resultados: [
      { antes: "3 h", despues: "15-20 min", etiqueta: "por oferta, revisión incluida" },
      { despues: "18 h", etiqueta: "semanales liberadas del equipo técnico" },
      { antes: "3-5 días", despues: "Mismo día", etiqueta: "para enviar la oferta" },
      { despues: "3 semanas", etiqueta: "de implantación" },
    ],
    resultadosValidados: false,
    frase:
      "La IA no decide el precio ni firma la oferta. Hace el trabajo pesado para que el técnico solo revise.",
    destacado: true,
  },
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
export const casoDestacadoData = casos.find((c) => c.destacado) ?? casos[0];
