import mongoose from 'mongoose';

const ContactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  apellidos: {
    type: String,
    required: [true, 'Los apellidos son obligatorios'],
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor, introduce un correo electrónico válido',
    ],
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje es obligatorio'],
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contacto || mongoose.model('Contacto', ContactoSchema);


