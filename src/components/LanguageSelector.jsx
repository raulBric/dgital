// components/LanguageSelector.js
import React, { useState } from 'react';
import Image from 'next/image';
import Spain from '@/assets/Image/flags/espana.webp';
import Catalunya from '@/assets/Image/flags/bandera.webp';
import Uk from '@/assets/Image/flags/reino-unido.webp';

const languages = [
  { code: 'ESP', label: 'Español', flag: Spain },
  { code: 'ENG', label: 'English', flag: Uk },
  { code: 'CAT', label: 'Català', flag: Catalunya },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Aquí puedes agregar la lógica para cambiar el idioma en la aplicación
  };

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setIsOpen(true)} // Abre el menú al hacer hover en el contenedor principal
      onMouseLeave={() => setIsOpen(false)} // Cierra el menú al salir del contenedor principal
    >
      <div 
        className="flex items-center gap-2 px-3 py-2 bg-black rounded-md cursor-pointer hover:bg-black"
        onClick={() => setIsOpen(!isOpen)} // Alterna el menú al hacer clic
      >
        <Image src={selectedLanguage.flag} alt={selectedLanguage.label} width={24} height={16} className="rounded" />
        <span>{selectedLanguage.code}</span>
      </div>
      {isOpen && (
        <div 
          className="absolute left-0 mt-1 w-full bg-black border border-black rounded-md shadow-lg"
          onMouseEnter={() => setIsOpen(true)} // Mantiene el menú abierto al hacer hover en el menú
          onMouseLeave={() => setIsOpen(false)} // Cierra el menú al salir del menú
        >
          {languages.map((language) => (
            <div
              key={language.code}
              className="flex items-center gap-2 px-3 py-2 hover:bg-blue-500 hover:rounded-xl cursor-pointer"
              onClick={() => handleLanguageChange(language)}
            >
              <Image src={language.flag} alt={language.label} width={24} height={16} className="rounded" />
              <span>{language.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

