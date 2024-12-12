import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '@/utils/cookies';

const CookieBanner = ({ onManageCookies }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie('cookieConsent', 'all', { expires: 365 });
    setCookie('analyticsConsent', 'true', { expires: 365 });
    setCookie('marketingConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setCookie('cookieConsent', 'none', { expires: 365 });
    setCookie('analyticsConsent', 'false', { expires: 365 });
    setCookie('marketingConsent', 'false', { expires: 365 });
    setShowBanner(false);
  };

  const handleManageCookies = () => {
    onManageCookies();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50">
      <p className="text-sm">
        Usamos cookies para mejorar tu experiencia. ¿Aceptas?
      </p>
      <div className="space-x-2">
        <button
          onClick={handleAcceptAll}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Aceptar Todas
        </button>
        <button
          onClick={handleRejectAll}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Rechazar Todas
        </button>
        <button
          onClick={handleManageCookies}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Gestionar Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
