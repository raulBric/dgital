'use client';
// DarkModeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el lado del cliente
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Establece el estado inicial
      setIsDarkMode(darkModeMediaQuery.matches);

      // Escucha los cambios en las preferencias de modo oscuro
      const handleChange = (e) => setIsDarkMode(e.matches);
      darkModeMediaQuery.addEventListener("change", handleChange);

      // Limpia el eventListener al desmontar
      return () => darkModeMediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook para acceder al contexto de modo oscuro
export const useDarkMode = () => useContext(DarkModeContext);

