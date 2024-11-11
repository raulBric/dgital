import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import articles from '@/database/blog.json';

export default function BlogIndexPage() {
  return (
    
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="p-8 max-w-5xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-300 rounded-xl shadow-lg text-center p-12 mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Bienvenido al Blog de Dgital</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Inspírate con nuestras guías, artículos y estrategias sobre marketing digital, diseño y transformación digital. Aquí comienza la evolución digital de tu negocio.
          </p>
          {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image src="/assets/blog-background.svg" alt="Decorative background" layout="fill" objectFit="cover" />
          </div> */}
        </section>

        {/* Blog Articles */}
        <section className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <div key={article.id} className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                  <span className="absolute bottom-2 left-2 bg-blue-600 text-sm text-white px-3 py-1 rounded-lg shadow-lg">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold group-hover:text-blue-500 transition duration-300 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-br from-blue-600 to-blue-400 py-12 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold mb-4 text-white">¿Quieres Saber Más?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6 text-lg">
            Si tienes dudas o deseas recibir más información sobre nuestros artículos y servicios, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en tu transformación digital.
          </p>
          <a href="mailto:hola@dgital.io" className="inline-block bg-white text-blue-700 font-semibold text-lg py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
            Contáctanos
          </a>
        </section>
      </main>
    </div>
  );
}

