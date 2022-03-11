module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseColor: {
          100: '#B0D4D6',
          200: '#E1E1E0',
          300: '#808081',
          400: '#FCFCFC',
          500: '#61656B'

        }
      }
    },
  },
  plugins: [],
}