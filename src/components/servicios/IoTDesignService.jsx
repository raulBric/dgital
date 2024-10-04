import { Cpu, Cloud, Wifi, Server } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function IoTDesignService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Diseño IoT - Dgital</title>
        <meta
          name="description"
          content="Lleva tus dispositivos al siguiente nivel con nuestras soluciones de diseño y desarrollo IoT, conectividad inteligente, y análisis en la nube."
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
                  Diseño y Desarrollo de IoT Innovador
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Desarrollamos soluciones IoT que conectan dispositivos, mejoran la eficiencia operativa y permiten el análisis en tiempo real.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
                >
                  Solicitar Consulta
                </a>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600"
                >
                  Ver Proyectos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestros Servicios de IoT
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Cpu className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Diseño de Hardware IoT</h3>
                <p className="text-blue-800">
                  Diseñamos dispositivos IoT personalizados para satisfacer las necesidades específicas de tu empresa y conectar tus sistemas.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Wifi className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Conectividad y Redes</h3>
                <p className="text-blue-800">
                  Ofrecemos soluciones de conectividad inteligente para asegurar que tus dispositivos estén siempre conectados y sincronizados.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Cloud className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Desarrollo de Software IoT</h3>
                <p className="text-blue-800">
                  Creamos software IoT para gestionar dispositivos y datos, con control en tiempo real y análisis predictivo.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Server className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Análisis y Procesamiento de Datos</h3>
                <p className="text-blue-800">
                  Implementamos soluciones en la nube para almacenar, procesar y analizar grandes volúmenes de datos IoT.
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
                  ¿Listo para diseñar la solución IoT perfecta?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta y descubre cómo nuestras soluciones IoT pueden transformar tu negocio.
                </p>
              </div>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
