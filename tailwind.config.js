/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Teal color as your accent
        teal: {
          50: '#e6faf5',
          100: '#c0f3e8',
          200: '#99e7db',
          300: '#66dab2',
          400: '#33cd89',
          500: '#00c561',
          600: '#00a24e',
          700: '#007a3a',
          800: '#005228',
          900: '#002a15',
        },
        // Default dark colors
        darkBackground: '#121212', // Dark background
        darkText: '#E0E0E0', // Light text for readability
        darkSecondary: '#B0B0B0', // Secondary text for less important info
      },
    },
    plugins: [],
  }
}
