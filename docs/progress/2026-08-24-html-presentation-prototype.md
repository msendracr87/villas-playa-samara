# HTML presentation prototype

**Date:** August 24, 2026
**Status:** Six-slide visual-direction prototype complete; paused for owner review
**Route:** `/presentation`

## Completed in this milestone

- Added a standalone React presentation route that fills the viewport without the website header or footer.
- Added a fixed 1920 × 1080 canvas that scales proportionally to the available viewport.
- Added loading, restart, previous, pause/resume, next, fullscreen, slide counter, keyboard controls, and a back-to-website action.
- Modeled automatic slide changes separately from slide animation and video playback.
- Preserved remaining auto-advance time through pause/resume and kept manual navigation paused when the deck is paused.
- Reset slide entrance animation and media when slides are revisited.
- Implemented the six visual-direction keyframes requested by the presentation handoff:
  - Slide 1 — Opening
  - Slide 3 — Accommodation collection opener
  - Slide 13 — Dining opener
  - Slide 21 — GYM
  - Slide 22 — Padel and pickleball courts
  - Slide 28 — Closing
- Used the new presentation GYM photo set on slide 21.
- Used the 2025 1920 × 1080 courts drone video and local courts still on slide 22.
- Kept the dining names and logos labeled as concept branding for owner review.
- Avoided unconfirmed GYM hours and court access, scheduling, equipment, reservation, and inclusion claims.

## Files added or changed

- `src/App.tsx`
- `src/components/presentation/PresentationPage.tsx`
- `src/components/presentation/presentation.css`
- `src/components/presentation/presentationSlides.ts`
- `src/components/presentation/usePresentationPlayback.ts`
- `src/components/presentation/slides/PresentationSlides.tsx`
- `TO-DO.md`
- `docs/progress/README.md`

## Validation

- `npm run build` completed successfully.
- The mechanical UI detector returned no findings for the changed presentation files.
- Browser checks, screenshots, and visual inspection were intentionally not run, following the repository review instructions.

## Next review decision

Review the six keyframes for typography, image selection, composition, information density, control placement, and pacing. After approval, implement the remaining 22 slides, including slide 27 with the presentation-only future-development renders permanently labeled as concept / under development.
