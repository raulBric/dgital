'use client';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-500 text-white p-4">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl font-semibold mt-4">¡Oops! Página no encontrada</p>
      <p className="text-center text-lg mt-2 max-w-md">
        Parece que la página que buscas no existe o fue movida. 
      </p>
      <button 
        className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-lg hover:bg-indigo-50 transition duration-300"
        onClick={() => window.history.back()}
      >
        Volver
      </button>
    </div>
  );
}
