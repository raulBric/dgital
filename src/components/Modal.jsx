'use client';

import React, { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: '',
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error en el servidor:', errorText);
        throw new Error(`Error en el servidor: ${errorText}`);
      }

      const data = await res.json();
      console.log('Respuesta del servidor:', data);

      alert('Mensaje enviado con éxito');
      setIsOpen(false); // Cierra el modal después de enviar
      setFormData({ nombre: '', apellidos: '', email: '', mensaje: '' }); // Limpiar el formulario
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Revisa la consola para más detalles.');
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Contacta con nosotros
      </button>

      {isOpen && (
        <div className="modal modal-open flex justify-center items-center">
          <div className="modal-box relative max-w-lg w-full">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl text-center text-gray-900">
              Formulario de contacto
            </h3>
            <p className="py-4 text-center text-gray-600">
              Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="nombre">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="input input-bordered w-full"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="apellidos">
                  <span className="label-text">Apellidos</span>
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Tus apellidos"
                  className="input input-bordered w-full"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Correo electrónico</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="mensaje">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe tu mensaje"
                  className="textarea textarea-bordered w-full text-gray-700"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                ></textarea>
              </div>

              <button className="btn btn-block btn-primary" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

