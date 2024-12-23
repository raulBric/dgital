import { Users, Lightbulb, Target, Heart } from "lucide-react";
import Head from "next/head";

export default function AboutUs() {
  return (
<div className="flex flex-col min-h-screen">
      <Head>
        <title>Sobre Nosotros - Dgital</title>
        <meta
          name="description"
          content="Conoce a Dgital, una consultoría digital con raíces en Barcelona, dedicada a la innovación, la tecnología y el crecimiento empresarial."
        />
      </Head>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-600 to-blue-500">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Sobre Nosotros
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Somos Dgital, una consultoría digital nacida en Barcelona con una visión clara: impulsar el crecimiento 
                  de nuestros clientes a través de la innovación y la tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestro Equipo y Valores
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Team Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Equipo Multidisciplinar</h3>
                <p className="text-blue-800">
                  Contamos con un equipo de ingenieros en diferentes áreas, unidos para ofrecer soluciones integrales y efectivas.
                </p>
              </div>
              {/* Team Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Target className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Orientación al Cliente</h3>
                <p className="text-blue-800">
                  Nuestro compromiso es ofrecer un servicio personalizado y orientado a cumplir los objetivos de cada cliente.
                </p>
              </div>
              {/* Team Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Heart className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Pasión por la Innovación</h3>
                <p className="text-blue-800">
                  Amamos lo que hacemos y buscamos continuamente soluciones creativas para cada desafío.
                </p>
              </div>
              {/* Team Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Lightbulb className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Enfoque en Tecnología</h3>
                <p className="text-blue-800">
                  Utilizamos herramientas digitales avanzadas para optimizar procesos y maximizar resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Quieres saber más sobre nosotros?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Estamos aquí para ayudarte a descubrir cómo nuestras soluciones innovadoras pueden impulsar tu negocio. ¡Contáctanos y hablemos!
                </p>
              </div>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </div>

  );
}
