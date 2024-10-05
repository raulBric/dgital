import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET() {
  const uri = process.env.MONGODB_URI; // Asegúrate de que tu URI esté en .env.local

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Conectar a la base de datos
    await client.connect();
    // Hacer un ping para verificar la conexión
    await client.db("admin").command({ ping: 1 });
    console.log("Conexión a MongoDB exitosa");

    return new Response(JSON.stringify({ message: 'Conexión exitosa a MongoDB' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error); // Mostramos el error exacto
    return new Response(JSON.stringify({ error: `Error al conectar con MongoDB: ${error.message}` }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close();
  }
}
