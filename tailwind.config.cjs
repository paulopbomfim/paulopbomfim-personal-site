/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        mobile: "url('/src/assets/Mobilebg.png')",
        desktop: "url('/src/assets/Desktopbg.png')"
      }
    },
  },
  plugins: [],
}
