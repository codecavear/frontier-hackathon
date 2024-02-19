/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxanium", "sans-serif"],
        serif: ["Merriweather", "serif"],
        oxanium: ["Oxanium"],
      },
      colors: {
        "grey-400": "#B0B0B0",
        customPrimary: {
          50: "#fef4f2",
          100: "#fde6e3",
          200: "#fdd2cb",
          300: "#fab2a7",
          400: "#f58574",
          500: "#eb5d47",
          600: "#d8412a",
          700: "#b53420",
          800: "#962e1e",
          900: "#7d2c1f",
          950: "#44130b",
        },
      },
    },
  },
  darkMode: "class",
};
