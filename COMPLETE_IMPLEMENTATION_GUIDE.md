# KGILL+ Media Website Enhancement Implementation Guide

## Introduction

This guide provides clear, step-by-step instructions for implementing all the "dope" enhancements we've designed for the KGILL+ Media website. These improvements will transform the site into a cutting-edge digital experience that reflects the brand's commitment to innovative storytelling and community empowerment.

## Prerequisites

Before starting the implementation, ensure you have:
1. Node.js version 16 or higher
2. npm or yarn package manager
3. A code editor (VS Code recommended)
4. Git for version control
5. Basic knowledge of React, TypeScript, and Tailwind CSS

## Step-by-Step Implementation

### Step 1: Setting Up the Development Environment

1. **Clone the repository** (if not already done):
   ```bash
   git clone [repository-url]
   cd kgill-media
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install additional packages**:
   ```bash
   npm install lucide-react framer-motion react-intersection-observer
   npm install -D @types/node
   ```

### Step 2: Implementing Theme Management System

1. **Create Theme Context**:
   Create `src/context/ThemeContext.tsx` with the theme provider implementation.

2. **Update Main App Component**:
   Wrap your main App component with the ThemeProvider.

3. **Add Theme Toggle to Navigation**:
   Modify `src/components/Navigation.tsx` to include the dark mode toggle button.

### Step 3: Adding User Intent Personalization

1. **Create User Intent Hook**:
   Create `src/hooks/useUserIntent.ts` to manage user preferences.

2. **Update Navigation Component**:
   Add user intent detection modal to the Navigation component.

3. **Implement Personalized Content**:
   Modify key components to display content based on user intent.

### Step 4: Enhancing Visual Design

1. **Update Tailwind Configuration**:
   Modify `tailwind.config.js` to include new animations and utilities.

2. **Enhance Global Styles**:
   Update `src/index.css` with new styles and custom utilities.

3. **Add 3D Effects**:
   - Create `src/hooks/useTiltEffect.ts`
   - Update components to use tilt effects

4. **Implement Glass Morphism**:
   - Add glass-effect utility classes
   - Apply to cards and UI elements

5. **Create Particle Background**:
   - Create `src/hooks/useParticles.ts`
   - Implement in hero section

6. **Add Gradient Text Effects**:
   - Add gradient-text utility classes
   - Apply to headings and key text elements

### Step 5: Implementing Micro-interactions

1. **Add Custom Cursor**:
   - Create `src/components/CustomCursor.tsx`
   - Create `src/hooks/useCustomCursor.ts`
   - Add to main App component

2. **Implement Scroll Animations**:
   - Create `src/hooks/useScrollAnimation.ts`
   - Add to content sections

3. **Add Button Effects**:
   - Update button styles with pulse-glow effects
   - Add scale transformations on hover

4. **Create Loading Skeletons**:
   - Create `src/components/LoadingSkeleton.tsx`
   - Implement in data-fetching components

### Step 6: Enhancing Accessibility

1. **Improve Color Contrast**:
   - Review and adjust color combinations
   - Ensure WCAG 2.1 AA compliance

2. **Add ARIA Attributes**:
   - Add proper labels to interactive elements
   - Implement landmark roles

3. **Implement Keyboard Navigation**:
   - Add focus states to all interactive elements
   - Ensure logical tab order

4. **Add Reduced Motion Support**:
   - Implement prefers-reduced-motion media query
   - Disable animations for sensitive users

### Step 7: Performance Optimization

1. **Implement Lazy Loading**:
   - Add loading="lazy" to all images
   - Implement dynamic imports for components

2. **Add Code Splitting**:
   - Use React.lazy for route-based splitting
   - Implement Suspense boundaries

3. **Optimize Bundle Size**:
   - Remove unused dependencies
   - Implement tree shaking

### Step 8: Component Enhancements

1. **Enhance ServiceCard**:
   - Add 3D flip animations
   - Implement glass morphism effects
   - Add micro-interactions

2. **Enhance FeaturedStory**:
   - Add play button overlay
   - Implement line clamping
   - Add bookmark functionality

3. **Enhance Navigation**:
   - Add sticky header behavior
   - Improve mobile menu
   - Add theme toggle

4. **Create New Components**:
   - CustomCursor
   - LoadingSkeleton
   - ParticleBackground
   - SocialProofTicker

### Step 9: Testing and Quality Assurance

1. **Cross-Browser Testing**:
   - Test in Chrome, Firefox, Safari, Edge
   - Verify mobile browser compatibility

2. **Accessibility Testing**:
   - Use screen readers for testing
   - Verify keyboard navigation
   - Check color contrast ratios

3. **Performance Testing**:
   - Run Lighthouse audits
   - Check Core Web Vitals
   - Verify loading times

### Step 10: Deployment Preparation

1. **Final Build Test**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Check for Errors**:
   - Review console for warnings/errors
   - Verify all assets load correctly
   - Test all interactive elements

3. **Prepare for Deployment**:
   - Update metadata in index.html
   - Verify robots.txt
   - Check sitemap.xml (if applicable)

## Detailed Implementation Instructions

### Creating the Theme Context

Create `src/context/ThemeContext.tsx`:

```tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### Updating Main App Component

