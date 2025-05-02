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
          50: '#E1EEBC',
          100: '#67AE6E',
          200: '#90C67C',
          300: '#E1EEBC',
          400: '#90C67C',
          500: '#67AE6E',
          600: '#328E6E',
          700: '#328E6E',
          800: '#328E6E',
          900: '#328E6E',
        },
        secondary: {
          50: '#E1EEBC',
          100: '#67AE6E',
          200: '#90C67C',
          300: '#E1EEBC',
          400: '#90C67C',
          500: '#67AE6E',
          600: '#328E6E',
          700: '#328E6E',
          800: '#328E6E',
          900: '#328E6E',
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