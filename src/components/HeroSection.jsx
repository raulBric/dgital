'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Users } from 'lucide-react'

export default function HeroSection() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Mantenemos el índice en el estado
  const fullText = "dgital = your tech partner();";

  useEffect(() => {
    if (index < fullText.length) {
      const typingEffect = setTimeout(() => {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1); // Incrementar el índice
      }, 100);
      return () => clearTimeout(typingEffect); // Limpiar timeout para evitar acumulación
    }
  }, [index, fullText]);

  return (
    (<section
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div
        className="relative container mx-auto px-4 py-24 sm:py-32 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            We Build the Future of{' '}
            <span className="text-blue-500">Software</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Empowering businesses with cutting-edge solutions. Our team of expert developers turns your ideas into reality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get Started
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
              Our Services
            </motion.a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-sm mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400">code.js</span>
            </div>
            <pre className="text-blue-400 font-mono text-sm sm:text-base">
              <code>{text}</code>
            </pre>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-4 left-4 flex items-center space-x-4 text-gray-400">
        <div className="flex items-center">
          <Code className="h-5 w-5 mr-2" />
          <span>10+ Years Experience</span>
        </div>
        <div className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          <span>100+ Satisfied Clients</span>
        </div>
      </div>
    </section>)
  );
}