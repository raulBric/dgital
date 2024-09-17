import React from 'react';
import Image from "next/image";
import Logo from "@/assets/logo-white-svg.svg";

export default function HeaderUno() {
  return (
    <div className="bg-gradient-to-l from-blue-700 to-slate-900 h-[600px] w-full flex flex-col justify-between px-4 rounded-bl-[100px] ">
      {/* Parte superior: Logo y Sección de "Es" y "Cat" con sticky */}
      <div className="flex justify-between items-start w-full pt-4 sticky top-0 bg-gradient-to-l from-blue-700 to-slate-900 z-50 px-4">
        {/* Sección de logos al inicio */}
        <div className="flex items-center">
          <Image 
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="m-2"
          />
        </div>

        {/* Sección de "Es" y "Cat" */}
        <div className="flex items-center">
          <span className="text-white mr-4 cursor-pointer">Es</span>
          <span className="text-white mr-8 cursor-pointer">Cat</span>
        </div>
      </div>

      {/* Parte inferior: Título y subtítulo completamente centrado */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="bg-gradient-to-l from-white to-blue-300 bg-clip-text text-transparent text-6xl font-bold">Diseño Web Barcelona</h1>
        <h2 className="text-white text-lg">Creación de páginas web profesionales</h2>
        <button className="btn-lg btn-custom mt-10">¿Quieres empezar?</button>
      </div>
    </div>
  );
}


