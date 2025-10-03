#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/pages/PhotographyVideographyPg.tsx', 'r') as file:
    content = file.read()

# Improve mobile layouts by reducing gaps and adjusting grid responsiveness
content = content.replace(
    'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
    'grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 items-center'
)

content = content.replace(
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 p-4 md:p-6',
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4'
)

content = content.replace(
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12',
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12'
)

content = content.replace(
    'grid grid-cols-1 lg:grid-cols-2 gap-16',
    'grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16'
)

content = content.replace(
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
)

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/pages/PhotographyVideographyPg.tsx', 'w') as file:
    file.write(content)

print("PhotographyVideographyPg.tsx has been updated with mobile-optimized layouts!")