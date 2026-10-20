import type { MetadataRoute } from "next";
import { config } from "@/content/config";
import { casos } from "@/data/casos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.url;
  const ahora = new Date();
  return [
    { url: `${base}/`, lastModified: ahora, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/demo`, lastModified: ahora, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos`, lastModified: ahora, changeFrequency: "weekly", priority: 0.8 },
    ...casos.map((c) => ({
      url: `${base}/casos/${c.slug}`,
      lastModified: new Date(c.fecha),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/contacto`, lastModified: ahora, changeFrequency: "yearly", priority: 0.6 },
  ];
}
