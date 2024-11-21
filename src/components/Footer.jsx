'use client';
import React, { useState } from "react";
import Blog from "@/assets/blog-solid.svg"
import Image from "next/image"; // Importa el componente Image de Next.js
import Logo from "@/assets/logo-white-svg.svg"; // Importa el logo en formato SVG
import Twitter from "@/assets/x-twitter-brands-solid.svg"; // Importa el icono de Twitter
import Youtube from "@/assets/youtube-brands-solid.svg"; // Importa el icono de Youtube
import Linkedin from "@/assets/linkedin-brands-solid.svg"; // Importa el icono de LinkedIn
import Discord from "@/assets/discord-brands-solid.svg"; // Importa el icono de Discord
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState(''); // Estado para el email

  // Función para manejar la suscripción
  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Envía solo el email a Brevo
      });

      if (res.status === 200) {
        alert('Suscripción exitosa. ¡Gracias por suscribirte!');
        setEmail(''); // Limpia el campo de email tras el éxito
      } else {
        alert('Hubo un error al suscribirse. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error en la suscripción:', error);
      alert('Error interno al suscribirse.');
    }
  };

  return (
    <footer className="footer bg-black text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Sección del Logo y descripción */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <Image 
            src={Logo} 
            alt="Company Logo" 
            width={150} 
            height={150} 
            className="mb-4"
          />
        <p>
          <a href="mailto:hola@dgital.io">hola@dgital.io</a>
          <br />
          Todos los derechos reservados.
        </p>
        </aside>

        {/* Sección de Servicios */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h6 className="footer-title font-semibold">Servicios</h6>
          <Link href="/desarrollo-web" className="link link-hover">Diseño Web</Link>
          <Link href="/marketing-digital" className="link link-hover">Marketing Digital</Link>
          <Link href="/consultoria-digital" className="link link-hover">Consultoria Digital</Link>
          <Link href="soluciones-ia" className="link link-hover">Inteligencia Artificial</Link>
        </nav>

        {/* Sección de la Compañía */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h6 className="footer-title font-semibold">Compañia</h6>
          <Link href="/quienes-somos" className="link link-hover">Sobre nosotros</Link>
          <Link href="/contacto" className="link link-hover">Contacto</Link>
        </nav>

        {/* Sección Legal */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h6 className="footer-title font-semibold">Legal</h6>
          <Link href="/politica-privacidad" className="link link-hover" rel="nofollow">Política de Privacidad</Link>	
          <Link href="/politica-cookies" className="link link-hover" rel="nofollow">Política de Cookies</Link>
        </nav>

        {/* Sección de Redes Sociales */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h6 className="footer-title font-semibold">Follow Us</h6>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.youtube.com/@dgital_io" className="link link-hover">
              <Image 
                src={Youtube} 
                alt="Youtube" 
                width={24} 
                height={24}
              />
            </Link>
            <Link href="https://twitter.com/dgital_io" className="link link-hover">
              <Image 
                src={Twitter} 
                alt="X" 
                width={24} 
                height={24}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/dgital-io" className="link link-hover">
              <Image 
                src={Linkedin} 
                alt="Linkedin" 
                width={24} 
                height={24}
              />
            </Link>
            <Link href="/blog" className="link link-hover">
              <Image 
                src={Blog} 
                alt="blog" 
                width={24} 
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Sección de Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h6 className="footer-title font-semibold">Newsletter</h6>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Ingresa tu correo electrónico</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-black"
                value={email} // Controla el input del email
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el email ingresado
              />
              <button
                className="btn btn-primary absolute top-0 right-0 rounded-l-none"
                onClick={handleSubscribe} // Llama a handleSubscribe al hacer clic
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;




