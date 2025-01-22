/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        PaletteBlack: "#222831",
        SlightlyBlack: "#393E46",
        PaletteTeal: "#00ADB5",
        PaletteGray: "#778DA9",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        lgDesktop: "1530px",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};
