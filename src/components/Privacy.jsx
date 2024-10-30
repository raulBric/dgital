import React from 'react';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <main className="p-8 max-w-4xl mx-auto space-y-12">
      
      {/* Header Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          En Dgital.io, la privacidad de nuestros usuarios es una prioridad. Conoce cómo recopilamos, utilizamos y protegemos tu información personal en nuestro sitio web.
        </p>
      </section>

      {/* Información Recopilada */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Información que Recopilamos</h2>
        <p className="text-blue-100">
          Recopilamos información personal que proporcionas al utilizar nuestros servicios, como tu nombre, correo electrónico, y otros datos necesarios para mejorar tu experiencia.
        </p>
      </section>

      {/* Uso de la Información */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Uso de la Información</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mejora del Servicio</h3>
            <p>Utilizamos tu información para personalizar tu experiencia y mejorar la calidad de nuestros servicios.</p>
          </div>
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Comunicaciones</h3>
            <p>Te enviaremos actualizaciones y noticias, siempre que hayas dado tu consentimiento para recibirlas.</p>
          </div>
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
            <p>Mantenemos medidas de seguridad para proteger tu información personal contra accesos no autorizados.</p>
          </div>
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Cumplimiento Legal</h3>
            <p>Podemos compartir tu información cuando sea necesario para cumplir con obligaciones legales.</p>
          </div>
        </div>
      </section>

      {/* Compartir Información */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Con quién Compartimos tu Información</h2>
        <p className="text-blue-100">
          No compartimos tu información personal con terceros, excepto cuando es necesario para prestar nuestros servicios, cumplir con obligaciones legales o con tu consentimiento explícito.
        </p>
      </section>

      {/* Tus Derechos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Tus Derechos sobre tu Información</h2>
        <p className="text-blue-100">
          Tienes derecho a acceder, actualizar y eliminar tu información personal. También puedes optar por no recibir comunicaciones de marketing en cualquier momento.
        </p>
      </section>

      {/* Actualización de la Política */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Actualización de la Política de Privacidad</h2>
        <p className="text-blue-100">
          Podemos actualizar esta política de privacidad ocasionalmente. Te recomendamos revisarla periódicamente para mantenerte informado sobre cómo protegemos tu información.
        </p>
      </section>

      {/* Contacto */}
      <section className="text-center bg-blue-600 py-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">¿Tienes Preguntas?</h2>
        <p className="text-blue-100 mb-4">
          Si tienes preguntas sobre nuestra política de privacidad, contáctanos en <a href="mailto:hola@dgital.io" className="text-blue-200 underline">hola@dgital.io</a>.
        </p>
      </section>
    </main>
  </div>
  );
}

