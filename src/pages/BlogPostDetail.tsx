import React, { useState } from 'react';
import { Calendar, User, Clock, Eye, ArrowLeft, Facebook, Twitter, Linkedin, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const BlogPostDetail = () => {
  // const { id } = useParams();
  // In a real app, we would use the id to fetch the specific blog post
  // const postId = parseInt(id || '1');
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Sample blog post data (in a real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: "The Power of Community Storytelling in Modern Media",
    excerpt: "How grassroots narratives are reshaping the way we consume and create content in the digital age.",
    content: `
      <p>In today's interconnected world, community storytelling has emerged as a powerful force in shaping media landscapes. This shift represents more than just a trend—it's a fundamental change in how narratives are conceived, produced, and distributed.</p>
      
      <p>At KGILL Media, we've witnessed firsthand how empowering communities to tell their own stories creates authentic, impactful content that resonates with diverse audiences. Our Sinema Mtaani project exemplifies this approach, bringing filmmaking directly to neighborhoods and allowing residents to document their lived experiences.</p>
      
      <p>Through this initiative, we've discovered that community-driven narratives often carry an emotional depth and authenticity that traditional media approaches struggle to achieve. The democratization of storytelling tools—from smartphones to accessible editing software—has further accelerated this movement, enabling anyone with a story to become a content creator.</p>
      
      <blockquote class="premium-card p-6 my-8 border-l-4 border-gold-gradient-start">
        <p class="text-xl italic text-gray-300">"Community storytelling isn't just about telling stories—it's about reclaiming narratives and ensuring that our voices are heard on our own terms."</p>
        <cite class="mt-4 block text-gold-gradient-start font-bold">— Kenya Gill, Founder & Creative Director</cite>
      </blockquote>
      
      <p>This transformation challenges established media hierarchies and creates space for previously underrepresented voices to gain visibility and influence. As we continue to invest in community storytelling initiatives, we're committed to fostering environments where local narratives can flourish while maintaining professional production standards.</p>
      
      <h3 class="text-2xl font-bold font-montserrat mb-4 mt-8">The Technology Factor</h3>
      
      <p>The accessibility of modern technology has been instrumental in this evolution. Smartphones with high-quality cameras, cloud-based editing platforms, and social media distribution channels have dramatically lowered the barriers to entry for aspiring storytellers. This technological democratization means that compelling narratives can emerge from anywhere, not just traditional media hubs.</p>
      
      <p>However, technology alone isn't enough. Successful community storytelling requires investment in training, mentorship, and ongoing support. At KGILL Media, we've developed comprehensive programs that combine technical instruction with storytelling fundamentals, ensuring that our community partners have both the tools and the skills needed to create meaningful content.</p>
      
      <h3 class="text-2xl font-bold font-montserrat mb-4 mt-8">Impact and Outcomes</h3>
      
      <p>The results of our community storytelling initiatives have been remarkable. Beyond the immediate content creation, these programs have fostered stronger community bonds, provided economic opportunities for local creators, and amplified voices that might otherwise go unheard.</p>
      
      <p>We've seen community members who started as participants evolve into program leaders, mentoring newcomers and developing their own independent projects. This organic leadership development is perhaps the most valuable outcome—creating sustainable ecosystems where storytelling can thrive for years to come.</p>
    `,
    image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Kenya Gill",
      bio: "Founder & Creative Director at KGILL Media",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    date: "2023-06-15",
    category: "Community",
    tags: ["Storytelling", "Community", "Media"],
    readTime: "5 min read",
    views: "1.2K",
    likes: 42
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Behind the Scenes: Creating Africa's Next Documentary Sensation",
      excerpt: "An inside look at the production process of our latest documentary series featuring young African changemakers.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-05-22",
      category: "Documentary"
    },
    {
      id: 3,
      title: "Digital Griot: Preserving African Oral Traditions in the Modern Age",
      excerpt: "Exploring how technology can enhance rather than replace traditional storytelling methods.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-04-18",
      category: "Culture"
    },
    {
      id: 4,
      title: "Workshop Report: Empowering Young Creatives Through Media Literacy",
      excerpt: "Results and insights from our recent media literacy workshop series across Nairobi.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-03-30",
      category: "Education"
    }
  ];

  const handleShare = (platform: string) => {
    // In a real app, this would trigger actual sharing functionality
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Back to Blog Link */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gold-gradient-start hover:text-gold-gradient-end transition-colors font-inter font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
              {blogPost.category}
            </span>
          </div>
          
          <h1 className="display-1 font-montserrat mb-8 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <OptimizedImage 
                  src={blogPost.author.avatar} 
                  alt={blogPost.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold font-montserrat">{blogPost.author.name}</div>
                <div className="text-sm">{blogPost.author.bio}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{blogPost.readTime}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{blogPost.views}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {blogPost.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-charcoal/50 text-gray-400 rounded-full text-sm font-inter"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 premium-hover-gold">
          <OptimizedImage 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none mb-12">
          <div 
            className="text-gray-300 font-inter text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  liked 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'bg-charcoal/50 text-gray-400 hover:bg-charcoal/70'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>{blogPost.likes + (liked ? 1 : 0)}</span>
              </button>
              
              <button 
                onClick={() => setBookmarked(!bookmarked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  bookmarked 
                    ? 'bg-gold-gradient/20 text-gold-gradient-start' 
                    : 'bg-charcoal/50 text-gray-400 hover:bg-charcoal/70'
                }`}
              >
                <BookmarkPlus className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                <span>{bookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-inter">Share:</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 rounded-xl bg-charcoal/50 text-gray-400 hover:bg-facebook hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 rounded-xl bg-charcoal/50 text-gray-400 hover:bg-twitter hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="w-10 h-10 rounded-xl bg-charcoal/50 text-gray-400 hover:bg-linkedin hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="display-2 font-montserrat mb-12 epic-text text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article 
                key={post.id} 
                className="premium-card premium-hover-gold"
              >
                <Link to={`/blog/${post.id}`}>
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
                  
                  <p className="text-gray-400 font-inter mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="display-2 font-montserrat mb-12 epic-text">Join the Conversation</h2>
          
          <div className="premium-card p-8">
            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-charcoal/50 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <textarea 
                  placeholder="Share your thoughts..." 
                  className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-gradient-start min-h-[120px]"
                ></textarea>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4 text-gray-500">
                    <button className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>Add Comment</span>
                    </button>
                  </div>
                  
                  <button className="btn-primary px-6 py-3 premium-hover-gold">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-montserrat mb-2">No comments yet</h3>
                <p className="text-gray-500 font-inter">Be the first to share your thoughts on this article.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;