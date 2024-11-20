import Head from "next/head";
import "@/app/globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"


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
      "desarrollo web"
    ],
    author: "Dgital.io",
    robots: "index, follow",

    // Open Graph básico para redes sociales
    openGraph: {
      type: "website",
      url: "https://www.dgital.io",
      title: "Dgital - Consultoría y Desarrollo Digital",
      description: "Servicios de consultoría y desarrollo digital para la transformación digital de tu negocio.",
      site_name: "Dgital.io",
      // image: "https://www.dgital.io/images/og-image.jpg", // URL de una imagen representativa de la página (opcional)
    },
  
    // Twitter Card básico
    twitter: {
      card: "summary_large_image",
      site: "@dgital_io", // Ajusta si tienes una cuenta de Twitter específica
      creator: "@dgital_io",
      title: "Dgital - Consultoría y Desarrollo Digital",
      description: "Impulsa tu negocio con nuestros servicios de consultoría y desarrollo digital.",
      // image: "https://www.dgital.io/images/twitter-image.jpg", // URL de la imagen optimizada para Twitter (opcional)
    },

    // Datos estructurados básicos
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dgital.io",
      "url": "https://www.dgital.io",
      "logo": "https://www.dgital.io/logo.webp",
      "description": "Dgital ofrece servicios de consultoría y desarrollo digital para la transformación digital de negocios.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "ES",
        "availableLanguage": "Spanish"
      }
    }
};

export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <Head>
          
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          <meta name="author" content={metadata.author} />
          <meta name="robots" content={metadata.robots} />
          <link rel="canonical" href={metadata.openGraph.url} />

          {/* Open Graph básico */}
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          {/* <meta property="og:image" content={metadata.openGraph.image} /> */}

          {/* Twitter Card básico */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:site" content={metadata.twitter.site} />
          <meta name="twitter:creator" content={metadata.twitter.creator} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          {/* <meta name="twitter:image" content={metadata.twitter.image} /> */}

          {/* Datos estructurados básicos */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }}
          />
        </Head>
        <GoogleTagManager gtmId="GTM-MHRK38HR" />
        <body>
        {children}
        <SpeedInsights />
        </body>
      </html>
    );
}
