/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f1ff",
          100: "#ece6ff",
          200: "#dccfff",
          300: "#c2a9ff",
          400: "#a679ff",
          500: "#8c43ff",
          600: "#811cff",
          700: "#750bf6",
          800: "#6208cf",
          900: "#5109a9",
          950: "#310274",
        },
        secondary: {
          50: "#eff8ff",
          100: "#daeeff",
          200: "#bde2ff",
          300: "#90d0ff",
          400: "#5cb5fe",
          500: "#3694fb",
          600: "#2076f0",
          700: "#185fdd",
          800: "#1949a9",
          900: "#1b448d",
          950: "#152a56",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
