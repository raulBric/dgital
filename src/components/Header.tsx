"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ctaCorto, navegacion } from "@/content/site";
import BotonReserva from "./BotonReserva";
import Logo from "./Logo";

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 text-white backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6 md:h-24">
        <Logo blanco prioridad ancho={150} />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-neutral-300">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <BotonReserva texto={ctaCorto} flecha={false} className="px-5 py-2.5" />
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-white/10 lg:hidden">
          <ul className="container flex flex-col py-4">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-neutral-200"
                  onClick={() => setAbierto(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <BotonReserva texto={ctaCorto} className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
