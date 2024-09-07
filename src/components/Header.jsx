import React from 'react';
import Image from "next/image";
import Insta from "@/assets/instagram-brands-solid.svg";
import X from "@/assets/x-twitter-brands-solid.svg";
import Youtube from "@/assets/youtube-brands-solid.svg";
import Logo from "@/assets/logo-white-svg.svg";

export default function HeaderUno() {
  return (
    <div className=" bg-[#3037c4] h-30 w-full flex items-center justify-between px-4">
      {/* Sección de logos al inicio */}
      <div className="flex items-center">
        <Image 
          src={Logo}
          alt="Logo"
          width={250}
          height={250}
          className="m-2"
        />
        {/* <Image  
          src={Insta}
          alt="Instagram"
          width={25}
          height={25}
          className="m-2"
        />
        <Image  
          src={X}
          alt="Twitter"
          width={25}
          height={25}
          className="m-2"
        />
        <Image  
          src={Youtube}
          alt="YouTube"
          width={25}
          height={25}
          className="m-2"
        /> */}
      </div>

      
      {/* Sección de "Es" y "Cat" al final */}
      <div className="flex items-center">
        <span className="text-white mr-4 cursor-pointer">Es</span>
        <span className="text-white mr-8 cursor-pointer">Cat</span>
      </div>
    </div>
  );
}
