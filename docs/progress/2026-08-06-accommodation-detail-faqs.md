# Accommodation detail FAQs added

**Date:** August 6, 2026
**Status:** Implemented for owner review

## Completed

- Added five expandable FAQs to every accommodation detail page after the included-amenities section.
- Added three accommodation-specific questions for each of the eight rooms, suites, and villas.
- Added two shared questions covering floor plans, galleries, and common amenities.
- Used native disclosure controls with keyboard focus styling and responsive layouts.
- Kept unresolved bed and sofa-bed configurations out of the public answers.
- Updated the central FAQ draft so its implementation copy matches the live section.

## Changed files

- `src/data/accommodationFaqs.ts`
- `src/components/accommodation-detail/AccommodationDetail.tsx`
- `src/components/accommodation-detail/accommodation-detail.css`
- `docs/copy/site-faq-library-draft.md`

## Validation

- `npm run build` completed successfully.
- The Impeccable mechanical design detector reported no findings for the changed UI files.
- Browser screenshots and visual inspection were intentionally left for owner review.
