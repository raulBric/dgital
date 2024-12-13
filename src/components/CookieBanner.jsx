import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '@/utils/cookies';
import Link from 'next/link';

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-auto">
        <p className="text-gray-800 dark:text-gray-200 text-sm mb-4 font-bold">
          Política de cookies
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">
          Utilizamos cookies propias y de terceros para analizar tu navegación en nuestro sitio web, mostrarte publicidad personalizada, la personalización de contenidos y redes sociales. Al hacer clic en “Aceptar cookies”, aceptas que las cookies se guarden en tu dispositivo para mejorar la navegación del sitio, analizar el uso del mismo, y colaborar con nuestros estudios de marketing.
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">
          Consulta para más información nuestra <Link href="/politica-cookies" className="text-blue-600 dark:text-blue-400 underline">política de cookies</Link>.
        </p>
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleAcceptAll}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Aceptar Todas
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Rechazar Todas
          </button>
          <button
            onClick={handleManageCookies}
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded"
          >
            Gestionar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

