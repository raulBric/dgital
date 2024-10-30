/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.daisyui.com', 'images.unsplash.com'], // Agrega aquí todos los dominios desde los que cargarás imágenes externas
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              img-src 'self' https://dgital.io;
              script-src 'self' 'unsafe-inline' 'nonce-<your-nonce>';
              style-src 'self' 'unsafe-inline';
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade"
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self)"
          },
          {
            key: "Expect-CT",
            value: "max-age=86400, enforce, report-uri='https://dgital.io/report'"
          }
        ]
      }
    ];
  }
};

export default nextConfig;

