import { useState } from 'react';
import { setCookie, getCookie } from '../utils/cookies';

const CookieSettingsModal = ({ onClose }) => {
  const [cookies, setCookies] = useState({
    analytics: getCookie('analyticsConsent') === 'true',
    marketing: getCookie('marketingConsent') === 'true',
    essential: true, // Las cookies esenciales no se pueden deshabilitar
  });

  const handleToggle = (key) => {
    setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setCookie('analyticsConsent', cookies.analytics, { expires: 365 });
    setCookie('marketingConsent', cookies.marketing, { expires: 365 });
    setCookie('essentialConsent', true, { expires: 365 });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Configuración de Cookies</h2>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={cookies.analytics}
                onChange={() => handleToggle('analytics')}
                className="mr-2"
              />
              Cookies de Analíticas
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={cookies.marketing}
                onChange={() => handleToggle('marketing')}
                className="mr-2"
              />
              Cookies de Marketing
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={cookies.essential}
                disabled
                className="mr-2"
              />
              Cookies Esenciales (requeridas)
            </label>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
