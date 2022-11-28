/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ibm': ["IBM Plex Mono", "monospace"],
        'ptsans': ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
