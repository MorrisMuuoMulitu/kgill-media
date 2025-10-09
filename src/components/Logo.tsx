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
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  const iconSize = size === 'sm' ? 'w-18 h-18' : size === 'md' ? 'w-28 h-28' : 'w-36 h-36';

  // Use main logo by default, or custom logo if provided
  const defaultLogoSrc = "https://ik.imagekit.io/5zp8ovb7c/Kgill/Logos/kgillpluslogo.png?updatedAt=1760027625871&tr=f-webp";
  const currentLogoSrc = logoSrc || defaultLogoSrc;

  return (
    <div className={`flex items-center group ${className}`}>
      <div className="relative">
        <img 
          src={currentLogoSrc} 
          alt="KGILL+ MEDIA Logo" 
          className={`${iconSize} object-contain transition-transform duration-300 group-hover:scale-110`} 
          onError={(e) => {
            // Fallback to Camera icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.style.display = 'none';
            const fallbackIcon = target.parentElement?.querySelector('.fallback-icon');
            if (fallbackIcon) (fallbackIcon as HTMLElement).style.display = 'block';
          }}
        />
        <Camera className={`text-white ${iconSize} fallback-icon hidden`} />
      </div>

    </div>
  );
};

export default Logo;