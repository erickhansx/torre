/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color-d2': '#d2e139',
        primary: '#27292d',
        tertiary: '#373b41',
      },
    },
  },
  plugins: [],
};
