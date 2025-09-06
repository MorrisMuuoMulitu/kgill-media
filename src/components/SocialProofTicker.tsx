import React from 'react';
import { Users, Award, Globe, Heart, Linkedin, TrendingUp } from 'lucide-react';
import CounterAnimation from './CounterAnimation';

interface SocialProofTickerProps {
  followersCount: number;
}

const SocialProofTicker: React.FC<SocialProofTickerProps> = ({ followersCount }) => {
  const proofItems = [
    { 
      icon: Users, 
      text: `${followersCount.toLocaleString()}+ LinkedIn Followers`, 
      color: 'text-marigold',
      bg: 'bg-marigold/10'
    },
    { 
      icon: Award, 
      text: '8 Industry Awards', 
      color: 'text-cyan',
      bg: 'bg-cyan/10'
    },
    { 
      icon: Globe, 
      text: '15+ Communities Served', 
      color: 'text-terracotta',
      bg: 'bg-terracotta/10'
    },
    { 
      icon: Heart, 
      text: '98% Client Satisfaction', 
      color: 'text-marigold',
      bg: 'bg-marigold/10'
    },
    { 
      icon: TrendingUp, 
      text: 'Featured in 5 Publications', 
      color: 'text-cyan',
      bg: 'bg-cyan/10'
    },
  ];

  return (
    <section className="py-8 bg-slate-800/50 border-t border-slate-700 overflow-hidden relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC72C' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center">
          <div className="flex items-center gap-12 animate-scroll social-ticker">
            {[...proofItems, ...proofItems, ...proofItems].map((item, index) => (
              <div key={index} className="flex items-center gap-3 flex-shrink-0 tilt-3d group">
                <div className={`p-3 rounded-full ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-gray-300 font-inter font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-6">
          <a 
            href="https://linkedin.com/company/kgill-media"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-marigold transition-colors font-inter tilt-3d group focus:outline-none focus:ring-2 focus:ring-marigold/50 rounded-lg px-4 py-2 hover:bg-slate-700/50"
          >
            <Linkedin className="w-4 h-4" />
            Follow our journey on LinkedIn
            <TrendingUp className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofTicker;