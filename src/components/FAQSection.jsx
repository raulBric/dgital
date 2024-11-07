import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      "title": "¿Cómo puede Dgital.io ayudar a que mi negocio crezca ?",
      "content": "En Dgital.io, nos enfocamos en ayudarte a destacar en el entorno digital, atrayendo a tu audiencia ideal y convirtiendo visitas en clientes leales. Desde estrategias de marketing en redes sociales, hasta optimización de tu sitio web y campañas de publicidad digital, personalizamos cada paso para impulsar el crecimiento de tu marca. Nos aseguramos de entender tus objetivos para hacer que cada acción genere resultados tangibles."
  },
  // {
  //     "title": "¿Qué servicios ofrece Dgital.io?",
  //     "content": "Ofrecemos un paquete integral de servicios diseñados para hacer crecer tu presencia en línea. Entre ellos: desarrollo de sitios web, estrategias de SEO para mejorar tu visibilidad en buscadores, campañas de publicidad digital, gestión de redes sociales y consultoría de marca. Nuestro equipo de expertos trabaja para ofrecerte soluciones que encajen con tu negocio y lo lleven al siguiente nivel."
  // },
  {
      "title": "¿Cómo mejorará el SEO mi visibilidad ?",
      "content": "La optimización para motores de búsqueda (SEO) es clave para aumentar la visibilidad de tu marca en buscadores como Google. En DGital.io, empleamos técnicas avanzadas de SEO para que tu sitio aparezca en los primeros resultados de búsqueda, atrayendo tráfico de calidad. Mejoramos la estructura de tu sitio, seleccionamos palabras clave relevantes y generamos contenido que responda a las necesidades de tu audiencia."
  },
  {
      "title": "¿Por qué es importante una estrategia de redes sociales para mi negocio?",
      "content": "Las redes sociales son una herramienta poderosa para conectar directamente con tus clientes potenciales. En DGital.io, diseñamos y gestionamos estrategias de redes sociales que no solo mejoran la visibilidad de tu marca, sino que también crean una comunidad de seguidores comprometidos. Nos encargamos de todo: desde la creación de contenido hasta la interacción con tu audiencia, optimizando cada publicación para generar engagement."
  },
  {
      "title": "¿Cómo puede la publicidad digital aumentar mis ventas?",
      "content": "Las campañas de publicidad digital bien diseñadas pueden hacer una gran diferencia en tus ventas. En DGital.io, creamos anuncios dirigidos que atraen a los clientes adecuados a tu negocio, en el momento preciso. Utilizamos plataformas como Google Ads, Facebook e Instagram Ads para aumentar tu alcance y generar conversiones de forma efectiva, siempre optimizando el presupuesto para obtener el máximo rendimiento."
  },
  {
      "title": "¿Qué diferencia a Dgital.io de otras agencias de marketing digital?",
      "content": "En Dgital.io, creemos en un enfoque personalizado y orientado a resultados. Nos tomamos el tiempo para entender tu negocio y tus metas, creando estrategias únicas adaptadas a tus necesidades. Nuestro equipo está comprometido con la innovación, utilizando las últimas herramientas y tendencias en marketing digital para maximizar tus resultados. No somos una agencia más; somos tu aliado para el crecimiento."
  },
  // {
  //     "title": "¿Qué tipo de resultados puedo esperar al trabajar con DGital.io?",
  //     "content": "Nuestro compromiso es ayudarte a alcanzar tus objetivos de negocio, ya sea aumentar tu visibilidad, mejorar el tráfico de tu web, generar más leads o incrementar tus ventas. Los resultados varían según el tipo de servicio, pero desde el primer momento definimos métricas claras y te mantenemos informado de los avances. Trabajamos enfocados en resultados reales y medibles."
  // },
  // {
  //     "title": "¿Cuánto tiempo tardan en mostrar resultados las estrategias de marketing digital?",
  //     "content": "El tiempo para ver resultados depende de los servicios que elijas. Por ejemplo, las campañas de publicidad digital suelen generar resultados en semanas, mientras que el SEO requiere algunos meses para mostrar su impacto pleno. Nos comprometemos a ofrecerte expectativas realistas y un cronograma claro desde el inicio para que tengas un panorama de los tiempos y resultados esperados."
  // },
  // {
  //     "title": "¿Cómo puedo empezar a trabajar con Dgital.io?",
  //     "content": "Empezar es fácil. Solo tienes que contactarnos y contarnos tus necesidades y objetivos. A partir de ahí, nuestro equipo analizará tu caso y te propondrá un plan de acción adaptado a tus necesidades. Desde el primer contacto, estarás en manos de profesionales dedicados a ayudarte a dar el salto digital que tu negocio merece."
  // },
  // {
  //     "title": "¿Por qué utilizar React para el desarrollo de mi sitio web?",
  //     "content": "React es una de las bibliotecas de JavaScript más populares, ideal para crear interfaces de usuario interactivas y dinámicas. En DGital.io, utilizamos React para desarrollar sitios rápidos, modernos y altamente escalables, brindando una experiencia de usuario intuitiva que se adapta a las necesidades de tu negocio. Además, su modularidad nos permite añadir nuevas funciones de forma sencilla a medida que tu negocio crece."
  // },
  // {
  //     "title": "¿Qué ventajas ofrece Next.js para mi proyecto web?",
  //     "content": "Next.js es un framework de React que permite optimizar el rendimiento y SEO de tu sitio web. En DGital.io, aprovechamos sus capacidades de renderizado en el servidor (SSR) y generación estática para mejorar la velocidad de carga y visibilidad en buscadores. Esto se traduce en una experiencia de usuario más fluida y en mejores posiciones en los resultados de búsqueda, maximizando tu impacto online."
  // },
  {
      "title": "¿Qué beneficios trae el uso de Tailwind CSS en el diseño de mi sitio?",
      "content": "Tailwind CSS nos permite crear diseños web visualmente atractivos y completamente personalizados, con una consistencia visual inigualable. En DGital.io, utilizamos Tailwind para acelerar el proceso de diseño y desarrollo, manteniendo una apariencia profesional y responsiva en todos los dispositivos. Esto significa que cada elemento visual se ajusta perfectamente a la identidad de tu marca."
  },
  // {
  //     "title": "¿Cómo puede MongoDB mejorar el rendimiento de mi aplicación?",
  //     "content": "MongoDB es una base de datos NoSQL perfecta para aplicaciones que necesitan manejar grandes volúmenes de datos de manera flexible y eficiente. En DGital.io, implementamos MongoDB para asegurar que tu aplicación sea escalable y rápida, especialmente en entornos de alto tráfico. Su estructura flexible permite una adaptación rápida a las necesidades cambiantes de tu negocio."
  // },
  // {
  //     "title": "¿Cómo combina DGital.io React, Next.js y Tailwind para desarrollar soluciones modernas?",
  //     "content": "En DGital.io, combinamos la potencia de React para interfaces dinámicas, Next.js para optimización de rendimiento y SEO, y Tailwind CSS para un diseño visualmente impactante. Esta combinación nos permite ofrecerte sitios web modernos, rápidos y completamente personalizados, listos para destacar en el mercado digital. Cada proyecto se construye con la máxima atención al detalle y rendimiento."
  // },
  // {
  //     "title": "¿Por qué elegir una base de datos NoSQL como MongoDB en lugar de una base de datos SQL tradicional?",
  //     "content": "MongoDB es ideal para proyectos que requieren flexibilidad en la gestión de datos, como aplicaciones en crecimiento o proyectos con necesidades variables. A diferencia de las bases de datos SQL tradicionales, MongoDB permite almacenar y organizar datos sin una estructura rígida, lo cual facilita futuras expansiones y adaptaciones. En DGital.io, optamos por MongoDB cuando tu proyecto necesita velocidad y capacidad de adaptación."
  // },
  // {
  //     "title": "¿Cómo mejoran Next.js y Tailwind CSS la experiencia del usuario en mi sitio web?",
  //     "content": "Next.js permite que tu sitio web se cargue rápidamente y optimiza cada página para motores de búsqueda, mientras que Tailwind CSS facilita un diseño responsivo y atractivo. En DGital.io, integramos ambas tecnologías para garantizar que los usuarios tengan una experiencia ágil y visualmente coherente en todos los dispositivos. Esto no solo mejora la interacción, sino que también contribuye a que los visitantes se queden más tiempo en tu sitio."
  // },
  {
      "title": "¿Qué ventajas tiene para mi negocio un sitio desarrollado con React y Next.js?",
      "content": "React y Next.js son una combinación ganadora para crear sitios web rápidos y fáciles de mantener. En DGital.io, utilizamos estas tecnologías para desarrollar sitios modernos que brindan una experiencia de usuario de alta calidad. Además, Next.js ayuda a optimizar tu sitio para SEO y permite que el contenido se cargue casi instantáneamente, ayudando a tu marca a destacar en los resultados de búsqueda y a retener a los usuarios."
  },
  {
      "title": "¿Qué tipo de proyectos son ideales para desarrollarse con React, Next.js y MongoDB?",
      "content": "Estas tecnologías son ideales para proyectos que requieren un rendimiento excepcional y escalabilidad. Aplicaciones de comercio electrónico, plataformas de contenido, sitios web corporativos, y dashboards son algunos ejemplos. En DGital.io, recomendamos esta stack cuando tu proyecto necesita una interfaz dinámica, rapidez en la carga de datos y una base de datos flexible que pueda crecer junto a tu negocio."
  }
  ];

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center m-12">FAQS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200 dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-gray-800 dark:text-gray-100">
              {faq.title}
            </div>
            <div className="collapse-content text-gray-700 dark:text-gray-300">
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;



