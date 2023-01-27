/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        gray: "#EDEDED",
        // "deep-blue": "#010026",
        // "dark-gray": "#757575",
        "lemon": "#f5cb5c",
        "fire": "#f2b172",
        "aqua": '#42BB8A',
        "steel": "#DEE2E6",
        "charcoal": "#343A40",
        "black": "#212529",
        "carbon": "#495057",
        "dark-gray": "#6C757D",
        "iron": "#ADB5BD",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
    },
    backgroundImage: (theme) => ({
      "gradient-rainbow":
        "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
      "gradient-rainblue":
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 107.73%)",
    }),
    fontFamily: {
      dosis: ['Dosis', 'sans-serif'],
      sofiasans: ['Sofia Sans', 'sans-serif']
    },
    content: {
      brush: "url('./assets/greenbrush.png')",
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};
