import React from 'react';
import { Play, Star, Users, Camera, Mic, Globe, Sparkles, Award, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ComponentInView from './ComponentInView';

const PremiumShowcase = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Award-winning content that amplifies youth voices and social causes",
      gradient: "from-marigold to-terracotta"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Stories that resonate across continents and cultures",
      gradient: "from-cyan to-slate-blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Thriving network of changemakers and storytellers",
      gradient: "from-purple to-pink"
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Film Director",
      content: "Kgill+ Media transformed our storytelling approach and elevated our production quality significantly.",
      avatar: "SK"
    },
    {
      name: "James M.",
      role: "Community Leader",
      content: "Their workshops empowered our youth with real skills and confidence to tell their stories.",
      avatar: "JM"
    },
    {
      name: "Aisha O.",
      role: "Social Entrepreneur",
      content: "The impact of their content reaches far beyond what we imagined possible.",
      avatar: "AO"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ComponentInView 
          className="text-center mb-16"
          animation={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-marigold/10 to-terracotta/10 border border-marigold/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-marigold rounded-full animate-pulse"></div>
            <span className="text-sm font-inter font-medium text-marigold">PREMIUM EXPERIENCE</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat mb-6"
          >
            <span className="block text-white/90">ELEVATED</span>
            <span className="block gradient-text bg-clip-text bg-gradient-to-r from-marigold via-cyan to-purple text-transparent">
              STORYTELLING
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            Experience the next level of creative production with our innovative approach to storytelling and media creation.
          </p>
        </ComponentInView>

        {/* Feature Cards */}
        <ComponentInView 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          animation={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="premium-card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}></div>
              
              <div className="relative z-10 p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-charcoal">{feature.icon}</div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 font-inter leading-relaxed">{feature.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-marigold">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ComponentInView>

        {/* Stats Section */}
        <ComponentInView 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          animation={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
            { value: "250+", label: "Creatives Empowered", icon: <Users className="w-6 h-6" /> },
            { value: "150+", label: "Stories Told", icon: <Camera className="w-6 h-6" /> },
            { value: "75+", label: "Awards Won", icon: <Award className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center premium-card group"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center mx-auto mb-4 text-charcoal">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-montserrat gradient-text bg-clip-text bg-gradient-to-r from-marigold to-terracotta text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-inter">{stat.label}</p>
              </div>
            </div>
          ))}
        </ComponentInView>

        {/* Testimonials */}
        <ComponentInView 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          animation={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="premium-card group"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-slate-blue flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 font-inter">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 font-inter italic leading-relaxed">"{testimonial.content}"</p>
                
                <div className="mt-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-marigold fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ComponentInView>

        {/* CTA Section */}
        <ComponentInView 
          className="mt-20 text-center"
          animation={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="premium-card mx-auto max-w-3xl">
            <div className="p-12">
              <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-white mb-4">
                Ready to Transform Your Story?
              </h3>
              <p className="text-gray-300 font-inter mb-8 max-w-xl mx-auto">
                Join us in creating content that makes a real difference in the world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-marigold to-terracotta text-charcoal px-8 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-marigold/20 to-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative overflow-hidden bg-slate-800/50 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 border border-slate-700 hover:border-marigold/30 hover:bg-slate-700/50">
                  <span className="relative z-10 flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    View Our Work
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ComponentInView>
      </div>
    </div>
  );
};

export default PremiumShowcase;