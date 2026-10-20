// Textos legales BASE. Son un punto de partida: deben revisarse y completarse
// (idealmente con un asesor) antes de publicar. Los huecos van marcados con [RELLENAR].

export type PaginaLegal = {
  titulo: string;
  descripcion: string;
  secciones: { titulo: string; parrafos: string[] }[];
};

export const avisoPendiente =
  "Texto provisional pendiente de revisión legal. Los datos marcados con [RELLENAR] deben completarse antes de publicar.";

const titular = [
  "Titular: [RELLENAR: nombre y apellidos o razón social]",
  "NIF: [RELLENAR]",
  "Domicilio: [RELLENAR]",
  "Correo electrónico: [RELLENAR]",
  "Datos registrales (si es sociedad): [RELLENAR]",
];

export const avisoLegal: PaginaLegal = {
  titulo: "Aviso legal",
  descripcion: "Información legal sobre el titular del sitio web de Dgital.",
  secciones: [
    {
      titulo: "1. Datos identificativos",
      parrafos: [
        "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:",
        ...titular,
      ],
    },
    {
      titulo: "2. Objeto",
      parrafos: [
        "Este sitio web informa sobre los servicios de automatización de procesos con inteligencia artificial que ofrece Dgital a empresas.",
      ],
    },
    {
      titulo: "3. Condiciones de uso",
      parrafos: [
        "El acceso a la web es gratuito y supone la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y de la demo, sin introducir información ilícita o datos personales de terceros sin autorización.",
      ],
    },
    {
      titulo: "4. Propiedad intelectual",
      parrafos: [
        "Los contenidos de esta web, incluida la marca y el logotipo de Dgital, son propiedad del titular o se usan con autorización. Queda prohibida su reproducción sin permiso expreso.",
      ],
    },
    {
      titulo: "5. Responsabilidad",
      parrafos: [
        "Los resultados de la demo se generan automáticamente con fines ilustrativos y pueden contener errores. No deben usarse para tomar decisiones sin revisión humana.",
        "[RELLENAR: legislación aplicable y jurisdicción]",
      ],
    },
  ],
};

export const politicaPrivacidad: PaginaLegal = {
  titulo: "Política de privacidad",
  descripcion: "Cómo trata Dgital los datos personales de quienes visitan la web.",
  secciones: [
    { titulo: "1. Responsable del tratamiento", parrafos: titular },
    {
      titulo: "2. Qué datos tratamos y para qué",
      parrafos: [
        "Reserva de diagnóstico: cuando reservas una reunión a través de Calendly, tratamos tu nombre, correo y la información que indiques para gestionar la reunión y responderte. Base legal: aplicación de medidas precontractuales a petición tuya.",
        "Demo de IA: el texto que pegas se envía a nuestro proveedor de IA (Anthropic) solo para generar la respuesta y no se almacena en nuestros sistemas. Guardamos únicamente un contador anónimo de usos y el tipo de correo detectado, con fines estadísticos. Para limitar el abuso, usamos una huella cifrada (hash) de tu dirección IP que se borra en 24 horas. Base legal: interés legítimo en ofrecer la demo y protegerla del abuso.",
        "Analítica: si la aceptas, medimos de forma agregada las visitas a la web. Base legal: consentimiento.",
      ],
    },
    {
      titulo: "3. Encargados del tratamiento y transferencias internacionales",
      parrafos: [
        "Usamos proveedores que tratan datos por cuenta nuestra: Vercel (alojamiento), Anthropic (procesamiento de la demo), Upstash (contadores de uso), Calendly (reservas) y [RELLENAR: herramienta de analítica]. Algunos pueden tratar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD (cláusulas contractuales tipo o Marco de Privacidad de Datos UE-EE. UU.).",
        "[RELLENAR: revisar la lista de proveedores y sus garantías]",
      ],
    },
    {
      titulo: "4. Conservación",
      parrafos: [
        "Los datos de contacto se conservan mientras exista relación comercial y, después, durante los plazos legales. [RELLENAR: plazos concretos]",
      ],
    },
    {
      titulo: "5. Tus derechos",
      parrafos: [
        "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [RELLENAR: email]. Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
      ],
    },
  ],
};

export const politicaCookies: PaginaLegal = {
  titulo: "Política de cookies",
  descripcion: "Qué cookies y tecnologías similares usa la web de Dgital.",
  secciones: [
    {
      titulo: "1. Qué son las cookies",
      parrafos: [
        "Son pequeños archivos que la web guarda en tu navegador para recordar información sobre tu visita.",
      ],
    },
    {
      titulo: "2. Cookies que usamos",
      parrafos: [
        "Técnicas (necesarias): guardamos tu elección sobre las cookies en el almacenamiento local del navegador (clave «dgital-consent»). No requieren consentimiento.",
        "Analítica (solo si la aceptas): si usamos Google Analytics 4, se instalan las cookies _ga y _ga_* para medir visitas de forma agregada. Si usamos Plausible, no se instala ninguna cookie. [RELLENAR: herramienta elegida]",
        "Terceros: el vídeo de YouTube solo se carga cuando pulsas el botón de reproducir, y se sirve desde youtube-nocookie.com. El calendario de reservas lo sirve Calendly, que puede usar sus propias cookies.",
      ],
    },
    {
      titulo: "3. Cómo gestionarlas",
      parrafos: [
        "Puedes cambiar tu elección cuando quieras con el enlace «Configurar cookies» del pie de página, o borrar las cookies desde la configuración de tu navegador.",
      ],
    },
  ],
};
