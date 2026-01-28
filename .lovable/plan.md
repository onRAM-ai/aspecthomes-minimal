

## Plan: Enhance "Coming Soon" Tile with Dashed Border and Plus Icon

### Overview
Style the placeholder tile with a dashed border and a small plus icon to make it feel more intentional and visually indicate that more content is coming. Uses existing brand colors for consistency.

### Current State
The tile currently has:
- Solid border (`border border-border/50`)
- Plain muted background (`bg-muted/30`)
- Simple text only

### Changes

**File:** `src/components/Gallery.tsx`

**Update the placeholder tile (lines 56-63)**

Replace the current placeholder with an enhanced version featuring:
1. **Dashed border** - Changes from solid to dashed (`border-dashed`) for a "work in progress" feel
2. **Plus icon** - Adds a Lucide Plus icon above the text
3. **Brand color accent** - Uses the primary green for the icon
4. **Subtle hover effect** - Adds a hover state that slightly brightens the background

### Visual Design

```text
+----------------------+
|                      |
|         [+]          |  ← Plus icon in brand green
|                      |
|   More projects      |
|    coming soon       |
|                      |
|   - - - - - - - -    |  ← Dashed border
+----------------------+
```

### Technical Details

```tsx
import { Plus } from "lucide-react";

// Updated placeholder tile:
<AnimatedSection delay={galleryImages.length * 100}>
  <div className="group relative overflow-hidden border-2 border-dashed border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
    <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
        <Plus className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
      </div>
      <p className="font-inter text-sm text-muted-foreground text-center px-4">
        More projects coming soon
      </p>
    </div>
  </div>
</AnimatedSection>
```

### Result
The placeholder tile will have:
- A dashed border that signals "more to come"
- A circular plus icon using the brand green color
- Subtle hover animations that make it feel interactive
- Visual consistency with the gallery while being clearly distinct from actual project images

