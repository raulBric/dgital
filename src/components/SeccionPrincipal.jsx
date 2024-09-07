import React from 'react';
import Image from 'next/image';
import ImgSecction from '@/assets/coworkers-team-brainstorming.webp';

export default function SeccionPrincipal() {
  return (
<div className="carousel carousel-center ">
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div>
</div>

    // <div className="relative">
    //   <section className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-8 lg:space-y-0 p-4 lg:p-8">
        
    //     {/* Columna Izquierda: Texto */}
    //     <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
    //       <div className="text-4xl lg:text-6xl font-bold">
    //         <span className="block">Our Mission</span>
    //         <span className="block">Your Future</span>
    //       </div>
    //       <button className="btn btn-neutral">¿Hablamos?</button>
    //     </div>

    //     {/* Columna Derecha: Imagen */}
    //     <div className="flex justify-center items-center">
    //       <div className="relative w-[300px] h-[300px] clip-path-circle">
    //         <Image 
    //           src={ImgSecction}
    //           alt="hero"
    //           layout="fill"
    //           className="object-cover clip-path-circle"
    //         />
    //         {/* Overlay con degradado */}
    //         <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent clip-path-circle"></div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}



