import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface EnhancedImageCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  showZoomIcon?: boolean;
}

const EnhancedImageCard: React.FC<EnhancedImageCardProps> = ({ 
  src, 
  alt, 
  title, 
  subtitle, 
  onClick, 
  className = '',
  showZoomIcon = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={imgRef}
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-full">
        <OptimizedImage
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 animate-pulse rounded-lg"></div>
        )}
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-sm font-bold text-white font-montserrat truncate">{title}</h3>
            {subtitle && <p className="text-xs text-gray-300 font-inter truncate">{subtitle}</p>}
          </div>
        </motion.div>
        
        {/* Zoom icon */}
        {showZoomIcon && (
          <motion.div 
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          >
            <div className="w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center shadow-md backdrop-blur-sm">
              <Maximize2 className="w-3.5 h-3.5 text-charcoal" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedImageCard;