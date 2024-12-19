
export default function ContactSection() {
  return (
<section id="contacto" className="relative bg-gray-900 py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-white mb-6">
      ¿Listo para conectar?
    </h2>
    <p className="text-lg text-gray-300 mb-12">
      Escríbenos o llámanos y llevemos tus ideas a la realidad. Estamos aquí para ayudarte en cada paso.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Teléfono */}
      <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <a href="tel:+34600123456" className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.7 10.6a16.85 16.85 0 006.7 6.7l2.2-2.2a1.5 1.5 0 011.7-.3 10.94 10.94 0 003.4 1.1 1.5 1.5 0 011.3 1.5v3.3a1.5 1.5 0 01-1.5 1.5A19.86 19.86 0 013 3a1.5 1.5 0 011.5-1.5h3.3a1.5 1.5 0 011.5 1.3 10.94 10.94 0 001.1 3.4 1.5 1.5 0 01-.3 1.7L6.7 10.6z" />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            +34 610 01 99 52
          </span>
        </a>
      </div>
      {/* Correo */}
      <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <a href="mailto:hola@dgital.io" className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8V4a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-4m4 0l-5-5m5 5l-5 5" />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            hola@dgital.io
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
