import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">STORY</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Born from the belief that every young voice deserves to be heard, Kgill+ Media is more than a creative hub—
            we are a movement reshaping narratives and building bridges between communities, innovation, and social impact.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6 text-marigold">
                OUR MISSION
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                To amplify youth voices through innovative media production while creating sustainable pathways 
                for social change across Kenya and beyond. We believe in the power of authentic storytelling 
                to bridge divides and inspire action.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-white">Community First</h3>
                    <p className="text-gray-400">Every project starts with community needs and voices</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-white">Innovation Driven</h3>
                    <p className="text-gray-400">Leveraging technology to amplify impact and reach</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community Workshop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR VALUES
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              The principles that guide every story we tell and every community we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-marigold/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-marigold">AUTHENTICITY</h3>
              <p className="text-gray-400 font-inter leading-relaxed">
                We tell real stories from real people, ensuring every narrative reflects genuine experiences and perspectives.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-cyan">IMPACT</h3>
              <p className="text-gray-400 font-inter leading-relaxed">
                Every project is designed with measurable social impact in mind, creating lasting change in communities.
              </p>
            </div>
            <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-terracotta/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-terracotta">COLLABORATION</h3>
              <p className="text-gray-400 font-inter leading-relaxed">
                We believe in the power of working together, building partnerships that amplify our collective impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              From a small idea to a thriving movement—here's how we've grown together.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-charcoal font-bold font-montserrat">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-2 text-marigold">The Beginning</h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Founded with a vision to amplify youth voices and create meaningful social impact through media.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold font-montserrat">2023</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-2 text-cyan">Growing Impact</h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Launched our first major documentary series and podcast, reaching thousands across Kenya.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-charcoal font-bold font-montserrat">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-2 text-terracotta">Expanding Horizons</h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Building partnerships with NGOs and corporations while training the next generation of storytellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;