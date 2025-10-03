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
      className="relative h-72 sm:h-80 md:h-96 cursor-pointer group premium-hover-glow"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
      aria-label={`View details for ${title}`}
      role="button"
    >
      <div className={`flip-card-inner h-full transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className={`flip-card-front bg-gradient-to-br ${gradient} p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
          {/* African-inspired pattern overlay with sparkle */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="w-full h-full bg-repeat-round animate-sparkle" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 20c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20S0 8.954 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="text-charcoal mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
            <span className="pulse-glow sparkle-glow">{icon}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-charcoal mb-4 relative z-10">{title}</h3>
          <div className="w-16 h-1 bg-charcoal rounded-full relative z-10"></div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-4 right-4 w-6 h-6 border-2 border-charcoal/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-charcoal/20 rounded-full animate-bounce animate-glow" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back bg-slate-800 p-6 sm:p-8 flex flex-col justify-between border border-slate-700 relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Subtle gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} aria-hidden="true"></div>
          
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-montserrat text-white mb-4">{title}</h3>
            <p className="text-sm sm:text-base md:text-base text-gray-300 font-inter leading-relaxed mb-6">{description}</p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-terracotta font-inter font-semibold">{projects}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 text-marigold font-inter font-semibold hover:text-terracotta transition-colors group border border-marigold/30 rounded-lg py-3 hover:border-terracotta/30 focus:outline-none focus:ring-2 focus:ring-marigold/50 min-h-[48px] py-3">
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