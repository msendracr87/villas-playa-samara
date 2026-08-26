# Interface design-system standardization

## Summary

The public website now uses documented semantic typography roles and shared foundations for repeated restaurant, experience, inquiry, action, motion, and responsive patterns.

## Implementation

- Added shared display, section, subsection, card, brand, copy, spacing, tracking, and motion tokens.
- Migrated all public `h2` headings to documented semantic roles while retaining separate hero typography.
- Composed repeated directional actions from the shared text-link variants.
- Extracted common restaurant-detail hero, identity, navigation, and action styling.
- Extracted common experience-detail hero, introduction, index, and responsive styling.
- Consolidated accommodation, activity, day-tour, rental, and wellness form markup into one reusable inquiry-form foundation.
- Reduced viewport breakpoints to the documented responsive set.
- Updated the internal design-system reference and added `docs/design-system.md` as the implementation guide.
- Added a build-time check that rejects undocumented public `h2` roles, unapproved CSS breakpoints, and changes to the approved section-title scale.

## Validation

- All 81 public `h2` elements use a documented semantic heading role.
- The design-system check passed.
- The TypeScript and Vite production build completed successfully.
- The Impeccable mechanical detector returned no findings.
- No browser screenshots or visual inspection were performed; the update is paused for owner review in accordance with the repository workflow.
