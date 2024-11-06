import { Metadata } from "next";

export const metadata = {
    title: "Quiénes Somos - Dgital",
    description: "Conoce al equipo de Dgital, nuestra misión y los valores que nos inspiran a ofrecer servicios de consultoría y desarrollo digital de alta calidad.",
    keywords: [
      "quiénes somos",
      "equipo Dgital",
      "misión Dgital",
      "valores Dgital",
      "consultoría digital",
      "desarrollo digital",
      "Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/quienes-somos",
      title: "Quiénes Somos - Dgital",
      description: "Descubre quiénes somos y por qué en Dgital nos apasiona ayudar a las empresas a crecer con soluciones digitales efectivas.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/quienes-somos.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Quiénes Somos - Dgital",
      description: "Conoce la historia, misión y valores de Dgital. Descubre cómo ayudamos a empresas a crecer con nuestras soluciones digitales.",
      // image: "https://www.dgital.io/images/quienes-somos.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/quienes-somos",
  
    // Idioma de la página
    language: "es-ES",
};

export default function QuienesSomosLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
