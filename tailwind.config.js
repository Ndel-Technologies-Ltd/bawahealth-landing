
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f2d34",
          teal: "#127c93",
          light: "#cbf3f9",
        }
      },
    },
  },
  plugins: [],
}
