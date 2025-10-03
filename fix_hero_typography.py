#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'r') as file:
    content = file.read()

# Update typography for better mobile readability
# Make heading sizes more appropriate for mobile
content = content.replace(
    'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
    'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
)

# Update subtext font sizes 
content = content.replace(
    'text-lg sm:text-xl md:text-2xl',
    'text-base sm:text-lg md:text-xl'
)

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'w') as file:
    file.write(content)

print("EnhancedHeroSection.tsx has been updated with mobile-friendly typography!")