import type { Metadata } from "next";
import PaginaLegal from "@/components/PaginaLegal";
import { avisoLegal } from "@/content/legal";

export const metadata: Metadata = {
  title: avisoLegal.titulo,
  description: avisoLegal.descripcion,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return <PaginaLegal pagina={avisoLegal} />;
}
