# Accommodation detail motion added

**Date:** August 6, 2026
**Status:** Implemented for owner review

## Completed

- Extended the shared Rooms & Villas motion observer to all eight accommodation detail routes.
- Added a composed hero-image entrance using bounded clipping, opacity, and scale.
- Added staged story reveals for the accommodation title, narrative, comparison facts, and actions.
- Added capped list staggering for included amenities and FAQ questions on larger viewports.
- Added a short state-change animation when the More questions inquiry form opens.
- Added opposing directional entrances for previous- and next-stay navigation.
- Removed list staggering on mobile so content remains immediate on smaller devices.
- Preserved fully visible static content when reduced motion is requested or Intersection Observer is unavailable.

## Changed files

- `src/components/accommodation-detail/AccommodationDetail.tsx`
- `src/components/accommodation-detail/accommodation-detail-motion.css`

## Validation

- `npm run build` completed successfully.
- The Impeccable mechanical design detector reported no findings for the accommodation-detail motion targets.
- Browser screenshots and visual timing inspection were intentionally left for owner review.
