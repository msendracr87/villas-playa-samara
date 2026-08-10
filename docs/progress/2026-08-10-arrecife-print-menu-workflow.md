# Arrecife print-menu workflow — August 10, 2026

## Completed

- Added a `Print version` action to the sticky header shared by the Arrecife à la carte, buffet, and drinks menus.
- Established one-source publishing: both the digital presentation and the printed presentation render from the same canonical Markdown documents in `docs/copy/dining/arrecife/menus/`.
- Added an initial US Letter portrait print layout with the Arrecife logo and menu title.
- Removed the interactive menu header, navigation, and digital cover from printed output.
- Added a compact two-column print composition with smaller print typography and print-specific allergen presentation.
- Grouped dish headings with their descriptions and allergen information to reduce awkward page breaks.
- Preserved the concept-menu metadata and change notice in a quiet closing section.
- Added responsive labels so the print action remains usable in the compact mobile menu header.

## Update workflow

1. Edit the applicable canonical Markdown menu.
2. Review the digital menu route.
3. Use `Print version` on that same route to print or save the synchronized Letter-size version.

No menu content needs to be copied into Illustrator, InDesign, or a second application-owned file for routine text updates.

## Current print format

- Page size: US Letter.
- Orientation: Portrait.
- Output: Browser print dialog, including Save as PDF where supported.
- Content source: The same Markdown and allergen mapping used by the digital menu.

## Pending

- Review and iterate the initial Letter design.
- Add Legal and Tabloid presets after the Letter design is approved.
- Final menu selections, ingredients, allergens, branding, and publication status remain subject to owner approval.

## Validation

- The production build completed successfully.
- Automated browser, print-preview, screenshot, and visual inspection checks were intentionally not run; the print design is paused for owner review.
