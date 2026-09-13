/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', '"Source Serif Pro"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: "#f7f3e8",
        ink: "#2b2a24",
        gold: "#b8863b",
        navy: "#1f2937",
      },
    },
  },
  plugins: [],
}
