/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cherry-red': '#D2042D',
        'light-pink': '#FFB6C1',
        'cherry-blossom': '#FFD1DC',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fall': 'fall 5s linear forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #FFB6C1' },
          '50%': { boxShadow: '0 0 20px #D2042D' },
        }
      }
    },
  },
  plugins: [],
}