// app/api/sitemap/route.js
export async function GET(req) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dgital.io';
  
    // Rutas estáticas de la página
    const staticRoutes = ['', 'consultoria-digital', 'contacto', 'iot-desarrollo',
        'marketing-digital', 'mentoria-digital','politica-cookies', 'politica-privacidad', 'quienes-somos',
         'servicios', 'soluciones-ia'
    ]; // Agrega más rutas estáticas si las tienes
  
    // Ejemplo de cómo agregar rutas dinámicas (suponiendo que tengas artículos o contenido dinámico)
    // const response = await fetch(`${baseUrl}/api/articulos`);
    // const articles = await response.json();
    // const dynamicRoutes = articles.map(article => `/articulos/${article.slug}`);
    
    // Combina rutas estáticas y dinámicas (por ahora solo estáticas)
    const routes = staticRoutes.map(route => `${baseUrl}/${route}`);
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
          .map(route => {
            return `
              <url>
                <loc>${route}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.80</priority>
              </url>
            `;
          })
          .join('')}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  