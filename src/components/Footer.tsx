"use client";

import Link from "next/link";
import { config, esPendiente } from "@/content/config";
import { footer } from "@/content/site";
import { abrirBannerCookies } from "@/lib/consent";
import Logo from "./Logo";

export default function Footer() {
  const redes = [
    { label: "LinkedIn", href: config.linkedinUrl },
    { label: "YouTube", href: config.youtubeUrl },
  ];

  return (
    <footer className="bg-ink text-neutral-400">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo blanco ancho={128} />
          <p className="mt-4 max-w-xs text-sm">{footer.descripcion}</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">Contacto</p>
          <ul className="space-y-2">
            <li>
              {esPendiente(config.email) ? (
                <span>{config.email}</span>
              ) : (
                <a href={`mailto:${config.email}`} className="hover:text-white">
                  {config.email}
                </a>
              )}
            </li>
            {redes.map((red) => (
              <li key={red.label}>
                {red.href ? (
                  <a href={red.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {red.label}
                  </a>
                ) : (
                  <span>{red.label} [RELLENAR: URL]</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">Legal</p>
          <ul className="space-y-2">
            {footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            {config.analytics.proveedor === "ga4" && (
              <li>
                <button type="button" onClick={abrirBannerCookies} className="hover:text-white">
                  {footer.configurarCookies}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <p className="container py-6 text-xs">© {new Date().getFullYear()} Dgital</p>
      </div>
    </footer>
  );
}
