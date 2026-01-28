

## Plan: Add Gallery Section After Testimonials

### Overview
Create a new Gallery section showcasing 5 project photos, positioned between Testimonials and Contact. The design will follow the clean and minimal aesthetic established throughout the site.

### Files to Create/Modify

---

### 1. Copy Images to Project (5 files)

Copy uploaded images to the `src/assets/gallery/` folder:
- `user-uploads://backYard.png` to `src/assets/gallery/backyard.png`
- `user-uploads://bathroom.png` to `src/assets/gallery/bathroom.png`
- `user-uploads://Kitchen.png` to `src/assets/gallery/kitchen.png`
- `user-uploads://theather.png` to `src/assets/gallery/theater.png`
- `user-uploads://patio.png` to `src/assets/gallery/patio.png`

---

### 2. Create New Gallery Component

**File:** `src/components/Gallery.tsx`

Structure:
- Section header matching other sections (uppercase label, Playfair heading, accent line)
- Responsive image grid: 2 columns on mobile, 3 columns on desktop
- Images with subtle hover effect (scale/opacity transition)
- Optional captions for each image
- Uses AnimatedSection for scroll animations

Gallery items:
1. Backyard - outdoor entertaining area
2. Bathroom - modern bathroom renovation
3. Kitchen - custom kitchen renovation
4. Theater - home theater room
5. Patio - covered patio with landscaping

---

### 3. Update Index Page

**File:** `src/pages/Index.tsx`

- Import the new Gallery component
- Add `<Gallery />` between `<Testimonials />` and `<Contact />`

---

### 4. Update Navigation

**File:** `src/components/Navigation.tsx`

- Add "Gallery" to `navLinks` array (after Testimonials, before Contact)
- Add "gallery" to the IntersectionObserver sections array

---

### 5. Update Footer Navigation

**File:** `src/components/Footer.tsx`

- Add "Gallery" to the navigation items array

---

### Visual Layout

```text
+------------------------------------------+
|  Our Work                                |
|  [Gallery]                               |
|  ────────                                |
|  See some of our recent projects.        |
|                                          |
|  +----------+  +----------+  +----------+|
|  |          |  |          |  |          ||
|  | Backyard |  | Bathroom |  | Kitchen  ||
|  |          |  |          |  |          ||
|  +----------+  +----------+  +----------+|
|                                          |
|  +----------+  +----------+              |
|  |          |  |          |              |
|  | Theater  |  |  Patio   |              |
|  |          |  |          |              |
|  +----------+  +----------+              |
+------------------------------------------+
```

---

### Technical Details

**Gallery.tsx Structure:**
```tsx
import AnimatedSection from "./AnimatedSection";
import backyard from "@/assets/gallery/backyard.png";
import bathroom from "@/assets/gallery/bathroom.png";
import kitchen from "@/assets/gallery/kitchen.png";
import theater from "@/assets/gallery/theater.png";
import patio from "@/assets/gallery/patio.png";

const galleryImages = [
  { src: backyard, alt: "Outdoor entertaining area", title: "Outdoor Living" },
  { src: bathroom, alt: "Modern bathroom renovation", title: "Bathroom" },
  { src: kitchen, alt: "Custom kitchen renovation", title: "Kitchen" },
  { src: theater, alt: "Home theater room", title: "Theater Room" },
  { src: patio, alt: "Covered patio", title: "Patio" },
];
```

**Image styling:**
- Aspect ratio maintained with `object-cover`
- Subtle border matching testimonial cards (`border border-border/50`)
- Hover effect: slight scale and brightness adjustment
- Staggered animation delays for visual interest

**Navigation updates:**
- Insert "Gallery" with id "gallery" in navLinks
- Order: Home | Services | Testimonials | Gallery | Contact

