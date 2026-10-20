import { ImageResponse } from "next/og";
import { hero } from "@/content/site";

// Edge: se genera bajo demanda (y evita un fallo de @vercel/og al prerenderizar en Windows).
export const runtime = "edge";
export const alt = "Dgital · Automatización con IA para pymes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen Open Graph por defecto: el logo original sobre fondo blanco + el titular.
export default async function OpengraphImage() {
  const svg = await fetch(new URL("../../public/logo.svg", import.meta.url)).then((r) => r.arrayBuffer());
  const logo = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          borderBottom: "16px solid #1F4FE0",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={382} height={120} alt="" />
        <div style={{ fontSize: 60, fontWeight: 700, color: "#0A0A0A", lineHeight: 1.15, maxWidth: 1000 }}>
          {hero.titular}
        </div>
      </div>
    ),
    size,
  );
}
