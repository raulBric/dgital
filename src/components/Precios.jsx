import React from 'react'

export default function Precios() {
  return (
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12 lg:px-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">Nuestro Proceso de Trabajo</h2>

        <div class="space-y-16">
          {/* Pricing Card */}
          <div class="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 class="text-3xl font-semibold mb-6">Planes de Desarrollo Web</h3>
            <div class="grid md:grid-cols-3 gap-8">

              {/* Plan Básico */}
              <div class="p-6 border border-gray-700 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <h4 class="text-2xl font-bold mb-4">Básico</h4>
                <p class="text-lg text-gray-300 mb-6">Ideal para pequeñas empresas y emprendedores.</p>
                <p class="text-4xl font-bold mb-4">€999</p>
                <ul class="text-left text-gray-300 mb-6 space-y-2">
                  <li>✓ Página única (Landing Page)</li>
                  <li>✓ Diseño responsive</li>
                  <li>✓ SEO básico</li>
                  <li>✓ Soporte por 1 mes</li>
                </ul>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Seleccionar</button>
              </div>

              {/* Plan Profesional */}
              <div class="p-6 border border-blue-500 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <h4 class="text-2xl font-bold mb-4">Profesional</h4>
                <p class="text-lg text-gray-300 mb-6">Para empresas en crecimiento.</p>
                <p class="text-4xl font-bold mb-4">€1999</p>
                <ul class="text-left text-gray-300 mb-6 space-y-2">
                  <li>✓ Hasta 5 páginas</li>
                  <li>✓ Diseño personalizado</li>
                  <li>✓ SEO avanzado</li>
                  <li>✓ Integración con CRM</li>
                  <li>✓ Soporte por 3 meses</li>
                </ul>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Seleccionar</button>
              </div>

              {/* Plan Empresarial */}
              <div class="p-6 border border-gray-700 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <h4 class="text-2xl font-bold mb-4">Empresarial</h4>
                <p class="text-lg text-gray-300 mb-6">Para soluciones avanzadas y escalables.</p>
                <p class="text-4xl font-bold mb-4">€4999</p>
                <ul class="text-left text-gray-300 mb-6 space-y-2">
                  <li>✓ Sitio web ilimitado</li>
                  <li>✓ Desarrollo a medida</li>
                  <li>✓ Integración API</li>
                  <li>✓ Análisis y optimización</li>
                  <li>✓ Soporte premium por 6 meses</li>
                </ul>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Seleccionar</button>
              </div>

            </div>
          </div>

          {/* Maintenance Plans */}
          <div class="bg-gray-800 rounded-lg shadow-lg p-8 text-center mt-16">
            <h3 class="text-3xl font-semibold mb-6">Planes de Mantenimiento</h3>
            <div class="grid md:grid-cols-3 gap-8">

              {/* Mantenimiento Básico */}
              <div class="p-6 border border-gray-700 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <h4 class="text-2xl font-bold mb-4">Básico</h4>
                <p class="text-lg text-gray-300 mb-6">Para actualizaciones básicas.</p>
                <p class="text-4xl font-bold mb-4">€49/mes</p>
                <ul class="text-left text-gray-300 mb-6 space-y-2">
                  <li>✓ Actualizaciones mensuales</li>
                  <li>✓ Seguridad básica</li>
                  <li>✓ Copias de seguridad automáticas</li>
                </ul>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Seleccionar</button>
              </div>

              {/* Mantenimiento Avanzado */}
              <div class="p-6 border border-blue-500 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <h4 class="text-2xl font-bold mb-4">Avanzado</h4>
                <p class="text-lg text-gray-300 mb-6">Para empresas con necesidades continuas.</p>
                <p class="text-4xl font-bold mb-4">€99/mes</p>
                <ul class="text-left text-gray-300 mb-6 space-y-2">
                  <li>✓ Actualizaciones semanales</li>
                  <li>✓ Seguridad avanzada</li>
                  <li>✓ Análisis de rendimiento</li>
                </ul>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Seleccionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
