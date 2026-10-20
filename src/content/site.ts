// Todos los textos de la home y elementos comunes. Edita aquí, no en los componentes.
import { config } from "./config";

export const seo = {
  titulo: "Dgital · Automatización con IA para pymes",
  descripcion:
    "Automatizamos tareas repetitivas de pymes con IA: ofertas, correo, facturas, leads e informes. Diagnóstico gratuito de 30 minutos.",
};

export const navegacion = [
  { label: "Qué automatizamos", href: "/#servicios" },
  { label: "Demo", href: "/#demo" },
  { label: "Casos", href: "/casos" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Precios", href: "/#precios" },
  { label: "FAQ", href: "/#faq" },
];

export const ctaPrincipal = "Reserva un diagnóstico gratuito";
export const ctaCorto = "Reservar diagnóstico";

export const hero = {
  titular: "Tu equipo pierde horas en tareas que una IA hace en minutos.",
  /** Parte del titular que se resalta en azul. Debe aparecer tal cual dentro de `titular`. */
  titularDestacado: "en minutos",
  subtitulo: "Automatizamos procesos repetitivos de pymes: ofertas, correo, facturas y leads.",
  ctaSecundario: "Probar la demo",
  nota: "Diagnóstico de 30 minutos. Sin compromiso.",
  // Ejemplo del visual del hero: un correo real y el borrador que prepara el sistema.
  ejemplo: {
    bandeja: "ofertas@",
    correo: {
      de: "Marta Puig · Plásticos Vallès",
      hora: "09:12",
      asunto: "Precio mantenimiento compresores",
      cuerpo: "Necesitaríamos precio para el mantenimiento de 4 compresores en nuestra nave de Sabadell, idealmente antes de fin de mes…",
    },
    datos: [
      { campo: "Servicio", valor: "Mantenimiento" },
      { campo: "Equipos", valor: "4 compresores" },
      { campo: "Ubicación", valor: "Sabadell" },
      { campo: "Plazo", valor: "Fin de mes" },
    ],
    borrador: { titulo: "Borrador de oferta", hora: "09:16", estado: "Pendiente de revisión" },
  },
};

export const servicios = {
  antetitulo: "Qué automatizamos",
  titulo: "Las tareas que más horas consumen en una pyme",
  items: [
    { icono: "oferta", titulo: "Ofertas y presupuestos", texto: "De la petición del cliente al borrador en minutos." },
    { icono: "correo", titulo: "Correo entrante", texto: "Clasificado, priorizado y con respuesta propuesta." },
    { icono: "factura", titulo: "Facturas de proveedor", texto: "Leídas y pasadas a contabilidad sin teclear." },
    { icono: "lead", titulo: "Leads", texto: "Respuesta inmediata y alta en el CRM." },
    { icono: "informe", titulo: "Informes", texto: "Generados solos con los datos de tus herramientas." },
    { icono: "atencion", titulo: "Atención al cliente", texto: "Respuestas a preguntas frecuentes las 24 h." },
  ],
} as const;

export const casoDestacado = {
  antetitulo: "Caso real",
  enlace: "Leer el caso completo",
  etiquetas: { problema: "El problema", resultados: "Resultados" },
};

export const proceso = {
  antetitulo: "Cómo trabajamos",
  titulo: "Cuatro pasos, sin sorpresas",
  pasos: [
    { titulo: "Diagnóstico", detalle: "30 min, gratuito", texto: "Detectamos qué tareas te cuestan más horas." },
    { titulo: "Propuesta cerrada", detalle: "Precio fijo", texto: "Alcance, precio y plazo fijos, sin sorpresas." },
    { titulo: "Implantación", detalle: "2-4 semanas", texto: "Lo montamos sobre tus herramientas actuales." },
    { titulo: "Soporte mensual", detalle: "Continuo", texto: "Lo mantenemos y lo mejoramos." },
  ],
};

export const precios = {
  antetitulo: "Precios orientativos",
  titulo: "Sabes lo que pagas antes de empezar",
  texto: "Cada proyecto se presupuesta con precio cerrado después del diagnóstico.",
  planes: [
    {
      nombre: "Proyecto de automatización",
      prefijo: "Desde",
      precio: config.precioProyectoDesde,
      sufijo: "",
      texto: "Análisis, implantación sobre tus herramientas y formación a tu equipo.",
    },
    {
      nombre: "Mantenimiento",
      prefijo: "Desde",
      precio: `${config.precioMantenimientoDesde} €`,
      sufijo: "/mes",
      texto: "Supervisión, ajustes cuando cambian tus procesos y mejoras continuas.",
    },
  ],
};

export const sobreMi = {
  antetitulo: "Sobre mí",
  titulo: "Quién está detrás de Dgital",
  nombre: "Raúl",
  cargo: "Fundador de Dgital",
  texto:
    "Soy Raúl, ingeniero electrónico y llevo más de 10 años vendiendo y dirigiendo proyectos técnicos en empresas industriales. Sé lo que cuesta cada hora perdida en tareas administrativas porque la he sufrido. En Dgital aplico la IA a eso: menos teclear, más negocio.",
  linkedin: "Conecta en LinkedIn",
};

export const faq = {
  antetitulo: "Preguntas frecuentes",
  titulo: "Lo que suelen preguntarnos",
  items: [
    {
      pregunta: "¿Mis datos están seguros?",
      respuesta:
        "Sí. Trabajamos sobre tus propias herramientas y con proveedores que ofrecen garantías RGPD. Tus datos no se usan para entrenar ningún modelo de IA.",
    },
    {
      pregunta: "¿Tengo que cambiar de software?",
      respuesta:
        "No. Nos conectamos a lo que ya usas: Gmail u Outlook, Excel, tu ERP o tu CRM.",
    },
    {
      pregunta: "¿Cuánto tarda?",
      respuesta: "La mayoría de proyectos están funcionando en 2-4 semanas.",
    },
    {
      pregunta: "¿Qué pasa si algo falla?",
      respuesta:
        "Los pasos críticos tienen revisión humana y el soporte mensual incluye vigilar que todo funciona y corregirlo si algo cambia.",
    },
    {
      pregunta: "¿Y si la IA se equivoca?",
      respuesta:
        "La IA prepara el trabajo y una persona de tu equipo lo valida antes de enviarlo. Nada sale sin revisión.",
    },
  ],
};

export const ctaFinal = {
  titulo: "¿Cuántas horas a la semana se van en teclear?",
  texto: "En 30 minutos vemos qué tareas puedes automatizar y cuánto tiempo recuperarías. Gratis y sin compromiso.",
};

export const footer = {
  descripcion: "Automatización con IA para pymes españolas.",
  legal: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Política de privacidad", href: "/politica-privacidad" },
    { label: "Política de cookies", href: "/politica-cookies" },
  ],
  configurarCookies: "Configurar cookies",
};

export const contacto = {
  titulo: "Reserva tu diagnóstico gratuito",
  texto: "Elige el hueco que mejor te venga. Son 30 minutos por videollamada para ver qué tareas te cuestan más horas y si tiene sentido automatizarlas.",
  sinCalendly: "El calendario de reservas estará disponible muy pronto. Mientras tanto, escríbenos a",
};

export const cookies = {
  texto:
    "Usamos cookies de analítica para saber qué páginas se visitan y mejorar la web. Solo se activan si las aceptas.",
  aceptar: "Aceptar",
  rechazar: "Rechazar",
  masInfo: "Más información",
};
