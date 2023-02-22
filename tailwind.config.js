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
        "light-text-green":"#acfcac",
        'blue': "#34B7F1",
        "lightest-green": "#dcf8c6",
        "light-bg-green":"#00a884",
        "light-bg": "#ece5dd",
        "light-mode-bg": "#eae6d",
        "light-colour":"#3b4a54",
        "light-header-bg" : "#f0f2f5",
        "darker-bg": "#273443",
        'modal-bg':'#2a3942',
        "dark-bg": "#202c33",
        "darkest-bg": "#111b21",
        "black": "#0b141a",
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
        390:'412px',
        600: "600px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        '9/10' :'90%',
        '4/5':'80%'
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/image-bg.png')",
        'hero-light':"url('./assets/light-bg.jpg')",
        "whatsapp-log":"url(./assets/whatsapp-logo.png"
      },
    },
  },
  plugins: [],
};
