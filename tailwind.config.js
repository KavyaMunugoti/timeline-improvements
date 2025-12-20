/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#a1c4fd",
          400: "#8ab8f8",
          500: "#6ea4f7",
        },
      },
      boxShadow: {
        card: "0 4px 30px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
};
