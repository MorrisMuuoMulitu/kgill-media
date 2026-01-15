import React, { useEffect, useState } from 'react';
import { Camera, Users, Play, ArrowRight, Tv, Film, BookOpen, Megaphone, Monitor, Loader2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const iconMap: { [key: string]: React.ReactNode } = {
  Camera: <Camera className="w-8 h-8" />,
  Film: <Film className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Monitor: <Monitor className="w-8 h-8" />,
  Tv: <Tv className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
};

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon?: string;
  features?: string[];
  details?: string;
}

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
}

const WhatWeDo = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [
        { data: servicesData },
        { data: caseData }
      ] = await Promise.all([
        supabase.from('services').select('*').order('id'),
        supabase.from('case_studies').select('*').order('id')
      ]);

      if (servicesData) setServices(servicesData);
      if (caseData) setCaseStudies(caseData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-gold-gradient-start animate-spin" />
        <p className="text-gray-500 font-bold uppercase tracking-widest animate-pulse">Loading Excellence...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Premium Redesign */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-charcoal via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan/20 to-slate-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-gold-gradient" />
              <span className="text-gold-gradient font-bold text-sm tracking-wider">CREATIVE INNOVATION HUB</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-8 leading-tight">
              <span className="block text-white mb-2">What We</span>
              <span className="block bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta bg-clip-text text-transparent">Create</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-6 max-w-4xl mx-auto leading-relaxed">
              A creative and innovation hub using <span className="text-gold-gradient font-bold">film</span>, <span className="text-cyan font-bold">media</span>, and <span className="text-terracotta font-bold">art</span> to tell powerful African stories, empower youth, and drive social change.
            </p>

            <p className="text-lg text-gray-400 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
              From films and podcasts to community programs, workshops, and advocacy—we create platforms where underrepresented voices are heard and celebrated.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kgill-tv"
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta text-charcoal font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  <span>Watch Our Reel</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta via-marigold to-gold-gradient-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/photography-videography"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-gold-gradient/50 transition-all duration-300 flex items-center gap-3"
              >
                <Camera className="w-6 h-6" />
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              "Our services are designed to merge creativity with strategy, delivering impact that lasts."
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gold-gradient-start/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#0f0f12]/80 backdrop-blur-xl rounded-[40px] p-10 border border-white/5 group-hover:border-gold-gradient-start/30 transition-all duration-500 h-full flex flex-col shadow-2xl">
                  <div className={`w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                    <div className="text-gold-gradient-start">
                      {iconMap[service.icon] || <Camera className="w-10 h-10" />}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black font-montserrat text-white mb-4 italic uppercase tracking-tight">
                    {service.title.split(' ')[0]} <span className="text-gold-gradient-start">{service.title.split(' ').slice(1).join(' ')}</span>
                  </h3>

                  <p className="text-gray-400 font-inter mb-8 leading-relaxed text-lg flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {(service.features || []).map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                        <div className="w-1.5 h-1.5 bg-gold-gradient-start rounded-full shadow-[0_0_8px_rgba(255,179,71,0.6)]"></div>
                        <span className="text-gray-300 font-inter text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Impact</span>
                      <span className="text-gold-gradient-start font-black text-sm uppercase">
                        {service.stats || 'Premium Delivery'}
                      </span>
                    </div>
                    <Link
                      to={
                        service.title.includes("Media Production") || service.title.includes("Documentary")
                          ? "/photography-videography"
                          : service.title.includes("Shows & Podcasts")
                            ? "/kgill-tv"
                            : service.title.includes("Workshops") || service.title.includes("Community")
                              ? "/workshops"
                              : "/what-we-do"
                      }
                      className="w-12 h-12 bg-white/5 hover:bg-gold-gradient rounded-full flex items-center justify-center text-white hover:text-charcoal transition-all duration-300 border border-white/10"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KGILL TV Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              KGILL <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">TV</span>
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              "The Real People Show is a talk show where the conversations are pure, honest and authentic, addressing the real issues being said on this show, it's all about #THEREALPEOPLESHOW"
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold font-montserrat mb-6 text-marigold">
                  KGILL TV Streaming Platform
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed mb-6">
                  Kgill TV is our official streaming platform available on both YouTube and the Kgill TV website dedicated to showcasing bold, authentic, and diverse African stories.
                </p>
                <p className="text-gray-300 font-inter leading-relaxed mb-6">
                  Through films, documentaries, shows, and podcasts, Kgill TV provides a space where underrepresented voices are heard, celebrated, and shared with the world.
                </p>
                <p className="text-gray-300 font-inter leading-relaxed mb-6">
                  Designed with grassroots communities in mind, Kgill TV is a reliable, user-friendly, and affordable platform that ensures access to quality content without barriers.
                </p>
                <p className="text-gray-300 font-inter leading-relaxed">
                  More than entertainment, it is a hub for social advocacy, cultural expression, and youth empowerment, giving audiences content that educates, inspires, and transforms perspectives.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="https://www.youtube.com/@KGILLPlusMedia" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-marigold to-terracotta text-white px-6 py-3 rounded-full font-inter font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Visit YouTube Channel
                  </a>
                  <Link to="/kgill-tv" className="border-2 border-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-inter font-semibold hover:bg-white/10 transition-all duration-300">
                    Visit Website
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center">
                      <Tv className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-montserrat text-white">At The Real People Talk Show</h4>
                      <p className="text-gray-400 font-inter">#THEREALPEOPLESHOW</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                      <h5 className="font-inter font-semibold text-white mb-2">Contact Information</h5>
                      <p className="text-gray-400 font-inter text-sm">Email: kgillcompany@gmail.com</p>
                      <p className="text-gray-400 font-inter text-sm">Mobile No: 0757749883</p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-xl">
                      <h5 className="font-inter font-semibold text-white mb-2">For More Info</h5>
                      <p className="text-gray-400 font-inter text-sm">0785634805774</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR PROJECT HIGHLIGHTS
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              We have delivered high-quality services to a variety of clientele; here are a few of the major projects we have executed.
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.length === 0 ? (
              <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-500 font-bold uppercase tracking-widest italic">New Projects Coming Soon</p>
              </div>
            ) : (
              caseStudies.map((study, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                  }`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <Link
                      to={study.video_url || '/kgill-tv'}
                      className="relative group block cursor-pointer"
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl">
                          <Play className="w-10 h-10 text-charcoal ml-1" />
                        </div>
                      </div>
                    </Link>
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
                          <h4 className="font-inter font-semibold text-terracotta mb-2 text-sm uppercase tracking-wider">The Challenge</h4>
                          <p className="text-gray-300 font-inter leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-cyan mb-2 text-sm uppercase tracking-wider">Our Solution</h4>
                          <p className="text-gray-300 font-inter leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-marigold mb-2 text-sm uppercase tracking-wider">The Impact</h4>
                          <p className="text-gray-300 font-inter leading-relaxed">{study.impact}</p>
                        </div>
                      </div>
                      <Link
                        to={study.video_url || '/kgill-tv'}
                        className="bg-gradient-to-r from-marigold to-terracotta text-white px-6 py-3 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 inline-flex"
                      >
                        Watch Full Episode <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              PROJECTS OVERVIEW
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              At Kgill+ Media Hub, our projects reflect our passion for storytelling, innovation, and social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-[#0f0f12]/80 backdrop-blur-xl rounded-[40px] border border-white/5 hover:border-gold-gradient-start/30 transition-all duration-500 shadow-2xl group">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-gold-gradient-start/50 transition-all">
                  <Film className="w-8 h-8 text-gold-gradient-start" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-montserrat text-white uppercase italic leading-tight">Sinema Mtaani <br /><span className="text-gold-gradient-start">#ShortFilmSundays</span></h3>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-2">Grassroots Cinema</p>
                </div>
              </div>
              <p className="text-gray-400 font-inter leading-relaxed text-lg mb-8">
                A grassroots film program showcasing short films created by local creatives, providing a platform for youth to screen their work and engage with the community.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-gold-gradient-start font-black text-xs uppercase tracking-widest">Roadmap: Sinema Mtaani Festival 2026</p>
              </div>
            </div>

            <div className="p-10 bg-[#0f0f12]/80 backdrop-blur-xl rounded-[40px] border border-white/5 hover:border-gold-gradient-start/30 transition-all duration-500 shadow-2xl group">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-gold-gradient-start/50 transition-all">
                  <BookOpen className="w-8 h-8 text-gold-gradient-start" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-montserrat text-white uppercase italic leading-tight">Future <br /><span className="text-gold-gradient-start">Storytellers</span></h3>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-2">Mentorship Program</p>
                </div>
              </div>
              <p className="text-gray-400 font-inter leading-relaxed text-lg mb-8">
                A mentorship and training program equipping young people with skills in filmmaking, digital storytelling, and advocacy.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-gold-gradient-start font-black text-xs uppercase tracking-widest">Target: 100+ Partnerships by 2027</p>
              </div>
            </div>

            <div className="p-10 bg-[#0f0f12]/80 backdrop-blur-xl rounded-[40px] border border-white/5 hover:border-gold-gradient-start/30 transition-all duration-500 shadow-2xl group">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-gold-gradient-start/50 transition-all">
                  <Users className="w-8 h-8 text-gold-gradient-start" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-montserrat text-white uppercase italic leading-tight">Creative <br /><span className="text-gold-gradient-start">Workshops</span></h3>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-2">Co-creation</p>
                </div>
              </div>
              <p className="text-gray-400 font-inter leading-relaxed text-lg mb-8">
                Training sessions, networking meetups, and film screenings that nurture collaboration and build capacity among young creatives.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-gold-gradient-start font-black text-xs uppercase tracking-widest">Achievement: 250k+ Impressions across KGILL TV</p>
              </div>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:kgillcompany@gmail.com" className="bg-gradient-to-r from-marigold to-terracotta text-white px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get A Quote <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/photography-videography" className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;