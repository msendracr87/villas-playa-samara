# Accommodation card features and galleries

## Summary

The Rooms & Villas collection cards now preserve their vertical presentation while adding the approved comparison details and media actions supplied by the project owner. Each card presents icon-led key features, a responsive floor-plan viewer, and an accommodation-specific image gallery.

## Implementation completed

- Extended the shared accommodation data with the approved size, paired landscape and portrait floor-plan assets, and active gallery imagery for all eight categories.
- Added key-feature rows for beds, occupancy, setting, floor plan, and accommodation size using the approved Material Symbols icon system.
- Added three card actions: a disabled Book now control while room-specific booking URLs remain pending, the existing internal View accommodation destination, and an interactive Gallery control.
- Added accessible native dialogs for floor plans and galleries, including Escape-to-close behavior, labelled icon-only controls, arrow-key gallery navigation, image counters, and single-image gallery support.
- Used the 1350 × 1080 floor plans on larger viewports and the 1080 × 1350 variants on mobile through responsive picture sources.
- Kept gallery imports limited to active accommodation folders and excluded `assets/images/accommodations/no-use-backup/`.
- Updated the design-system inventory and active project status notes to reflect the approved floor plans and sizes.

## Content and publishing status

- Room-specific booking URLs remain unresolved, so Book now is intentionally disabled rather than linked to an assumed destination.
- Deluxe Garden View — King-Size Bed and Deluxe Garden View — Two Queen-Size Beds each currently have one active gallery image. Their galleries remain available and will automatically include additional approved images added to their active folders.
- Final descriptive alt text, captions, image ownership, and usage-rights approval remain pending.

## Validation

- `npm run build` completed successfully.
- The Impeccable layout detector returned no findings for the accommodation card and overview targets.
- Source checks confirmed eight landscape and eight portrait floor plans, plus active gallery counts of 1, 4, 1, 4, 6, 7, 5, and 10 images in canonical accommodation order.
- Browser checks, screenshots, and visual inspection were intentionally not run, following the repository review instructions.
