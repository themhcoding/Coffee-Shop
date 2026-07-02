/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      fontFamily: {
        shadows: ["'Shadows Into Light'", "cursive"],
      },
    },
  },
  plugins: [],
};