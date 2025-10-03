import React, { useState } from 'react';
import { useOptimizedImage } from '../hooks/useOptimizedImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  [key: string]: string | number | boolean | undefined;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  lazy = true,
  ...props 
}) => {
  const optimizedSrc = useOptimizedImage(src, width, height);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Handle image loading states
  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  // Fallback to original image if optimized version fails
  const displaySrc = error && src !== optimizedSrc ? src : optimizedSrc;

  return (
    <div
      className={`relative inline-block overflow-hidden rounded-xl premium-hover-glow`}
      style={{ width, height }}
      aria-label={alt || undefined}
      role={alt ? 'img' : 'presentation'}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700 animate-shimmer" />
      )}
      <img
        src={displaySrc}
        alt={alt}
        className={`${className} block w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} hover:shadow-[0_0_24px_#FFE066]`}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? 'lazy' : 'eager'}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
// Add shimmer animation and premium hover glow to index.css
};

export default OptimizedImage;