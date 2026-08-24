/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#17251D', // Primary Dark
          800: '#23372B',
          700: '#304C3B', // Secondary Green
          600: '#3F614C',
          500: '#4F775E',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F3E8', // Warm Cream
          200: '#F1E9D7',
          300: '#E9DFC6',
        },
        beige: {
          100: '#F3EDE1',
          200: '#E9DFCC', // Soft Beige
          300: '#D8CBB2',
          400: '#C5B595',
        },
        gold: {
          300: '#E6C47A',
          400: '#D7AE54',
          500: '#C89B3C', // Gold Accent
          600: '#B0832B',
          700: '#8E671D',
        },
        dark: {
          900: '#111613',
          800: '#1C211D', // Dark Text
          700: '#2D342E',
        },
        muted: '#6D716B', // Muted Text
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(23, 37, 29, 0.08)',
        'card': '0 15px 35px -12px rgba(23, 37, 29, 0.12)',
        'card-hover': '0 25px 45px -15px rgba(23, 37, 29, 0.2)',
        'gold-glow': '0 0 25px rgba(200, 155, 60, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
      }
    },
  },
  plugins: [],
}
