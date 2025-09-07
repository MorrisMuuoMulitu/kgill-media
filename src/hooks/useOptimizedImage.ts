import { useState, useEffect } from 'react';

// Hook to detect browser support for WebP
export const useWebPSupport = () => {
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        // Check if the browser supports WebP
        const image = new Image();
        image.onload = () => {
          setSupportsWebP(image.width > 0 && image.height > 0);
        };
        image.onerror = () => {
          setSupportsWebP(false);
        };
        // WebP test image (1x1 pixel)
        image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
      } else {
        setSupportsWebP(false);
      }
    };

    checkWebPSupport();
  }, []);

  return supportsWebP;
};

// Hook to generate optimized image URLs
export const useOptimizedImage = (src: string, width?: number, height?: number) => {
  const supportsWebP = useWebPSupport();
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  useEffect(() => {
    if (!src) return;

    // If it's already a WebP image or external URL, use as is
    if (src.includes('.webp') || src.startsWith('http')) {
      setOptimizedSrc(src);
      return;
    }

    // For local images, we'll need to convert them to WebP on the server side
    // For now, we'll just use the original src
    setOptimizedSrc(src);
  }, [src, supportsWebP, width, height]);

  return optimizedSrc;
};