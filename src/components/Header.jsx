'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo-white-svg.svg';
import LanguageSelector from '@/components/LanguageSelector';
import { Menu, X } from 'lucide-react';
import Modal from '@/components/Modal';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isSticky ? 'bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg' : 'bg-transparent'} text-white`}>
      <div className="flex justify-between items-center w-full px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="m-2"
          />
        </Link>

        {/* Menú de Navegación en pantallas grandes */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#servicios" className="text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Servicios
          </Link>
          <Link href="#portafolio" className="text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Portafolio
          </Link>
          <Link href="#sobre-nosotros" className="text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>

        {/* Modal y Selector de Idioma en todas las pantallas */}
        <div className="flex items-center space-x-4">
          {/* <LanguageSelector /> Selector de idioma */}
          <Modal /> {/* Modal de contacto */}
        </div>

        {/* Menú hamburguesa visible solo en móviles con tamaño ajustado */}
        <button 
          className="md:hidden p-1 w-8 h-8 rounded-full transition duration-300 hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú de navegación"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 space-y-2 px-4 shadow-lg transition duration-300">
          <Link href="#servicios" className="block text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Servicios
          </Link>
          <Link href="#portafolio" className="block text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Portafolio
          </Link>
          <Link href="#sobre-nosotros" className="block text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
          <Link href="#contacto" className="block text-sm font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Contacto
          </Link>

          {/* Selector de idioma también accesible en móviles */}
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
}









