"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { enlaceReserva } from "@/content/config";
import { ctaPrincipal } from "@/content/site";
import { track } from "@/lib/analytics";
import { boton, type VarianteBoton } from "./ui";

export default function BotonReserva({
  texto = ctaPrincipal,
  variante = "primario",
  className = "",
  evento = "reserva_click",
  flecha = true,
}: {
  texto?: string;
  variante?: VarianteBoton;
  className?: string;
  evento?: "reserva_click" | "demo_cta_click";
  flecha?: boolean;
}) {
  const externo = enlaceReserva.startsWith("http");
  return (
    <Link
      href={enlaceReserva}
      className={boton(variante, className)}
      onClick={() => track(evento)}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {texto}
      {flecha && <ArrowRight className="h-4 w-4" aria-hidden />}
    </Link>
  );
}
