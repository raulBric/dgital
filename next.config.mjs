import createMDX from "@next/mdx";

const withMDX = createMDX({});

// Páginas de la web anterior: redirigidas para conservar el posicionamiento.
const paginasAntiguas = [
  "/consultoria-digital",
  "/desarrollo-web",
  "/iot-desarrollo",
  "/marketing-digital",
  "/mentoria-digital",
  "/soluciones-ia",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  async redirects() {
    return [
      ...paginasAntiguas.map((source) => ({ source, destination: "/", permanent: true })),
      { source: "/quienes-somos", destination: "/#sobre-mi", permanent: true },
      { source: "/blog", destination: "/casos", permanent: true },
      { source: "/blog/:slug*", destination: "/casos", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
