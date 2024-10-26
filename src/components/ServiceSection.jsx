import { Monitor, Megaphone, Cpu, Brain, Presentation, Cog } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Diseño Web",
      description: "Creamos sitios web atractivos y funcionales que representan tu marca.",
      icon: Monitor,
      link: "/servicios",
    },
    {
      title: "Marketing Digital",
      description: "Estrategias efectivas para aumentar tu presencia online y atraer clientes.",
      icon: Megaphone,
      link: "/marketingdigital",
    },
    {
      title: "Consultoría Digital",
      description: "Estrategias digitales que impulsan tu negocio en el entorno digital.",
      icon: Cog,
      link: "/consultoria-digital",
    },
    {
        title: "Diseño IoT",
        description: "Soluciones innovadoras que conectan tu negocio con el Internet de las Cosas.",
        icon: Cpu,
        link: "/iot-desarrollo",
      },
      {
        title: "Soluciones de IA",
        description: "Impulsa tu negocio con inteligencia artificial aplicada y automatización avanzada.",
        icon: Brain,
        link: "/soluciones-ia",
      },      
    {
    title: "Mentoría Digital",
    description: "Guiamos tu proyecto hacia el éxito con estrategias personalizadas.",
    icon: Presentation,
    link: "/mentoria-digital",
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center m-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.title}
              className="transform transition-all duration-300 ease-out hover:scale-105 hover:opacity-100"
            >
                
              <div className=" bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:bg-gray-700 group">
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4 transition-colors duration-300 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
                    {service.title}
                  </h3>
                  <p className="text-white transition-colors duration-300 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-900 transition-colors duration-300 group-hover:bg-gray-800">
                <Link href={service.link} className="text-blue-400 font-medium transition-colors duration-300 group-hover:text-blue-300">
                Saber más &rarr;
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
