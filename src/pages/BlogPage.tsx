import React, { useState } from 'react';
import { Calendar, User, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Community Storytelling in Modern Media",
      excerpt: "How grassroots narratives are reshaping the way we consume and create content in the digital age.",
      content: "In today's interconnected world, community storytelling has emerged as a powerful force in shaping media landscapes. This shift represents more than just a trend—it's a fundamental change in how narratives are conceived, produced, and distributed. At KGILL Media, we've witnessed firsthand how empowering communities to tell their own stories creates authentic, impactful content that resonates with diverse audiences. Our Sinema Mtaani project exemplifies this approach, bringing filmmaking directly to neighborhoods and allowing residents to document their lived experiences. Through this initiative, we've discovered that community-driven narratives often carry an emotional depth and authenticity that traditional media approaches struggle to achieve. The democratization of storytelling tools—from smartphones to accessible editing software—has further accelerated this movement, enabling anyone with a story to become a content creator. This transformation challenges established media hierarchies and creates space for previously underrepresented voices to gain visibility and influence. As we continue to invest in community storytelling initiatives, we're committed to fostering environments where local narratives can flourish while maintaining professional production standards.",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Kenya Gill",
      date: "2023-06-15",
      category: "Community",
      tags: ["Storytelling", "Community", "Media"],
      readTime: "5 min read",
      views: "1.2K"
    },
    {
      id: 2,
      title: "Behind the Scenes: Creating Africa's Next Documentary Sensation",
      excerpt: "An inside look at the production process of our latest documentary series featuring young African changemakers.",
      content: "Documentary filmmaking requires patience, persistence, and an unwavering commitment to truth. Our latest series, 'Voices of the Youth,' took our team six months to complete, involving extensive research, travel across three countries, and countless hours of interviews. The process began with identifying compelling subjects whose stories embodied the spirit of African innovation and resilience. We collaborated with local organizations to access communities often overlooked by mainstream media. Each episode required careful coordination between our production crew, cultural liaisons, and community leaders to ensure respectful representation. Technical challenges included adapting to varying lighting conditions, managing power outages, and working with limited internet connectivity in remote locations. Despite these obstacles, our team remained focused on capturing authentic moments that would resonate with global audiences. Post-production involved meticulous editing to maintain narrative coherence while preserving the raw emotion of each interview. The final product represents months of dedication to showcasing Africa's untold stories with the dignity and complexity they deserve. This project reinforced our belief that meaningful storytelling requires investment in both time and human relationships.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Amina Hassan",
      date: "2023-05-22",
      category: "Documentary",
      tags: ["Documentary", "Production", "Behind-the-Scenes"],
      readTime: "7 min read",
      views: "2.4K"
    },
    {
      id: 3,
      title: "Digital Griot: Preserving African Oral Traditions in the Modern Age",
      excerpt: "Exploring how technology can enhance rather than replace traditional storytelling methods.",
      content: "The concept of the griot—a West African storyteller, praise singer, and oral historian—represents centuries of cultural preservation. In our increasingly digital world, we face the challenge of honoring these traditions while embracing new mediums. Our 'Digital Griot' initiative explores this intersection through multimedia installations, podcast series, and interactive exhibits that blend traditional oral narratives with contemporary technology. Working with elder griots, we've documented stories passed down through generations, then transformed them into immersive digital experiences that engage younger audiences. This process involves careful collaboration to ensure technological adaptation doesn't dilute cultural significance. Audio recordings capture the melodic cadence and linguistic nuances that written text cannot replicate. Visual elements—including animations and archival photographs—complement verbal narratives without overwhelming them. Our approach prioritizes community ownership, ensuring that traditional storytellers maintain control over how their heritage is represented digitally. The project has sparked conversations about intellectual property rights, cultural appropriation, and the responsibility of media creators working with indigenous knowledge systems. Early feedback suggests that digital platforms can indeed serve as vessels for traditional wisdom when developed respectfully and collaboratively.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Ochieng",
      date: "2023-04-18",
      category: "Culture",
      tags: ["Culture", "Tradition", "Technology"],
      readTime: "6 min read",
      views: "1.8K"
    },
    {
      id: 4,
      title: "Workshop Report: Empowering Young Creatives Through Media Literacy",
      excerpt: "Results and insights from our recent media literacy workshop series across Nairobi.",
      content: "Media literacy education empowers individuals to critically analyze and responsibly create media content. Our workshop series, conducted in partnership with local schools and community centers, aimed to develop these skills among young people aged 15-25. Over eight weeks, participants learned to deconstruct advertisements, identify bias in news reporting, and create their own multimedia projects. The curriculum combined theoretical concepts with hands-on activities, including video production, podcast recording, and social media content creation. Participants worked in teams to produce short documentaries addressing community issues they identified. This collaborative approach fostered both technical skills and critical thinking abilities. Assessment revealed significant improvement in participants' ability to evaluate source credibility and recognize manipulative messaging techniques. Many expressed increased confidence in their creative capabilities and interest in pursuing media-related careers. The program's success has prompted expansion to additional neighborhoods, with plans to develop online resources for broader accessibility. Testimonials from participants highlighted how the workshops transformed their relationship with media from passive consumption to active engagement. Several graduates have joined our internship program, demonstrating the pipeline potential of investing in media literacy education.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "2023-03-30",
      category: "Education",
      tags: ["Workshop", "Education", "Media Literacy"],
      readTime: "4 min read",
      views: "980"
    },
    {
      id: 5,
      title: "Studio Spotlight: Behind the Lens with KGILL Media's Photography Team",
      excerpt: "Meet the talented photographers bringing African stories to life through their lenses.",
      content: "Photography captures fleeting moments and transforms them into lasting memories. Our photography team combines technical expertise with cultural sensitivity to create compelling visual narratives. Each photographer brings unique perspectives shaped by their backgrounds and experiences across the continent. Lead photographer Kenya Gill specializes in documentary work, focusing on social justice themes and community resilience. Her approach emphasizes building trust with subjects, often spending weeks in communities before taking a single photograph. Portrait specialist Amina Hassan draws inspiration from classical African portraiture traditions while incorporating contemporary styling. Her studio work celebrates individual dignity and cultural pride. Wildlife and landscape photographer Michael Ochieng documents Africa's natural beauty, highlighting conservation efforts and ecological challenges. His technical mastery enables him to capture dramatic lighting conditions and intimate animal behaviors. The team collaborates closely with our videography department, ensuring visual consistency across projects. Recent assignments have taken them from bustling Nairobi markets to remote Ethiopian villages, each location requiring adaptation to local customs and environmental conditions. Equipment considerations include durability in harsh climates and portability for extended fieldwork. Client relationships depend on clear communication about project goals and realistic timelines. The team's collective portfolio demonstrates photography's power to bridge cultural divides and create universal emotional connections.",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Kenya Gill",
      date: "2023-02-14",
      category: "Photography",
      tags: ["Photography", "Studio", "Behind-the-Scenes"],
      readTime: "5 min read",
      views: "1.5K"
    },
    {
      id: 6,
      title: "Future of African Media: Trends Shaping Tomorrow's Content Landscape",
      excerpt: "Industry predictions and emerging technologies that will define African media in the coming decade.",
      content: "The African media landscape is experiencing unprecedented transformation driven by technological advancement and demographic shifts. Mobile-first content consumption dominates, with smartphone penetration reaching previously underserved populations. This trend favors short-form video content, interactive storytelling, and social commerce integration. Local language content is gaining prominence as platforms recognize the commercial potential of non-English speaking audiences. Regional dialects that were historically marginalized in mainstream media now find expression through digital channels. Streaming platforms are investing heavily in original African content, moving beyond international co-productions to authentically local narratives. This shift creates opportunities for indigenous storytelling while challenging creators to balance commercial viability with cultural authenticity. Artificial intelligence tools are becoming accessible to independent producers, reducing barriers to entry for special effects, color correction, and sound mixing. Virtual and augmented reality technologies present opportunities for immersive cultural experiences and educational content. However, infrastructure challenges—including inconsistent electricity supply and limited broadband access—continue to constrain growth in rural areas. Content monetization remains complex, with piracy and ad-blocking technologies affecting revenue streams. The rise of creator economies offers alternative funding models through direct audience support and brand partnerships. Regulatory frameworks are evolving to address digital rights, data privacy, and cross-border content distribution. These developments suggest an exciting future where African voices gain global recognition while maintaining cultural integrity.",
      image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Ochieng",
      date: "2023-01-20",
      category: "Industry",
      tags: ["Industry", "Trends", "Future"],
      readTime: "8 min read",
      views: "3.1K"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'Community', label: 'Community' },
    { key: 'Documentary', label: 'Documentary' },
    { key: 'Culture', label: 'Culture' },
    { key: 'Education', label: 'Education' },
    { key: 'Photography', label: 'Photography' },
    { key: 'Industry', label: 'Industry' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden premium-bg">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                OUR BLOG
              </span>
            </div>
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">KGILL Media</span>
              <span className="block epic-text">Insights & Stories</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto">
              Behind-the-scenes insights, industry trends, and thought leadership from Africa's 
              leading youth-driven creative movement.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative w-full sm:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-gradient-start"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="display-2 font-montserrat mb-4 epic-text">Latest Articles</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl">
                Explore our collection of insights, behind-the-scenes stories, and industry perspectives
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-gold-gradient text-charcoal'
                      : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
                  } premium-hover-gold`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="premium-card premium-hover-gold"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <OptimizedImage 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-gradient text-charcoal rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-gold-gradient-start transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 font-inter mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-charcoal/50 text-gray-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="display-2 font-montserrat mb-6 epic-text">Stay Informed</h2>
          <p className="text-2xl text-gray-400 font-inter mb-10 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest stories, insights, and updates 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-gradient-start"
            />
            <button className="btn-primary px-8 py-4 premium-hover-gold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;