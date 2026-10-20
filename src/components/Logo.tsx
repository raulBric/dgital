import Image from "next/image";
import Link from "next/link";

// Logo original sin modificar (public/logo.svg y public/logo-white.svg). Proporción 3,18:1.
export default function Logo({
  blanco = false,
  ancho = 128,
  prioridad = false,
}: {
  blanco?: boolean;
  ancho?: number;
  prioridad?: boolean;
}) {
  return (
    <Link href="/" aria-label="Dgital, ir al inicio" className="inline-flex shrink-0">
      <Image
        src={blanco ? "/logo-white.svg" : "/logo.svg"}
        alt="Dgital"
        width={ancho}
        height={Math.round(ancho / 3.183)}
        priority={prioridad}
      />
    </Link>
  );
}
