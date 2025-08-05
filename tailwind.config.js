/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./style.css" // ⬅️ Añade esto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',
        background: '#f5f5f5',
        card: '#1f2937',
        text: '#f3f4f6',
        accent: '#10b981',
      },
    },
  },
  plugins: [],
}
