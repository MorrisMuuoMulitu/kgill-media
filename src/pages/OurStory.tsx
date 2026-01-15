import React, { useState } from 'react';
import { Users, Target, Heart, Zap, Award, Globe, Camera, Mic, Quote, Sparkles, MoveRight, User, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import ComponentInView from '../components/ComponentInView';
import YouTubePlayerModal from '../components/YouTubePlayerModal';

const OurStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('');

  const openVideo = (id: string) => {
    setActiveVideoId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#0a0a0c] text-white">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/40 via-[#0a0a0c]/80 to-[#0a0a0c] z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            alt="Cinematic Background"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Sparkles className="w-5 h-5 text-gold-gradient-start" />
              <span className="text-gold-gradient-start font-black text-sm tracking-[0.3em] uppercase">The Movement</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-montserrat italic mb-8 leading-tight tracking-tighter">
              BEYOND THE <span className="text-transparent bg-clip-text bg-gold-gradient">LENS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-inter leading-relaxed max-w-3xl mx-auto font-medium">
              Born from the belief that every young voice deserves to be heard, Kgill+ Media is a movement reshaping narratives and building bridges between innovation and social impact.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-gold-gradient-start to-transparent rounded-full"></div>
        </div>
      </section>

      {/* The Core Narrative */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ComponentInView>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-gradient-start/10 blur-[100px] rounded-full"></div>
                <h2 className="text-[10px] font-black text-gold-gradient-start uppercase tracking-[0.5em] mb-4">Origin Story</h2>
                <h3 className="text-4xl md:text-6xl font-black font-montserrat italic text-white mb-8 uppercase leading-none">
                  Who we <span className="text-gold-gradient-start">are</span>?
                </h3>
                <div className="space-y-6 text-gray-400 font-inter text-lg leading-relaxed">
                  <p>
                    Kgill+ Media Hub is a creative and innovation hub based in <span className="text-white font-bold">Kibera, Nairobi</span>, founded with the vision of amplifying African voices and reshaping narratives through digital storytelling and diverse art forms.
                  </p>
                  <p>
                    We are a collective of self-driven creatives, innovators, filmmakers, and change-makers committed to nurturing creativity and empowering young storytellers to use media as a tool for expression and advocacy.
                  </p>
                  <p className="bg-white/5 border-l-4 border-gold-gradient-start p-6 rounded-r-2xl italic text-gray-300">
                    "Our hub provides platforms where underrepresented and marginalized communities can reimagine possibilities."
                  </p>
                </div>
              </div>
            </ComponentInView>

            <ComponentInView>
              <div className="relative group cursor-pointer" onClick={() => openVideo('scdj1xKxDqs')}>
                <div className="absolute inset-0 bg-gold-gradient rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                  <img
                    src="https://img.youtube.com/vi/scdj1xKxDqs/maxresdefault.jpg"
                    alt="Community Workshop"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Play className="w-8 h-8 text-charcoal fill-charcoal ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-black uppercase text-sm tracking-widest">Kibera Workshops 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentInView>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Cinematic Cards */}
      <section className="py-32 bg-[#0f0f12]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ComponentInView>
              <div className="p-12 h-full bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 hover:border-gold-gradient-start/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gold-gradient rounded-3xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8 text-charcoal" />
                </div>
                <h4 className="text-3xl font-black font-montserrat text-white italic mb-6 uppercase">Mission</h4>
                <p className="text-xl text-gray-400 font-inter leading-relaxed">
                  To empower marginalized & underrepresented voices through creative, innovative storytelling that inspires social change and community impact on a global scale.
                </p>
              </div>
            </ComponentInView>

            <ComponentInView>
              <div className="p-12 h-full bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 hover:border-cyan/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-blue-600 rounded-3xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-black font-montserrat text-white italic mb-6 uppercase">Vision</h4>
                <p className="text-xl text-gray-400 font-inter leading-relaxed">
                  To become Africa's leading hub for bold, authentic, and transformative stories driven by the perfect synergy of creativity and innovation.
                </p>
              </div>
            </ComponentInView>
          </div>
        </div>
      </section>

      {/* CEO'S Message - The Premium Block */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <ComponentInView>
            <Quote className="w-20 h-20 text-gold-gradient-start/20 mx-auto mb-12" />
            <h2 className="text-5xl md:text-7xl font-black font-montserrat italic text-white mb-16 leading-tight uppercase tracking-tighter">
              "Stories are not <span className="text-gold-gradient-start">to be told</span> - they are tools to awaken."
            </h2>

            <div className="prose prose-2xl prose-invert mx-auto text-gray-400 space-y-8 font-inter">
              <p>
                At Kgill+ Media, storytelling is at the heart of everything we do. As the Founder and CEO, I welcome you to a space where passion, diversity, and authenticity intersect.
              </p>
              <p>
                As a proud native of Kibera, I founded this movement with the belief that every story matters. Together, we are building bridges between local talent and global opportunities.
              </p>
            </div>

            <div className="mt-20 inline-flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold-gradient-start mb-6">
                <div className="w-full h-full bg-gold-gradient flex items-center justify-center">
                  <User className="w-12 h-12 text-charcoal" />
                </div>
              </div>
              <h5 className="text-2xl font-black font-montserrat text-white">Kevinne Mullick Ogollah</h5>
              <p className="text-gold-gradient-start font-black uppercase tracking-[0.3em] text-sm mt-2">Founder & CEO</p>
            </div>
          </ComponentInView>
        </div>
      </section>

      {/* Values - Grid System */}
      <section className="py-32 bg-[#0f0f12]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h6 className="text-[10px] font-black text-gold-gradient-start uppercase tracking-[0.5em] mb-4">Our DNA</h6>
              <h2 className="text-4xl md:text-6xl font-black font-montserrat italic text-white uppercase">Core <span className="text-gold-gradient-start">Values</span></h2>
            </div>
            <p className="hidden md:block text-gray-500 font-bold uppercase tracking-widest text-right">Empower. Educate. Entertain.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Creativity', icon: <Zap />, color: 'gold', text: 'We believe in the power of imagination to tell bold stories.' },
              { title: 'Authenticity', icon: <Heart />, color: 'cyan', text: 'Genuine African narratives that reflect lived experiences.' },
              { title: 'Empowerment', icon: <Users />, color: 'terracotta', text: 'Building platforms for underrepresented voices to be valued.' },
              { title: 'Collaboration', icon: <Target />, color: 'purple', text: 'Building bridges between local talent and global opportunities.' },
              { title: 'Social Impact', icon: <Globe />, color: 'blue', text: 'Addressing climate action, equality, and radical inclusion.' },
              { title: 'Excellence', icon: <Award />, color: 'gold', text: 'Ensuring every project delivered is impactful and professional.' }
            ].map((v, i) => (
              <ComponentInView key={i}>
                <div className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-gradient-start group-hover:text-charcoal transition-all">
                    {React.cloneElement(v.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-black font-montserrat text-white italic uppercase mb-4 tracking-wider">{v.title}</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">{v.text}</p>
                </div>
              </ComponentInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative p-12 md:p-24 bg-gold-gradient rounded-[60px] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 text-charcoal">
              <h2 className="text-4xl md:text-6xl font-black font-montserrat italic uppercase mb-6 leading-tight">
                Ready to tell <br />your story?
              </h2>
              <p className="text-charcoal/80 font-black uppercase tracking-[0.2em]">Join the movement today.</p>
            </div>
            <button className="group relative z-10 px-10 py-5 bg-charcoal text-white font-black rounded-2xl flex items-center gap-4 hover:scale-105 transition-all">
              START A PROJECT
              <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <YouTubePlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={activeVideoId}
        title="Kibera Workshops 2024"
      />
    </div>
  );
};

export default OurStory;