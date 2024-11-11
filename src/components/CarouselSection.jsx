'use client';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const CarouselSection = () => {
  const slides = [
    {
      title: 'User Research y estrategia',
      description: 'Empezamos con una fase profunda de investigación para entender a fondo tu negocio y diseñar un plan que impulse tus metas. Cada detalle cuenta.',
      bgColor: 'bg-blue-600',
      cta: 'Da el Primer Paso',
    },
    {
      title: 'Diseño UX/UI',
      description: 'Nuestros diseñadores convierten tus ideas en prototipos únicos que capturan la esencia de tu marca, pensando siempre en la mejor experiencia para tus usuarios.',
      bgColor: 'bg-blue-900',
      cta: 'Conoce Nuestro Estilo',
    },
    {
      title: 'Creación y Lanzamiento',
      description: 'Con el respaldo de un equipo experimentado, desarrollamos soluciones sólidas listas para destacar en el mercado. Tu éxito es nuestra prioridad.',
      bgColor: 'bg-blue-700',
      cta: 'Creamos Juntos',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Configuración para detectar gestos de deslizamiento
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="flex items-center justify-center bg-gray-100 w-full h-[20rem] relative">
      <div
        {...handlers}
        className="relative w-full h-full overflow-hidden shadow-lg"
      >
        <div className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full ${slide.bgColor} text-white flex items-center justify-center p-4`}
              style={{ minHeight: '20rem' }} // Asegura que cada slide tenga al menos 20rem de altura
            >
              <div className="text-center max-w-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-md">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-lg mb-4 drop-shadow-md">
                  {slide.description}
                </p>
                {/* <button className="btn btn-primary">{slide.cta}</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación del carrusel */}
      <div className="absolute flex justify-between w-full transform -translate-y-1/2 top-1/2 px-4 z-20 hidden md:flex">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white bg-opacity-80 text-black hover:bg-opacity-100 shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white bg-opacity-80 text-black hover:bg-opacity-100 shadow-lg"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;











