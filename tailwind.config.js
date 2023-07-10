/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        loading: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        loading: "loading 3s linear infinite",
      },
    },
  },
  plugins: [],
};
