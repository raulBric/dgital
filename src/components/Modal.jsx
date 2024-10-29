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

      alert('Mensaje enviado con éxito');
      setIsOpen(false);
      setFormData({ nombre: '', apellidos: '', email: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Revisa la consola para más detalles.');
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={openModal}
      >
        Contacto
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="rounded-lg p-4 w-full max-w-md mx-auto overflow-auto max-h-[90vh] relative bg-white text-black">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg sm:text-xl text-center">
              Formulario de contacto
            </h3>
            <p className="py-2 text-center text-sm sm:text-base">
              Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="form-control">
                <label className="label" htmlFor="nombre">
                  <span className="label-text text-sm">Nombre</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="input input-bordered w-full text-sm text-black bg-white border-gray-300"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="apellidos">
                  <span className="label-text text-sm">Apellidos</span>
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Tus apellidos"
                  className="input input-bordered w-full text-sm text-black bg-white border-gray-300"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-sm">Correo electrónico</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  className="input input-bordered w-full text-sm text-black bg-white border-gray-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="mensaje">
                  <span className="label-text text-sm">Mensaje</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe tu mensaje"
                  className="textarea textarea-bordered w-full text-sm text-gray-700 bg-white border-gray-300"
                  rows="3"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                ></textarea>
              </div>

              <button className="btn btn-block btn-primary text-sm py-2" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
