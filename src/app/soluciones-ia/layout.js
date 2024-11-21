export const metadata = {
    title: "Soluciones en IA - Dgital",
    description: "Impulsa tu negocio con nuestras soluciones de inteligencia artificial personalizadas. En Dgital, aplicamos IA para optimizar procesos y mejorar la toma de decisiones.",
    keywords: [
      "soluciones en IA",
      "inteligencia artificial",
      "IA para empresas",
      "automatización con IA",
      "optimización de procesos",
      "machine learning",
      "analítica avanzada",
      "Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/soluciones-ia",
      title: "Soluciones en IA - Dgital",
      description: "Descubre cómo Dgital utiliza la inteligencia artificial para transformar negocios. Soluciones personalizadas de IA para optimización y eficiencia.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/soluciones-ia.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Soluciones en IA - Dgital",
      description: "Transforma tu negocio con nuestras soluciones en inteligencia artificial. Optimización de procesos y análisis avanzado a tu alcance.",
      // image: "https://www.dgital.io/images/soluciones-ia.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/soluciones-ia",
  
    // Idioma de la página
    language: "es-ES",

    
};

export default function SolucionesIALayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
