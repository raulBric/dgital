// app/api/contact/route.js

export async function POST(req) {
  const body = await req.json();

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, // API Key de Brevo desde el .env.local
      },
      body: JSON.stringify({
        email: body.email,
        attributes: {
          NOMBRE: body.nombre || '',
          APELLIDOS: body.apellidos || '',
          MENSAJE: body.mensaje || '',
        },
        listIds: [2], // ID correcto de la lista en Brevo
      }),
    });

    if (response.ok) {
      // Contacto añadido correctamente
      return new Response(JSON.stringify({ message: 'Contacto añadido con éxito.' }), { status: 200 });
    } else {
      // Error específico de Brevo
      const errorData = await response.json();
      console.error('Error específico de Brevo:', errorData);
      return new Response(JSON.stringify({
        message: 'Error al añadir el contacto en Brevo.',
        details: errorData
      }), { status: 500 });
    }
  } catch (error) {
    console.error('Error al realizar la solicitud a Brevo:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor' }), { status: 500 });
  }
}
