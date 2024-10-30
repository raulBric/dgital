import React from 'react';

export default function Privacy() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      
      <p className="mb-4">
        En Dgital.io, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad
        describe cómo recopilamos, usamos y protegemos tu información cuando visitas nuestro sitio web y utilizas nuestros servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Información que Recopilamos</h2>
      <p className="mb-4">
        Recopilamos diferentes tipos de información para proporcionarte y mejorar nuestros servicios, que incluye:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Información Personal:</strong> como tu nombre, dirección de correo electrónico y teléfono, que recopilamos cuando completas un formulario de contacto o te comunicas con nosotros.</li>
        <li><strong>Datos de Navegación:</strong> información sobre tu visita al sitio, como la dirección IP, el tipo de navegador, las páginas visitadas y el tiempo de permanencia, a través de cookies y tecnologías similares.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Uso de la Información</h2>
      <p className="mb-4">
        Utilizamos la información recopilada para:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Responder a tus consultas y proporcionarte información sobre nuestros servicios.</li>
        <li>Mejorar y personalizar tu experiencia en nuestro sitio web.</li>
        <li>Realizar análisis y estudios para optimizar nuestras campañas de marketing y mejorar nuestros servicios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Compartir la Información</h2>
      <p className="mb-4">
        No compartimos tu información personal con terceros, excepto en los siguientes casos:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio y prestar nuestros servicios, quienes están sujetos a acuerdos de confidencialidad.</li>
        <li>Cuando es requerido por la ley o en respuesta a una solicitud legal válida.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Seguridad de la Información</h2>
      <p className="mb-4">
        Implementamos medidas de seguridad para proteger tu información y prevenir el acceso no autorizado. Sin embargo, ninguna transmisión de datos por Internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        Utilizamos cookies para mejorar la funcionalidad de nuestro sitio y personalizar la experiencia del usuario. Puedes desactivar las cookies en la configuración de tu navegador, pero algunas funcionalidades del sitio podrían verse afectadas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Tus Derechos</h2>
      <p className="mb-4">
        Tienes derecho a acceder, rectificar o eliminar tu información personal en cualquier momento. Para ejercer estos derechos, puedes ponerte en contacto con nosotros en <a href="mailto:hola@dgital.io" className="text-blue-600 underline">hola@dgital.io</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Cambios a esta Política</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página y te recomendamos revisar la política periódicamente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contacto</h2>
      <p className="mb-4">
        Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, puedes escribirnos a <a href="mailto:hola@dgital.io" className="text-blue-600 underline">hola@dgital.io</a>.
      </p>
    </main>
  );
}

