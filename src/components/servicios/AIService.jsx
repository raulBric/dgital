import { Brain, BarChart, Code, MessageSquare } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function AIService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Soluciones de Inteligencia Artificial - Dgital</title>
        <meta
          name="description"
          content="Impulsa tu negocio con nuestras soluciones de IA: automatización, análisis predictivo, procesamiento de lenguaje natural y más."
        />
      </Head>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-600 to-blue-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Soluciones de IA Avanzadas para tu Empresa
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Potencia la innovación con inteligencia artificial. Implementamos soluciones personalizadas de IA para automatizar y optimizar tus procesos.
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
                  Ver Casos de Éxito
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestras Soluciones de IA
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Brain className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Automatización Inteligente</h3>
                <p className="text-blue-800">
                  Automatizamos procesos complejos utilizando IA para reducir costos, mejorar la eficiencia y minimizar errores humanos.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MessageSquare className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Procesamiento del Lenguaje Natural (NLP)</h3>
                <p className="text-blue-800">
                  Desarrollamos soluciones de NLP para análisis de texto, chatbots avanzados, y asistentes virtuales que comprenden y responden de forma natural.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <BarChart className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Análisis Predictivo</h3>
                <p className="text-blue-800">
                  Utilizamos modelos de aprendizaje automático para predecir comportamientos y tendencias futuras basadas en datos históricos.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Code className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Desarrollo de Modelos de IA</h3>
                <p className="text-blue-800">
                  Creamos modelos de IA personalizados que se ajustan a las necesidades específicas de tu negocio para mejorar la toma de decisiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para implementar IA en tu negocio?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta personalizada y descubre cómo nuestras soluciones de inteligencia artificial pueden transformar tu empresa.
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
