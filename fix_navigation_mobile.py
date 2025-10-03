#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/Navigation.tsx', 'r') as file:
    content = file.read()

# Replace py-3 with py-4 in both mobile navigation sections
content = content.replace('py-3 px-4 rounded-lg font-inter font-semibold text-base', 'py-4 px-4 rounded-lg font-inter font-semibold text-base')

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/Navigation.tsx', 'w') as file:
    file.write(content)

print("Navigation.tsx has been updated to improve touch targets for mobile!")