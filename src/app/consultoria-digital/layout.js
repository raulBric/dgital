export const metadata = {
    title: "Consultoría Digital - Dgital",
    description: "Descubre cómo nuestra consultoría digital puede impulsar tu negocio hacia el éxito online. Nos especializamos en estrategias personalizadas, transformación digital y desarrollo web para ayudarte a alcanzar tus objetivos de manera eficiente y efectiva.",
    keywords: [
      "consultoría digital",
      "transformación digital",
      "desarrollo web",
      "estrategias digitales",
      "mejorar presencia online",
      "optimización de negocios",
      "Dgital",
      "agencia digital",
    ],
    author: "Dgital.io",
    robots: "index, follow", // Permite a los motores de búsqueda indexar la página y seguir los enlaces.
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/consultoria-digital",
      title: "Consultoría Digital - Dgital",
      description: "Potencia tu negocio con nuestros servicios de consultoría digital, enfocados en estrategias personalizadas, transformación digital y desarrollo web.",
      site_name: "Dgital.io",
    //   image: "https://www.dgital.io/images/consultoria-digital.jpg", // URL de una imagen representativa de la página
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io", // Actualiza con el usuario de Twitter de tu marca
      creator: "@dgital_io",
      title: "Consultoría Digital - Dgital",
      description: "Potencia tu negocio con nuestra consultoría digital. Estrategias personalizadas para transformación digital y desarrollo web.",
    //   image: "https://www.dgital.io/images/consultoria-digital.jpg", // URL de la imagen optimizada para Twitter
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/consultoria-digital",
  
    // Idioma de la página
    language: "es-ES",
  };
  

  export default function ConsultoriaDigitalLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
