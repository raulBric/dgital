'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Logo from "@/assets/logo-white-svg.svg";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isSticky ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-transparent'} text-white`}>
      <div className="flex justify-between items-center w-full px-4 py-3">
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
    </header>
  );
}



