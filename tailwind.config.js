/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans'],
      'serif': ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        "primary": "#0066ff"
      }
    }
  },
  plugins: [],
}