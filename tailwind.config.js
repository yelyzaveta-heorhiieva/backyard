/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: 'var(--font-family)',
        second: 'var(--second-family)',
        third: 'var(--third-family)',
        font3: 'var(--font3)',
      },
      screens: {
        '3xl': '1920px', 
      },
    },
  },
  plugins: [],
};

