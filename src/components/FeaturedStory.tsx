import React from 'react';
import { ArrowRight, Calendar, Eye } from 'lucide-react';

interface FeaturedStoryProps {
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  featured?: boolean;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  title,
  description,
  image,
  category,
  impact,
  featured = false
}) => {
  if (featured) {
    return (
      <div className="group cursor-pointer hover-lift">
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-marigold/30 transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/20"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-4 py-2 rounded-full text-sm font-inter font-bold">
                  Featured Story
                </span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-cyan text-sm font-inter font-semibold capitalize bg-cyan/10 px-3 py-1 rounded-full">
                  {category}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Eye className="w-4 h-4" />
                  {impact}
                </div>
              </div>
              <h2 className="text-3xl font-bold font-montserrat text-white mb-4 group-hover:text-marigold transition-colors">
                {title}
              </h2>
              <p className="text-gray-400 font-inter leading-relaxed mb-6 text-lg">
                {description}
              </p>
              <button className="flex items-center gap-2 text-terracotta font-inter font-semibold hover:text-marigold transition-colors group border border-terracotta/30 rounded-lg px-6 py-3 hover:border-marigold/30 w-fit">
                Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer hover-lift">
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <span className="bg-marigold text-charcoal px-3 py-1 rounded-full text-sm font-inter font-semibold">
              {category}
            </span>
            <span className="text-cyan text-sm font-inter font-semibold flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {impact}
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-marigold transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 font-inter mb-4 leading-relaxed">
        {description}
      </p>
      <button className="flex items-center gap-2 text-terracotta font-inter font-semibold hover:text-marigold transition-colors group">
        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default FeaturedStory;