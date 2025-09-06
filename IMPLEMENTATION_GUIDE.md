# KGILL+ Media Website Enhancement Implementation Guide

This guide provides step-by-step instructions for implementing all the "dope" enhancements we've designed for the KGILL+ Media website. These improvements will transform the site into a cutting-edge digital experience that reflects the brand's commitment to innovative storytelling.

## Prerequisites

Before implementing these enhancements, ensure you have:
1. Node.js version 16 or higher
2. npm or yarn package manager
3. Proper file system permissions for the project directory
4. A code editor (VS Code recommended)

## 1. Theme Management System

### 1.1 Create Theme Context

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
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
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

### 1.2 Update Main App Component

Modify `src/App.tsx` to include the ThemeProvider:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
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

## 2. User Intent Personalization

### 2.1 Enhanced Navigation Component

Update `src/components/Navigation.tsx` to include dark mode toggle and user intent detection:

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

  const getCTAText = () => {
    switch (userIntent) {
      case 'creative': return 'Join the Hub';
      case 'partner': return 'Partner With Us';
      case 'client': return 'Hire Our Creatives';
      default: return 'Start Your Journey';
    }
  };

  // ... rest of component
};
```

## 3. 3D Effects & Depth Perception

### 3.1 Tilt Effect Hook

Create `src/hooks/useTiltEffect.ts`:

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

### 3.2 Enhanced ServiceCard Component

Update `src/components/ServiceCard.tsx` to include 3D effects:

```tsx
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTiltEffect } from '../hooks/useTiltEffect';

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
  const tiltRef = useTiltEffect();

  return (
    <div 
      ref={tiltRef}
      className="relative h-80 cursor-pointer group tilt-3d"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      {/* ... rest of component with 3D effects */}
    </div>
  );
};

export default ServiceCard;
```

## 4. Particle Background System

### 4.1 Particle Hook

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

### 4.2 Enhanced Hero Section

Update the home page to include particle background:

```tsx
import React from 'react';
import { useParticles } from '../hooks/useParticles';

const Home = () => {
  const particleCanvasRef = useParticles(30);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-subtle">
      {/* Particle Background */}
      <canvas 
        ref={particleCanvasRef} 
        className="absolute inset-0 w-full h-full z-5"
      />
      
      {/* ... rest of hero section */}
    </section>
  );
};
```

## 5. Custom Cursor Effect

### 5.1 Cursor Hook

Create `src/hooks/useCustomCursor.ts`:

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

### 5.2 Cursor Component

Create `src/components/CustomCursor.tsx`:

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

## 6. Scroll Animation Hook

### 6.1 Intersection Observer Hook

Create `src/hooks/useScrollAnimation.ts`:

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

## 7. Loading Skeletons

### 7.1 Skeleton Component

Create `src/components/LoadingSkeleton.tsx`:

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
      
      {/* ... more skeleton elements */}
    </div>
  );
};

export default LoadingSkeleton;
```

## 8. Enhanced CSS Styles

### 8.1 Update Tailwind Configuration

Update `tailwind.config.js` to include new animations and utilities:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ... existing theme extensions
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide': 'slide 3s linear infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        // ... more animations
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
        // ... more keyframes
      },
    },
  },
  plugins: [],
};
```

### 8.2 Enhanced Global Styles

Update `src/index.css` with new styles and utilities:

```css
/* ... existing styles */

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

/* Enhanced button styles */
.btn-primary {
  @apply bg-gradient-to-r from-marigold to-terracotta text-charcoal px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300;
  box-shadow: 0 0 30px rgba(255, 199, 44, 0.3);
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

/* Loading states */
.skeleton {
  background: linear-gradient(90deg, var(--slate-700) 25%, var(--slate-600) 50%, var(--slate-700) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

/* ... more styles */
```

## 9. Deployment Instructions

To deploy these enhancements:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build the Project**:
   ```bash
   npm run build
   ```

3. **Test Locally**:
   ```bash
   npm run preview
   ```

4. **Deploy**:
   - For Netlify: Drag and drop the `dist` folder
   - For Vercel: Connect your Git repository
   - For traditional hosting: Upload contents of `dist` folder

## 10. Troubleshooting Common Issues

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

## Conclusion

These enhancements transform the KGILL+ Media website into a modern, engaging, and accessible digital platform. The implementation focuses on:

1. **Visual Excellence** - Modern design with 3D effects, glass morphism, and dynamic animations
2. **User Engagement** - Micro-interactions, personalization, and smooth transitions
3. **Accessibility** - WCAG compliance, keyboard navigation, and reduced motion support
4. **Performance** - Optimized loading, code splitting, and efficient resource management

By following this guide, you'll create a truly "dope" website that effectively showcases the organization's mission while providing an exceptional user experience.