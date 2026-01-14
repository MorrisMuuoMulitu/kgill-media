import React, { useEffect, useState } from 'react';
import { Camera, Users, Play, ArrowRight, Tv, Film, BookOpen, Megaphone, Monitor, Loader2 } from 'lucide-react';
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">CREATE</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
            Kgill+ Media Hub is a creative and innovation hub using film, media, and art to tell powerful African stories, empower youth, and drive social change.
          </p>
          <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
            From films, podcasts, and community programs to workshops, advocacy, and media services, we create platforms where underrepresented voices are heard and celebrated.
          </p>
          <Link to="/kgill-tv" className="bg-gradient-to-r from-marigold to-terracotta text-white px-8 py-4 rounded-full font-inter font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto w-fit">
            <Play className="w-5 h-5" />
            Watch Our Reel
          </Link>
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
              <div key={index} className="group">
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient || 'from-marigold to-terracotta'} rounded-full flex items-center justify-center mb-6`}>
                    <div className="text-charcoal">
                      {iconMap[service.icon] || <Camera className="w-8 h-8" />}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-inter mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {(service.features || []).map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-marigold rounded-full"></div>
                        <span className="text-gray-300 font-inter text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-terracotta font-inter font-semibold text-sm">
                      {service.stats || 'Impactful Results'}
                    </span>
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
                      className="text-cyan hover:text-marigold transition-colors flex items-center gap-2 font-inter font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center flex-shrink-0">
                  <Film className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-white">Sinema Mtaani #ShortFilmSundays</h3>
                  <p className="text-gray-400 font-inter text-xs uppercase tracking-widest mt-1">Grassroots film program</p>
                </div>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed">
                A grassroots film program showcasing short films created by local creatives, providing a platform for youth to screen their work and engage with the community.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-terracotta font-inter font-semibold">Planned: Sinema Mtaani Festival in 2026</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan to-slate-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-white">Future Storytellers Creative Program</h3>
                  <p className="text-gray-400 font-inter text-xs uppercase tracking-widest mt-1">Mentorship and training program</p>
                </div>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed">
                A mentorship and training program equipping young people with skills in filmmaking, digital storytelling, and advocacy.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-cyan font-inter font-semibold">Target: Strategic partnerships with 100+ companies in 2025/2027</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-marigold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-white">Workshops & Creative Events</h3>
                  <p className="text-gray-400 font-inter text-xs uppercase tracking-widest mt-1">Training and networking</p>
                </div>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed">
                Training sessions, networking meetups, and film screenings that nurture collaboration and build capacity among young creatives.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-terracotta font-inter font-semibold">Achievement: 250k views across social media platforms for Kgill Tv</p>
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