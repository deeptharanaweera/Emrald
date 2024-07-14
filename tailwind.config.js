/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'black':'#232226',
      'light_black': '#475569',
      'gray':'#EFEFEF',
      'dark_gray': '#cbd5e1',
      'white':'#FFFFFF',
      'red': '#dc2626',
      'gold': '#F05A00',
      'blue': '#1d4ed8',
      'dark_blue': '#1e40af',
      'green': '#10B981',
    },
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 5s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}

