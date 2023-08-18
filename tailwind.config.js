/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./images/notifiedLogo.png')"
      }
    },
    fontSize:{
      title: '10rem'
    }

  },
  plugins: [],
}

