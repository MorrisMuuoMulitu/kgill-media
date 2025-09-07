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
  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Fallback to original image if optimized version fails
  const displaySrc = error && src !== optimizedSrc ? src : optimizedSrc;

  return (
    <img
      src={displaySrc}
      alt={alt}
      className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      {...(width && { width })}
      {...(height && { height })}
      {...props}
    />
  );
};

export default OptimizedImage;