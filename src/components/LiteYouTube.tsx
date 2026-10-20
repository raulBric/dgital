"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Video } from "lucide-react";

// Carga diferida: solo se pide la miniatura. El reproductor (youtube-nocookie) se carga al pulsar.
export default function LiteYouTube({ videoId, titulo }: { videoId: string | null; titulo: string }) {
  const [activo, setActivo] = useState(false);

  if (!videoId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-500">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white">
          <Video className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-sm font-medium">Vídeo próximamente</p>
      </div>
    );
  }

  if (activo) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivo(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-black"
      aria-label={`Reproducir vídeo: ${titulo}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-105">
          <Play className="ml-1 h-6 w-6 fill-ink text-ink" aria-hidden />
        </span>
      </span>
    </button>
  );
}
