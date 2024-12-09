/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: ["media"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {},
  },
  plugins: [require('daisyui'), require("tailwindcss-animate")],
  images: {
    domains: ['dgital.io'], // Configura dominios válidos para imágenes externas
  },
}