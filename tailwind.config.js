/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Merriweather": ["Merriweather", "serif"] ,
        "Montserrat": ["Montserrat Alternates", "sans-serif"], 
        "RobotoMono": ["Roboto Mono", "monospace"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        13: "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        "main-blue": "#272333",
        "main-containers": "#302C40",
        "hover-blue": "#0d86ff",
        "hover-yellow": "#fff350",
      },
    },
  },
  plugins: [],
};
