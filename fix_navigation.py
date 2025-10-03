#!/usr/bin/env python3

# Read the file
with open('/Users/macbook/Desktop/kgill-media/src/components/Navigation.tsx', 'r') as file:
    lines = file.readlines()

# Modify the specific line (line 126 in 0-indexed is index 125)
for i, line in enumerate(lines):
    if 'dropdownLinks.map((link, idx)' in line:
        lines[i] = line.replace('(link, idx)', '(link)')
        print(f"Fixed line {i+1}: {line.strip()} -> {lines[i].strip()}")
        break

# Write the file back
with open('/Users/macbook/Desktop/kgill-media/src/components/Navigation.tsx', 'w') as file:
    file.writelines(lines)

print("Navigation.tsx has been updated successfully!")