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
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slow-zoom': 'slow-zoom 30s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 1s infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'rotate': 'rotate 15s linear infinite',
        'pop-up': 'pop-up 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both',
        'slide-in-left': 'slide-in-left 0.5s ease-out both',
        'slide-in-right': 'slide-in-right 0.5s ease-out both',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'wave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pop-up': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, rgba(26, 26, 26, 0.9) 50%, rgba(26, 26, 26, 0.8) 100%)',
        'section-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #0f172a 100%)',
      },
      backdropBlur: {
        'lg': '16px',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      scale: {
        '105': '1.05',
        '110': '1.10',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};