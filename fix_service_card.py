#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/ServiceCard.tsx', 'r') as file:
    content = file.read()

# Update the ServiceCard for better mobile layout
# Adjust the height and make elements more touch-friendly
content = content.replace(
    'className="relative h-80 sm:h-96 cursor-pointer group premium-hover-glow"',
    'className="relative h-72 sm:h-80 md:h-96 cursor-pointer group premium-hover-glow"'
)

# Improve button touch targets
content = content.replace(
    'min-h-[44px]"',
    'min-h-[48px] py-3"'
)

# Improve text sizing for mobile
content = content.replace(
    'text-lg sm:text-xl',
    'text-base sm:text-lg md:text-xl'
)

content = content.replace(
    'text-sm sm:text-base',
    'text-sm sm:text-base md:text-base'
)

content = content.replace(
    'text-xs sm:text-sm',
    'text-xs sm:text-sm'
)

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/ServiceCard.tsx', 'w') as file:
    file.write(content)

print("ServiceCard.tsx has been updated with mobile optimizations!")