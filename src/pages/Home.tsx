import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Users, Camera, Mic, Heart, Linkedin, TrendingUp } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';
import ServiceCard from '../components/ServiceCard';
import FeaturedStory from '../components/FeaturedStory';
import SocialProofTicker from '../components/SocialProofTicker';

const Home = () => {
  const [userIntent, setUserIntent] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [followersCount, setFollowersCount] = useState(470);

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
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Film",
      impact: "50K+ Views",
      featured: true
    },
    {
      title: "Innovation Podcast Series",
      description: "Conversations with Africa's leading tech entrepreneurs and changemakers",
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Podcast",
      impact: "25+ Episodes"
    },
    {
      title: "Community Tech Training",
      description: "Digital literacy workshops in underserved communities",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      impact: "500+ Trained"
    }
  ];

  return (
    <>
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-subtle">
        {/* Dynamic Video/Image Background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-hero-gradient z-10 absolute"></div>
          <div className="w-full h-full bg-gradient-to-t from-charcoal/80 via-transparent to-transparent z-10 absolute"></div>
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Creative Workshop"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          {/* African-inspired geometric overlay */}
          <div className="absolute inset-0 z-10 opacity-10">
            <div className="w-full h-full" style={{
              background: `
                radial-gradient(circle at 20% 20%, var(--marigold) 0%, transparent 25%),
                radial-gradient(circle at 80% 80%, var(--terracotta) 0%, transparent 25%),
                radial-gradient(circle at 40% 80%, var(--cyan) 0%, transparent 25%)
              `
            }}></div>
          </div>
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-hero font-bold font-montserrat leading-none tracking-tight mb-6">
              <span className="block">{personalizedContent.headline.split(' ').slice(0, 3).join(' ')}</span>
              <span className="block gradient-text animate-pulse">
                {personalizedContent.headline.split(' ').slice(3).join(' ')}
              </span>
            </h1>
            <div className="pattern-divider w-32 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl font-inter font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {personalizedContent.subtext}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="btn-primary pulse-glow">
              <span className="flex items-center gap-3">
                {getCTAText()}
                <ArrowRight className="w-6 h-6" />
              </span>
            </button>
            <button className="btn-secondary group">
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Live Social Proof */}
          <div className="glass-effect rounded-full px-6 py-3 inline-flex items-center gap-3 text-sm font-inter">
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-marigold" />
              <span className="text-gray-300">Join</span>
              <CounterAnimation target={followersCount} duration={1000} />
              <span className="text-gray-300">Changemakers</span>
            </div>
            <div className="w-1 h-1 bg-cyan rounded-full animate-pulse"></div>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
          <div className="w-1 h-16 bg-gradient-to-b from-marigold to-transparent rounded-full"></div>
          <div className="w-3 h-3 bg-marigold rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </section>

      {/* Impact Numbers with African-Inspired Design */}
      <section className="py-20 bg-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC72C' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gradient-text">
              IMPACT BY THE NUMBERS
            </h2>
            <p className="text-xl text-gray-400 font-inter">Real change, measured results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 250, suffix: '+', label: 'Young Creatives Empowered', color: 'marigold' },
              { icon: Camera, value: 150, suffix: '+', label: 'Stories Told', color: 'cyan' },
              { icon: Mic, value: 75, suffix: '+', label: 'Podcast Episodes', color: 'terracotta' },
              { icon: Heart, value: 25, suffix: '+', label: 'Community Projects', color: 'slate-blue' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className={`w-20 h-20 bg-gradient-to-br from-${stat.color} to-terracotta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-charcoal" />
                </div>
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 font-inter mt-2 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview with Enhanced Cards */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold font-montserrat mb-6">
              WHAT WE CREATE
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              From powerful documentaries to innovative podcasts, we craft stories that inspire change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Featured Stories with Enhanced Layout */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold font-montserrat mb-6">
              FEATURED STORIES
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Discover the impactful projects reshaping narratives across Kenya.
            </p>
          </div>
          
          {/* Featured Story */}
          <div className="mb-12">
            <FeaturedStory {...featuredStories[0]} />
          </div>
          
          {/* Regular Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredStories.slice(1).map((story, index) => (
              <FeaturedStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <SocialProofTicker followersCount={followersCount} />

      {/* User Intent Modal with Enhanced Design */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 max-w-md w-full border border-slate-600 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat gradient-text mb-2">
                Welcome to the Movement!
              </h3>
              <p className="text-gray-400 font-inter">
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
                  className={`w-full p-4 bg-gradient-to-r ${option.gradient} border ${option.border} rounded-lg text-left ${option.hover} transition-all duration-300 hover:scale-105`}
                >
                  <h4 className={`font-inter font-semibold ${option.textColor} mb-1`}>{option.title}</h4>
                  <p className="text-sm text-gray-400">{option.description}</p>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 text-gray-500 hover:text-gray-300 transition-colors font-inter"
            >
              Skip for now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;