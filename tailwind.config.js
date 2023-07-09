/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
    },
    extend: {
      colors: {
        Black: "#0f0f0f",
        White: "#f1f1f1",
        Glass1: "rgba(255,255,255,0.1)",
        SkyBlue: "#1c62b9",
      },
    },
  },
  plugins: [],
};
