/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#443B7A",
        secondary:"#ff4955",
        tertiary:"#39d700",
        danger:"#dc3545",
        warning:"#ffc107",
        success:"#28a745"
      }
    },
  },
  plugins: [],
}
