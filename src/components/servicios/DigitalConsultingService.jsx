import { TrendingUp, Layers, Code, BarChart } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function DigitalConsultingService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Consultoría Digital - Dgital</title>
        <meta
          name="description"
          content="Potencia tu negocio con nuestros servicios de consultoría digital estratégica, transformación digital, automatización y análisis de datos."
        />
      </Head>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-600 to-blue-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Consultoría Digital Estratégica
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Impulsa la transformación digital de tu empresa con nuestras soluciones estratégicas diseñadas para optimizar y automatizar tus procesos.
                </p>
              </div>
              {/* <div className="space-x-4">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
                >
                  Solicitar Consulta
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestros Servicios de Consultoría
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Layers className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Transformación Digital</h3>
                <p className="text-blue-800">
                  Acompañamos a tu empresa en su camino hacia la digitalización, optimizando cada área de tu negocio.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Estrategia Digital</h3>
                <p className="text-blue-800">
                  Desarrollamos planes estratégicos personalizados para impulsar tu crecimiento digital de manera sostenible.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Code className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Automatización de Procesos</h3>
                <p className="text-blue-800">
                  Implementamos soluciones automatizadas que optimizan tus flujos de trabajo y mejoran la eficiencia operativa.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <BarChart className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Análisis de Datos</h3>
                <p className="text-blue-800">
                  Te ayudamos a tomar decisiones informadas a través del análisis profundo de tus datos empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para transformar tu negocio digitalmente?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta personalizada y descubre cómo nuestras soluciones de consultoría digital pueden revolucionar tu negocio.
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
