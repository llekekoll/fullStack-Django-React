/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-button": '#FFC000'
      }
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03). 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#FFC000',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
