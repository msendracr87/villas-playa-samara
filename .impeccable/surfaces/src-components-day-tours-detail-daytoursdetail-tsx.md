---
version: 1
slug: "src-components-day-tours-detail-daytoursdetail-tsx"
primary_target: "src/components/day-tours-detail/DayToursDetail.tsx"
related_targets: ["src/components/day-tours-detail/day-tours-detail.css","src/components/day-tour-inquiry/DayTourInquiry.tsx","src/hooks/useExperiencesMotion.ts","src/components/experiences-overview/ExperiencesOverview.tsx"]
---

## Scope and mode

Day Tours detail route. Visitor mode: Experience.

## Audience, job, and action

Prospective guests compare nine day tours by destination, experience, inclusions, departure conditions, and price before submitting an inquiry. The primary job is choosing a tour that fits the guest’s interests and schedule; the secondary path returns to the Experiences overview or continues toward Activities.

## Proof and constraints

Use `docs/copy/experiences/daytours/daytours-copy.md` as the canonical content source and `assets/images/experiences/daytours/` as the visual source. Display the supplied operational details without inventing schedules, inclusions, contact destinations, or alt text. Inquiry delivery remains visibly unconnected until its production destination is approved.

## Direction and memorable moment

Build a daybook journey through Costa Rica (surface seed `71c66ebe`). An iconic Arenal hero opens into a compact tour index, followed by nine continuous, alternating image-led chapters that pair sharp photography with each supplied blurred backdrop. The index makes the long page navigable; the departure and price rows make every chapter practical. Each chapter includes a direct inquiry action that carries its tour selection into the form, moves the guest to that form, and places focus on the selected-tour control.

## Responsive behavior

Desktop chapters use equal-width image and copy columns and alternate image placement. Tablet and mobile collapse to image-first stories while preserving source order. The index changes from three columns to a single readable list, the inquiry form becomes one column, and reduced-motion users receive the complete static composition.

## Unresolved decisions

Current operational verification, a last-reviewed date, inquiry routing, production alt text, image approvals, ownership, and usage rights remain pending. The Activities detail route is not yet implemented.
