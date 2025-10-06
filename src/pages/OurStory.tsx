import React from 'react';
import { Users, Target, Heart, Zap, Award, Globe, Camera, Mic } from 'lucide-react';

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

      {/* Background Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6 text-marigold">
                WHO WE ARE?
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Kgill+ Media Hub is a creative and innovation hub based in Kibera, Nairobi, founded with the vision of amplifying African voices and reshaping narratives through digital storytelling and diverse art forms.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                We are committed to nurturing creativity, fostering innovation, and empowering young storytellers to use media and technology as tools for expression, advocacy, and transformation.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Our hub provides platforms where underrepresented and marginalized communities can share their authentic stories, access opportunities, and reimagine possibilities.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                As a collective of self-driven creatives, innovators, filmmakers, and change-makers, we believe in the power of art, media, and technology to drive social transformation, build empathy, and inspire action.
              </p>
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-charcoal" />
                </div>
                <h2 className="text-3xl font-bold font-montserrat text-marigold">
                  OUR MISSION
                </h2>
              </div>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                To empower marginalized & underrepresented voices through creative, innovative storytelling that inspires social change and community impact.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-montserrat text-cyan">
                  OUR VISION
                </h2>
              </div>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                To become Africa's leading hub for bold, authentic, and transformative stories driven by creativity and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              FOUNDER/CEO'S MESSAGE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-marigold to-terracotta mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
            <blockquote className="text-2xl md:text-3xl font-bold font-montserrat text-marigold mb-8 text-center italic">
              "Stories are not just to be told - they are tools to awaken, to challenge, and to build the Africa we deserve."
            </blockquote>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                At Kgill+ Media, storytelling is at the heart of everything we do.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                As the Founder and CEO, I am delighted to welcome you to a space where creativity meets innovation, and purpose drives impact.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Every project we undertake is infused with passion, diversity, and authenticity reflecting the vibrant spirit of our communities.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Our journey began with a simple but powerful vision: to harness the power of digital storytelling and the arts to amplify voices, address pressing social issues, and inspire meaningful change.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Over time, this vision has grown into a dynamic hub that not only produces powerful content but also empowers youth, nurtures talent, and builds platforms for underrepresented voices.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                As a proud native of Kibera, I founded Kgill+ Media with the belief that every story matters.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Through authentic narratives, we aim to reshape perspectives, challenge stereotypes, and reimagine the Africa we want to see.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Kgill+ Media is more than just a creative hub - it is a movement for social transformation and advocacy through the arts.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                Together with our partners, creatives, and community, we are building bridges between local talent and global opportunities.
              </p>
              
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Thank you for being part of our journey. With your support, we can continue to tell stories that matter, celebrate Africa's rich diversity, and create lasting impact.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-white">Kevinne Mullick Ogollah</h3>
                  <p className="text-gray-400 font-inter">Founder & CEO, Kgill+ Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">VALUES</span>
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              We Empower, Educate & Entertain people like you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-marigold/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-marigold">Creativity & Innovation</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    We believe in the power of imagination and innovation to tell bold stories, spark ideas, and create solutions that drive change.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-cyan">Authenticity</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    Every story matters. We are committed to telling genuine African narratives that reflect truth, diversity, and lived experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-terracotta/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-terracotta">Empowerment</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    We nurture and uplift youth, underrepresented voices, and communities, giving them platforms to be seen, heard, and valued.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-purple/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-purple">Collaboration</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    We thrive on partnerships, teamwork, and knowledge-sharing-building bridges between local talent and global opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-slate-blue/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-blue to-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-blue">Social Impact</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    Our work goes beyond storytelling; it addresses pressing issues such as education, climate action, gender equality, and inclusion.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-marigold/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-marigold">Excellence</h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    We uphold the highest standards in our craft, ensuring that every project we deliver is impactful, professional, and transformative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence & Client Driven Sections */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-marigold">EXCELLENCE</h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-4">
                We will always aim to meet and exceed our clients' expectations.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed mb-4">
                We look for ways with the team to achieve better service, quality content creations and products and committed to never-ending improvement.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed">
                We strive to meet the highest standards of everything we do.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-cyan">CLIENT DRIVEN</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                We believe that we succeed when our clients succeed. It's our clients that allow us to continue to do what we love, and our success is driven by how well we help others succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;