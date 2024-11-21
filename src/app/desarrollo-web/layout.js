export const metadata = {
    title: "Diseño Web - Dgital",
    description: "Transforma tu presencia online con nuestros servicios de diseño web personalizados. En Dgital, creamos sitios web atractivos y funcionales que representan tu marca.",
    keywords: [
      "diseño web",
      "desarrollo web",
      "diseño de sitios web",
      "sitios web personalizados",
      "branding digital",
      "Dgital",
      "experiencia de usuario",
      "UI/UX",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/diseno-web",
      title: "Diseño Web - Dgital",
      description: "Descubre cómo Dgital puede ayudarte a destacar online con diseño web de alta calidad y enfoque en experiencia de usuario.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/diseno-web.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Diseño Web - Dgital",
      description: "Mejora la presencia de tu marca con diseño web profesional y enfocado en la experiencia de usuario. Transformamos tus ideas en sitios web efectivos.",
      // image: "https://www.dgital.io/images/diseno-web.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/diseno-web",
  
    // Idioma de la página
    language: "es-ES",
};

export default function DisenoWebLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
