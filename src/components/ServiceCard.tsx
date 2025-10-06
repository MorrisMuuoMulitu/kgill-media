import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, Award } from 'lucide-react';
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
      className="relative h-80 sm:h-96 md:h-[32rem] cursor-pointer group premium-hover"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
      aria-label={`View details for ${title}`}
      role="button"
    >
      <div className={`flip-card-inner h-full transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card - Enhanced with 3D depth and modern glass effect */}
        <div className={`flip-card-front bg-gradient-to-br ${gradient} p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-2xl/20 group-hover:scale-[1.02] transition-all duration-500`}>
          {/* Enhanced pattern overlay */}
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="text-charcoal mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
            <div className="relative">
              <span className="pulse-glow sparkle-glow">{icon}</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-marigold" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-charcoal mb-4 relative z-10">{title}</h3>
          <div className="w-20 h-1 bg-charcoal/30 rounded-full relative z-10 mb-4"></div>
          <p className="text-charcoal/80 text-sm sm:text-base font-medium relative z-10">{projects}</p>
          
          {/* Floating geometric elements */}
          <div className="absolute top-6 right-6 w-8 h-8 border-2 border-charcoal/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 bg-charcoal/20 rounded-full animate-bounce animate-glow" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
        </div>
        
        {/* Back of card - Enhanced with modern glass effect */}
        <div className="flip-card-back bg-slate-800/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between border border-slate-700/50 relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl/20 transition-all duration-500">
          {/* Subtle gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} aria-hidden="true"></div>
          
          {/* Glass morphism effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-60"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white">{title}</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <Award className="w-5 h-5 text-cyan" />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed mb-6">{description}</p>
          </div>
          
          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-terracotta font-inter font-semibold">{projects}</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-marigold rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-3 text-white font-inter font-semibold hover:text-white transition-colors group border border-white/20 rounded-xl py-4 bg-gradient-to-r from-marigold/10 to-terracotta/10 backdrop-blur-sm hover:from-marigold/20 hover:to-terracotta/20 hover:border-marigold/30 focus:outline-none focus:ring-2 focus:ring-marigold/50 min-h-[52px] group">
              View Portfolio 
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;