/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'NeutralSilver': "#F5F7FA",
        'NeutralDGrey': "#4D4D4D",
        'BrandPrimary': "#47E29B",
        'NeutralGrey': "#717171"
      },
    },
    screens: {
      xs: "400px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    },
  },
  plugins: [],
}

