import React from 'react';
import Image from 'next/image';
import Ceo from '@/assets/CeoRaul.png';
import Sandra from '@/assets/Sandra.jpg';
import Eric from '@/assets/Eric.jpg';
import Marc from '@/assets/Marc.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Raúl Bricio',
      role: 'CEO & Founder',
      image: Ceo, // Imagen local
      description: 'Ingeniero Industrial y Master en Digital Business ESADE',
    },
    {
      name: 'Eric Bricio',
      role: 'CMO',
      image: Eric, // Imagen local
      description: 'Master en Marketing Digital y Comunicación',
    },
    {
      name: 'Marc Bricio',
      role: 'Lead Developer',
      image: Marc, // Imagen local reutilizada
      description: 'Graduado en Ingeniería Informática',
    }
  ];

  return (
    <section className="bg-gray-200 text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center w-64 hover:scale-105 transform transition duration-300">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill" // Ajusta la imagen al contenedor
                  objectFit="cover" // Ocupa todo el espacio
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-900 text-bold mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;





