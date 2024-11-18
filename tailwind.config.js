/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ffff',
        secondary:'#2f4156',
        lightgreen:'#f5efeb',
        skyblue:'#c8d9e6'
    }
    },
  },
  plugins: [],
}

