/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/public/images/bg1.jpg')",
        'bg2': "url('/public/images/bg2.jpg')",
        'bg3': "url('/public/images/bg3.png')",
        'bg4': "url('/public/images/bg4.jpg')",
        'bg5': "url('/public/images/bg5.jpg')",
        'bg6': "url('/public/images/bg6.jpg')"


      },
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
