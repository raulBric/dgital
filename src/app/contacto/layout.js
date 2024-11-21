
export const metadata = {
    title: "Contacto - Dgital",
    description: "Ponte en contacto con nosotros para resolver cualquier duda sobre nuestros servicios de consultoría digital y desarrollo web. Estamos aquí para ayudarte.",
    keywords: [
      "contacto Dgital",
      "consultoría digital contacto",
      "desarrollo web contacto",
      "preguntas Dgital",
      "soporte Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/contacto",
      title: "Contacto - Dgital",
      description: "Ponte en contacto con Dgital para obtener más información sobre nuestros servicios de consultoría digital y desarrollo web.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/contacto.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Contacto - Dgital",
      description: "¿Tienes preguntas? Contacta con Dgital para resolver cualquier duda sobre nuestros servicios digitales y de desarrollo web.",
      // image: "https://www.dgital.io/images/contacto.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/contacto",
  
    // Idioma de la página
    language: "es-ES",
};

export default function ContactoLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
