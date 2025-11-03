/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include your HTML file (for Vite)
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS files in the src folder (for React components)
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
