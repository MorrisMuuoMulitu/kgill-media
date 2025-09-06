import React from 'react';
import { Linkedin, Users, TrendingUp, Heart, Award, Globe } from 'lucide-react';

interface SocialProofTickerProps {
  followersCount: number;
}

const SocialProofTicker: React.FC<SocialProofTickerProps> = ({ followersCount }) => {
  const proofItems = [
    { icon: Users, text: `${followersCount}+ LinkedIn Followers`, color: 'text-marigold' },
    { icon: Award, text: '8 Industry Awards', color: 'text-cyan' },
    { icon: Globe, text: '15+ Communities Served', color: 'text-terracotta' },
    { icon: Heart, text: '98% Client Satisfaction', color: 'text-marigold' },
    { icon: TrendingUp, text: 'Featured in 5 Publications', color: 'text-cyan' },
  ];

  return (
    <section className="py-8 bg-slate-800 border-t border-slate-700 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-12 animate-scroll social-ticker">
          {[...proofItems, ...proofItems, ...proofItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3 flex-shrink-0">
              <item.icon className={`w-5 h-5 ${item.color}`} />
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
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-marigold transition-colors font-inter"
        >
          <Linkedin className="w-4 h-4" />
          Follow our journey on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default SocialProofTicker;