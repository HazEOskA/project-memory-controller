/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        panel: 'rgba(255,255,255,0.04)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(38, 99, 255, 0.25)'
      }
    }
  },
  plugins: []
};
