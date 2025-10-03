import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Heart, Briefcase } from 'lucide-react';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('creative');

  const opportunities = [
    {
      id: 'creative',
      title: 'Join as a Creative',
      icon: <Users className="w-8 h-8" />,
      description: 'Become part of our creative community and amplify your voice',
      gradient: 'from-marigold to-terracotta',
      benefits: [
        'Access to professional equipment and studios',
        'Mentorship from industry professionals',
        'Collaborative projects with social impact',
        'Skill development workshops and training',
        'Networking with like-minded creatives',
        'Portfolio building opportunities'
      ]
    },
    {
      id: 'partner',
      title: 'Partner With Us',
      icon: <Heart className="w-8 h-8" />,
      description: 'Collaborate with us to create meaningful social impact',
      gradient: 'from-cyan to-slate-blue',
      benefits: [
        'Co-create impactful content and campaigns',
        'Access to our network of young changemakers',
        'Authentic community engagement',
        'Measurable social impact metrics',
        'Brand alignment with youth movements',
        'Sustainable partnership models'
      ]
    },
    {
      id: 'client',
      title: 'Hire Our Services',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Professional media production with social purpose',
      gradient: 'from-terracotta to-marigold',
      benefits: [
        'High-quality video and audio production',
        'Authentic storytelling approaches',
        'Community-centered narratives',
        'Comprehensive project management',
        'Post-production and distribution support',
        'Impact measurement and reporting'
      ]
    }
  ];

  const currentOpportunity = opportunities.find(opp => opp.id === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-3xl sm:max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">INVOLVED</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Whether you're a creative looking for community, an organization seeking impact, 
            or a client needing professional services—there's a place for you in our movement.
          </p>
        </div>
      </section>

      {/* Opportunity Tabs */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900">
        <div className="max-w-4xl sm:max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {opportunities.map((opp) => (
              <button
                key={opp.id}
                onClick={() => setActiveTab(opp.id)}
                className={`flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-full font-inter font-semibold transition-all duration-300 ${
                  activeTab === opp.id
                    ? `bg-gradient-to-r ${opp.gradient} text-charcoal`
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {opp.icon}
                {opp.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {currentOpportunity && (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`w-20 h-20 bg-gradient-to-br ${currentOpportunity.gradient} rounded-full flex items-center justify-center mb-6`}>
                    <div className="text-charcoal">
                      {currentOpportunity.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-montserrat text-white mb-4">
                    {currentOpportunity.title}
                  </h2>
                  <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
                    {currentOpportunity.description}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-inter font-semibold text-white mb-4">What You Get:</h3>
                    {currentOpportunity.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-marigold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 font-inter">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-6">
                    Get Started Today
                  </h3>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tell Us About Yourself
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent resize-none"
                        placeholder="Share your background, interests, or project details..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`w-full bg-gradient-to-r ${currentOpportunity.gradient} text-charcoal py-4 rounded-lg font-inter font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative`}
                    >
                      <Send className="w-5 h-5" />
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
        <div className="max-w-4xl sm:max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              REACH OUT DIRECTLY
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Have questions? Want to discuss a custom project? We're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-marigold/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-marigold">Email Us</h3>
              <p className="text-gray-400 font-inter mb-4">
                Get in touch for partnerships, collaborations, or general inquiries.
              </p>
              <a 
                href="mailto:hello@kgillmedia.co.ke"
                className="text-terracotta hover:text-marigold transition-colors font-inter font-semibold"
              >
                hello@kgillmedia.co.ke
              </a>
            </div>
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-cyan">Call Us</h3>
              <p className="text-gray-400 font-inter mb-4">
                Speak directly with our team about your project needs.
              </p>
              <a 
                href="tel:+254712345678"
                className="text-terracotta hover:text-marigold transition-colors font-inter font-semibold"
              >
                +254 712 345 678
              </a>
            </div>
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-terracotta/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-terracotta">Visit Us</h3>
              <p className="text-gray-400 font-inter mb-4">
                Drop by our creative hub for a coffee and conversation.
              </p>
              <address className="text-gray-300 font-inter not-italic">
                Nairobi Innovation Hub<br />
                Ngong Road, Nairobi
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-3xl sm:max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            JOIN THE CONVERSATION
          </h2>
          <p className="text-xl text-gray-400 font-inter mb-8 leading-relaxed">
            Follow our journey and connect with our community of changemakers.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/company/kgill-media"
              className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-4 sm:px-8 sm:py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Follow on LinkedIn
            </a>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Join 470+ Followers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;