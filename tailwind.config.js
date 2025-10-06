/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eaf6ea',     // very light green
          100: '#cceacc',
          200: '#a6dca6',
          300: '#7fcd7f',
          400: '#59bf59',
          500: '#228B22',     // forest green (main)
          600: '#1e7e1e',
          700: '#196f19',
          800: '#145f14',
          900: '#104f10',
          950: '#0b3f0b',     // deepest green
          main: '#228B22',
          contrastText: '#ffffff',
        },
        secondary: {
          50: '#f7f8f8',
          100: '#edeef1',
          200: '#d8dbdf',
          300: '#b6bac3',
          400: '#8e95a2',
          500: '#6b7280',
          600: '#5b616e',
          700: '#4a4e5a',
          800: '#40444c',
          900: '#383a42',
          950: '#25272c',
        },
      },
      animation: {
        fall: 'fall 10s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '25%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
