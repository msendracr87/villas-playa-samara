# Accommodation FAQ inquiry added

**Date:** August 6, 2026
**Status:** Implemented for owner review

## Completed

- Added a More questions disclosure beneath the accommodation FAQ introduction.
- Added a down-chevron state that rotates when the inquiry form is expanded.
- Reused the existing accommodation inquiry form instead of duplicating its fields and behavior.
- Fixed the preferred accommodation to the room, suite, or villa currently being viewed.
- Preserved the accommodation selector on the Rooms & Villas overview inquiry form.
- Kept inquiry delivery disabled and clearly marked as layout-only until a delivery route is approved.

## Changed files

- `src/components/accommodation-detail/AccommodationDetail.tsx`
- `src/components/accommodation-detail/accommodation-detail.css`
- `src/components/accommodation-inquiry/AccommodationInquiry.tsx`
- `src/components/accommodation-inquiry/accommodation-inquiry.css`

## Validation

- `npm run build` completed successfully.
- The Impeccable mechanical design detector reported no findings for the changed UI files.
- Browser screenshots and visual inspection were intentionally left for owner review.
