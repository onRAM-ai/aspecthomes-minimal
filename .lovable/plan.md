

## Make Hero Section 50% Larger with Animated Border

### Changes

**File: `src/components/Hero.tsx`**

- Increase `min-h-[60vh]` to `min-h-[90vh]` (50% larger)
- Add more vertical padding (`pt-16 pb-8 lg:pt-12`)
- Scale up typography slightly (heading from `lg:text-7xl` to `lg:text-8xl`)
- Add an animated gradient border around the hero image using a CSS animation with a rotating gradient effect (green brand color tones)

**File: `src/index.css`**

- Add a `@keyframes border-rotate` animation that rotates a conic gradient around the image container
- Style uses the brand green color (`hsl(134, 57%, 45%)`) to keep it on-brand

### Visual Result

- The hero section will be significantly taller, filling more of the viewport
- The hero image will have a subtle, continuously rotating gradient border that draws attention without being distracting

### Technical Approach

The animated border will use a pseudo-element (`before`) with a conic gradient that rotates via CSS animation. The image container gets `relative` positioning with a small padding to reveal the animated border beneath it. This is a pure CSS approach with no JavaScript overhead.

