import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-gray-200 text-gray-900 p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        
        {/* Introducción */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl mb-6">
            We are a team of passionate professionals dedicated to delivering innovative digital solutions that drive business growth.
          </p>
          <p className="text-lg md:text-xl">
            Our mission is to empower your business with cutting-edge technology and unparalleled expertise, ensuring you stay ahead in a rapidly changing digital landscape.
          </p>
        </div>
        
        {/* Valores y Beneficios */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Imagen de ejemplo
              alt="Innovation"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p>
              We use the latest technologies and innovative methodologies to deliver unique and effective digital solutions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1505740420928-5e560c06d30e.jpg" // Imagen de ejemplo
              alt="Teamwork"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">Teamwork</h3>
            <p>
              Our team collaborates closely with clients to understand their needs and deliver tailored solutions that exceed expectations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Imagen de ejemplo
              alt="Support"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p>
              We provide round-the-clock support to ensure your business operations run smoothly without any interruptions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1519999482648-25049ddd37b1.jpg" // Imagen de ejemplo
              alt="Growth"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">Business Growth</h3>
            <p>
              Our solutions are designed to drive business growth and maximize your return on investment.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Imagen de ejemplo
              alt="Trust"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">Trust & Reliability</h3>
            <p>
              We are a trusted partner for businesses worldwide, delivering reliable solutions that build long-lasting relationships.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Imagen de ejemplo
              alt="Quality"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
            <p>
              We follow strict quality standards and best practices to ensure the highest level of service delivery.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Meet Our Team</h3>
          <p className="text-lg md:text-xl mb-12">
            Our diverse team of experts is committed to driving success for your business through collaboration, creativity, and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Aquí puedes añadir tarjetas del equipo */}
            <div className="w-60 p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1603415526960-f9f3f5036b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hbmFnZXJ8ZW58MHx8fHwxNjYwOTAxNzI3&ixlib=rb-1.2.1&q=80&w=1080" // Imagen de ejemplo
                alt="Team Member"
                width={120}
                height={120}
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
            <div className="w-60 p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY2MDkwMTczNw&ixlib=rb-1.2.1&q=80&w=1080" // Imagen de ejemplo
                alt="Team Member"
                width={120}
                height={120}
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
            <div className="w-60 p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1603415526960-f9f3f5036b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY2MDkwMTczNw&ixlib=rb-1.2.1&q=80&w=1080" // Imagen de ejemplo
                alt="Team Member"
                width={120}
                height={120}
                className="mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Carlos Ruiz</h4>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
            {/* Añade más miembros del equipo si es necesario */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to take your business to the next level?</h3>
          <p className="text-lg md:text-xl mb-6">Contact us today and let's build something amazing together.</p>
          <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transform transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;


