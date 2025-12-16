# KGILL+ Media Creative & Innovation Hub - Project Context

## Project Overview

KGILL+ Media is a youth-led creative movement transforming communities through innovative storytelling, based in Kenya. This is a modern React/TypeScript web application built with a focus on exceptional user experience, accessibility, and performance. The project features a sophisticated design system with dark mode, 3D effects, glass morphism, particle backgrounds, and extensive micro-interactions.

The project implements a comprehensive set of modern web development practices including:
- Full TypeScript integration for type safety
- React with modern hooks and context
- Tailwind CSS with custom configuration for complex animations and effects
- Responsive design with mobile-first approach
- Accessibility-first design with ARIA attributes and keyboard navigation
- Performance optimization with lazy loading and code splitting

## Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 with custom configurations
- **Animation**: Framer Motion 12.23.12
- **Routing**: React Router DOM 7.8.2
- **Icons**: Lucide React
- **CSS Preprocessing**: PostCSS with autoprefixer

## Project Structure

```
src/
├── components/          # Reusable UI components with advanced animations
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── pages/               # Page components with rich interactive elements
├── providers/           # Theme and accessibility providers
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── assets/              # Static assets (images, fonts, etc.)
└── styles/              # Global styles and themes
```

## Key Features

### Enhanced Visual Design
- **Dark Mode Toggle**: Seamless theme switching with persistent user preferences
- **3D Effects & Depth**: Subtle 3D tilts and perspective transforms for interactive elements
- **Glass Morphism**: Frosted glass effects for modern UI components
- **Particle Background**: Dynamic particle system in the hero section
- **Gradient Text**: Vibrant gradient text effects using the brand color palette

### Micro-Interactions
- **Hover Animations**: Smooth hover effects on buttons, cards, and links
- **Scroll Animations**: Elements fade in as users scroll down the page
- **Loading Skeletons**: Better perceived performance with skeleton loaders
- **Custom Cursor**: Unique cursor effects for enhanced user experience
- **Animated Counters**: Live updating statistics with smooth animations

### Accessibility Improvements
- **Better Contrast**: Enhanced color contrast for improved readability
- **Keyboard Navigation**: Fully navigable with keyboard controls
- **Focus States**: Clear visual indicators for focused elements
- **ARIA Attributes**: Proper accessibility labels for screen readers
- **Reduced Motion**: Respects user preferences for motion reduction

## Building and Running

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation and Development

```bash
# Clone the repository (if needed)
git clone https://github.com/yourusername/kgill-media.git

# Navigate to the project directory
cd kgill-media

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Starts the development server on port 5173
- `npm run build` - Builds the production-ready application
- `npm run preview` - Previews the built application locally
- `npm run lint` - Runs ESLint to check for code issues

### Build Configuration

The project uses Vite with the following key configurations:
- TypeScript target: ES2015
- Output directory: dist
- Sourcemap generation enabled
- Code splitting for vendor libraries and UI components
- Terser minification with console/debugger removal
- Port 5173 for development with host accessible externally

## Development Conventions

### TypeScript Usage
- Strict type checking enabled
- No unused locals or parameters allowed
- Module resolution using bundler mode
- JSX set to React 18's automatic runtime

### Styling Approach
- Tailwind CSS with custom color palette matching brand colors:
  - Charcoal: #1A1A1A (Primary background)
  - Marigold: #FFC72C (Primary accents and highlights)
  - Terracotta: #E2725B (Secondary accents)
  - Slate Blue: #4A5568 (Tertiary accents)
  - Cyan: #00FFFF (Special highlights)
- Custom animations and keyframes defined in tailwind.config.js
- Custom CSS utilities and components in src/index.css
- Font families: Montserrat, Inter, and Roboto with Google Fonts

### Component Architecture
- Modular, reusable components with clear responsibilities
- Proper separation between presentation and container components
- Context providers for global state management
- Custom hooks for reusable logic
- Performance optimization with memoization and lazy loading

### Accessibility Guidelines
- Semantic HTML structure
- Proper heading hierarchy
- Focus management and keyboard navigation
- ARIA attributes where appropriate
- Respect for user's reduced motion preferences
- High contrast mode support

### Performance Optimization
- Lazy loading of components and images
- Code splitting at route and component level
- Efficient animations using CSS transforms and opacity
- Proper handling of scroll and resize events
- Performance monitoring and core web vitals tracking