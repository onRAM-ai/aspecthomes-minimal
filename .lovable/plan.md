

## Plan: Remove Outdoor Living Photo from Gallery

### Overview
Remove the "Outdoor Living" (backyard) photo from the gallery. This will leave 4 project images plus the "More projects coming soon" placeholder tile, for a total of 5 tiles.

### File to Update

**`src/components/Gallery.tsx`**

### Changes

1. **Remove the backyard import** (line 3)
   - Delete: `import backyard from "@/assets/gallery/backyard.png";`

2. **Remove the Outdoor Living entry from galleryImages array** (line 10)
   - Delete: `{ src: backyard, alt: "Outdoor entertaining area", title: "Outdoor Living" },`

### Result

The gallery will display:
- Bathroom
- Kitchen
- Theater Room
- Patio
- "More projects coming soon" tile

This maintains a balanced 5-tile layout that works well with the 3-column desktop grid (3 + 2 tiles) and 2-column mobile grid (2 + 2 + 1 tiles).

