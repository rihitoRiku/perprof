/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 5s linear infinite', // Adjust "5s" to your desired speed
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
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
        'light': {
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#525252',
        },
        'black': {
          100: '#18181b',
          200: '#262626',
          300: '#737373',
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