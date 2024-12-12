'use client';

import { useState, useEffect } from 'react';
import CookieBanner from "@/components/CookieBanner";
import CookieSettingsModal from "@/components/CookieSettingsModal";
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientLayout({ children }) {
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsent(savedConsent);
    }
  }, []);

  useEffect(() => {
    if (consent === 'all') {
      console.log("Cargando scripts de análisis y marketing...");
    }
    if (consent === 'none') {
      console.log("Cookies rechazadas. No se cargan scripts.");
    }
  }, [consent]);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setConsent('all');
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'none');
    setConsent('none');
  };

  return (
    <>
      {consent === 'all' && <GoogleTagManager gtmId="GTM-MHRK38HR" />}
      {children}
      <CookieBanner
        onAccept={handleAcceptAll}
        onReject={handleRejectAll}
        onManageCookies={() => setShowSettings(true)}
      />
      {showSettings && (
        <CookieSettingsModal
          onClose={() => setShowSettings(false)}
          onConsentChange={setConsent}
        />
      )}
      {consent === 'all' && <SpeedInsights />}
    </>
  );
}
