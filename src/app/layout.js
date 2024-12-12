import ClientLayout from "@/app/ClientLayout"; // Importa el layout de cliente
import "@/app/globals.css";

export const metadata = {
  title: "Dgital - Consultoría y Desarrollo Digital",
  description: "Ofrecemos servicios de consultoría y desarrollo digital para impulsar la transformación digital de tu negocio.",
  keywords: [
    "consultoría digital",
    "desarrollo digital",
    "transformación digital",
    "Dgital",
    "tecnología",
    "negocios digitales",
    "consultoría",
    "desarrollo web",
  ],
  author: "Dgital.io",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.dgital.io",
    title: "Dgital - Consultoría y Desarrollo Digital",
    description: "Servicios de consultoría y desarrollo digital para la transformación digital de tu negocio.",
    site_name: "Dgital.io",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dgital_io",
    creator: "@dgital_io",
    title: "Dgital - Consultoría y Desarrollo Digital",
    description: "Impulsa tu negocio con nuestros servicios de consultoría y desarrollo digital.",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dgital.io",
    url: "https://www.dgital.io",
    logo: "https://www.dgital.io/logo.webp",
    description: "Dgital ofrece servicios de consultoría y desarrollo digital para la transformación digital de negocios.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "ES",
      availableLanguage: "Spanish",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Pasamos los children y lógica de cliente a ClientLayout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

