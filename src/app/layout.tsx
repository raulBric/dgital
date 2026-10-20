import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { config, esPendiente } from "@/content/config";
import { seo, sobreMi } from "@/content/site";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: { default: seo.titulo, template: "%s · Dgital" },
  description: seo.descripcion,
  applicationName: "Dgital",
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/logo.webp", type: "image/webp" }], apple: "/logo.webp" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Dgital",
    url: "/",
    title: seo.titulo,
    description: seo.descripcion,
  },
  twitter: { card: "summary_large_image", title: seo.titulo, description: seo.descripcion },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dgital",
  url: config.url,
  logo: `${config.url}/logo.svg`,
  image: `${config.url}/opengraph-image`,
  description: seo.descripcion,
  areaServed: { "@type": "Country", name: "España" },
  priceRange: `Desde ${config.precioProyectoDesde}`,
  ...(esPendiente(config.email) ? {} : { email: config.email }),
  founder: { "@type": "Person", name: sobreMi.nombre, jobTitle: "CEO" },
  knowsAbout: ["Automatización de procesos", "Inteligencia artificial", "n8n", "Make", "Claude"],
  sameAs: [config.linkedinUrl, config.youtubeUrl].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <JsonLd data={schema} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
