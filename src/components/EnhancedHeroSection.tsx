import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Users, Camera, Mic, Heart, Linkedin, TrendingUp, X, Star, Globe, Target, Zap } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';
import ServiceCard from '../components/ServiceCard';
import FeaturedStory from '../components/FeaturedStory';
import SocialProofTicker from '../components/SocialProofTicker';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useParticles } from '../hooks/useParticles';
import ComponentInView from '../components/ComponentInView';

const EnhancedHeroSection: React.FC = () => {
  const [userIntent, setUserIntent] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [followersCount, setFollowersCount] = useState(470);

  // Scroll animation refs
  const heroRef = useScrollAnimation();
  const impactRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const storiesRef = useScrollAnimation();
  
  // Particle background
  // More vibrant floating particles
  const particleCanvasRef = useParticles(75, {
    colors: ['#FFE066', '#FF7847', '#00E5FF', '#A78BFA', '#F472B6', '#3B82F6'],
    size: [1, 3, 5],
    speed: [0.3, 2],
    opacity: [0.2, 0.8],
    blendMode: 'screen',
  });

  useEffect(() => {
    const hasVisited = localStorage.getItem('kgill_visited');
    const savedIntent = localStorage.getItem('user_intent');
    
    if (savedIntent) {
      setUserIntent(savedIntent);
    } else if (!hasVisited) {
      setTimeout(() => setShowModal(true), 2000);
      localStorage.setItem('kgill_visited', 'true');
    }

    // Simulate live follower count updates
    const interval = setInterval(() => {
      setFollowersCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Hero background image is already loaded via standard img tag
  // No video preloading needed as we're using static YouTube thumbnails

  const handleIntentSelect = (intent: string) => {
    setUserIntent(intent);
    setShowModal(false);
    localStorage.setItem('user_intent', intent);
  };

  const getCTAText = () => {
    switch (userIntent) {
      case 'creative': return 'Join the Hub';
      case 'partner': return 'Partner With Us';
      case 'client': return 'Hire Our Creatives';
      default: return 'Start Your Journey';
    }
  };

  const getPersonalizedContent = () => {
    switch (userIntent) {
      case 'creative':
        return {
          headline: "YOUR STORY DESERVES TO BE TOLD",
          subtext: "Join a thriving community of young changemakers creating content that matters"
        };
      case 'partner':
        return {
          headline: "AMPLIFY YOUR SOCIAL IMPACT",
          subtext: "Partner with Africa's most dynamic youth-led creative movement"
        };
      case 'client':
        return {
          headline: "PROFESSIONAL MEDIA THAT MOVES PEOPLE",
          subtext: "Award-winning production services with authentic African storytelling"
        };
      default:
        return {
          headline: "WE ARE THE NEW NARRATIVE",
          subtext: "A youth-led creative movement transforming communities through innovative storytelling"
        };
    }
  };

  const personalizedContent = getPersonalizedContent();

  const featuredStories = [
    {
      title: "Youth Voices in Climate Action",
      description: "Documentary series empowering young environmental activists across Kenya",
      category: "Film",
      impact: "50K+ Views",
      featured: true
    },
    {
      title: "Innovation Podcast Series",
      description: "Conversations with Africa's leading tech entrepreneurs and changemakers",
      category: "Podcast",
      impact: "25+ Episodes"
    },
    {
      title: "Community Tech Training",
      description: "Digital literacy workshops in underserved communities",
      category: "Education",
      impact: "500+ Trained"
    }
  ];

  // Additional impact stats for more visual interest
  const additionalStats = [
    { icon: Star, value: 98, label: "Client Satisfaction", suffix: '%', color: 'text-marigold' },
    { icon: Globe, value: 12, label: "Countries Reached", color: 'text-cyan' },
    { icon: Target, value: 42, label: "Projects Completed", suffix: '+', color: 'text-terracotta' },
    { icon: Zap, value: 24, label: "Hours Creative", suffix: '/day', color: 'text-slate-blue' }
  ];

  return (
    <>
      {/* Hero Section with Dynamic Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden texture-subtle opacity-0 pt-16 md:pt-20 lg:pt-0">
        {/* Particle Background */}
        <canvas 
          ref={particleCanvasRef} 
          className="absolute inset-0 w-full h-full z-10"
          aria-hidden="true"
        />
        
        {/* Dynamic Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-black/90 via-charcoal/80 to-black/90 z-20 absolute animate-gradient-move"></div>
          <div className="w-full h-full bg-gradient-to-t from-charcoal/90 via-marigold/10 to-transparent z-20 absolute animate-gradient-move"></div>
          <img 
            src="https://img.youtube.com/vi/Z6BPF8gbquY/maxresdefault.jpg"
            sizes="(max-width: 640px) 400px, (max-width: 768px) 800px, (max-width: 1024px) 1200px, 1920px"
            alt="Creative Workshop"
            className="w-full h-full object-cover scale-110 animate-slow-zoom animate-fade-in"
            loading="eager"
            decoding="async"
          />
          {/* African-inspired geometric overlay */}
          <div className="absolute inset-0 z-15 opacity-15" aria-hidden="true">
            <div className="w-full h-full" style={{
              background: `
                radial-gradient(circle at 15% 15%, var(--marigold) 0%, transparent 20%),
                radial-gradient(circle at 85% 15%, var(--cyan) 0%, transparent 20%),
                radial-gradient(circle at 15% 85%, var(--terracotta) 0%, transparent 20%),
                radial-gradient(circle at 85% 85%, var(--purple) 0%, transparent 20%),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC72C' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `
            }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-marigold to-terracotta opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-cyan to-slate-blue opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-purple to-pink opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-30 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge Section */}
          <div className="mb-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-marigold/10 to-terracotta/10 border border-marigold/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-marigold rounded-full animate-pulse"></div>
              <span className="text-sm font-inter font-medium text-marigold">Africa's Leading Creative Hub</span>
            </div>
          </div>
          
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-montserrat leading-tight mb-6">
              <span className="block text-white/90 animate-fade-in-up">{personalizedContent.headline.split(' ').slice(0, 3).join(' ')}</span>
              <span className="block gradient-text animate-gradient-move text-transparent bg-clip-text bg-gradient-to-r from-marigold via-cyan to-purple text-6xl sm:text-7xl md:text-8xl">
                {personalizedContent.headline.split(' ').slice(3).join(' ')}
              </span>
            </h1>
            <div className="pattern-divider w-32 sm:w-40 mx-auto mb-8 animate-fade-in-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl font-inter font-light text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              {personalizedContent.subtext}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10 sm:mb-16">
            <button className="group relative overflow-hidden btn-primary w-full sm:w-auto min-w-[240px] min-h-[56px] py-4 px-8">
              <span className="flex items-center justify-center gap-3 relative z-10">
                {getCTAText()}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-marigold/20 to-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative overflow-hidden btn-secondary w-full sm:w-auto min-w-[240px] min-h-[56px] py-4 px-8">
              <span className="flex items-center justify-center gap-3 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Live Social Proof */}
          <div className="glass-morphism rounded-full px-6 py-4 inline-flex items-center gap-3 text-sm font-inter max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-marigold" />
              <span className="text-gray-300">Join</span>
              <CounterAnimation target={followersCount} duration={1000} />
              <span className="text-gray-300">Changemakers</span>
            </div>
            <div className="w-1 h-1 bg-cyan rounded-full animate-pulse"></div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation hidden md:block" aria-hidden="true">
          <div className="w-1 h-16 bg-gradient-to-b from-marigold to-transparent rounded-full"></div>
          <div className="w-3 h-3 bg-marigold rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </section>

      {/* Enhanced Impact Numbers */}
      <section ref={impactRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-charcoal to-slate-900 relative overflow-hidden opacity-0">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC72C' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 gradient-text">
              IMPACT BY THE NUMBERS
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-inter">Real change, measured results</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              { icon: Users, value: 250, suffix: '+', label: 'Young Creatives Empowered', color: 'marigold' },
              { icon: Camera, value: 150, suffix: '+', label: 'Stories Told', color: 'cyan' },
              { icon: Mic, value: 75, suffix: '+', label: 'Podcast Episodes', color: 'terracotta' },
              { icon: Heart, value: 25, suffix: '+', label: 'Community Projects', color: 'slate-blue' }
            ].map((stat, index) => (
              <div key={index} className="text-center group premium-hover">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-${stat.color} to-terracotta rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-charcoal z-10" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat gradient-text mb-2">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 font-inter leading-tight px-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalStats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700/30 mb-3 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-montserrat mb-1">
                    <CounterAnimation target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 font-inter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-900 to-charcoal relative opacity-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-6">
              WHAT WE CREATE
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              From powerful documentaries to innovative podcasts, we craft stories that inspire change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <ServiceCard 
              title="Film Production"
              description="Documentary films that amplify youth voices and social causes"
              icon={<Camera className="w-8 h-8" />}
              gradient="from-marigold to-terracotta"
              projects="25+ Projects"
            />
            <ServiceCard 
              title="Podcast Creation"
              description="Audio narratives exploring innovation and social impact"
              icon={<Mic className="w-8 h-8" />}
              gradient="from-cyan to-slate-blue"
              projects="75+ Episodes"
            />
            <ServiceCard 
              title="Community Workshops"
              description="Skill-building sessions empowering the next generation"
              icon={<Users className="w-8 h-8" />}
              gradient="from-terracotta to-marigold"
              projects="500+ Trained"
            />
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section ref={storiesRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-charcoal to-slate-900 texture-subtle opacity-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-6">
              FEATURED STORIES
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Discover the impactful projects reshaping narratives across Kenya.
            </p>
          </div>
          
          {/* Featured Story */}
          <div className="mb-12 sm:mb-16">
            <FeaturedStory {...featuredStories[0]} />
          </div>
          
          {/* Regular Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {featuredStories.slice(1).map((story, index) => (
              <FeaturedStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <SocialProofTicker followersCount={followersCount} />

      {/* User Intent Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intent-modal-title"
        >
          <div className="glass-morphism rounded-2xl p-6 sm:p-8 max-w-md w-full border border-slate-600 animate-fade-in relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 id="intent-modal-title" className="text-xl sm:text-2xl font-bold font-montserrat gradient-text mb-2">
                Welcome to the Movement!
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-inter">
                What brings you to our creative hub today?
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  intent: 'creative',
                  title: "I'm a Creative",
                  description: "Looking to join a community of changemakers",
                  gradient: "from-marigold/20 to-terracotta/20",
                  border: "border-marigold/30",
                  hover: "hover:from-marigold/30 hover:to-terracotta/30",
                  textColor: "text-marigold"
                },
                {
                  intent: 'partner',
                  title: "I'm a Partner/Investor",
                  description: "Interested in social impact opportunities",
                  gradient: "from-cyan/20 to-slate-blue/20",
                  border: "border-cyan/30",
                  hover: "hover:from-cyan/30 hover:to-slate-blue/30",
                  textColor: "text-cyan"
                },
                {
                  intent: 'client',
                  title: "I'm a Client",
                  description: "Seeking high-quality media production services",
                  gradient: "from-terracotta/20 to-marigold/20",
                  border: "border-terracotta/30",
                  hover: "hover:from-terracotta/30 hover:to-marigold/30",
                  textColor: "text-terracotta"
                }
              ].map((option) => (
                <button
                  key={option.intent}
                  onClick={() => handleIntentSelect(option.intent)}
                  className={`w-full p-4 bg-gradient-to-r ${option.gradient} border ${option.border} rounded-xl text-left ${option.hover} transition-all duration-300 hover:scale-105 tilt-3d focus:outline-none focus:ring-2 focus:ring-marigold/50`}
                >
                  <h4 className={`font-inter font-semibold text-base ${option.textColor} mb-1`}>{option.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{option.description}</p>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 text-gray-500 hover:text-gray-300 transition-colors font-inter text-sm underline focus:outline-none focus:text-gray-300"
            >
              Skip for now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedHeroSection;