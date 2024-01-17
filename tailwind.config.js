/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Lapices-home': "url('./images/lapices-colores-sobre-fondo-rojo-fondo-lapiz-concepto-educacion-concepto-regreso-escuela-vista-superior_129454-308.jpg')"
      }
    },
  },
  plugins: [],
}

