const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT ({
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
        "parisienne": ['"Parisienne"', "cursive"],
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
      keyframes: {
        slideInNav: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 0.6, transform: "translateX(0)" },
        },
        zoom: {
          "0%": { opacity: 0, transform: "scale(80%)" },
          "100%": { opacity: 1, transform: "scale(100%)" },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slideInNav: "slideInNav .1s ease-in-out forwards var(--delay, 0.5s)",
        zoom: "zoom .25s ease-in-out forwards var(--delay, 0)",
        spin: 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
})