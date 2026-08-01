# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective guests evaluating an all-inclusive beachfront stay in Sámara, including couples, families, friends, and groups comparing rooms, suites, and multi-bedroom villas.

## Product Purpose

The Villas Playa Sámara website helps prospective guests understand the resort, compare available stay types, and move toward a booking or an inquiry. Success means visitors can find a suitable accommodation without the site overstating unconfirmed amenities, policies, availability, or future facilities.

## Positioning

Villas Playa Sámara is an all-inclusive, family-friendly beachfront resort on Sámara Bay offering a collection of rooms, suites, and villas with garden and beachfront settings.

## Operating Context

Visitors commonly arrive while planning a Costa Rica vacation and compare accommodation capacity, bed configuration, setting, shared living space, and kitchen facilities. The public Netlify site is currently an owner-review environment, not a production-launch approval.

## Capabilities and Constraints

- The site is a React 19, TypeScript, and Vite application.
- `docs/copy/` is the primary implementation-copy source.
- `docs/copy/accommodations/Accommodations-overview.md` is canonical for the eight accommodation names, order, occupancy, and summary features.
- Missing business facts remain open in `TO-DO.md` and must not be inferred.
- Booking URLs, accommodation sizes, floor plans, final alt text, policies, contact routes, and some bed or sofa-bed configuration details remain pending.
- Content marked mockup-only or future must not be presented as a current offering.
- Live application imagery must not use `assets/images/accommodations/no-use-backup/` or `assets/images/00-others-no-use/`.

## Brand Commitments

- Use the Villas Playa Sámara name and approved logo assets in `assets/svgs/logo/`.
- Preserve the established homepage identity and shared design system while adding compatible new surfaces.
- Use the approved accommodation, dining, experiences, and wellness terminology recorded in `AGENTS.md` and `docs/copy/`.
- The site voice is welcoming, grounded, and specific; it must not turn draft or unresolved information into a public claim.

## Evidence on Hand

- Approved accommodation overview and detail copy in `docs/copy/accommodations/`.
- Approved active accommodation photography in `assets/images/accommodations/` and optimized homepage variants in `assets/images/optimized/homepage/accommodations/`.
- An implemented homepage and reusable header, footer, typography, spacing, color, and interaction patterns in `src/`.
- No approved booking URLs, production alt-text set, contact destination, policies, testimonials, prices, accommodation sizes, or floor plans are currently on hand.

## Product Principles

- Make the differences between stay types easy to compare.
- Keep every public claim traceable to approved project copy.
- Prefer clear internal routes and reusable content structures over duplicated facts.
- Preserve the calm, place-led identity established by the homepage.
- Keep owner review separate from public-launch readiness.
