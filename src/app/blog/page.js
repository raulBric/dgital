import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import articles from '@/database/blog.json';

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main className="p-4 sm:p-8 max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-tr from-indigo-600 to-indigo-400 dark:from-indigo-700 dark:to-indigo-500 rounded-2xl shadow-xl text-center p-10 sm:p-14 mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white">
            Bienvenido al Blog de Dgital
          </h1>
          <p className="text-indigo-100 max-w-2xl mx-auto text-lg sm:text-xl">
            Descubre las mejores estrategias, guías y artículos sobre marketing digital, diseño y transformación digital. ¡Inicia la evolución digital de tu negocio!
          </p>
        </section>

        {/* Blog Articles */}
<section className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
  {articles
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Ordena por fecha descendente
    .map((article) => (
      <div
        key={article.id}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden"
      >
        <Link href={`/blog/${article.slug}`} className="block">
          <div className="relative w-full h-48 sm:h-64">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform transform group-hover:scale-110 duration-300"
            />
            <span className="absolute top-4 left-4 bg-indigo-600 dark:bg-indigo-500 text-xs sm:text-sm text-white px-3 py-1 rounded-full shadow-lg">
              {article.date}
            </span>
          </div>
          <div className="p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 transition duration-300 mb-3">
              {article.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    ))}
</section>


        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-br from-indigo-600 to-indigo-400 dark:from-indigo-700 dark:to-indigo-500 py-10 sm:py-14 rounded-2xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Quieres Saber Más?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg sm:text-xl">
            Si tienes dudas o deseas recibir más información sobre nuestros artículos y servicios, ¡no dudes en contactarnos!
          </p>
          <a
            href="mailto:hola@dgital.io"
            className="inline-block bg-white text-indigo-700 dark:bg-gray-800 dark:text-indigo-300 font-semibold text-base sm:text-lg py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Contáctanos
          </a>
        </section>
      </main>
    </div>
  );
}
