import { TrendingUp, Code, Smartphone, BarChart } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function DigitalMarketingService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Marketing Digital - Dgital</title>
        <meta
          name="description"
          content="Potencia tu presencia en línea con nuestras estrategias de marketing digital, SEO, gestión de redes sociales y campañas publicitarias."
        />
      </Head>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Estrategias de Marketing Digital Efectivas
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Potencia tu marca y aumenta tu presencia en línea con nuestras soluciones personalizadas de marketing digital.
                </p>
              </div>
              {/* <div className="space-x-4">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
                >
                  Solicitar Estrategia
                </a>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600"
                >
                  Ver Casos de Éxito
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">SEO & Optimización</h3>
                <p className="text-blue-800">
                  Mejora la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Smartphone className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Gestión de Redes Sociales</h3>
                <p className="text-blue-800">
                  Conecta con tu audiencia en las plataformas más populares y aumenta el engagement de tu marca.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Code className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Campañas PPC</h3>
                <p className="text-blue-800">
                  Desarrollamos y gestionamos campañas publicitarias de pago por clic para maximizar tus conversiones.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <BarChart className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Análisis y Reporting</h3>
                <p className="text-blue-800">
                  Monitoreamos el rendimiento de tus campañas y te ofrecemos reportes detallados para ajustar la estrategia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para escalar tu estrategia digital?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta gratuita y descubre cómo podemos llevar tu negocio al siguiente nivel con estrategias de marketing digital.
                </p>
              </div>
              {/* <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
              >
                Contactar Ahora
              </a> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
