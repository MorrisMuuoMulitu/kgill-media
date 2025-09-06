/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        marigold: '#FFC72C',
        terracotta: '#E2725B',
        'slate-blue': '#4A5568',
        cyan: '#00FFFF',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 8rem)',
        'display': 'clamp(2rem, 5vw, 5rem)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide': 'slide 3s linear infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(255, 199, 44, 0.4)',
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(255, 199, 44, 0.6)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, rgba(26, 26, 26, 0.9) 50%, rgba(26, 26, 26, 0.8) 100%)',
        'section-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #0f172a 100%)',
      },
      backdropBlur: {
        'lg': '16px',
      },
    },
  },
  plugins: [],
};