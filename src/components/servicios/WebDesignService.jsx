import { Palette, Code, Smartphone, Zap } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function WebDesignService() {
  return (
<div className="flex flex-col min-h-screen">
  <Head>
    <title>Servicios de Diseño Web - Dgital</title>
    <meta name="description" content="Servicios de diseño web personalizados, responsivos y optimizados para el éxito. Descubre cómo podemos transformar tu presencia en línea." />
  </Head>

  <main className="flex-1">
    {/* Hero Section */}
    <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Impulsa tu Presencia Digital</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Creamos sitios web impactantes, funcionales y optimizados. Desde la estrategia hasta la ejecución y crecimiento continuo, llevamos tu negocio al siguiente nivel.
        </p>
        <a href="#servicios" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition">
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>

    {/* Services Section */}
    <section id="servicios" className="w-full py-16 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Servicio 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Palette className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Diseño Personalizado</h3>
            <p className="text-blue-800 mb-4">
              Creamos diseños exclusivos adaptados a la identidad de tu marca. Analizamos tus necesidades y convertimos tus ideas en interfaces impactantes que conectan con tu audiencia.
            </p>
            <p className="text-blue-800">
              Nos enfocamos en detalles visuales, tipografías y colores que transmiten profesionalismo y generan confianza.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Smartphone className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Diseño Responsive</h3>
            <p className="text-blue-800 mb-4">
              Adaptamos tu sitio web a cualquier dispositivo para que luzca y funcione a la perfección en móviles, tablets y escritorios.
            </p>
            <p className="text-blue-800">
              Optimizamos la navegación para ofrecer experiencias fluidas e intuitivas, mejorando la retención de usuarios.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Code className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Desarrollo Web</h3>
            <p className="text-blue-800 mb-4">
              Implementamos sitios web con tecnologías modernas como React y Next.js, asegurando velocidad, seguridad y escalabilidad.
            </p>
            <p className="text-blue-800">
              Diseñamos soluciones personalizadas para integrar herramientas avanzadas y optimizar el rendimiento.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Zap className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Optimización SEO</h3>
            <p className="text-blue-800 mb-4">
              Mejoramos el posicionamiento de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico.
            </p>
            <p className="text-blue-800">
              Utilizamos estrategias de contenido optimizado, velocidad de carga y análisis de palabras clave para maximizar tus resultados.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full py-20 bg-blue-600 text-center text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-6">¡Lleva tu Proyecto al Siguiente Nivel!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contáctanos y descubre cómo podemos transformar tu idea en una experiencia digital inolvidable.
        </p>
      </div>
    </section>
  </main>
</div>

  );
}
