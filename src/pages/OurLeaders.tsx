import React from 'react';
import { Linkedin, Award, Users, Camera, Heart, Zap, User } from 'lucide-react';

const OurLeaders = () => {
  const leaders = [
    {
      name: "Kevinne Mullick O.",
      title: "Founder/Ceo",
      bio: "Founder & CEO of Kgill+ Media. Visionary leader passionate about amplifying African voices through innovative storytelling. With deep roots in Kibera, Kevinne has over 4 years in media production and community development.",
      quote: "Stories are not just to be told - they are tools to awaken, to challenge, and to build the Africa we deserve.",
      linkedin: "#",
      skills: ["Creative Direction", "Storytelling", "Community Engagement", "Leadership"]
    },
    {
      name: "Gillian Akinyi",
      title: "Hr/Admin",
      bio: "Human Resources and Administration lead responsible for managing organizational operations, employee relations, and administrative functions to ensure smooth day-to-day operations.",
      quote: "Strong organizations are built on strong foundations of people and processes.",
      linkedin: "#",
      skills: ["Human Resources", "Administration", "Operations Management", "Team Development"]
    },
    {
      name: "Alex Omiele",
      title: "Communication Director",
      bio: "Communication Director responsible for developing and implementing strategic communication plans, managing public relations, and ensuring consistent messaging across all platforms.",
      quote: "Effective communication is the bridge between confusion and clarity.",
      linkedin: "#",
      skills: ["Public Relations", "Strategic Communication", "Media Relations", "Brand Management"]
    },
    {
      name: "Debbie Atieno",
      title: "Programs Director",
      bio: "Programs Director overseeing the development, implementation, and evaluation of all organizational programs and initiatives to ensure alignment with mission and goals.",
      quote: "Programs that matter create lasting impact in communities.",
      linkedin: "#",
      skills: ["Program Management", "Project Development", "Impact Assessment", "Community Outreach"]
    },
    {
      name: "Bernard Maingi",
      title: "Production Lead",
      bio: "Production Lead managing all aspects of media production including filming, editing, and post-production to deliver high-quality content for all platforms.",
      quote: "Quality production brings stories to life in powerful ways.",
      linkedin: "#",
      skills: ["Film Production", "Video Editing", "Post-Production", "Content Creation"]
    },
    {
      name: "Diana Osale Atsula",
      title: "Partnership Director",
      bio: "Partnership Director responsible for building and maintaining strategic relationships with organizations, sponsors, and collaborators to expand our reach and impact.",
      quote: "Strong partnerships multiply our ability to create change.",
      linkedin: "#",
      skills: ["Partnership Development", "Relationship Building", "Strategic Alliances", "Collaboration"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">TEAM</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Meet the passionate individuals driving our mission to transform communities through
            innovative storytelling and youth empowerment.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">TEAM</span>
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto leading-relaxed">
              The Kgill+ Media Hub team is a collective of passionate creatives, filmmakers, storytellers, and innovators united by a shared mission to amplify African voices.
            </p>
            <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto mt-4 leading-relaxed">
              Rooted in community and driven by excellence, our team blends diverse skills in media production, storytelling, advocacy, and innovation to deliver impactful projects.
            </p>
            <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto mt-4 leading-relaxed">
              Together, we embody the spirit of collaboration, creativity, and social transformation turning ideas into stories that inspire change.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group">
                    <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-700 group-hover:border-marigold/50 transition-all duration-500">
                      <div className="w-24 h-24 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mb-4 opacity-50">
                        <User className="w-12 h-12 text-charcoal" />
                      </div>
                      <p className="text-gray-400 font-inter font-semibold text-lg">Photo Coming Soon</p>
                      <p className="text-gray-500 font-inter text-sm mt-2">Professional headshot in progress</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-2">
                        {leader.name}
                      </h2>
                      <p className="text-xl text-marigold font-inter font-semibold mb-4">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-gray-300 font-inter leading-relaxed text-lg">
                      {leader.bio}
                    </p>
                    <blockquote className="border-l-4 border-terracotta pl-6 italic text-gray-400 font-inter text-lg">
                      "{leader.quote}"
                    </blockquote>
                    <div className="space-y-4">
                      <h4 className="font-inter font-semibold text-white flex items-center gap-2">
                        <Award className="w-5 h-5 text-cyan" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm font-inter"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={leader.linkedin}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-marigold to-terracotta text-white px-6 py-3 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12">
            TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">IMPACT</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-marigold mb-2">6+</h3>
              <p className="text-gray-400 font-inter">Core Team Members</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-cyan mb-2">4+</h3>
              <p className="text-gray-400 font-inter">Years of Experience</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-terracotta mb-2">1000+</h3>
              <p className="text-gray-400 font-inter">Community Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Growth Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">GROWTH</span>
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              Our Growth Creative Economy In Media & Entertainment Industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-marigold">Industry Recognition</h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                Kgill+ Media has accumulated a lot of expertise via service development over the years in our four years in the business since we started and two years of complete professionalism.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed">
                We have been nominated and won various prizes, including SOYA awards, Nairobi Photographer of the Year, Nabla awards, and 35awards.
              </p>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-cyan">Client Success</h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                We've covered high-end client events including Mac&More enterprise events, The Tononoka Steels, Kenya Fashion Awards, Kenya Colour Run, Global Peace Foundation, Stirling University, and others.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed">
                We've hit 250k views across social media platforms for Kgill Tv
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-charcoal rounded-2xl border border-slate-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold font-montserrat mb-4 text-marigold">Financial Goals</h4>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Proposed Revenue: Kshs.7.87 Million for the financial year 2025/2027. The revenue will be from profits, grants, crowdfunding & seedings.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold font-montserrat mb-4 text-cyan">Infrastructure Development</h4>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Building an Ultra modern creative & Innovation Hub, fully equipped with resources to produce world class level productions & a capacity to support creatives.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold font-montserrat mb-4 text-terracotta">Equipment Investment</h4>
                <p className="text-gray-300 font-inter leading-relaxed">
                  We target to purchase equipments for production of the organisation to support our productions and our programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLeaders;