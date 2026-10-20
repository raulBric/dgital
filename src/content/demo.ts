// Textos de la demo ("Prueba la IA con un correo real").
// Con config.demoConIA = false la demo usa los resultados de ejemplo de abajo, sin llamar a la IA.
import { config } from "./config";
import type { DemoResultado } from "@/lib/demo-schema";

const conIA = config.demoConIA;

type EjemploDemo = { etiqueta: string; texto: string; resultado: DemoResultado };

export const MAX_CARACTERES = 2000;
export const MIN_CARACTERES = 20;

export const demo = {
  antetitulo: conIA ? "Demo en vivo" : "Demo",
  titulo: conIA ? "Prueba la IA con un correo real" : "Mira cómo la IA procesa un correo",
  texto: conIA
    ? "Pega un correo de cliente o elige un ejemplo. Verás cómo lo clasifica, qué datos extrae y qué respuesta prepara."
    : "Elige un correo de ejemplo. Verás cómo lo clasifica, qué datos extrae y qué respuesta prepara.",
  placeholder: conIA ? "Pega aquí el texto del correo…" : "Elige un ejemplo para ver aquí el correo.",
  ejemplosTitulo: conIA ? "O prueba con un ejemplo:" : "Elige un correo:",
  boton: "Procesar con IA",
  botonCargando: "Procesando…",
  legal: conIA
    ? "No pegues datos personales sensibles. El texto se procesa para la demo y no se almacena."
    : "Correos de ejemplo. En el diagnóstico lo vemos con tus correos reales.",
  cargando: ["Leyendo el correo…", "Extrayendo datos…", "Redactando respuesta…"],
  bloques: {
    clasificacion: "Clasificación",
    datos: "Datos extraídos",
    sinDatos: "No se han encontrado datos clave en el correo.",
    tipo: "Tipo",
    prioridad: "Prioridad",
    departamento: "Departamento",
  },
  copiar: "Copiar respuesta",
  copiado: "Copiado",
  nuevo: "Probar otro correo",
  cta: {
    texto: "Esto conectado a tu correo y a tu CRM, funcionando solo cada día.",
    boton: "Reserva un diagnóstico gratuito",
  },
  errores: {
    longitud: `El correo debe tener entre ${MIN_CARACTERES} y ${MAX_CARACTERES} caracteres.`,
    generico: "No hemos podido procesar el correo. Suele ser algo puntual: vuelve a intentarlo en unos segundos.",
    reintentar: "Reintentar",
    limite:
      "Has llegado al límite de pruebas de hoy. Si quieres verlo con tus correos reales, reserva un diagnóstico.",
  },
  ejemplos: [
    {
      etiqueta: "Petición de presupuesto",
      texto: `Buenos días,

Necesitaríamos precio para el mantenimiento de 4 compresores en nuestra nave de Sabadell, idealmente antes de fin de mes. Son dos compresores de tornillo de 37 kW y dos de pistón más pequeños. Nos interesaría un contrato anual con dos revisiones.

¿Nos podéis enviar una propuesta?

Gracias,
Marta Puig
Responsable de Mantenimiento
Plásticos Vallès, S.L.`,
      resultado: {
        tipo: "presupuesto",
        prioridad: "media",
        departamento: "Comercial",
        resumen: "Plásticos Vallès pide propuesta de contrato anual de mantenimiento para 4 compresores en Sabadell.",
        datos: [
          { campo: "Cliente", valor: "Plásticos Vallès, S.L." },
          { campo: "Contacto", valor: "Marta Puig, Responsable de Mantenimiento" },
          { campo: "Servicio", valor: "Mantenimiento anual con 2 revisiones" },
          { campo: "Equipos", valor: "2 compresores de tornillo de 37 kW y 2 de pistón" },
          { campo: "Ubicación", valor: "Nave de Sabadell" },
          { campo: "Plazo", valor: "Antes de fin de mes" },
        ],
        accion: {
          titulo: "Respuesta propuesta",
          contenido: `Hola, Marta:

Gracias por contar con nosotros. Hemos recibido vuestra petición para el mantenimiento anual de los 4 compresores de la nave de Sabadell (2 de tornillo de 37 kW y 2 de pistón), con dos revisiones al año.

Para cerraros la propuesta antes de fin de mes, ¿nos podéis indicar la marca y el modelo de cada equipo y las horas de funcionamiento aproximadas?

En cuanto los tengamos, os enviamos la oferta.

Un saludo,
[Tu nombre]`,
        },
      },
    },
    {
      etiqueta: "Queja de cliente",
      texto: `Hola,

Llevamos dos semanas esperando el pedido 4587 y nadie nos contesta. Nos dijisteis que salía el día 3 y seguimos sin noticias. Tenemos la línea parada a la espera de esas piezas y esto nos está costando dinero.

Necesito que alguien me llame hoy mismo con una fecha de entrega concreta.

Jordi Serra
Jefe de Compras
Montajes Serra`,
      resultado: {
        tipo: "queja",
        prioridad: "alta",
        departamento: "Atención al cliente / Logística",
        resumen: "Montajes Serra reclama el pedido 4587, con dos semanas de retraso y la línea de producción parada.",
        datos: [
          { campo: "Cliente", valor: "Montajes Serra" },
          { campo: "Contacto", valor: "Jordi Serra, Jefe de Compras" },
          { campo: "Nº de pedido", valor: "4587" },
          { campo: "Fecha prevista de salida", valor: "Día 3" },
          { campo: "Retraso", valor: "Dos semanas" },
          { campo: "Impacto", valor: "Línea parada a la espera de las piezas" },
        ],
        accion: {
          titulo: "Respuesta propuesta",
          contenido: `Hola, Jordi:

Lamentamos mucho el retraso del pedido 4587 y no haberte respondido antes. Entendemos lo que supone tener la línea parada.

Estamos revisando ahora mismo el estado del envío con el almacén. Hoy mismo te llamamos con una fecha de entrega concreta.

Un saludo,
[Tu nombre]`,
        },
      },
    },
    {
      etiqueta: "Factura de proveedor",
      texto: `Hola,

Os adjunto la factura F-2026-311 de octubre, importe 1.240 € IVA incluido, vencimiento 30 días. Corresponde al servicio de transporte de mercancías del mes.

Cualquier duda, me decís.

Un saludo,
Laura Gómez
Administración
Transportes Gómez e Hijos, S.L.`,
      resultado: {
        tipo: "factura",
        prioridad: "media",
        departamento: "Administración",
        resumen: "Transportes Gómez e Hijos envía la factura F-2026-311 de octubre por 1.240 € IVA incluido.",
        datos: [
          { campo: "Proveedor", valor: "Transportes Gómez e Hijos, S.L." },
          { campo: "Nº de factura", valor: "F-2026-311" },
          { campo: "Concepto", valor: "Transporte de mercancías, octubre" },
          { campo: "Importe", valor: "1.240 € IVA incluido" },
          { campo: "Vencimiento", valor: "30 días" },
        ],
        accion: {
          titulo: "Asiento contable propuesto",
          contenido: `Proveedor: Transportes Gómez e Hijos, S.L.
Nº de factura: F-2026-311
Base imponible: 1.024,79 € (calculado)
IVA 21 %: 215,21 € (calculado)
Total: 1.240,00 €
Vencimiento: 30 días desde la fecha de factura
Cuenta de gasto: 624 Transportes`,
        },
      },
    },
  ] satisfies EjemploDemo[],
};

export const etiquetasTipo: Record<string, string> = {
  presupuesto: "Presupuesto",
  queja: "Queja",
  factura: "Factura",
  lead: "Lead",
  otro: "Otro",
};

export const etiquetasPrioridad: Record<string, string> = {
  alta: "Alta",
  media: "Media",
  baja: "Baja",
};
