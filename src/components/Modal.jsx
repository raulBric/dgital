'use client';

import React, { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad

  const openModal = () => setIsOpen(true); // Función para abrir el modal
  const closeModal = () => setIsOpen(false); // Función para cerrar el modal

  return (
    <>
      {/* Botón para abrir el modal */}
      <button className="btn btn-primary" onClick={openModal}>
        Contacta con nosotros
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open flex justify-center items-center">
          <div className="modal-box relative max-w-lg w-full">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl text-center text-gray-900">Formulario de contacto</h3>
            <p className="py-4 text-center text-gray-600">Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.</p>

            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input type="text" placeholder="Tu nombre" className="input input-bordered w-full" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Apellidos</span>
                </label>
                <input type="text" placeholder="Tus apellidos" className="input input-bordered w-full" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Correo electrónico</span>
                </label>
                <input type="email" placeholder="ejemplo@correo.com" className="input input-bordered w-full" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  placeholder="Escribe tu mensaje"
                  className="textarea textarea-bordered w-full text-gray-700"
                  rows="4"
                  required
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


