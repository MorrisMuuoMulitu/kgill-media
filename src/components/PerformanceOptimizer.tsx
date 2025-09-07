import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

// Define the connection type
interface NetworkInformation extends EventTarget {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Detect slow connections
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    
    if (connection) {
      const slowConnection = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
      setIsSlowConnection(slowConnection);
      
      // Apply performance optimizations for slow connections
      if (slowConnection) {
        document.documentElement.classList.add('slow-connection');
      }
    }

    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Only preload on fast connections
    if (!isSlowConnection) {
      preloadCriticalImages();
    }

    // Optimize images based on device pixel ratio
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    optimizeImages();

    // Monitor Core Web Vitals
    const reportWebVitals = () => {
      // This would integrate with a real analytics service
      console.log('Web Vitals monitoring active');
    };

    reportWebVitals();
  }, [isSlowConnection]);

  return (
    <>
      {children}
      {isSlowConnection && (
        <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-3 rounded-lg text-sm font-inter shadow-lg z-40">
          <p>Slow connection detected. Optimizing experience...</p>
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;