Modify `src/App.tsx`:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
// ... other imports

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-charcoal text-white">
          <Navigation />
          <Routes>
            {/* ... routes */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### Creating the Particle Background Hook

Create `src/hooks/useParticles.ts`:

```tsx
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const useParticles = (count: number = 50) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create particles
    const particles: Particle[] = [];
    const colors = ['#FFC72C', '#E2725B', '#00FFFF'];
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with a semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(26, 26, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check - wrap around
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return canvasRef;
};
```

### Enhancing Tailwind Configuration

Update `tailwind.config.js`:

```js
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
```

### Enhancing Global Styles

Update `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom color variables based on Digital Griot palette */
:root {
  --charcoal: #1A1A1A;
  --marigold: #FFC72C;
  --terracotta: #E2725B;
  --slate-blue: #4A5568;
  --cyan: #00FFFF;
  --slate-900: #0f172a;
  --slate-800: #1e293b;
  --slate-700: #334155;
  --slate-600: #475569;
  --slate-500: #64748b;
  --slate-400: #94a3b8;
  --slate-300: #cbd5e1;
  --slate-200: #e2e8f0;
  --slate-100: #f1f5f9;
  --slate-50: #f8fafc;
}

/* Base styles */
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: white;
  background-color: var(--charcoal);
  scroll-behavior: smooth;
}

/* Typography hierarchy */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-roboto {
  font-family: 'Roboto', sans-serif;
}

/* Custom color classes */
.bg-charcoal { background-color: var(--charcoal); }
.bg-marigold { background-color: var(--marigold); }
.bg-terracotta { background-color: var(--terracotta); }
.bg-slate-blue { background-color: var(--slate-blue); }
.bg-cyan { background-color: var(--cyan); }

.text-charcoal { color: var(--charcoal); }
.text-marigold { color: var(--marigold); }
.text-terracotta { color: var(--terracotta); }
.text-slate-blue { color: var(--slate-blue); }
.text-cyan { color: var(--cyan); }

.border-charcoal { border-color: var(--charcoal); }
.border-marigold { border-color: var(--marigold); }
.border-terracotta { border-color: var(--terracotta); }
.border-slate-blue { border-color: var(--slate-blue); }
.border-cyan { border-color: var(--cyan); }

/* African textile-inspired textures and patterns */
.texture-subtle {
  position: relative;
}

.texture-subtle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 199, 44, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 75% 75%, rgba(226, 114, 91, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.03) 0%, transparent 25%);
  pointer-events: none;
  z-index: 1;
}

/* Geometric patterns for section dividers */
.pattern-divider {
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--marigold) 0%,
    var(--terracotta) 25%,
    var(--cyan) 50%,
    var(--terracotta) 75%,
    var(--marigold) 100%
  );
  background-size: 200px 2px;
  animation: slide 3s linear infinite;
}

@keyframes slide {
  0% { background-position: 0 0; }
  100% { background-position: 200px 0; }
}

/* Enhanced button styles */
.btn-primary {
  @apply bg-gradient-to-r from-marigold to-terracotta text-charcoal px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300;
  box-shadow: 0 0 30px rgba(255, 199, 44, 0.3);
}

.btn-secondary {
  @apply border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300;
}

.btn-accent {
  @apply bg-gradient-to-r from-cyan to-slate-blue text-white px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300;
}

/* Card flip animation */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* African-inspired animations */
@keyframes pulse-glow {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 199, 44, 0.4);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255, 199, 44, 0.6);
  }
}

.pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.float-animation {
  animation: float 4s ease-in-out infinite;
}

/* Storytelling scroll effects */
.parallax-slow {
  transform: translateZ(0);
  transition: transform 0.1s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--charcoal);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--marigold), var(--terracotta));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--terracotta), var(--marigold));
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced gradient backgrounds */
.bg-hero-gradient {
  background: linear-gradient(
    135deg,
    var(--charcoal) 0%,
    rgba(26, 26, 26, 0.9) 50%,
    rgba(26, 26, 26, 0.8) 100%
  );
}

.bg-section-gradient {
  background: linear-gradient(
    180deg,
    var(--charcoal) 0%,
    #0f172a 100%
  );
}

/* Interactive hover states */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Typography enhancements */
.text-hero {
  font-size: clamp(3rem, 8vw, 8rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
}

.text-display {
  font-size: clamp(2rem, 5vw, 5rem);
  line-height: 1;
  letter-spacing: -0.01em;
}

/* Custom utilities for Digital Griot aesthetic */
.glass-effect {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gradient-text {
  background: linear-gradient(135deg, var(--marigold), var(--terracotta), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive video container */
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Enhanced social proof styling */
.social-ticker {
  animation: scroll-left 30s linear infinite;
}

@keyframes scroll-left {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Loading states */
.skeleton {
  background: linear-gradient(90deg, var(--slate-700) 25%, var(--slate-600) 50%, var(--slate-700) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Fade in up animation */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* 3D tilt effect */
.tilt-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease;
}

.tilt-3d:hover {
  transform: rotateX(5deg) rotateY(5deg) scale(1.02);
}

/* Glass morphism effect */
.glass-morphism {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Fade in animation */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

/* Slow zoom animation for background images */
@keyframes slow-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.animate-slow-zoom {
  animation: slow-zoom 30s ease-in-out infinite alternate;
}
```

### Creating Custom Hooks

1. **Scroll Animation Hook** (`src/hooks/useScrollAnimation.ts`):
```tsx
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return elementRef;
};
```

2. **Tilt Effect Hook** (`src/hooks/useTiltEffect.ts`):
```tsx
import { useEffect, useRef } from 'react';

export const useTiltEffect = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleY = (x - centerX) / 25;
      const angleX = (centerY - y) / 25;
      
      element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      if (element) {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
};
```

3. **Custom Cursor Hook** (`src/hooks/useCustomCursor.ts`):
```tsx
import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const useCustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { position, isVisible };
};
```

### Creating New Components

1. **Custom Cursor Component** (`src/components/CustomCursor.tsx`):
```tsx
import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

const CustomCursor: React.FC = () => {
  const { position, isVisible } = useCustomCursor();

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-marigold/30 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-marigold/50 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
```

2. **Loading Skeleton Component** (`src/components/LoadingSkeleton.tsx`):
```tsx
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
```

### Enhancing Existing Components

1. **Enhanced ServiceCard** (`src/components/ServiceCard.tsx`):
```tsx
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  projects?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  gradient, 
  projects = "View Projects" 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-96 cursor-pointer group tilt-3d"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      <div className={`flip-card-inner h-full transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''} ${isHovered ? 'scale-105' : ''}`}>
        {/* Front of card */}
        <div className={`flip-card-front bg-gradient-to-br ${gradient} p-8 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
          {/* African-inspired pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-repeat-round" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 20c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20S0 8.954 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="text-charcoal mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
            {icon}
          </div>
          <h3 className="text-2xl font-bold font-montserrat text-charcoal mb-4 relative z-10">{title}</h3>
          <div className="w-16 h-1 bg-charcoal rounded-full relative z-10"></div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-4 right-4 w-6 h-6 border-2 border-charcoal/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-charcoal/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back bg-slate-800 p-8 flex flex-col justify-between border border-slate-700 relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Subtle gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold font-montserrat text-white mb-4">{title}</h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">{description}</p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-terracotta font-inter font-semibold">{projects}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 text-marigold font-inter font-semibold hover:text-terracotta transition-colors group border border-marigold/30 rounded-lg py-3 hover:border-terracotta/30">
              View Portfolio 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
```

2. **Enhanced Navigation** (`src/components/Navigation.tsx`):
```tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Heart, Camera, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userIntent, setUserIntent] = useState<string | null>(null);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for saved user intent
    const savedIntent = localStorage.getItem('user_intent');
    if (savedIntent) {
      setUserIntent(savedIntent);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/our-story', label: 'Our Story' },
    { path: '/our-leaders', label: 'Our Leaders' },
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/the-movement', label: 'The Movement' },
    { path: '/the-feed', label: 'The Feed' },
    { path: '/get-involved', label: 'Get Involved' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-marigold to-terracotta rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Camera className="w-6 h-6 text-charcoal" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-montserrat text-white group-hover:text-marigold transition-colors">
                KGILL+ MEDIA
              </h1>
              <p className="text-xs text-slate-blue font-inter">Creative & Innovation Hub</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium transition-all duration-300 hover:text-marigold relative group ${
                  location.pathname === link.path ? 'text-marigold' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marigold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-2 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Join The Hub
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-charcoal/95 backdrop-blur-lg`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 font-inter font-medium transition-colors ${
                location.pathname === link.path ? 'text-marigold' : 'text-white hover:text-marigold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal py-3 rounded-full font-inter font-semibold mt-4">
            Join The Hub
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
```

### Testing Implementation

1. **Run Development Server**:
   ```bash
   npm run dev
   ```

2. **Verify Enhancements**:
   - Check dark mode toggle functionality
   - Verify 3D effects and animations
   - Test particle background in hero section
   - Confirm personalized content based on user intent
   - Ensure all micro-interactions work properly
   - Test accessibility features (keyboard navigation, screen readers)
   - Verify responsive design on all device sizes

3. **Performance Testing**:
   ```bash
   npm run build
   npm run preview
   ```
   - Run Lighthouse audits
   - Check Core Web Vitals
   - Verify loading times and bundle size

### Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy to Your Preferred Platform**:
   - **Netlify**: Drag and drop the `dist` folder
   - **Vercel**: Connect your Git repository
   - **GitHub Pages**: Upload contents of `dist` folder
   - **Traditional Hosting**: Upload contents of `dist` folder

## Troubleshooting Common Issues

### Permission Errors
If you encounter permission errors:
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm

# Fix project directory permissions
sudo chown -R $(whoami) /path/to/kgill-media

# Clear npm cache
npm cache clean --force
```

### Node.js Version Issues
Ensure you're using Node.js 16+:
```bash
# Check version
node --version

# If needed, install nvm and upgrade Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node
```

### Build Failures
If the build fails:
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Check for TypeScript errors
npm run build
```

## Conclusion

Following this implementation guide will transform the KGILL+ Media website into a truly "dope" digital experience. The enhancements focus on:

1. **Visual Excellence** - Modern design with 3D effects, glass morphism, and dynamic animations
2. **User Engagement** - Micro-interactions, personalization, and smooth transitions
3. **Accessibility** - WCAG compliance, keyboard navigation, and reduced motion support
4. **Performance** - Optimized loading, code splitting, and efficient resource management

By implementing these enhancements, you'll create a powerful digital representation of the KGILL+ Media brand that effectively showcases the organization's mission while providing an exceptional user experience across all devices and user contexts.