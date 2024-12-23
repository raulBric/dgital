import { TrendingUp, BookOpen, FileText, PenTool } from 'lucide-react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import articles from '@/database/blog.json';

export default function BlogIndexPage() {
  return (
<div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Marketing Digital - Dgital</title>
        <meta
          name="description"
          content="Descubre nuestros servicios de marketing digital diseñados para potenciar el crecimiento de tu negocio online con estrategias innovadoras y personalizadas."
        />
      </Head>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-400 text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl xl:max-w-6xl">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Servicios de Marketing Digital
              </h1>
              <p className="mx-auto max-w-[800px] text-blue-100 md:text-xl">
                Estrategias personalizadas para optimizar tu presencia digital, mejorar el SEO y aumentar tus conversiones.
                Innovación y creatividad para llevar tu negocio al siguiente nivel.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl xl:max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Estrategias de Marketing</h3>
                <p className="text-gray-600">
                  Diseñamos planes personalizados para atraer tráfico, generar leads y aumentar ventas.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <BookOpen className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Optimización SEO</h3>
                <p className="text-gray-600">
                  Mejora tu visibilidad en buscadores y alcanza las primeras posiciones con nuestras técnicas avanzadas.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <FileText className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Contenido Digital</h3>
                <p className="text-gray-600">
                  Creamos contenido relevante y optimizado para conectar con tu audiencia y potenciar el engagement.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <PenTool className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Diseño Creativo</h3>
                <p className="text-gray-600">
                  Diseños impactantes para captar la atención y reforzar la identidad visual de tu marca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl xl:max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mx-auto max-w-[800px] text-blue-100 md:text-xl mb-6">
              Contáctanos hoy y descubre cómo nuestras estrategias digitales pueden impulsar tu éxito en línea.
            </p>
            <a
              href="mailto:hola@dgital.io"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
            >
              Contáctanos
            </a>
          </div>
        </section>
      </main>
    </div>

  );
}
