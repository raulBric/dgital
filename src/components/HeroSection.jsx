'use client';

import { useState, useEffect } from 'react';
import { Mail } from "lucide-react";

export default function HeroSection() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState(''); // Estado para el email
  const fullText = "dgital = your tech partner();";

  // Efecto de escritura para el texto animado
  useEffect(() => {
    if (index < fullText.length) {
      const typingEffect = setTimeout(() => {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(typingEffect);
    }
  }, [index, fullText]);

  // Función para manejar la suscripción
  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Error en el servidor');
      }

      alert('Solicitud enviada con éxito');
      setEmail(''); // Limpia el campo de email después de enviar
    } catch (error) {
      console.error('Error al suscribirse:', error);
      alert('Error al suscribirse.');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="relative container mx-auto px-4 py-10 sm:py-20 lg:py-24 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Potencia tu Negocio con Soluciones{' '}
            <span className="text-blue-500">Digitales</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl">
            Empoderamos a las empresas con soluciones innovadoras.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Nuestro equipo de expertos convierte tus ideas en realidad.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:max-w-lg relative">
              <Mail className="absolute left-4 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 rounded-3xl p-3 sm:p-4 pl-12 sm:pl-12 pr-4 text-gray-700 focus:outline-none focus:border-blue-500 
                  dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Maneja el cambio de email
              />
              <button
                className="hidden sm:block bg-blue-600 text-white font-semibold py-2 sm:py-4 px-4 sm:px-6 rounded-3xl hover:bg-blue-700"
                onClick={handleSubscribe} // Maneja la suscripción al hacer clic
              >
                ¿Hablamos?
              </button>
            </div>
            <button
              className="sm:hidden w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-3xl hover:bg-blue-700"
              onClick={handleSubscribe} // Maneja la suscripción para dispositivos móviles
            >
              Empieza tu proyecto
            </button>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-0 lg:w-1/2">
          <div className="bg-black bg-opacity-50 rounded-lg p-3 sm:p-4 backdrop-blur-sm h-32 sm:h-72">
            <div className="flex items-center space-x-2 text-xs sm:text-sm mb-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              <span className="text-gray-400">code.js</span>
            </div>
            <pre className="text-blue-400 font-mono text-xs sm:text-sm sm:leading-tight">
              <code>{text}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
