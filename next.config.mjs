/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.daisyui.com', 
      'images.unsplash.com', 
      'tse1.mm.bing.net', 
      'safaricom.co.ke',
      'upload.wikimedia.org',
    ], // Dominios permitidos para cargar imágenes externas
    formats: ['image/avif', 'image/webp'], // Formatos optimizados para las imágenes
  },
};

export default nextConfig;

 