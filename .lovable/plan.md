

## Plan: Add "More Projects Coming Soon" Tile to Gallery

### Overview
Add a 6th tile to the gallery grid that displays "more projects coming soon" text, filling the empty spot in the current layout.

### Current Layout
The gallery has 5 project images in a responsive grid:
- **Desktop (3 columns):** 3 + 2 images = empty spot in row 2
- **Mobile (2 columns):** 2 + 2 + 1 image = empty spot in row 3

Adding a 6th tile will create a complete grid with no gaps.

### File to Update

**`src/components/Gallery.tsx`**

### Changes

**Add placeholder tile after the gallery images loop (after line 47)**

The new tile will:
- Match the existing gallery tile dimensions (aspect ratio 4:3)
- Use a subtle background with centered text
- Include the same hover animation pattern
- Be wrapped in `AnimatedSection` for consistent scroll animation

### Visual Design

```text
+------------------+------------------+------------------+
|                  |                  |                  |
|  Outdoor Living  |    Bathroom      |     Kitchen      |
|                  |                  |                  |
+------------------+------------------+------------------+
|                  |                  |                  |
|  Theater Room    |      Patio       |  More projects   |
|                  |                  |  coming soon     |
+------------------+------------------+------------------+
```

### Technical Details

**New tile markup to add after the `galleryImages.map()` block:**

```tsx
<AnimatedSection delay={galleryImages.length * 100}>
  <div className="group relative overflow-hidden border border-border/50 bg-muted/30">
    <div className="aspect-[4/3] flex items-center justify-center">
      <p className="font-inter text-sm text-muted-foreground text-center px-4">
        More projects coming soon
      </p>
    </div>
  </div>
</AnimatedSection>
```

### Result
The gallery will have 6 tiles total - 5 project images and 1 placeholder tile indicating more content is on the way. The placeholder will have a subtle muted background to differentiate it while maintaining visual consistency with the gallery style.

