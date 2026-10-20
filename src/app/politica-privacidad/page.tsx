import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import { politicaPrivacidad } from "@/content/legal";

export const metadata: Metadata = {
  title: politicaPrivacidad.titulo,
  description: politicaPrivacidad.descripcion,
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: false },
};

export default function PrivacidadPage() {
  return <PaginaLegal pagina={politicaPrivacidad} />;
}
