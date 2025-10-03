#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'r') as file:
    content = file.read()

# Make buttons more touch-friendly on mobile by adding min height and padding
content = content.replace('btn-primary pulse-glow tilt-3d w-full sm:w-auto min-w-[200px]"', 'btn-primary pulse-glow tilt-3d w-full sm:w-auto min-w-[200px] min-h-[50px] py-4"')
content = content.replace('btn-secondary group tilt-3d w-full sm:w-auto min-w-[200px]"', 'btn-secondary group tilt-3d w-full sm:w-auto min-w-[200px] min-h-[50px] py-4"')

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/EnhancedHeroSection.tsx', 'w') as file:
    file.write(content)

print("EnhancedHeroSection.tsx has been updated to improve touch targets!")