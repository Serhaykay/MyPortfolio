/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",  // <-- add this line to enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#5B3CC4", // CloudHouse violet
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
