/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        verifiedBlue: "#1f6feb",
        verifiedGreen: "#68BE60",
        verifiedRed: "#ff2a04"
      },
      fontFamily: {
        Billabong: ['Billabong', 'sans-serif'],
        InstagramSansBold: ['InstagramSansBold', 'sans-serif'],
        InstagramSans: ['InstagramSans', 'sans-serif']
      },
      textColor:{
        "verifiedBlue": "#1f6feb",
        "sidebarText" : "#68BE60"
      }
    },
  },
  plugins: [],
}