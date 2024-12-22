import React from 'react'

export default function FasesProyecto() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 sm:py-20 sm:px-8 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 sm:mb-16 tracking-tight leading-tight text-center">
          Nuestro Proceso Digital
        </h2>

        <div className="relative flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-center">

          {/* Fase 1 */}
          <div className="group flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-4xl font-bold rounded-full shadow-lg mb-6">1</div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Estrategia Digital</h3>
              <p className="text-base text-gray-300">Definimos un plan de acción claro para alcanzar tus objetivos digitales con impacto.</p>
            </div>
          </div>

          {/* Linea de conexión */}
          <div className="hidden md:block w-1 h-24 bg-blue-500"></div>

          {/* Fase 2 */}
          <div className="group flex flex-col items-center text-center md:items-start md:text-left m-10">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-4xl font-bold rounded-full shadow-lg mb-6">2</div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Implementación</h3>
              <p className="text-base text-gray-300">Desarrollamos soluciones con diseños centrados en la experiencia del usuario.</p>
            </div>
          </div>

          {/* Linea de conexión */}
          <div className="hidden md:block w-1 h-24 bg-blue-500"></div>

          {/* Fase 3 */}
          <div className="group flex flex-col items-center text-center md:items-start md:text-left m-10">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-4xl font-bold rounded-full shadow-lg mb-6">3</div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Medición</h3>
              <p className="text-base text-gray-300">Optimizamos resultados y mejoramos el rendimiento .</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
