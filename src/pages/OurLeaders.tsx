import React from 'react';
import { Linkedin, Award, Users } from 'lucide-react';

const OurLeaders = () => {
  const leaders = [
    {
      name: "Kenya Gill",
      title: "Founder & Creative Director",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader passionate about amplifying youth voices through innovative storytelling. With over 5 years in media production and community development.",
      quote: "Every story has the power to change the world. We're just here to make sure it gets told.",
      linkedin: "#",
      skills: ["Creative Direction", "Documentary Production", "Community Engagement"]
    },
    {
      name: "David Kimani",
      title: "Head of Production",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning filmmaker and podcast producer with expertise in technical production and narrative development.",
      quote: "Great stories require both technical excellence and emotional authenticity.",
      linkedin: "#",
      skills: ["Film Production", "Audio Engineering", "Project Management"]
    },
    {
      name: "Grace Wanjiku",
      title: "Community Engagement Lead",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dedicated to building bridges between communities and creating inclusive spaces for youth empowerment.",
      quote: "Real change happens when communities are at the center of their own stories.",
      linkedin: "#",
      skills: ["Community Organizing", "Workshop Facilitation", "Youth Development"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">LEADERS</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Meet the passionate individuals driving our mission to transform communities through 
            innovative storytelling and youth empowerment.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12">
            LEADERSHIP IMPACT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-marigold mb-2">15+</h3>
              <p className="text-gray-400 font-inter">Years Combined Experience</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-slate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-cyan mb-2">8</h3>
              <p className="text-gray-400 font-inter">Industry Awards</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-terracotta mb-2">500+</h3>
              <p className="text-gray-400 font-inter">Youth Mentored</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLeaders;