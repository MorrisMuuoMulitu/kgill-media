import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "mastering-portrait-photography",
    title: "Mastering Portrait Photography: Lighting Techniques",
    excerpt: "Learn how to use natural and artificial light to create stunning portrait shots that capture personality and emotion.",
    category: "Photography Tips",
    date: "May 15, 2023",
    readTime: "5 min read",
    content: `Lighting is the most crucial element in portrait photography. Understanding how to manipulate light can transform an ordinary portrait into an extraordinary one.\n\nNatural light offers a soft, even illumination that flatters most subjects. The golden hour, during the first hour after sunrise and the last hour before sunset, provides warm, directional light that creates beautiful shadows and highlights.\n\nWhen using artificial light, consider the direction and quality. Front lighting illuminates the subject's face evenly but can appear flat. Side lighting creates depth and dimension but may cast unflattering shadows. Rembrandt lighting, a classic portrait lighting setup, creates a triangle of light on the shadowed side of the face.\n\nReflectors and diffusers are invaluable tools for modifying natural light. A reflector can bounce light into shadowed areas, while a diffuser can soften harsh sunlight. Experiment with different materials to see how they affect the quality of light.`,
    author: "KGILL Studios"
  },
  {
    id: 2,
    slug: "perfect-photoshoot-location",
    title: "Choosing the Perfect Location for Your Photoshoot",
    excerpt: "From urban landscapes to natural settings, discover how location can elevate your photography and complement your subject.",
    category: "Location Guide",
    date: "June 2, 2023",
    readTime: "7 min read",
    content: `Selecting the right location for your photoshoot is as important as understanding lighting. The location should complement your subject and enhance the story you want to tell.\n\nUrban environments offer unique textures, architectural elements, and vibrant backgrounds. Concrete walls, geometric patterns, and cityscapes can create dramatic, contemporary portraits. Look for interesting light patterns created by buildings and consider how the urban landscape reflects your subject's personality.\n\nNatural settings provide soft, organic backgrounds that place the focus on the subject. Forests offer dappled light and earthy tones, beaches provide expansive skies and horizons, and fields create open, free-spirited images. Consider the seasonal changes when choosing natural locations.\n\nWhen scouting locations, always consider the time of day, weather conditions, permits required, and accessibility. Visit the location beforehand to identify the best spots for your shoot. Pay attention to potential distractions like power lines, trash cans, or other elements that might detract from the image.`,
    author: "KGILL Studios"
  },
  {
    id: 3,
    slug: "camera-settings-beginners",
    title: "Understanding Camera Settings for Beginners",
    excerpt: "An essential guide to aperture, shutter speed, and ISO for newcomers to photography.",
    category: "Beginner's Guide",
    date: "April 18, 2023",
    readTime: "8 min read",
    content: `Photography is a balance of three critical settings: aperture, shutter speed, and ISO. Mastering these settings gives you complete creative control over your images.\n\nAperture controls the size of the lens opening and affects depth of field. A wide aperture (small f-number like f/1.4) creates a shallow depth of field, blurring the background and isolating the subject. A narrow aperture (large f-number like f/16) keeps more of the scene in focus, ideal for landscapes.\n\nShutter speed determines how long the camera sensor is exposed to light. Fast shutter speeds (1/500s or faster) freeze motion, perfect for sports or wildlife photography. Slow shutter speeds (1/30s or slower) create motion blur, useful for conveying movement or capturing light trails.\n\nISO controls the camera sensor's sensitivity to light. Lower ISO values (100-400) produce clean images with minimal noise but require more light. Higher ISO values (1600+) allow shooting in low-light conditions but may introduce digital noise. Always use the lowest ISO possible for the lighting conditions.\n\nThese three settings form the exposure triangle. Changing one setting affects the others, so you must balance all three to achieve proper exposure while maintaining your creative vision.`,
    author: "KGILL Studios"
  },
  {
    id: 4,
    slug: "behind-scenes-wedding",
    title: "Behind the Scenes: Wedding Photography",
    excerpt: "A glimpse into our approach to capturing those special moments on your big day.",
    category: "Behind the Scenes",
    date: "July 10, 2023",
    readTime: "6 min read",
    content: `Wedding photography is a unique blend of photojournalism and posed portraiture. Success requires preparation, anticipation, and the ability to work under pressure.\n\nWe begin by meeting with the couple to understand their vision, preferred style, and special moments they don't want missed. We scout the ceremony and reception venues in advance to identify the best shooting positions and potential challenges.\n\nThe day begins with capturing details: rings, invitations, decorations, and the bride's dress. We focus on the emotions during the preparation, ensuring the couple feels relaxed and natural in front of the camera.\n\nDuring the ceremony, we position ourselves discretely to capture genuine reactions while avoiding disruption. We maintain two cameras with different lenses to be prepared for any moment.\n\nAfter the ceremony, we guide the couple through formal portraits while keeping the mood light and fun. We look for natural light and meaningful backgrounds that enhance the images.\n\nAt the reception, we blend into the festivities, capturing candid moments between planned events. Our goal is to tell the complete story of their wedding day, from preparations to the final dance.`,
    author: "KGILL Studios"
  },
  {
    id: 5,
    slug: "post-processing-enhancing",
    title: "Post-Processing: Enhancing Your Images",
    excerpt: "How we use professional software to enhance colors, correct exposure, and create the final look.",
    category: "Editing Tips",
    date: "March 30, 2023",
    readTime: "6 min read",
    content: `Post-processing is where images come to life. While we strive to capture the best possible image in-camera, post-processing allows us to enhance our vision and correct minor imperfections.\n\nOur editing workflow begins with culling images to select the best shots. We then apply basic corrections: exposure, contrast, highlights, shadows, whites, and blacks. These adjustments ensure proper tonality in the image.\n\nColor grading adds emotional impact to images. We adjust individual color ranges to create harmony or contrast. For portraits, we ensure accurate skin tones while maintaining the overall mood of the image.\n\nLocal adjustments target specific areas of an image. We might brighten the subject's eyes, darken the background, or adjust the color of a specific element. These subtle changes draw the viewer's attention where we want it.\n\nFinally, we apply sharpening appropriate for the output medium and add final creative touches. Every image receives individual attention to enhance its unique characteristics while maintaining our consistent quality standard.`,
    author: "KGILL Studios"
  },
  {
    id: 6,
    slug: "fashion-photography-compelling",
    title: "Fashion Photography: Creating Compelling Visuals",
    excerpt: "Tips for capturing fashion that highlights design elements and creates impactful visual stories.",
    category: "Fashion Photography",
    date: "August 5, 2023",
    readTime: "9 min read",
    content: `Fashion photography is about more than just showing clothes; it's about creating a lifestyle and emotional connection with the viewer.\n\nUnderstanding fabric behavior is crucial. Different materials drape, fold, and catch light differently. Cotton behaves differently than silk, and leather than denim. Knowing these characteristics helps us choose the right poses and lighting.\n\nColor plays a significant role in fashion photography. Sometimes we choose backgrounds that complement the clothing colors, other times we create contrast to make the garments stand out. The emotional response to colors also influences our choices.\n\nThe relationship between the model and camera is vital. We guide models to create natural poses that show off the clothing while maintaining the desired mood. Expression, posture, and attitude all contribute to the final image.\n\nStyling is as important as photography. Working with hair and makeup artists, stylists, and designers ensures the vision is cohesive. We plan outfits, accessories, and overall aesthetic before the shoot.\n\nLocation and set design must complement rather than compete with the fashion. Urban settings can create edgy editorial looks, while natural environments might suit bohemian or romantic styles. The background should enhance the clothing, not distract from it.`,
    author: "KGILL Studios"
  }
];

const BlogList: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="display-2 font-montserrat mb-6 epic-text">Insights & Education</h2>
          <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
            Discover photography tips, industry insights, and behind-the-scenes content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((article) => (
            <Link to={`/blog/${article.slug}`} key={article.id} className="block">
              <div className="glass-morphism border border-gold-gradient/30 rounded-2xl overflow-hidden hover-lift transition-transform duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-marigold/20 to-terracotta/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-gradient to-terracotta rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-charcoal" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gold-gradient bg-charcoal/50 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-white mb-3">{article.title}</h3>
                  <p className="text-gray-400 font-inter mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="text-gold-gradient hover:text-terracotta font-medium flex items-center group">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary px-8 py-4 premium-hover-gold inline-flex items-center gap-3">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;