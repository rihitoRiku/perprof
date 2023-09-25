/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "pt-serif": ['"PT Serif"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#e5e5e5",
        'black': {
          100: '#18181b',
          DEFAULT: '#171717'
        },
        secondary: "#",
        ternary: "#",
        ternary2: "#",
      },
    },
  },
  plugins: [],
}