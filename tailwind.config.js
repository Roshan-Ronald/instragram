/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        instaRed: '#d81b60', 
      },
      animation: {
        heartPulse: 'pulse 0.6s ease-out',
      },
      borderRadius: {
        'xl-top': '20px 20px 0 0', 
      },
    },
  },
  plugins: [],
}
