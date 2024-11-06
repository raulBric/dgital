import { Users, Lightbulb, TrendingUp, Laptop2 } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function DigitalMentorshipService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Mentoría Digital - Dgital</title>
        <meta
          name="description"
          content="Acompañamos a tu empresa con mentoría digital, impulsando la transformación tecnológica, el crecimiento estratégico y el desarrollo de habilidades digitales."
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
                  Mentoría Digital para el Crecimiento Empresarial
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Potencia las habilidades digitales de tu equipo, lidera la transformación digital y acelera el crecimiento estratégico con nuestro acompañamiento.
                </p>
              </div>
              {/* <div className="space-x-4">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50"
                >
                  Solicitar Mentoría
                </a>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600"
                >
                  Ver Testimonios
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Nuestras Áreas de Mentoría Digital
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Mentoría Estratégica</h3>
                <p className="text-blue-800">
                  Acompañamos a líderes empresariales en la definición e implementación de estrategias digitales para el crecimiento sostenible.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Lightbulb className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Innovación Tecnológica</h3>
                <p className="text-blue-800">
                  Fomentamos la innovación dentro de tu organización, ayudándote a adoptar las últimas tecnologías para ser más competitivo.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Transformación Digital</h3>
                <p className="text-blue-800">
                  Guiamos a tu empresa a través del proceso de transformación digital para modernizar sistemas y procesos.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Laptop2 className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Desarrollo de Habilidades Digitales</h3>
                <p className="text-blue-800">
                  Capacita a tu equipo en las habilidades digitales necesarias para triunfar en un entorno empresarial moderno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para impulsar tu crecimiento digital?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta personalizada y descubre cómo nuestra mentoría digital puede transformar tu negocio.
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
