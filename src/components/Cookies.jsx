import React from 'react';

export default function Cookies() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
      
      <p className="mb-4">
        En Dgital.io utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el tráfico
        y personalizar el contenido. Al continuar navegando por nuestro sitio, aceptas el uso de cookies de acuerdo con esta política.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Qué Son las Cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten reconocer tu navegador y recordar ciertas
        preferencias para mejorar tu experiencia en futuras visitas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tipos de Cookies Que Utilizamos</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Cookies Esenciales:</strong> Son necesarias para el funcionamiento básico del sitio web, permitiéndote navegar y utilizar sus funcionalidades.</li>
        <li><strong>Cookies de Rendimiento:</strong> Nos ayudan a comprender cómo los usuarios interactúan con el sitio, permitiéndonos mejorar la funcionalidad y la experiencia del usuario.</li>
        <li><strong>Cookies de Funcionalidad:</strong> Permiten recordar tus preferencias (como el idioma) para ofrecerte una experiencia personalizada.</li>
        <li><strong>Cookies de Publicidad:</strong> Utilizamos estas cookies para mostrar anuncios relevantes basados en tus intereses y medir la efectividad de nuestras campañas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Gestión de Cookies</h2>
      <p className="mb-4">
        Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que, al deshabilitar ciertas cookies, 
        es posible que algunas partes de nuestro sitio web no funcionen correctamente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies de Terceros</h2>
      <p className="mb-4">
        Podemos permitir a terceros, como proveedores de análisis o anunciantes, que configuren cookies en tu dispositivo. Estas cookies
        se utilizan para mejorar el rendimiento y personalizar el contenido publicitario que ves. No tenemos control directo sobre estas cookies y te recomendamos revisar
        las políticas de privacidad de estos terceros.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Actualización de la Política de Cookies</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento. Cualquier cambio será publicado en esta página y te recomendamos revisarla
        periódicamente para mantenerte informado sobre el uso de cookies en nuestro sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en <a href="mailto:hola@dgital.io" className="text-blue-600 underline">hola@dgital.io</a>.
      </p>
    </main>
  );
}

