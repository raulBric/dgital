/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'safaricom.co.ke',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ], // Dominios permitidos para cargar imágenes externas (patrón moderno)
    formats: ['image/avif', 'image/webp'], // Formatos optimizados para las imágenes
  },
};

export default nextConfig;