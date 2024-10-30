import React from 'react';
import Head from 'next/head';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Contacto - Dgital</title>
        <meta
          name="description"
          content="Ponte en contacto con Dgital para conocer cómo podemos ayudarte en tu proceso de transformación digital."
        />
      </Head>

      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">Contacto</h1>
            <p className="text-lg text-blue-800">
              ¿Tienes alguna pregunta? Nos encantaría saber de ti. Ponte en contacto con nosotros y descubre cómo nuestras soluciones pueden impulsar tu negocio.
            </p>
            <p className="text-lg text-blue-800">
              Escríbenos a <a href="mailto:hola@dgital.io" className="text-blue-600 underline">hola@dgital.io</a>
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-900 font-semibold">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-blue-900 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-blue-900 font-semibold">Mensaje</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu mensaje"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
