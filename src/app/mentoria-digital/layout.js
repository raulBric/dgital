import { Metadata } from "next";

export const metadata = {
    title: "Mentoría Digital - Dgital",
    description: "Recibe orientación personalizada con nuestros servicios de mentoría digital. En Dgital, te ayudamos a impulsar tus proyectos digitales con estrategias efectivas y a medida.",
    keywords: [
      "mentoría digital",
      "asesoría digital",
      "estrategias digitales",
      "consultoría personalizada",
      "crecimiento digital",
      "transformación digital",
      "Dgital",
    ],
    author: "Dgital.io",
    robots: "index, follow",
    
    // Open Graph (OG) para mejorar la apariencia en redes sociales como Facebook y LinkedIn
    openGraph: {
      type: "website",
      url: "https://www.dgital.io/mentoria-digital",
      title: "Mentoría Digital - Dgital",
      description: "Impulsa tus proyectos digitales con nuestra mentoría digital personalizada. Estrategias y orientación a medida para alcanzar el éxito online.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/mentoria-digital.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card para mejorar la apariencia en Twitter
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io",
      creator: "@dgital_io",
      title: "Mentoría Digital - Dgital",
      description: "Recibe la guía que necesitas con nuestra mentoría digital para emprendedores y negocios. Estrategias a medida para el éxito digital.",
      // image: "https://www.dgital.io/images/mentoria-digital.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },
  
    // Canonical URL para evitar problemas de contenido duplicado
    canonical: "https://www.dgital.io/mentoria-digital",
  
    // Idioma de la página
    language: "es-ES",
};

export default function MentoriaDigitalLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
}
