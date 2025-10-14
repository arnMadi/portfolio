/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', // Darkmode setup
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // ta couleur principale
      },
    },
  },
  plugins: [],
}
