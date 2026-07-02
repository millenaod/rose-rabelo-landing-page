/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF1A00',
          hover: '#CC1500',
          navy: '#1B3A6B',
        },
        neutral: {
          900: '#0D0D0D',
          800: '#1A1A1A',
          700: '#2C2C2C',
          500: '#555555',
          400: '#999999',
          200: '#D4D4D4',
          100: '#F2F2F2',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(255,26,0,0.25)',
      },
    },
  },
  plugins: [],
}
