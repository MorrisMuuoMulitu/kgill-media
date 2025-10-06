import React from 'react';
import { Camera } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  logoSrc?: string; // Optional prop to pass custom logo image
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '',
  logoSrc // Optional custom logo image
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSize = size === 'sm' ? 'text-sm' : size === 'md' ? 'text-xl' : 'text-2xl';
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-7 h-7' : 'w-8 h-8';

  return (
    <div className={`flex items-center group ${className}`}>
      <div className="relative">
        <div className={`bg-gradient-to-br from-marigold to-terracotta ${sizeClasses[size]} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          {logoSrc ? (
            // If a custom logo image is provided, use it
            <img 
              src={logoSrc} 
              alt="KGILL+ MEDIA Logo" 
              className={`text-charcoal z-10 ${iconSize} object-contain`} 
              onError={(e) => {
                // Fallback to Camera icon if image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.style.display = 'none';
                const fallbackIcon = target.parentElement?.querySelector('.fallback-icon');
                if (fallbackIcon) (fallbackIcon as HTMLElement).style.display = 'block';
              }}
            />
          ) : (
            // Default Camera icon
            <Camera className={`text-charcoal z-10 ${iconSize} fallback-icon`} />
          )}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className={`absolute -top-1 -right-1 ${size === 'sm' ? 'w-3 h-3' : 'w-5 h-5'} bg-cyan rounded-full animate-pulse shadow-lg`}></div>
      </div>
      
      {showText && (
        <div className={`ml-2 relative ${size === 'sm' ? 'hidden' : 'block'}`}>
          <h1 className={`font-bold font-montserrat text-white group-hover:text-marigold transition-colors ${textSize}`}>
            KGILL+ MEDIA
          </h1>
          <p className={`text-slate-blue font-inter ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : 'text-sm'}`}>
            Creative & Innovation Hub
          </p>
          <div className={`absolute -bottom-1 left-0 w-2 h-2 bg-marigold rounded-full animate-pulse`}></div>
        </div>
      )}
    </div>
  );
};

export default Logo;