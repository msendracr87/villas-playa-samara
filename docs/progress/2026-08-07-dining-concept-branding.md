# Dining concept branding

## Summary

Updated the dining content and overview implementation to use the owner-supplied concept branding for the resort's four dining venues.

## Concept names

- Arrecife — main restaurant and bar
- Baja Azul — Mexican restaurant and snacks
- Trattoria — Italian restaurant
- Veranda — sport bar

All four names and their supplied logos are concepts for owner review. They may change before final approval and public launch.

## Implementation

- Added the four supplied black logo variants to the restaurant stories in `src/components/dining-overview/DiningOverview.tsx`.
- Replaced the text venue headings with accessible logo headings and added a visible concept-status label to every restaurant.
- Updated the Dining Overview introduction to state that the restaurant names and logos are concepts.
- Updated the homepage dining showcase to use the concept names and disclose their non-final status.

## Content and project records

- Updated the dining overview, four venue copy documents, and all related mockup menu documents under `docs/copy/dining/`.
- Updated the homepage copy, site FAQ library, current terminology, and dining approval items in `TO-DO.md`.
- Kept the final names and logos unresolved and explicitly pending approval.

## Validation

- Confirmed that every supplied SVG used by the overview includes an SVG view box.
- Completed the production TypeScript and Vite build after implementation.
- Browser and screenshot checks were intentionally left for owner review in accordance with the project workflow.
