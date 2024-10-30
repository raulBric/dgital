'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/assets/logo-white-svg.svg';
import { Menu, X } from 'lucide-react';
import Modal from '@/components/Modal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Ajusta el valor si el cambio es muy sensible
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (e, path) => {
    e.preventDefault();
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isSticky ? 'bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg' : 'bg-transparent'} text-white`}>
      <div className="flex justify-between items-center w-full px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="m-2"
          />
        </Link>

        {/* Menú de Navegación en pantallas grandes */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#servicios" onClick={(e) => navigateToSection(e, '/#servicios')} className="text-lg text-white font-medium hover:text-blue-400 transition duration-300">
            Servicios
          </Link>
          <Link href="/quienes-somos" className="text-lg text-white font-medium hover:text-blue-400 transition duration-300 hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
        </nav>

        {/* Modal y Selector de Idioma en todas las pantallas */}
        <div className="flex items-center ">
          <Modal /> {/* Modal de contacto */}
        </div>

        {/* Menú hamburguesa visible solo en móviles */}
        <button 
          className="md:hidden p-1 w-8 h-8 rounded-full transition duration-300 hover:bg-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú de navegación"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 space-y-2 px-4 shadow-lg transition duration-300">
          <a href="/#servicios" onClick={(e) => navigateToSection(e, '/#servicios')} className="block text-lg text-center font-medium hover:text-blue-400 transition duration-300">
            Servicios
          </Link>
          <Link href="/quienes-somos" onClick={(e) => goToSection(e, '/sobre-nosotros')} className="block text-lg text-center font-medium hover:text-blue-400 transition duration-300">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="block text-lg text-center font-medium hover:text-blue-400 transition duration-300">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}





