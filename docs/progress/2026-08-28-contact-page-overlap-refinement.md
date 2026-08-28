# Contact page overlap and contact-detail refinement — August 28, 2026

## Summary

Refined the Contact Us page composition to pair the existing Gallery-style hero with a forest-green field, a sand-toned inquiry form, and the supplied OpenStreetMap embed behind the form's lower edge.

## Changes

- Replaced transform-based vertical offsets with negative layout margins so the form-to-map overlap does not leave a trailing blank area.
- Changed the surrounding contact field to `var(--color-forest-950)` and the inquiry form to `var(--color-sand-50)`.
- Kept the map non-interactive and layered beneath the form.
- Separated each contact indicator from its destination so labels such as Address and Phone are not interactive; only the values are linked. Social-media links remain direct actions.
- Simplified the hero to its centered Contact title, removing the supporting paragraph and separate downward scroll action because the visible form edge now provides the continuation cue.
- Restructured the inquiry surface into a message grid followed by an icon-led Get in touch area, using Material Symbols for direct contact paths and the approved social-media assets for Instagram and Facebook.
- Widened the inquiry surface from 85% to 95% at desktop and tablet sizes, then arranged the lower contact area into two deliberate rows: Address, Phone, and Toll free first; WhatsApp, Email, Instagram, and Facebook second.
- Unified the direct-contact indicators with the social actions through the same uppercase, tracked label treatment; linked contact values now retain the project owner's larger `1rem` size.
- Optically aligned each Material Symbol with its contact indicator line after the linked-value size was increased to `1rem`.
- Added the owner-supplied 24-hour response-time message to the right side of the inquiry-form header, with a stacked mobile treatment.
- Kept the response-time message on one line across desktop and tablet layouts while preserving normal wrapping after the mobile header stacks.
- Prevented the shared `section-copy` wrapping rule from overriding the response-time message's single-line desktop treatment.

## Validation

- `npm run build` completed successfully, including the design-system check.
- No browser or visual check was run; this refinement is paused for project-owner review.
