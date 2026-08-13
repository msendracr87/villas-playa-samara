# Wellness overview page development

## Completed

- Added the dedicated `/wellness` overview route.
- Built responsive GYM, yoga, current Morpho, future Morpho, and closing assistance sections from `docs/copy/wellness/wellness-overview-website-copy.md`.
- Added the supplied beach-yoga photograph to the hero and yoga section.
- Generated responsive WebP variants for the yoga photograph and future Morpho concept render under `assets/images/optimized/wellness/overview/`.
- Connected the homepage Wellness CTA, header dropdown, footer, and GYM page back links to `/wellness`.
- Replaced the illustrative yoga schedule on the GYM page with a link to the canonical schedule on `/wellness#yoga`.
- Added page metadata and reduced-motion-aware reveal behavior using the existing Wellness motion system.

## Content boundaries

- Current offerings are limited to the GYM, guided yoga, and current Morpho treatments.
- Future Morpho imagery appears only in the section labeled **Under development**.
- The future section states that the additions are not yet available and that conceptual details may evolve.
- Morpho menu prices are not duplicated on the overview page.

## Pending

- Build the dedicated Morpho Wellness Retreat page and current treatment-menu presentation.
- Confirm the final general wellness Guest Services destination.
- Complete owner review of yoga scheduling and current Morpho treatment details before public launch.

## Validation

- `npm run build`
- `git diff --check`
- Impeccable mechanical UI detector on the changed interface files
- Browser and screenshot review intentionally deferred to the project owner, following repository guidance.
