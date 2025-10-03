#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'r') as file:
    content = file.read()

# Update the hero image to be more mobile-optimized
# Replace the existing image tag with a more mobile-optimized version
old_img = '''<img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Creative Workshop"
            className="w-full h-full object-cover scale-110 animate-slow-zoom animate-fade-in"
            loading="eager"
          />'''

new_img = '''<img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
            srcSet="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                    https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800 800w,
                    https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w,
                    https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920 1920w"
            sizes="(max-width: 640px) 400px, (max-width: 768px) 800px, (max-width: 1024px) 1200px, 1920px"
            alt="Creative Workshop"
            className="w-full h-full object-cover scale-110 animate-slow-zoom animate-fade-in"
            loading="eager"
            decoding="async"
          />'''

content = content.replace(old_img, new_img)

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'w') as file:
    file.write(content)

print("EnhancedHeroSection.tsx has been updated with responsive images!")