/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your new color scheme
        'light-pink': '#fdc2da',      // Your light pink
        'light-crimson': '#fffcfd',   // Your light crimson (almost white)
        'vivid-pink': '#f82474',      // Your vivid pink
        
        // Keep cherry colors for consistency (optional - you can remove if not needed)
        'cherry-red': '#D2042D',
        'cherry-blossom': '#FFD1DC',
        'sakura-pink': '#FFB7C5',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fall': 'fall 5s linear forwards',
        'fall-slow': 'fall-slow 15s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'wind-sway': 'wind-sway 8s ease-in-out infinite',
        'petal-fall': 'petal-fall 20s linear infinite',
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
        'fall-slow': {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0.6' },
          '100%': { transform: 'translateY(100vh) rotate(180deg)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #fdc2da' }, // Updated to light-pink
          '50%': { boxShadow: '0 0 20px #f82474' },     // Updated to vivid-pink
        },
        'wind-sway': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        'petal-fall': {
          '0%': { transform: 'translateY(-100px) translateX(0px) rotate(0deg)', opacity: '0.8' },
          '25%': { transform: 'translateY(25vh) translateX(50px) rotate(90deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(50vh) translateX(-30px) rotate(180deg)', opacity: '0.4' },
          '75%': { transform: 'translateY(75vh) translateX(40px) rotate(270deg)', opacity: '0.2' },
          '100%': { transform: 'translateY(100vh) translateX(0px) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}