/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "secondary-text-color": "#057A7C",
        "light-text-color": "#74A5A7",
      },
    },
  },
  plugins: [],
};
