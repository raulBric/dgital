import React from 'react';

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="p-8 max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            En Dgital.io utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
            Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con esta política.
          </p>
        </section>

        {/* ¿Qué Son las Cookies? Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">¿Qué Son las Cookies?</h2>
          <p className="text-blue-100">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten reconocer tu navegador y recordar ciertas preferencias para mejorar tu experiencia en futuras visitas.
          </p>
        </section>

        {/* Tipos de Cookies Que Utilizamos Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Tipos de Cookies Que Utilizamos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cookies Esenciales</h3>
              <p>Son necesarias para el funcionamiento básico del sitio, permitiéndote navegar y utilizar sus funcionalidades.</p>
            </div>
            <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cookies de Rendimiento</h3>
              <p>Nos ayudan a comprender cómo los usuarios interactúan con el sitio para mejorar la funcionalidad y experiencia.</p>
            </div>
            <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cookies de Funcionalidad</h3>
              <p>Permiten recordar tus preferencias (como el idioma) para ofrecerte una experiencia personalizada.</p>
            </div>
            <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cookies de Publicidad</h3>
              <p>Utilizamos estas cookies para mostrar anuncios relevantes según tus intereses y medir la efectividad de nuestras campañas.</p>
            </div>
          </div>
        </section>

        {/* Gestión de Cookies Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Gestión de Cookies</h2>
          <p className="text-blue-100">
            Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que, al deshabilitar ciertas cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
          </p>
        </section>

        {/* Cookies de Terceros Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Cookies de Terceros</h2>
          <p className="text-blue-100">
            Podemos permitir a terceros, como proveedores de análisis o anunciantes, que configuren cookies en tu dispositivo. Estas cookies se utilizan para mejorar el rendimiento y personalizar el contenido publicitario que ves. Te recomendamos revisar las políticas de privacidad de estos terceros.
          </p>
        </section>

        {/* Actualización de la Política Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Actualización de la Política de Cookies</h2>
          <p className="text-blue-100">
            Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Te recomendamos revisarla periódicamente para mantenerte informado sobre el uso de cookies en nuestro sitio.
          </p>
        </section>

        {/* Contacto Section */}
        <section className="text-center bg-blue-600 py-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">¿Tienes Preguntas?</h2>
          <p className="text-blue-100 mb-4">
            Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en <a href="mailto:hola@dgital.io" className="text-blue-200 underline">hola@dgital.io</a>.
          </p>
        </section>
      </main>
    </div>
  );
}