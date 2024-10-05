import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongo'; // Ajusta la ruta si es necesario

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, apellidos, email, mensaje } = body;

    // Conectar a la base de datos
    const client = await connectToDatabase();
    const db = client.db("Dgital_Customer"); // Asegúrate de usar el nombre correcto de tu base de datos

    // Insertar el nuevo contacto en la colección
    const result = await db.collection('contactos').insertOne({
      nombre,
      apellidos,
      email,
      mensaje,
      creadoEn: new Date(),
    });

    // Devolver una respuesta de éxito
    return NextResponse.json({ message: 'Contacto guardado con éxito', result });
  } catch (error) {
    console.error('Error al guardar en MongoDB:', error);
    return NextResponse.json({ error: 'Error al guardar los datos' }, { status: 500 });
  }
}
