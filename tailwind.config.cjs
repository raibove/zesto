/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'landing': "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(/src/assets/landing.jpg)"
      }
    },
  },
  plugins: [],
}