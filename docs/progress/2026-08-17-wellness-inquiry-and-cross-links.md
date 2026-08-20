# Wellness inquiry forms and cross-links

## Summary

The dedicated GYM and Morpho Spa pages now share a consistent inquiry section and a compact photographic closing band that encourages visitors to continue between the two current wellness offerings.

## Implementation

- Added one reusable Wellness inquiry component with page-specific introductory copy.
- Added the owner-requested Full name, Email address, Phone number, and What would you like us to know? fields to both forms.
- Preserved the established textured forest background, sand-colored form surface, square controls, responsive two-column layout, and visible disabled-delivery state.
- Replaced the previous long closing sections with approximately 150-pixel photographic bands and a black overlay; each band uses imagery from the destination it promotes.
- Connected the GYM closing band to `/wellness/spa` with “Explore Spa.”
- Connected the Spa closing band to `/wellness/gym` with “Explore the GYM.”
- Retained a secondary route back to the Wellness overview on both pages.

## Publishing safeguards

Inquiry submission remains disabled. Required fields, consent and privacy copy, the delivery destination, operational ownership, and success and error handling still require approval before launch.

## Validation

- The production build completed successfully.
- No browser screenshots or visual inspection were performed; the update is paused for owner review in accordance with the repository workflow.
