import React, { useState } from 'react';
import { Camera, Play, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="premium-card premium-hover-gold p-6 text-center">
        <Heart className="w-12 h-12 text-gold-gradient-start mx-auto mb-4" />
        <h3 className="text-xl font-bold font-montserrat mb-2">Thank You!</h3>
        <p className="text-gray-400 font-inter">
          You've been subscribed to our newsletter. Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="premium-card premium-hover-gold p-6">
      <h3 className="text-xl font-bold font-montserrat mb-4">Stay Updated</h3>
      <p className="text-gray-400 font-inter mb-4">
        Get the latest stories, projects, and updates delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-gradient-start"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary premium-hover-gold flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  );
};

const SocialProofTicker = () => {
  const stats = [
    { icon: Play, label: 'Documentaries', value: 25, suffix: '+', color: 'text-gold-gradient-start' },
    { icon: Camera, label: 'Photography Projects', value: 150, suffix: '+', color: 'text-cyan' },
    { icon: Users, label: 'Workshops Conducted', value: 30, suffix: '+', color: 'text-purple' },
    { icon: Award, label: 'Awards Won', value: 12, suffix: '+', color: 'text-terracotta' },
    { icon: Play, label: 'TV Shows', value: 8, suffix: '+', color: 'text-gold-gradient-start' },
    { icon: Camera, label: 'Studio Projects', value: 200, suffix: '+', color: 'text-cyan' },
    { icon: Users, label: 'Young Creatives', value: 250, suffix: '+', color: 'text-purple' },
    { icon: Heart, label: 'Community Projects', value: 25, suffix: '+', color: 'text-terracotta' }
  ];

  const featuredLinks = [
    { 
      title: "KGILL TV", 
      description: "Watch our original series and documentaries", 
      path: "/kgill-tv",
      icon: Play,
      gradient: "from-gold-gradient-start to-terracotta"
    },
    { 
      title: "Studio Services", 
      description: "Professional photography & videography", 
      path: "/photography-videography",
      icon: Camera,
      gradient: "from-cyan to-slate-blue"
    }
  ];

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border-y border-white/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Ticker */}
        <div className="relative overflow-hidden py-6 border-b border-white/5">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...stats, ...stats].map((stat, index) => (
              <div key={index} className="flex items-center mx-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'from-').replace('-gradient-start', '')}/20 flex items-center justify-center mr-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold font-montserrat flex items-baseline">
                    <span className={stat.color}>{stat.value}</span>
                    <span className="text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400 font-inter">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Links and Newsletter */}
        <div className="py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {featuredLinks.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="premium-card premium-hover-gold group overflow-hidden lg:col-span-1"
              >
                <div className="flex items-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-6 flex-shrink-0 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
                    <item.icon className="w-8 h-8 text-charcoal relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-montserrat mb-1 group-hover:text-gold-gradient-start transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-inter text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-gold-gradient-start group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-gradient-start/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            ))}
            
            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialProofTicker;