/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Busca en el archivo index.html en la raíz
    "./js/**/*.js", // Busca en todos los archivos .js dentro de la carpeta js/ y subcarpetas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}