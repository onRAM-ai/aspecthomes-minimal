

## Plan: Add Fencing Photo to Gallery

### Overview
Add the uploaded fencing image to the gallery as a new project showcase titled "Fencing". This will bring the gallery to 5 project images plus the "More projects coming soon" tile.

### Changes Required

**1. Copy Image to Assets**

Copy the uploaded image to the gallery assets folder:
- From: `user-uploads://fencing.png`
- To: `src/assets/gallery/fencing.png`

**2. Update Gallery Component**

**File:** `src/components/Gallery.tsx`

Add the fencing image import and include it in the gallery array:

```tsx
// Add import (after other gallery imports)
import fencing from "@/assets/gallery/fencing.png";

// Add to galleryImages array
const galleryImages = [
  { src: bathroom, alt: "Modern bathroom renovation", title: "Bathroom" },
  { src: kitchen, alt: "Custom kitchen renovation", title: "Kitchen" },
  { src: theater, alt: "Home theater room", title: "Theater Room" },
  { src: patio, alt: "Covered patio with landscaping", title: "Patio" },
  { src: fencing, alt: "Modern slat fencing installation", title: "Fencing" },
];
```

### Result

The gallery will display 6 tiles:
- Bathroom
- Kitchen
- Theater Room
- Patio
- **Fencing** (new)
- "More projects coming soon" tile

This creates a balanced 6-tile layout that works perfectly with the 3-column desktop grid (2 full rows) and 2-column mobile grid (3 full rows).

