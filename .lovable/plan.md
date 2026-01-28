

## Plan: Update Testimonials Content

### Overview
Replace the three existing placeholder testimonials with the real client testimonials provided. All testimonials have 5-star ratings.

### File to Update

**`src/components/Testimonials.tsx`**

### Changes

**Lines 4-23** - Replace the testimonials array with:

| # | Name | Quote |
|---|------|-------|
| 1 | Steph McMillan | Helped my husband and I with our building inspection when buying our first home. Friendly, reliable and super helpful. Cannot recommend these guys enough. |
| 2 | Aaron Curtis | Very professional and knowledgeable. Was never anything that was too hard or not doable. Transformed our standard copy paste house to something unique and our style. Produced top quality products with their top quality craftsmanship. Always answered phone calls and emails. Was never left wondering. |
| 3 | Kylie Ekins | The team at Aspect Homes were amazing. Very responsive to enquiries, knowledgeable, quick and kind. The team smashed out the job and even cleaned up after themselves. Thank you for the work on our older home. |

### Technical Details

The `project` field will be removed from the data structure since the real testimonials don't include project types. The component will also be updated to remove the project type display from the attribution section.

**Updated testimonials array:**
```tsx
const testimonials = [
  {
    quote: "Helped my husband and I with our building inspection when buying our first home. Friendly, reliable and super helpful. Cannot recommend these guys enough.",
    name: "Steph McMillan",
    rating: 5,
  },
  {
    quote: "Very professional and knowledgeable. Was never anything that was too hard or not doable. Transformed our standard copy paste house to something unique and our style. Produced top quality products with their top quality craftsmanship. Always answered phone calls and emails. Was never left wondering.",
    name: "Aaron Curtis",
    rating: 5,
  },
  {
    quote: "The team at Aspect Homes were amazing. Very responsive to enquiries, knowledgeable, quick and kind. The team smashed out the job and even cleaned up after themselves. Thank you for the work on our older home.",
    name: "Kylie Ekins",
    rating: 5,
  },
];
```

**Attribution section update (lines 64-72):**
Remove the project type paragraph since it's no longer in the data, keeping just the client name.

