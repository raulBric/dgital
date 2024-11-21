export const metadata = {
    title: "Marketing Digital - Dgital",
    description: "Potencia la presencia online de tu negocio con nuestras estrategias de marketing digital. En Dgital, transformamos tu marca para alcanzar tus objetivos.",
    keywords: [
      "marketing digital",
      "estrategias de marketing",
      "SEO",
      "publicidad digital",
      "transformación digital",
      "marketing en redes sociales",
      "branding digital",
      "Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/marketing-digital",
      title: "Marketing Digital - Dgital",
      description: "Descubre cómo Dgital impulsa tu negocio con estrategias de marketing digital efectivas para destacar en el entorno online.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/marketing-digital.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Marketing Digital - Dgital",
      description: "Transforma tu marca y alcanza tus objetivos con nuestras estrategias de marketing digital efectivas.",
      // image: "https://www.dgital.io/images/marketing-digital.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/marketing-digital",
  
    // Idioma de la página
    language: "es-ES",
};

export default function MarketingDigitalLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
