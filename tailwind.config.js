/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': {transform: 'translateX(-250px)'},
          '100%': {transform:'translate(0)'}
        }
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
