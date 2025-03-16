/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '767.97px' },
        tablet: { max: '1023.97px' },
        laptop: { max: '1439.97px' },
      },
    },
  },
  plugins: [],
};
