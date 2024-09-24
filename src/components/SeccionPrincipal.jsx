// SeccionPrincipal.jsx
'use client';
import React from "react";
import Image from "next/image";
import CustomCard from "@/components/CustomCard";
import Diseñoweb from "@/assets/web.jpg";
import ConsultoriaDig from "@/assets/consultoria.jpg";

const SeccionPrincipal = () => {
  const cardsData = [
    {
      title: "Consultoría digital",
      description: "Optimizamos procesos y mejoramos la eficiencia para impulsar el crecimiento sostenible de tu negocio con soluciones estratégicas personalizadas.",
      imageUrl: ConsultoriaDig,
      buttonText: "Click me",
      message: "Button clicked on Card 1!",
    },
    {
      title: "Desarrollo Web",
      description: "This is the second customizable card.",
      imageUrl: Diseñoweb,
      buttonText: "Click me",
      message: "Button clicked on Card 2!",
    },
    {
      title: "Card 3",
      description: "This is the third customizable card.",
      imageUrl: Diseñoweb,
      buttonText: "Click me",
      message: "Button clicked on Card 3!",
    },
    {
      title: "Card 4",
      description: "This is the fourth customizable card.",
      imageUrl: Diseñoweb,
      buttonText: "Click me",
      message: "Button clicked on Card 4!",
    },
  ];

  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className=" rounded-br-3xl">
      <h1 className="text-center  font-bold text-4xl mt-8 ">Nuestros servicios</h1>
      <div className="cards-container grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 place-items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:max-w-md lg:max-w-xl bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 "
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={300} // Establecer el ancho y el alto
              height={300} // Ajusta según tu necesidad
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-4 text-gray-600">{card.description}</p>
              <button
                className="absolute bottom-0 left-0 mb-4 ml-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-300"
                onClick={() => handleClick(card.message)}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionPrincipal;