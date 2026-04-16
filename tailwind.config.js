/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#111118",
        primary: "#7C7CFF",
        primaryHover: "#6B6BFF",
        textMain: "#FFFFFF",
        textSoft: "#A1A1AA",
        borderSoft: "rgba(255,255,255,0.08)",
      },
    }
  },
  plugins: [],
};