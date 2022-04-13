module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logo1: '#212121',
        logo2: "#d1c8ba",
        logo3: "#edd7c7",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
