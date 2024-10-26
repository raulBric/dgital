import React from "react";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center m-12">FAQS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {/* Columna 1 */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Qué es React y por qué debería usarlo?
            </div>
            <div className="collapse-content ">
              <p>
                React es una biblioteca de JavaScript para construir interfaces de usuario. Es eficiente, declarativo y flexible, lo que facilita la creación de aplicaciones web interactivas.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Cómo puedo empezar con Tailwind CSS?
            </div>
            <div className="collapse-content">
              <p>
                Para comenzar con Tailwind CSS, instala el paquete a través de npm o yarn, configura el archivo `tailwind.config.js` y empieza a usar las clases utilitarias en tu proyecto para diseñar rápidamente.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Qué es DaisyUI y cómo se integra con Tailwind?
            </div>
            <div className="collapse-content">
              <p>
                DaisyUI es un complemento de Tailwind CSS que proporciona componentes predefinidos y temas personalizables, facilitando el desarrollo de UI con diseño consistente.
              </p>
            </div>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Cómo puedo crear componentes reutilizables en React?
            </div>
            <div className="collapse-content">
              <p>
                Puedes crear componentes reutilizables en React definiéndolos como funciones o clases y luego pasándoles propiedades (props) para personalizarlos según el contexto de uso.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Cuál es la diferencia entre Tailwind CSS y Bootstrap?
            </div>
            <div className="collapse-content">
              <p>
                Tailwind CSS utiliza un enfoque de clases utilitarias, proporcionando más flexibilidad y control sobre el diseño. Bootstrap, en cambio, ofrece componentes predefinidos con estilos más acoplados.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800">
              ¿Qué ventajas ofrece DaisyUI?
            </div>
            <div className="collapse-content">
              <p>
                DaisyUI permite una integración fluida con Tailwind CSS, ofreciendo componentes preconstruidos y un sistema de temas altamente personalizable, reduciendo el tiempo de desarrollo y manteniendo un diseño coherente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

