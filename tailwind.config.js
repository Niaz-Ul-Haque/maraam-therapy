/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a1b5a1',
          400: '#759075',
          500: '#5a7a5a',
          600: '#466146',
          700: '#394d39',
          800: '#2f3f2f',
          900: '#283528',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        terracotta: {
          50: '#fdf7f0',
          100: '#faecd9',
          200: '#f4d6b3',
          300: '#ecba82',
          400: '#e2944f',
          500: '#d97434',
          600: '#ca5a2a',
          700: '#a84425',
          800: '#863725',
          900: '#6b2e20',
        }
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      }
    },
  },
  plugins: [],
}