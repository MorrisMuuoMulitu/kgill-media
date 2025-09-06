import React from 'react';
import { Camera, Mic, Users, Code, Play, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      title: "Documentary Film Production",
      description: "Compelling visual narratives that showcase real stories and drive social change",
      icon: <Camera className="w-8 h-8" />,
      features: ["Pre-production planning", "Professional cinematography", "Post-production editing", "Distribution strategy"],
      gradient: "from-marigold to-terracotta",
      projects: "25+ Films Produced"
    },
    {
      title: "Podcast Creation & Production",
      description: "Audio storytelling that amplifies voices and sparks meaningful conversations",
      icon: <Mic className="w-8 h-8" />,
      features: ["Concept development", "Recording & editing", "Sound design", "Platform distribution"],
      gradient: "from-cyan to-slate-blue",
      projects: "75+ Episodes Released"
    },
    {
      title: "Community Workshops",
      description: "Skill-building sessions that empower youth with media production capabilities",
      icon: <Users className="w-8 h-8" />,
      features: ["Digital storytelling", "Technical training", "Creative development", "Mentorship programs"],
      gradient: "from-terracotta to-marigold",
      projects: "500+ Youth Trained"
    },
    {
      title: "Innovation Consulting",
      description: "Strategic guidance for organizations looking to amplify their social impact",
      icon: <Code className="w-8 h-8" />,
      features: ["Strategy development", "Impact measurement", "Partnership facilitation", "Program design"],
      gradient: "from-slate-blue to-cyan",
      projects: "20+ Organizations Advised"
    }
  ];

  const caseStudies = [
    {
      title: "Youth Climate Action Documentary",
      client: "Kenya Environmental Youth Network",
      challenge: "Need to amplify young climate activists' voices and inspire nationwide action",
      solution: "6-part documentary series featuring diverse youth perspectives across Kenya",
      impact: "50,000+ views, featured at 3 international film festivals, sparked 10 new youth climate groups",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Innovation Podcast Series",
      client: "Nairobi Innovation Hub",
      challenge: "Showcase Kenya's tech ecosystem and inspire young entrepreneurs",
      solution: "Weekly podcast featuring successful entrepreneurs, investors, and innovators",
      impact: "25 episodes, 15,000+ downloads, 5 startups featured received funding",
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">CREATE</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
            From powerful documentaries to innovative podcasts, we craft stories that inspire change 
            and build bridges between communities, innovation, and social impact.
          </p>
          <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Play className="w-5 h-5" />
            Watch Our Reel
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Comprehensive media production and community engagement services designed for maximum impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-6`}>
                    <div className="text-charcoal">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-inter mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-marigold rounded-full"></div>
                        <span className="text-gray-300 font-inter text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-terracotta font-inter font-semibold text-sm">
                      {service.projects}
                    </span>
                    <button className="text-cyan hover:text-marigold transition-colors flex items-center gap-2 font-inter font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              CASE STUDIES
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Real projects, real impact. See how we've helped organizations amplify their message and create lasting change.
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold font-montserrat text-white mb-2">
                        {study.title}
                      </h3>
                      <p className="text-marigold font-inter font-semibold">
                        Client: {study.client}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-inter font-semibold text-terracotta mb-2">The Challenge</h4>
                        <p className="text-gray-300 font-inter leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-cyan mb-2">Our Solution</h4>
                        <p className="text-gray-300 font-inter leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-marigold mb-2">The Impact</h4>
                        <p className="text-gray-300 font-inter leading-relaxed">{study.impact}</p>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      View Full Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            READY TO CREATE IMPACT?
          </h2>
          <p className="text-xl text-gray-400 font-inter mb-8 leading-relaxed">
            Let's work together to tell your story and create meaningful change in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get A Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;