import { TrendingUp, BookOpen, FileText, PenTool } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import articles from '@/database/blog.json';

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Blog de Marketing Digital - Dgital</title>
        <meta
          name="description"
          content="Explora artículos y guías sobre marketing digital, estrategias SEO y transformación digital en el blog de Dgital."
        />
      </Head>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-400 text-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bienvenido al Blog de Dgital
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Descubre las mejores estrategias de marketing digital y consejos de expertos para transformar tu negocio en línea.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Articles */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Últimos Artículos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <div className="relative mb-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="rounded-lg"
                      />
                      <span className="absolute top-2 right-2 bg-blue-600 text-xs text-white px-3 py-1 rounded-full shadow-lg">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition duration-300 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Categorías Destacadas
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Estrategias de Marketing</h3>
                <p className="text-gray-600">
                  Artículos que impulsan tu crecimiento digital y aumentan tu visibilidad.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <BookOpen className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Guías de SEO</h3>
                <p className="text-gray-600">
                  Aprende técnicas para optimizar tu contenido y mejorar tu posición en buscadores.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <FileText className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Transformación Digital</h3>
                <p className="text-gray-600">
                  Casos y estrategias para adaptar tu negocio a la era digital.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <PenTool className="h-10 w-10 mb-4 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Contenido Creativo</h3>
                <p className="text-gray-600">
                  Consejos para crear contenido atractivo y cautivador para tu audiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              ¿Listo para llevar tu estrategia digital al siguiente nivel?
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl mb-6">
              Contáctanos para descubrir cómo nuestras soluciones pueden ayudar a tu negocio a destacar en línea.
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
