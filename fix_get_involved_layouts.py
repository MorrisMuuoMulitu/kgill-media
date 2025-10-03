#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/pages/GetInvolved.tsx', 'r') as file:
    content = file.read()

# Improve mobile layout for GetInvolved page
# Reduce gap sizes and improve grid responsiveness
content = content.replace(
    'py-20',
    'py-12 sm:py-16 md:py-20'
)

content = content.replace(
    'max-w-4xl',
    'max-w-3xl sm:max-w-4xl'
)

content = content.replace(
    'max-w-6xl',
    'max-w-4xl sm:max-w-6xl'
)

content = content.replace(
    'grid md:grid-cols-3 gap-8',
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
)

# Improve form spacing for mobile
content = content.replace(
    'space-y-6',
    'space-y-4 sm:space-y-6'
)

# Adjust button sizes for better mobile touch targets
content = content.replace(
    'px-8 py-4',
    'px-6 py-4 sm:px-8 sm:py-4'
)

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/pages/GetInvolved.tsx', 'w') as file:
    file.write(content)

print("GetInvolved.tsx has been updated with mobile improvements!")