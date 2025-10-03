import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image?: string;
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({ 
  title, 
  author, 
  date, 
  readTime, 
  category, 
  content 
}) => {
  return (
    <article className="min-h-screen bg-charcoal text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/photography-videography" className="inline-flex items-center text-gold-gradient hover:text-terracotta mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
        
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-gold-gradient text-charcoal rounded-full text-sm font-bold mb-4">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">{title}</h1>
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
          
          <div className="h-64 md:h-96 w-full bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-2xl flex items-center justify-center mb-8">
            <div className="text-center p-8">
              <Camera className="w-16 h-16 text-gold-gradient mx-auto mb-4" />
              <p className="text-xl font-bold font-montserrat text-white">Featured Image</p>
              <p className="text-gray-400">Professional Photography</p>
            </div>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 font-inter text-lg leading-relaxed space-y-6">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold font-montserrat mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-morphism border border-gold-gradient/30 rounded-xl p-4">
              <h4 className="font-bold font-montserrat text-white mb-2">Understanding Camera Settings</h4>
              <p className="text-gray-400 text-sm">Essential guide to aperture, shutter speed, and ISO</p>
            </div>
            <div className="glass-morphism border border-gold-gradient/30 rounded-xl p-4">
              <h4 className="font-bold font-montserrat text-white mb-2">Location Photography Guide</h4>
              <p className="text-gray-400 text-sm">Choosing the perfect spot for your photoshoot</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostTemplate;