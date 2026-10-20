"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { config } from "@/content/config";
import { cookies } from "@/content/site";
import {
  EVENTO_ABRIR_BANNER,
  alCambiarConsentimiento,
  guardarConsentimiento,
  leerConsentimiento,
  type Consentimiento,
} from "@/lib/consent";
import { boton } from "./ui";

const { proveedor, plausibleDomain, ga4Id } = config.analytics;
const plausibleActivo = proveedor === "plausible" && !!plausibleDomain;
const ga4Activo = proveedor === "ga4" && !!ga4Id;

/**
 * Analítica según NEXT_PUBLIC_ANALYTICS_PROVIDER:
 * - plausible: sin cookies, se carga siempre (no requiere consentimiento).
 * - ga4: usa cookies, solo se carga tras aceptar el banner.
 * Sin proveedor configurado no se carga nada ni se muestra el banner.
 */
export default function Analytics() {
  const [consentimiento, setConsentimiento] = useState<Consentimiento>(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (!ga4Activo) return;
    const actual = leerConsentimiento();
    setConsentimiento(actual);
    setBannerVisible(actual === null);
    const abrir = () => setBannerVisible(true);
    window.addEventListener(EVENTO_ABRIR_BANNER, abrir);
    const quitar = alCambiarConsentimiento(setConsentimiento);
    return () => {
      window.removeEventListener(EVENTO_ABRIR_BANNER, abrir);
      quitar();
    };
  }, []);

  const elegir = (valor: "aceptado" | "rechazado") => {
    guardarConsentimiento(valor);
    setBannerVisible(false);
    // Al retirar el consentimiento, recargamos para descargar GA4 de la página.
    if (valor === "rechazado" && consentimiento === "aceptado") window.location.reload();
  };

  return (
    <>
      {plausibleActivo && (
        <>
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
          <Script id="plausible-init">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>
        </>
      )}

      {ga4Activo && consentimiento === "aceptado" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${ga4Id}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {ga4Activo && bannerVisible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md md:rounded-lg md:border"
        >
          <p className="text-sm text-neutral-700">
            {cookies.texto}{" "}
            <Link href="/politica-cookies" className="font-medium text-accent underline underline-offset-2">
              {cookies.masInfo}
            </Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => elegir("rechazado")} className={boton("secundario", "py-2 text-sm")}>
              {cookies.rechazar}
            </button>
            <button type="button" onClick={() => elegir("aceptado")} className={boton("secundario", "py-2 text-sm")}>
              {cookies.aceptar}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
