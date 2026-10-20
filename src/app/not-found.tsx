import Link from "next/link";
import { boton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Esta página no existe</h1>
      <p className="mt-4 text-lg text-neutral-600">Puede que el enlace esté mal o que la hayamos movido.</p>
      <Link href="/" className={boton("primario", "mt-8")}>
        Volver al inicio
      </Link>
    </section>
  );
}
