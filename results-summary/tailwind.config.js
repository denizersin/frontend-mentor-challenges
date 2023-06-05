/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "test": "linear-gradient(to top, #4131a9 0%, #4a39bb 40%)",
        primary: "#34249d"
      }
    },
  },

  plugins: [],
}

