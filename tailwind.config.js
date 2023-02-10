/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "teal-green": "#128C7E",
        "teal-green-dark": "#075E54",
        "light-green": "#25D366",
        blue: "#34B7F1",
        "lightest-green": "#dcf8c6",
        "light-bg": "#ece5dd",
        "lighter-bg": "#fffff",
        "darker-bg": "#273443",
        "dark-bg": "#202c33",
        "darkest-bg": "#111b21",
        black: "#0b141a",
        "lighter-black": "#54656f",
        "light-black": "#3b4a54",
      },
      zIndex: {
        1000: "1000",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      margin: {
        400: "415px",
      },
      left: {
        400: "415px",
      },
      width: {
        400: "415px",
        600: "600px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('')",
      },
    },
  },
  plugins: [],
};
