import { Palette, Code, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export default function WebDesignService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header
      <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Palette className="h-6 w-6" />
          <span className="ml-2 font-semibold">Acme Web Design</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Portafolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sobre Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header> */}

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Diseño Web Creativo y Profesional
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Transformamos tus ideas en sitios web impresionantes. Diseño personalizado, responsive y optimizado para el éxito de tu negocio.
                </p>
              </div>
              <div className="space-x-4">
                <a href="#" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50">
                  Solicitar Cotización
                </a>
                <a href="#" className="inline-block px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600">
                  Ver Portafolio
                </a>
              </div>
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
                <Palette className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Diseño Personalizado</h3>
                <p className="text-blue-800">
                  Creamos diseños únicos que reflejan la identidad de tu marca y cautivan a tu audiencia.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Smartphone className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Diseño Responsive</h3>
                <p className="text-blue-800">
                  Aseguramos que tu sitio se vea y funcione perfectamente en todos los dispositivos.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Code className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Desarrollo Web</h3>
                <p className="text-blue-800">
                  Implementamos tu diseño con código limpio y eficiente para un rendimiento óptimo.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Zap className="h-6 w-6 mb-2 text-blue-600 mx-auto" />
                <h3 className="text-blue-900 text-xl font-semibold mb-2">Optimización SEO</h3>
                <p className="text-blue-800">
                  Mejoramos la visibilidad de tu sitio en los motores de búsqueda para atraer más tráfico.
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
                  ¿Listo para impulsar tu presencia en línea?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Contáctanos hoy para una consulta gratuita y descubre cómo podemos llevar tu negocio al siguiente nivel.
                </p>
              </div>
              <a href="#" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50">
                Contactar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
