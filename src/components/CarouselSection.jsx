'use client';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const CarouselSection = () => {
  const slides = [
    {
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs and creating a tailored plan to achieve your goals bla bla',
      bgColor: 'bg-blue-600',
      cta: 'Start Your Project',
    },
    {
      title: 'Design & Prototyping',
      description: 'Our expert designers create stunning prototypes that bring your ideas to life and ensure an exceptional user experience.',
      bgColor: 'bg-blue-900',
      cta: 'See Our Work',
    },
    {
      title: 'Development & Launch',
      description: 'Our skilled developers build high-performance solutions, ensuring a smooth and successful launch of your product.',
      bgColor: 'bg-blue-700',
      cta: 'Let’s Build Together',
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
                <button className="btn btn-primary">{slide.cta}</button>
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











