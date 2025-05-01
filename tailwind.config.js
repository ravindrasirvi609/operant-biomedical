/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F9',
          100: '#F0A8D0',
          200: '#F7B5CA',
          300: '#FFC6C6',
          400: '#FFEBD4',
          500: '#F0A8D0',
          600: '#E69BC0',
          700: '#D88EB0',
          800: '#CA81A0',
          900: '#BC7490',
        },
        secondary: {
          50: '#FFF5F9',
          100: '#F7B5CA',
          200: '#FFC6C6',
          300: '#FFEBD4',
          400: '#F0A8D0',
          500: '#F7B5CA',
          600: '#E69BC0',
          700: '#D88EB0',
          800: '#CA81A0',
          900: '#BC7490',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
} 