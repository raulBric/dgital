import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import { politicaCookies } from "@/content/legal";

export const metadata: Metadata = {
  title: politicaCookies.titulo,
  description: politicaCookies.descripcion,
  alternates: { canonical: "/politica-cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return <PaginaLegal pagina={politicaCookies} />;
}
