'use client';

import React, { useState, useEffect } from 'react';
import CookieBanner from '@/components/CookieBanner';
import CookiesSettingsModal from '@/components/CookiesSeetingsModal';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { setCookie, getCookie } from '@/utils/cookies';

export default function ClientLayout({ children }) {
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    performance: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
    if (savedSettings) {
      setCookieSettings(savedSettings);
    }
  }, []);

  const handleConsentChange = (settings) => {
    setCookieSettings(settings);
    localStorage.setItem('cookieSettings', JSON.stringify(settings));

    const consentLevel = Object.values(settings).some((val) => val) ? 'partial' : 'none';
    setCookie('cookieConsent', consentLevel, { expires: 365 });

    if (settings.performance || settings.advertising) {
      console.log("Cargando scripts de análisis y marketing...");
    } else {
      console.log("Cookies rechazadas o limitadas.");
    }
  };

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      performance: true,
      functionality: true,
      advertising: true,
    };
    handleConsentChange(allSettings);
  };

  const handleRejectAll = () => {
    const noSettings = {
      essential: true,
      performance: false,
      functionality: false,
      advertising: false,
    };
    handleConsentChange(noSettings);
  };

  return (
    <>
      {cookieSettings.performance && <GoogleTagManager gtmId="GTM-MHRK38HR" />}
      {children}
      <CookieBanner
        onAccept={handleAcceptAll}
        onReject={handleRejectAll}
        onManageCookies={() => setShowSettings(true)}
      />
      {showSettings && (
        <CookiesSettingsModal
          initialSettings={cookieSettings}
          onClose={() => setShowSettings(false)}
          onConsentChange={handleConsentChange}
        />
      )}
      {cookieSettings.performance && <SpeedInsights />}
    </>
  );
}
