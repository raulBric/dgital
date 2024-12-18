'use client';
import React, { useState } from 'react';
export default function CookiesSettingsModal({ initialSettings, onClose, onConsentChange }) {
  const [cookieSettings, setCookieSettings] = useState(initialSettings);
  const toggleCookieSetting = (type) => {
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };
  const handleSaveSettings = () => {
    onConsentChange(cookieSettings);
    onClose();
  };
  const cookieDescriptions = {
    essential: 'Cookies necesarias para funciones básicas como navegar y acceder a áreas seguras. Sin ellas, la web no funciona bien.',
    performance: 'Cookies para entender cómo los visitantes usan la web, recopilando datos anónimos.',
    functionality: 'Cookies para recordar preferencias como idioma o región.',
    advertising: 'Cookies para mostrar anuncios relevantes rastreando al usuario en la web.'
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg mx-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Configuración de Cookies</h2>
        <div className="space-y-4">
          {Object.entries(cookieSettings).map(([key, value]) => (
            <div key={key} className="py-2 border-b border-gray-300 dark:border-gray-600">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 dark:text-gray-200 capitalize">
                  {key === 'essential' ? 'Esenciales' :
                   key === 'performance' ? 'Rendimiento' :
                   key === 'functionality' ? 'Funcionalidad' : 'Publicidad'}
                </span>
                <button
                  onClick={() => toggleCookieSetting(key)}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${value ? 'bg-blue-600' : 'bg-gray-400'}`}
                >
                  <span
                    className={`transform transition-transform inline-block h-4 w-4 rounded-full bg-white ${value ? 'translate-x-6' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {cookieDescriptions[key]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</button>
          <button onClick={handleSaveSettings} className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </div>
    </div>
  );
}