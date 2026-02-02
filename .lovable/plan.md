
## Plan: Remove Unused backyard.png Asset

### Overview
Delete the unused `backyard.png` file from the gallery assets folder to clean up the codebase. This image was previously used for the "Outdoor Living" gallery item that was removed earlier.

### Verification Complete
- File exists at `src/assets/gallery/backyard.png`
- No references to "backyard" found anywhere in the codebase
- Safe to delete

### File to Delete

**`src/assets/gallery/backyard.png`**

Simply remove this file from the project.

### Result
The gallery assets folder will contain only the 6 images currently in use:
- bathroom.png
- fencing.png
- kitchen.png
- patio.png
- stairs.png
- theater.png

This keeps the codebase clean and reduces the deployed bundle size.
