'use client'

import { useState, useEffect } from 'react'
import { Mail } from "lucide-react"

export default function HeroSection() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "dgital = your tech partner();";

  useEffect(() => {
    if (index < fullText.length) {
      const typingEffect = setTimeout(() => {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(typingEffect);
    }
  }, [index, fullText]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="relative container mx-auto px-4 py-10 sm:py-20 lg:py-24 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            We Build the Future of{' '}
            <span className="text-blue-500">Software</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl">
            Empowering businesses with cutting-edge solutions. Our team of expert developers turns your ideas into reality.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:max-w-lg relative">
      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full border border-gray-300 rounded-3xl p-3 sm:p-4 pl-10 sm:pl-12 pr-4 text-gray-700 focus:outline-none focus:border-blue-500"
      />
      <button className="hidden sm:block bg-blue-500 text-white font-semibold py-2 sm:py-4 px-4 sm:px-6 rounded-3xl hover:bg-blue-600">
        ¿Hablamos?
      </button>
    </div>
    <button className="sm:hidden w-full bg-blue-500 text-white font-semibold h-10 px-4 py-3 rounded-3xl hover:bg-blue-600">
      Empieza tu proyecto
    </button>
</div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-0 lg:w-1/2">
          <div className="bg-black bg-opacity-50 rounded-lg p-3 sm:p-4 backdrop-blur-sm h-32 sm:h-72">
            <div className="flex items-center space-x-2 text-xs sm:text-sm mb-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              <span className="text-gray-400">code.js</span>
            </div>
            <pre className="text-blue-400 font-mono text-xs sm:text-sm sm:leading-tight">
              <code>{text}</code>
            </pre>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-4 left-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-xs sm:text-sm">
        <div className="flex items-center">
          <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
          <span>10+ Years Experience</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
          <span>100+ Satisfied Clients</span>
        </div>
      </div> */}
    </section>
  );
}
