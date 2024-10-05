import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI; // Debes colocar tu URI aquí desde el archivo .env.local

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  try {
    // Conecta el cliente al servidor
    await client.connect();
    // Envía un ping para confirmar que la conexión fue exitosa
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado exitosamente a MongoDB");
    return client;
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    throw error;
  }
}

