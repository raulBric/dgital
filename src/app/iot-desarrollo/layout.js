import { Metadata } from "next";

export const metadata = {
    title: "Desarrollo IoT - Dgital",
    description: "Explora nuestras soluciones en desarrollo IoT para impulsar la conectividad y la inteligencia en tu negocio. Especialistas en tecnología IoT para transformar tu industria.",
    keywords: [
      "desarrollo IoT",
      "soluciones IoT",
      "tecnología IoT",
      "conectividad IoT",
      "automatización IoT",
      "IoT industrial",
      "transformación digital IoT",
      "Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/desarrollo-iot",
      title: "Desarrollo IoT - Dgital",
      description: "Descubre cómo Dgital puede potenciar tu negocio con soluciones avanzadas de desarrollo IoT, conectividad y automatización.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/desarrollo-iot.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Desarrollo IoT - Dgital",
      description: "Potencia tu industria con nuestras soluciones IoT. Especialistas en tecnología para la conectividad y automatización de negocios.",
      // image: "https://www.dgital.io/images/desarrollo-iot.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/desarrollo-iot",
  
    // Idioma de la página
    language: "es-ES",
};

export default function DesarrolloIoTLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
