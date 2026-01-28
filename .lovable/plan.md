

## Plan: Always Show Navigation Border

### Overview
Make the grey border line on the navigation bar always visible, regardless of scroll position.

### Current Behavior
The navigation currently only shows the bottom border after scrolling down 50 pixels. When at the top of the page, no border is displayed.

### Change Required

**File:** `src/components/Navigation.tsx`

**Lines 64-69** - Update the nav element's className:

Move `border-b border-border` outside of the conditional so it always applies:

```tsx
className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border",
  isScrolled ? "py-4" : "py-6"
)}
```

### Result
The grey border line will always be visible at the bottom of the navigation bar, whether you're at the top of the page or have scrolled down. The only thing that changes on scroll is the padding (from `py-6` to `py-4`).

