import React from 'react';
import Image from 'next/image';
import blogData from '@/database/blog.json'; // Importa el archivo JSON con los datos del blog

const BlogSection = () => {
  // Definición de colores para los tags
  const tagColors = {
    React: 'bg-blue-500 text-white',
    JavaScript: 'bg-yellow-500 text-black',
    Frontend: 'bg-green-500 text-white',
    CSS: 'bg-pink-500 text-white',
    Tailwind: 'bg-blue-400 text-white',
    Design: 'bg-purple-500 text-white',
    Nextjs: 'bg-gray-800 text-white',
    Web: 'bg-indigo-500 text-white'
  };

  return (
    <section className="bg-base-100 p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Últimas noticias</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <div 
              key={post.id} 
              className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:text-white"
            >
              <div className="relative w-full h-48 ">
                <Image 
                  src={post.image} // Imagen del blog
                  alt={post.title}
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 ">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800  p-2 rounded-lg ">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex flex-wrap mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`badge mr-2 mb-2 text-sm ${tagColors[tag] || 'bg-gray-200 text-gray-700'}`} // Asigna colores específicos a los tags
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image
                        src={post.author.image} // URL del avatar del autor
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-semibold">{post.author.name}</p>
                    <p className="text-gray-500 text-sm">{post.author.role}</p> {/* Muestra el rol del autor */}
                    <p className="text-gray-500 text-sm">{new Date(post.date).toDateString()}</p>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end p-4">
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


