import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const TheFeed = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const posts = [
    {
      title: "5 Tips for Compelling Documentary Storytelling",
      excerpt: "Learn how to craft narratives that not only inform but inspire action and create lasting change in communities.",
      author: "Kenya Gill",
      date: "March 8, 2024",
      category: "storytelling",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      title: "The Rise of Youth-Led Innovation in Kenya",
      excerpt: "Exploring how young entrepreneurs are using technology to solve local challenges and drive economic growth.",
      author: "David Kimani",
      date: "March 5, 2024",
      category: "innovation",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Building Authentic Community Partnerships",
      excerpt: "How to establish meaningful collaborations that benefit both organizations and the communities they serve.",
      author: "Grace Wanjiku",
      date: "March 1, 2024",
      category: "community",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Podcast Production on a Budget",
      excerpt: "Essential tips and tools for creating professional-quality podcasts without breaking the bank.",
      author: "David Kimani",
      date: "February 25, 2024",
      category: "production",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Impact Measurement That Actually Matters",
      excerpt: "Moving beyond vanity metrics to track meaningful social change and community outcomes.",
      author: "Kenya Gill",
      date: "February 20, 2024",
      category: "impact",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'storytelling', label: 'Storytelling' },
    { key: 'innovation', label: 'Innovation' },
    { key: 'community', label: 'Community' },
    { key: 'production', label: 'Production' },
    { key: 'impact', label: 'Impact' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">FEED</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Insights, stories, and conversations from the frontlines of youth-led innovation 
            and social change across Kenya.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-marigold to-terracotta text-charcoal'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'all' && (
        <section className="py-12 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-3 py-1 rounded-full text-sm font-inter font-semibold">
                      Featured
                    </span>
                    <span className="text-cyan text-sm font-inter font-semibold capitalize">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold font-montserrat text-white mb-4 group-hover:text-marigold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 font-inter leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-terracotta" />
                      <span className="text-gray-300 font-inter text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-marigold font-inter font-semibold hover:text-terracotta transition-colors group">
                    Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-12 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-inter capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-montserrat text-white mb-3 group-hover:text-marigold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 font-inter mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-terracotta" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <button className="text-cyan hover:text-marigold transition-colors font-inter font-semibold text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            STAY IN THE LOOP
          </h2>
          <p className="text-xl text-gray-400 font-inter mb-8 leading-relaxed">
            Get the latest insights, stories, and opportunities delivered to your inbox every month.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Join 500+ changemakers who never miss an update
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheFeed;