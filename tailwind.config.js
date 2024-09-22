/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0a66c2",
        primaryHover: "#004182",
        blueGray: "#526a6e",
        searchBG: "#edf3f7",
      },
    },
  },
  plugins: [],
};
