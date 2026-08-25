# Villas Playa Sámara presentation handoff

Prepared from the completed 28-slide Azura Beach Resort HTML presentation and the current Villas Playa Sámara React/Vite website.

This document is intended to be pasted into, or attached to, a new Codex conversation working in the Villas Playa Sámara repository.

## The assignment

Create a polished, self-running HTML presentation for Villas Playa Sámara and expose it as a standalone page at:

- Target route: https://villasplayasamara.netlify.app/presentation
- VPS repository: https://github.com/msendracr87/villas-playa-samara
- VPS owner-review site: https://villasplayasamara.netlify.app/
- Completed Azura reference presentation: https://www.azuraresorts.com/statements/presentation-no-audio/index.html

The new presentation should reuse the successful structure and playback behavior of the Azura deck, but it must look and sound like Villas Playa Sámara. Do not make it an Azura recolor.

## Core positioning

Villas Playa Sámara is an all-inclusive, family-friendly beachfront resort on Sámara Bay with 115 rooms and villas. Its primary audiences are couples, families, friends, and groups comparing comfortable rooms, suites, and multi-bedroom villas.

The central presentation message should be:

> Make yourself at home by Playa Sámara: a welcoming beachfront stay with room for every way of traveling, easy all-inclusive dining, shared experiences, and direct access to the rhythm of Sámara Bay.

The presentation is an owner-review and sales/storytelling surface. It is not proof that every draft, concept, future facility, schedule, price, or booking flow is approved for public launch.

## Sources of truth

Use sources in this order:

1. New explicit instructions from the project owner.
2. Canonical copy in docs/copy/ inside the VPS repository.
3. The approved terminology and content-status rules in AGENTS.md.
4. Existing implemented VPS components and data in src/.
5. This handoff for presentation structure and creative direction.
6. The Azura deck only as a layout, sequencing, motion, and interaction reference.

Important canonical files:

- docs/copy/accommodations/Accommodations-overview.md
- src/data/accommodations.ts
- docs/copy/dining/dining-overview-website-copy.md
- docs/copy/experiences/Experiences-overview.md
- docs/copy/experiences/activities/activities-copy.md
- docs/copy/wellness/wellness-overview-website-copy.md
- docs/copy/wellness/spa/morpho-spa-current-services.md
- docs/copy/dining/nikoa-beach-club/nikoa-beach-club-standalone-page-and-dining-card-copy.md
- PRODUCT.md
- TO-DO.md

Do not guess unresolved operating hours, booking URLs, prices, schedules, policies, availability, opening dates, accommodation configurations, or all-inclusive inclusions.

## Content-status guardrails

- Arrecife, Baja Azul, Trattoria, and Veranda are owner-approved concepts for review, but their names and logos may still change before final launch.
- Nikoa Beach Club is a separate, additional-charge beachfront venue. It is not one of the four VPS resort dining venues and is not included in the all-inclusive plan.
- GYM, yoga, and current Morpho treatments are available now.
- The expanded Morpho Wellness Retreat, sauna, cold plunge, beauty areas, and retreat pool are under development.
- Future-development renders must be clearly labeled as future, planned, concept, or under development.
- Dining menus are mockup-only unless the owner explicitly changes their status.
- Do not use assets/images/accommodations/no-use-backup/ or assets/images/00-others-no-use/ in the presentation.
- Do not publish placeholder, TBD, XXX, inferred, or pending values.
- Use padel for the court sport. Do not confuse padel with paddleboard.

## What worked in the Azura presentation

The Azura presentation is a custom HTML slideshow rather than a PowerPoint export. It uses:

- A fixed 1920 × 1080 design canvas scaled proportionally to the viewport.
- One independently authored slide per file.
- A slide configuration array that controls order, duration, type, and optional audio.
- Full-bleed photography, editorial split layouts, image mosaics, video backgrounds, and restrained information cards.
- A 20-second default duration per slide.
- Horizontal slide-to-slide transitions lasting approximately 800 ms.
- Element-level entrance classes for fade, directional movement, scale, accordion, logo sequences, and phased animation.
- Auto-start after assets load.
- Restart, previous, play/resume, pause, next, fullscreen, and slide-count controls.
- Keyboard controls: Space, R, Left Arrow, Right Arrow, and F.
- Media and animations that restart when a slide is revisited.
- No-audio fallback timing.

The current Azura deck has 28 slides, runs about 9 minutes 20 seconds at 20 seconds per slide, and is deployed as a standalone static presentation.

## Non-negotiable playback behavior

This behavior was corrected after the gym and court slides exposed a timing bug. Preserve it exactly:

- Pause means pause automatic slide changes only.
- Pause must not freeze CSS animations.
- Pause must not freeze or prevent the current slide’s video from playing.
- The remaining auto-advance time must be retained and resumed correctly.
- Manual previous/next navigation while paused must keep the presentation paused.
- Visiting a video slide while paused must still start its visual sequence.
- Manual navigation must stop and reset media belonging to the slide being left.
- Entering any slide must reset and replay that slide’s entrance animation.
- Rapid navigation must not leave orphaned timeouts that later jump the deck unexpectedly.
- A timer firing during the same event-loop turn as Pause must not advance the slide.
- Restart returns to slide 1, clears all timers and media, resets animation classes, and starts again.
- Fullscreen state and accessible labels must remain correct.

Model auto-advance as an independent timer state. Do not use one shared paused flag to suspend the entire visual experience.

## Recommended Vite integration

The VPS site is React 19, TypeScript, and Vite 6. It currently routes by reading window.location.pathname in src/App.tsx and Netlify already serves SPA routes through public/_redirects.

Recommended structure:

- Add a route check for /presentation in src/App.tsx before the catch-all home route.
- Add src/components/presentation/PresentationPage.tsx.
- Add src/components/presentation/presentation.css.
- Add src/components/presentation/usePresentationPlayback.ts.
- Add src/components/presentation/presentationSlides.ts with the 28-slide configuration.
- Add src/components/presentation/slides/Slide01.tsx through Slide28.tsx, or grouped slide components with explicit slide data.
- Reuse src/styles/global.css design tokens rather than duplicating a second brand palette.
- Import images through Vite from assets/ so build-time missing assets fail loudly.
- Keep large presentation-only videos in a clearly named presentation media directory and avoid importing unnecessary variants.
- Suppress the normal scrolling website header and footer on /presentation. The presentation should own the entire viewport.
- Keep the design canvas at 1920 × 1080 and scale it with Math.min(viewportWidth / 1920, viewportHeight / 1080).
- Keep the slide counter and controls as normal accessible buttons, not text glyphs without labels.
- Add a visually subtle “Back to website” action outside the core timed canvas or inside the controls.
- Update the page title and metadata to Villas Playa Sámara Presentation.
- Verify that a direct request to /presentation and a hard refresh both load through Netlify.

Do not fetch local HTML fragments at runtime unless there is a compelling reason. In this Vite app, typed React slide components are easier to maintain, build-check, preload, and reuse.

## VPS visual system for the presentation

Derive the presentation from the implemented live site:

- Primary typeface: DM Sans, weights 400, 500, and 600.
- Editorial script accent: Birthstone, used sparingly for one or two emotionally important words.
- Icon system: Google Material Symbols, weight approximately 300.
- Forest 950: #101a14
- Forest 900: #172019
- Forest 800: #243329
- Forest 700: #354a3b
- Leaf: #93b13d
- Lime: #c4d658
- Brand green text: #536522
- Sand 50: #faf8f2
- Sand 100: #f0ecdf
- Sand 200: #e4dece
- Ink: #182119
- Muted text: #657066
- Motion easing: cubic-bezier(.16, 1, .3, 1)

Visual rules:

- Use square corners. The website explicitly removes rounded corners from buttons, dialogs, images, inputs, selects, and textareas.
- Favor full-bleed photography, generous negative space, thin rules, structured grids, and oversized editorial titles.
- Use lime as a focal accent, not as a large background on every slide.
- Use sand backgrounds for editorial/detail slides and forest backgrounds for section openers or strong transitions.
- Use white type on photography with a controlled forest gradient overlay.
- Use uppercase kickers with wide tracking and small size.
- Use numbers and indices as graphic devices for the accommodation collection.
- Use subtle clip-path reveals, opacity, 20–34 px vertical entrances, 28 px lateral media entrances, and slow image scale from about 1.035 to 1.
- Avoid excessive floating cards, rounded pills, glossy gradients, and generic presentation templates.
- Honor prefers-reduced-motion by removing nonessential motion while preserving all content and controls.

## Recommended 28-slide VPS storyboard

The following plan deliberately mirrors the proven Azura story arc while fitting VPS’s actual inventory.

### Slide 1 — Opening

- Purpose: Establish VPS immediately as a welcoming beachfront home base in Sámara.
- Layout: Full-bleed aerial or pool/beach video, white logo, lime script accent, thin rule, and four resort highlights.
- Draft headline: “Make Yourself at Home by Playa Sámara.”
- Supporting copy: “A welcoming all-inclusive resort with comfortable rooms and villas, relaxed days beside Sámara Bay, and experiences for families, couples, and groups.”
- Highlights: Beachfront setting; All-inclusive stay; Rooms, suites & villas; Family-friendly resort.
- Preferred assets: the existing homepage Mux hero video and assets/svgs/logo/vps-logo-c4d658-fff-frame.svg.

### Slide 2 — Resort overview

- Purpose: Explain what VPS is and who it serves.
- Layout: Video or full-bleed aerial with a lower editorial information rail.
- Draft title: “A relaxed stay, with room for everyone.”
- Draft copy: “At Villas Playa Sámara, days move at an easy pace. Stay close to the Pacific, enjoy meals without complicated planning, and choose from comfortable rooms, suites, and spacious villas designed for different ways of traveling.”
- Fact rail: 115 rooms and villas; Sámara Bay; couples, families, friends, and groups; garden and beachfront options.
- Asset: assets/images/optimized/homepage/resort/samara-bay-aerial-1600.webp.

### Slide 3 — Accommodation collection opener

- Purpose: Introduce the breadth of the room and villa collection.
- Layout: Numbered editorial index with a three-image collage.
- Draft title: “Find the space that fits your stay.”
- Draft copy: “Choose a comfortable room for two, a family-friendly suite, or a multi-bedroom villa with shared living space and kitchen facilities.”
- Facts: 8 accommodation categories; garden and beachfront settings; rooms, suites, and villas.
- Use hero images from categories 1, 4, and 8.

### Slide 4 — Deluxe Garden View, King-Size Bed

- Purpose: Lead with an easy couple or solo-traveler option.
- Draft label: “Cozy comfort for two.”
- Facts: 1 King bed; 2 guests; garden or pool-area view; terrace or balcony.
- Draft summary: “A comfortable room for couples or solo travelers, with a terrace or balcony overlooking the garden or pool area.”
- Hero: assets/images/accommodations/1-deluxe-garden-view-king-size-bed/1-garden-view-deluxe-room-king-bed-hero.png.

### Slide 5 — Junior Suite Garden View

- Purpose: Show the first family/friends suite with a full kitchen and shared space.
- Draft label: “Spacious villa with nature views.”
- Facts: Queen and Single beds plus 2 Sofa beds; maximum 4 guests; garden view; living and dining area; full kitchen; garden-view terrace.
- Draft summary: “A garden-view suite with flexible sleeping space, shared living and dining, a full kitchen, and a private terrace.”
- Use the hero plus living-room/kitchen and outside-view images from category 2.

### Slide 6 — Deluxe Garden View, Two Queen-Size Beds

- Purpose: Present a practical four-person room.
- Draft label: “Comfort for small groups.”
- Facts: 2 Queen beds; 4 guests; garden or pool-area view; terrace or balcony.
- Draft summary: “A practical room with two Queen beds, light refreshment facilities, a sofa seating area, and an outdoor terrace or balcony.”
- Hero: assets/images/accommodations/3-deluxe-garden-view-two-queen-size-beds/3-garden-view-junior-suite-1-king-bed-hero.png.
- Editorial caution: The legacy filename says “1-king-bed” although the canonical category name says two Queen beds. Confirm the image is correct before publication.

### Slide 7 — Beachfront collection opener

- Purpose: Create a section break between garden-oriented stays and the beachfront/premium collection.
- Layout: Forest background, large beachfront image strip, numbered list 04–08.
- Draft title: “Closer to the Pacific.”
- Draft copy: “Beachfront suites and villas place the ocean at the center of the stay, with terraces, flexible layouts, and more room to gather.”
- Do not call every beachfront category luxury.

### Slide 8 — Junior Suite Beachfront

- Purpose: Show family-friendly beachfront access with a full kitchen.
- Draft label: “Steps from the sand.”
- Facts: Queen and Single beds plus 2 Sofa beds; maximum 4 guests; beachfront/ocean view; living and dining area; full kitchen; beachfront terrace.
- Draft summary: “A beachfront suite with flexible sleeping space, shared living and dining, a full kitchen, and a terrace facing the Pacific.”
- Use the category 4 hero and two supporting images.

### Slide 9 — Two Bedroom Garden View Villa

- Purpose: Emphasize shared living for families and groups.
- Draft label: “Spacious family retreat.”
- Facts: 1 King, 1 Queen, and 1 Twin bed; maximum 6 guests; garden view; two bedrooms; two private bathrooms; full kitchen; terrace.
- Draft summary: “A roomy villa surrounded by tropical greenery, with separate bedrooms, shared living space, and a full kitchen.”
- Use the category 5 hero, kitchenette, and bedroom images.

### Slide 10 — Two Bedroom Beachfront Villa

- Purpose: Translate the garden-villa strengths to direct beachfront living.
- Draft label: “Oceanfront family escape.”
- Facts: 1 King, 1 Queen, and 1 Twin bed; maximum 6 guests; beachfront/ocean view; two bedrooms; two private bathrooms; full kitchen; beachfront terrace.
- Draft summary: “A two-bedroom villa for families or groups seeking shared space and direct access to the Pacific.”
- Use category 6 hero, living-room beach view, and beachfront terrace.

### Slide 11 — Deluxe Ocean View, King-Size Bed

- Purpose: Present the strongest couple-focused beachfront room.
- Draft label: “Romantic ocean hideaway.”
- Facts: 1 King bed; 2 guests; beachfront/ocean view; beachfront terrace.
- Draft summary: “A calm King-bed stay with a spacious terrace, Pacific views, and direct access to the sand.”
- Use category 7 hero, outside view, and room detail.

### Slide 12 — Three Bedroom Beachfront Luxury Villa

- Purpose: End accommodations with the largest, highest-value stay.
- Draft label: “Premium oceanfront stay.”
- Facts: 1 King, 2 Queen, and 2 Twin beds; 8 guests; beachfront/ocean view; three bedrooms; two bathrooms; full kitchen; large social area; beachfront terrace.
- Draft summary: “The resort’s most spacious beachfront villa, created for larger families and groups who want to stay together beside the Pacific.”
- Use category 8 clear beach view, beachfront terrace, kitchen, and living-room imagery.

### Slide 13 — Dining opener

- Purpose: Transition from rooms to the four resort dining concepts.
- Layout: Four-logo editorial sequence on sand or forest.
- Draft title: “Good food, with more ways to enjoy it.”
- Draft copy: “From relaxed buffet meals and daytime snacks to Italian- and Mexican-inspired dinners, cocktails, and casual evenings, four resort venues bring variety to each day.”
- Show the concept-status note discreetly in owner-review builds.

### Slide 14 — Arrecife

- Purpose: Introduce the main dining venue.
- Cuisine: International and Costa Rican.
- Draft copy: “The resort’s main dining venue, offering seasonal buffet and à la carte service with international variety and Costa Rican character.”
- Service can be described as breakfast, lunch, and dinner only if the current canonical copy remains approved.
- Use assets/images/dining/arrecife-restaurant/arrecife-restaurant-1-hero.png plus exterior or integrated-bar supporting imagery and the Arrecife logo.

### Slide 15 — Baja Azul

- Purpose: Show the resort’s casual daytime and Mexican/Tex-Mex-inspired evening concept.
- Draft copy: “A casual venue offering daytime snacks and a Mexican and Tex-Mex-inspired à la carte experience in the evening.”
- Do not publish unapproved menus, detailed hours, or prices.
- Use assets/images/dining/mexican-restaurant/mexican-restaurant-hero.jpg, outside view, tacos imagery, and the Baja Azul logo.

### Slide 16 — Trattoria

- Purpose: Present a relaxed Italian-inspired dinner.
- Draft copy: “A relaxed dinner experience centered on familiar Italian flavors, including pizza, pasta, classic desserts, wines, and cocktails.”
- Use assets/images/dining/italian-restaurant/italian-restaurant-side-view.jpg, interior render or food imagery, and the Trattoria logo.
- If a render is used, identify it as concept imagery.

### Slide 17 — Veranda

- Purpose: Add the social bar-and-sports rhythm.
- Draft copy: “A relaxed place for cocktails, cold drinks, sports, salty treats, and casual snacks from afternoon into the evening.”
- Use assets/images/dining/sport-bar/sport-bar-inside-1-hero.png, the closeup image, and the Veranda logo.
- Do not repeat unapproved operating hours.

### Slide 18 — Dining collection recap

- Purpose: Explain the range without copying Azura’s reservation-system claims.
- Draft title: “Four settings, one easy resort rhythm.”
- Draft copy: “Begin with international and Costa Rican variety, pause for a casual bite, then choose an Italian- or Mexican-inspired dinner or an easy evening of drinks and sports.”
- Suggested information blocks: Main dining; Specialty dinners; Drinks and casual bites; Guest Services for current schedules.
- Explicitly avoid saying reservations or seating times are required unless approved for VPS.

### Slide 19 — Nikoa Beach Club

- Purpose: Present the shared beachfront venue while keeping its commercial separation clear.
- Draft title: “Nikoa Beach Club.”
- Draft copy: “A relaxed beachfront dining experience between Villas Playa Sámara and Azura Beach Resort, serving lunch, dinner, drinks, and Pacific views.”
- Required qualifier: “Separate additional-charge venue; not included in the VPS all-inclusive plan.”
- Use local Nikoa photography and the white logo. Link to https://www.nikoabeachclub.com/ only if the presentation includes clickable venue actions.

### Slide 20 — Resort life

- Purpose: Recenter the story on the easy, family-friendly pace of a stay.
- Draft title: “Every pace has a place here.”
- Draft copy: “Move from an unhurried pool day to Sámara Beach, family time, a sunset drink, or a full Costa Rican adventure without losing the feeling of home base.”
- Suggested collage: pool, beach, family-friendly activity, cocktails, and resort aerial.
- Use the live-site gallery and homepage assets. Do not reuse Azura’s adults-only bar positioning.

### Slide 21 — GYM

- Purpose: Reuse the completed gym gallery direction from Azura, now under the VPS brand.
- Draft title: “Space to keep moving.”
- Draft copy: “A newly completed, air-conditioned GYM gives guests a comfortable place for independent workouts and everyday movement during their stay.”
- Status: Available now.
- Layout: Large exterior image plus equipment, lobby, and yoga/movement supporting images.
- Preferred four assets:
  - assets/images/gym-photos/Exterior/Gym-Exterior-Section-3.jpg
  - assets/images/gym-photos/Equipment/Gym-Equipment-Section-1.jpg
  - assets/images/gym-photos/Lobby/Gym-Lobby-Section-3.jpg
  - assets/images/gym-photos/Yoga/Gym-Yoga-Section-2.jpg
- The optimized website gym images are another valid set if visual consistency and performance are preferred.

### Slide 22 — Padel and pickleball courts

- Purpose: Reuse the proven full-bleed court-video slide.
- Draft title: “Padel & Pickleball.”
- Draft copy: “Easy, social court time adds movement and variety to a day beside the Pacific.”
- Status: Do not claim included access, schedules, equipment, or reservation rules until confirmed.
- Background video: assets/images/paddle&pickleball-court-video/Hotel Villas Playa Samara - Drone Video (2025) (Version 2) - NO LOGO 1080p.mp4.
- Inset still: assets/images/experiences/activities/padel-and-pickleball.jpg.
- Reference remote still: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY07SsJGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT.

### Slide 23 — Wellness

- Purpose: Separate what exists today from what is still being developed.
- Draft title: “Move, restore, and make time for yourself.”
- Available-now column: GYM; guided yoga; current Morpho massages, body treatments, facials, exfoliations, and wellness packages.
- Under-development column: expanded treatment spaces; sauna and cold plunge; beauty areas; retreat pool.
- Required line: “Future additions are under development and are not yet available.”
- Use current wellness photography for available services and clearly marked concept/render imagery for future facilities.

### Slide 24 — Experiences overview

- Purpose: Show the range from Sámara activities to full-day Costa Rican outings.
- Draft title: “Your gateway to adventure.”
- Draft copy: “With Monkey Tours based at the hotel, guests can move from Sámara Bay to volcanoes, cloud forests, wildlife reserves, coffee country, and more.”
- Suggested cards: Isla Chora kayak; surf lessons; ATV jungle tour; sport fishing; Palo Verde; Arenal; Monteverde; coffee tour; Pacific sunset.
- Keep inquiry handling inside the VPS website.

### Slide 25 — In-house activities

- Purpose: Show daily resort variety and social energy.
- Draft title: “Something different every day.”
- Suggested cards: yoga, morning stretch, aqua aerobics, beach volleyball, dance lessons, cocktail class, Costa Rican tasting, canvas time, beach bonfire, and pool volleyball.
- Draft copy: “A rotating program of movement, culture, games, and relaxed moments makes it easy to join in without leaving the resort.”
- Do not publish the weekly schedule until confirmed.

### Slide 26 — Sámara Bay and nearby experiences

- Purpose: Anchor the hotel in its destination rather than copying Azura’s nearby-beaches list.
- Draft title: “Begin at Sámara Bay.”
- Draft copy: “Paddle toward Isla Chora, learn to surf in the warm Pacific, follow the coast into sunset, or use the resort as a home base for a wider Costa Rican adventure.”
- Suggested five-image sequence: Sámara Beach; Isla Chora kayak; Isla Chora paddleboard; surf lessons; Pacific sunset.
- Verify every place name and caption against the VPS experience copy.

### Slide 27 — What is taking shape

- Purpose: Share future development honestly.
- Draft title: “A more expansive resort experience is taking shape.”
- Possible content: Arrecife development renders; Baja Azul/Veranda exterior development renders; expanded Morpho Wellness Retreat.
- Required treatment: Every render carries “Concept / under development” directly on the image or within the slide’s permanent copy.
- Do not state an opening date, capacity, final specification, or availability without new owner approval.
- Assets come from assets/images/renders-future-development-not-for-website-presentation-only/ and assets/images/wellness/spa-underdevelopment/.

### Slide 28 — Closing

- Purpose: End with a memorable brand promise and a clear next step.
- Layout: Minimal forest or full-bleed Sámara Bay image, phased VPS logo, lime script accent, and a subtle website return action.
- Draft headline: “Make yourself at home in Sámara.”
- Draft supporting line: “Thank you for discovering Villas Playa Sámara.”
- Use assets/svgs/logo/vps-logo-c4d658-fff-frame.svg or the approved white logo variant.

## Recommended timing

- Default: 20 seconds per slide.
- Total at 28 slides: approximately 9 minutes 20 seconds.
- Section openers may use 16–18 seconds if a shorter total is desired.
- Dense room and experience slides may use 22–24 seconds.
- Video must loop or hold cleanly for the full slide duration.
- Avoid synchronizing the essential reading order to a single fragile timeout chain; content should remain understandable if the user navigates manually.

## Asset organization for the VPS implementation

Recommended presentation asset namespace:

- assets/images/presentation/resort/
- assets/images/presentation/accommodations/
- assets/images/presentation/dining/
- assets/images/presentation/experiences/
- assets/images/presentation/wellness/
- assets/images/presentation/future/
- assets/images/presentation/video/

Prefer referencing existing canonical assets directly if no presentation-specific crop is necessary. If crops or optimized copies are created, use clear lowercase kebab-case names and record the source asset beside each derivative.

## Shared assets already present in the VPS repository

### GYM photo set

- assets/images/gym-photos/Equipment/Gym-Equipment-Section-1.jpg
- assets/images/gym-photos/Equipment/Gym-Equipment-Section-5.jpg
- assets/images/gym-photos/Exterior/Gym-Exterior-Section-3.jpg
- assets/images/gym-photos/Exterior/Gym-Exterior-Section-4.jpg
- assets/images/gym-photos/Exterior/Gym-Exterior-Section-5.jpg
- assets/images/gym-photos/Lobby/Gym-Lobby-Section-1.jpg
- assets/images/gym-photos/Lobby/Gym-Lobby-Section-3.jpg
- assets/images/gym-photos/Yoga/Gym-Yoga-Section-1.jpg
- assets/images/gym-photos/Yoga/Gym-Yoga-Section-2.jpg
- assets/images/gym-photos/Yoga/Gym-Yoga-Section-3.jpg
- assets/images/gym-photos/Yoga/Gym-Yoga-Section-7.jpg

### Court media

- assets/images/paddle&pickleball-court-video/Hotel Villas Playa Samara - Drone Video (2025) (Version 2) - NO LOGO 1080p.mp4
- assets/images/experiences/activities/padel-and-pickleball.jpg
- assets/images/experiences/activities/1-complementary-blur/padel-and-pickleball-blur.jpg
- Remote reference still: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY07SsJGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT

### Current and future wellness media

- assets/images/wellness/gym/gym-entrance-1.jpeg
- assets/images/wellness/gym/gym-lobby-2.jpeg
- assets/images/wellness/gym/gym-people-using-equipment-3.jpeg
- assets/images/wellness/gym/gym-people-using-equipment-4.jpeg
- assets/images/wellness/yoga/vps-yoga-at-the-beach.jpg
- assets/images/wellness/spa-underdevelopment/body-care.png
- assets/images/wellness/spa-underdevelopment/body-treatments-and-natural-ingredients.jpg
- assets/images/wellness/spa-underdevelopment/hair-studio.png
- assets/images/wellness/spa-underdevelopment/makeup-and-beauty.png
- assets/images/wellness/spa-underdevelopment/massage-and-bodywork-2.jpg
- assets/images/wellness/spa-underdevelopment/massage-and-face-treatment-1-portrait.jpg
- assets/images/wellness/spa-underdevelopment/massage-and-face-treatment-1.jpg
- assets/images/wellness/spa-underdevelopment/morpho-wellness-retreat-hero.png
- assets/images/wellness/spa-underdevelopment/nail-bar.png
- assets/images/wellness/spa-underdevelopment/spa-overview-render.png
- assets/images/wellness/spa-underdevelopment/woman-cold-plunge.jpg
- assets/images/wellness/spa-underdevelopment/woman-relaxing-using-sauna-accessories.jpg

### Future-development renders

These are presentation-only and must be labeled as concept or under development:

- assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-entrance-front-view.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-entrance-side-level-view.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-entrance-side-top-view.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-inside-view-top-restaurant.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-angle-photo.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-front-photo.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-side-photo.jpeg
- assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-south-angle-photo.jpeg

## VPS logos

- assets/svgs/logo/vps-logo-c4d658-fff-frame.svg — preferred lime and white presentation logo
- assets/svgs/logo/vps-logo-fff-frame.svg — white logo
- assets/svgs/logo/vps-logo-c4d658-58595b-frame.svg — lime and gray
- assets/svgs/logo/vps-logo-58595b-frame.svg — gray
- assets/svgs/logo/vps-logo-111111-frame.svg — near-black
- assets/svgs/logo/vps-icon-c4d658-frame.svg — lime mark
- assets/svgs/logo/vps-icon-white-frame.svg — white mark
- assets/svgs/logo/morpho/morpho-spa-logo-FFFFFF-frame.svg
- assets/svgs/logo/morpho/morpho-spa-logo-636363-frame.svg
- assets/svgs/logo/morpho/morpho-spa-logo-000-frame.svg
- assets/svgs/logo/monkey-tours/monkeytours-logo-color-frame.png

## Dining logos

- assets/svgs/dining/arrecife/arrecife-logo-white-frame.svg
- assets/svgs/dining/arrecife/arrecife-logo-black-frame.svg
- assets/svgs/dining/arrecife/arrecife-logo-636363-frame.svg
- assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-white-frame.svg
- assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-black-frame.svg
- assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-636363-frame.svg
- assets/svgs/dining/trattoria/trattoria-logo-white-frame.svg
- assets/svgs/dining/trattoria/Trattoria-logo-black.svg
- assets/svgs/dining/trattoria/Trattoria-logo-636363-frame.svg
- assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-white-frame.svg
- assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-black-frame.svg
- assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-636363-frame.svg
- assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-white.svg
- assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-black.svg
- assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-beach.svg
- assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-musk.svg
- assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-navy.svg

## Implementation acceptance checklist

- /presentation loads directly and after a hard refresh on Netlify.
- Presentation fills the viewport and preserves a centered 16:9 canvas.
- All 28 slides appear in the intended order.
- Every image and video is loaded from a stable repository asset or documented remote URL.
- All VPS copy is checked against canonical repository content.
- Concept dining names remain identified as concepts where appropriate.
- Nikoa is clearly separate and additional charge.
- Available-now and future wellness content are visually and verbally distinct.
- Future renders are permanently labeled.
- Pause stops only auto-advance.
- Animation and video continue while auto-advance is paused.
- Manual next/previous preserves pause.
- Resume uses the correct remaining time.
- Revisiting a slide restarts its animation.
- Leaving a slide stops its media and timers.
- Restart fully resets the deck.
- Fullscreen works and has correct accessible labels.
- Keyboard controls work.
- Focus indicators remain visible.
- prefers-reduced-motion is respected.
- Text remains readable at laptop, projector, and large desktop sizes.
- Important copy is not placed under presentation controls.
- All controls meet a minimum 44 px interaction target.
- npm run build succeeds.

## Suggested working sequence for the next conversation

1. Read AGENTS.md, PRODUCT.md, TO-DO.md, and the canonical copy files.
2. Inspect the existing Vite routing and design tokens.
3. Confirm the 28-slide outline before doing large-scale implementation.
4. Build the presentation shell, scaling, controls, and corrected timer state.
5. Implement slides 1, 3, 13, 21, 22, and 28 as visual-direction keyframes.
6. Pause for owner review of the visual direction.
7. Complete the accommodation, dining, resort-life, experience, and future slides.
8. Run the build and complete functional checks.
9. Only perform browser screenshots or visual QA when the project owner explicitly asks.
10. Summarize every new component and asset path for review before deployment.

## VPS accommodation source-image catalog

Use canonical category order 1–8. Blueprint files are available in both portrait and landscape forms under assets/images/accommodations/0-blueprints/, but they are optional in a timed presentation because detailed plans can become too dense.

### 1. Deluxe Garden View — King-Size Bed

- assets/images/accommodations/1-deluxe-garden-view-king-size-bed/1-garden-view-deluxe-room-king-bed-hero.png

### 2. Junior Suite Garden View

- assets/images/accommodations/2-junior-suite-garden-view/2-junior-suite-garden-view-hero.png
- assets/images/accommodations/2-junior-suite-garden-view/2-junior-suite-garden-view-1-outside-view.png
- assets/images/accommodations/2-junior-suite-garden-view/2-junior-suite-garden-view-2-living-room-kitchen-view.png
- assets/images/accommodations/2-junior-suite-garden-view/2-junior-suite-garden-view-3-king-bed.jpg

### 3. Deluxe Garden View — Two Queen-Size Beds

- assets/images/accommodations/3-deluxe-garden-view-two-queen-size-beds/3-garden-view-junior-suite-1-king-bed-hero.png
- Confirm this legacy-named image matches the canonical two-Queen category before publication.

### 4. Junior Suite Beachfront

- assets/images/accommodations/4-junior-suite-beachfront/4-junior-suite-beachfront-hero.png
- assets/images/accommodations/4-junior-suite-beachfront/4-junior-suite-beachfront-1.jpg
- assets/images/accommodations/4-junior-suite-beachfront/4-junior-suite-beachfront-2.jpg
- assets/images/accommodations/4-junior-suite-beachfront/4-junior-suite-beachfront-3.jpg

### 5. Two Bedroom Garden View Villa

- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-hero.png
- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-1.png
- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-2-kitchenette.jpg
- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-3-queen-bed-room.png
- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-4-2-bed-room.jpg
- assets/images/accommodations/5-two-bedroom-garden-view-villa/5-two-bedroom-garden-view-villa-bathroom.jpg

### 6. Two Bedroom Beachfront Villa

- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-hero-king-bed.png
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-1-2-beds.jpg
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-2-king-bed.jpg
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-3-living-room-beach-view.jpg
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-4-living-room-kitchenette-view.jpg
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-5-living-room.jpg
- assets/images/accommodations/6-two-bedroom-beachfront-villa/6-two-bedroom-beachfront-villa-6-beachfront-terrace.jpg

### 7. Deluxe Ocean View — King-Size Bed

- assets/images/accommodations/7-deluxe-ocean-view/7-deluxe-ocean-view-hero-bed-beach-view.png
- assets/images/accommodations/7-deluxe-ocean-view/7-deluxe-ocean-view-1-bed-beach-and-bathroom.png
- assets/images/accommodations/7-deluxe-ocean-view/7-deluxe-ocean-view-2-king-bed.png
- assets/images/accommodations/7-deluxe-ocean-view/7-deluxe-ocean-view-3-bathroom.png
- assets/images/accommodations/7-deluxe-ocean-view/7-deluxe-ocean-view-4-outside-view.png

### 8. Three Bedroom Beachfront Luxury Villa

- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-10-clear-beach-view.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-1-king-bed.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-2-beachfront-terrace.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-3-fully-equipped-kitchen.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-4-beachfront-terrace-table.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-5-living-room.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-6-hall-entrances.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-7-2-bed-room.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-8-2-bed-room.jpg
- assets/images/accommodations/8-three-bedroom-beachfront-luxury-villa/8-three-bedroom-beachfront-luxury-villa-9-living-room-kitchen-view.jpg

### Landscape blueprint naming pattern

- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_1-deluxe-garden-view-king-size-bed.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_2-junior-suite-garden-view.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_3-deluxe-garden-view-two-queen-size-beds.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_4-junior-suite-beachfront.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_5-two-bedroom-garden-view-villa.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_6-two-bedroom-beachfront-villa.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_7-deluxe-ocean-view.jpg
- assets/images/accommodations/0-blueprints/1350x1080/VPS-villas-suites-room-blueprint-1350x1080_8-three-bedroom-beachfront-luxury-villa.jpg

## VPS dining source-image catalog

### Arrecife

- assets/images/dining/arrecife-restaurant/arrecife-restaurant-1-hero.png
- assets/images/dining/arrecife-restaurant/arrecife-restaurant-hostess-welcoming-clients-image-mockup.png
- assets/images/dining/arrecife-restaurant/arrecife-restaurant-integrated-bar.png
- assets/images/dining/arrecife-restaurant/arrecife-restaurant-outside-front-view-day-1.png
- assets/images/dining/arrecife-restaurant/arrecife-restaurant-outside-view-day-3.png

### Baja Azul

- assets/images/dining/mexican-restaurant/mexican-restaurant-hero.jpg
- assets/images/dining/mexican-restaurant/mexican-restaurant-outside-view.jpg
- assets/images/dining/mexican-restaurant/mexican-restaurant-side-view.jpg
- assets/images/dining/mexican-restaurant/mexican-restaurant-fish-tacos.jpg
- assets/images/dining/mexican-restaurant/mexican-restaurant-tacos-table.jpg

### Trattoria

- assets/images/dining/italian-restaurant/italian-restaurant-side-view.jpg
- assets/images/dining/italian-restaurant/italian-restaurant-render-inside-view.png
- assets/images/dining/italian-restaurant/italian-restaurant-pasta-dish-1.jpg
- assets/images/dining/italian-restaurant/italian-restaurant-pizza-dish-1.jpg
- assets/images/dining/italian-restaurant/italian-restaurant-wine.jpg

### Veranda

- assets/images/dining/sport-bar/sport-bar-inside-1-hero.png
- assets/images/dining/sport-bar/sport-bar-inside-2-closeup.png

### Nikoa Beach Club

- assets/images/dining/nikoa-beach-club/NikoaBeachClub-Samara-CostaRica-1-1.jpg
- assets/images/dining/nikoa-beach-club/Nikoa-night-firepit-1edited.jpg
- assets/images/dining/nikoa-beach-club/nikoa-pizza.webp

### Dining complementary images

- assets/images/dining/dining-complementary/dining-overview-ceviche.jpg
- assets/images/dining/dining-complementary/dining-overview-cocktails-near-pool-edge.jpg
- assets/images/dining/dining-complementary/dining-overview-fried-fish-table-view.jpg
- assets/images/dining/dining-complementary/dining-overview-mojito-near-pool-edge.jpg
- assets/images/dining/dining-complementary/dining-overview-shrimp-tacos.jpg
- assets/images/dining/dining-complementary/dining-overview-steak-and-vegetables.jpg
- assets/images/dining/dining-complementary/dining-overview-tuna-steak.jpg

## VPS experiences source-image catalog

### Activities

- assets/images/experiences/activities/choras-kayak.jpg
- assets/images/experiences/activities/choras-paddleboard.jpg
- assets/images/experiences/activities/padel-and-pickleball.jpg
- assets/images/experiences/activities/surf-lessons.jpg
- assets/images/experiences/activities/turtle-nesting.jpg

### Rentals

- assets/images/experiences/rentals/rentals-atv-jungle-tour.jpg
- assets/images/experiences/rentals/rentals-bike-rental.jpg
- assets/images/experiences/rentals/rentals-fishing.jpg

### Day tours

- assets/images/experiences/daytours/arenal-volcano.jpg
- assets/images/experiences/daytours/coffee-tour.jpg
- assets/images/experiences/daytours/horseback-riding.jpg
- assets/images/experiences/daytours/jungle-adrenaline-day-pass.jpg
- assets/images/experiences/daytours/monte-verde.jpg
- assets/images/experiences/daytours/palo-verde-tour.jpg
- assets/images/experiences/daytours/ponderosa.jpg
- assets/images/experiences/daytours/sea-life-adventure-tour.jpg
- assets/images/experiences/daytours/sunset-tour.jpg

### In-house activities

- assets/images/experiences/in-house-activities/in-house-activities-aqua-aerobics.jpg
- assets/images/experiences/in-house-activities/in-house-activities-beach-soccer.jpg
- assets/images/experiences/in-house-activities/in-house-activities-beach-volleyball.jpg
- assets/images/experiences/in-house-activities/in-house-activities-beach-walk.jpg
- assets/images/experiences/in-house-activities/in-house-activities-board-games.jpg
- assets/images/experiences/in-house-activities/in-house-activities-bonfire.jpg
- assets/images/experiences/in-house-activities/in-house-activities-canvas-time.jpg
- assets/images/experiences/in-house-activities/in-house-activities-ceviche.jpg
- assets/images/experiences/in-house-activities/in-house-activities-cocktail-classes.jpg
- assets/images/experiences/in-house-activities/in-house-activities-coffee-tasting.jpg
- assets/images/experiences/in-house-activities/in-house-activities-cooking-classes.jpg
- assets/images/experiences/in-house-activities/in-house-activities-dance-lessons.jpg
- assets/images/experiences/in-house-activities/in-house-activities-morning-stretch.jpg
- assets/images/experiences/in-house-activities/in-house-activities-pickleball.jpg
- assets/images/experiences/in-house-activities/in-house-activities-pool-volleyball.jpg
- assets/images/experiences/in-house-activities/in-house-activities-punta-indio.jpg
- assets/images/experiences/in-house-activities/in-house-activities-tennis.jpg
- assets/images/experiences/in-house-activities/in-house-activities-tortillas-time.jpg
- assets/images/experiences/in-house-activities/in-house-activities-yoga-classes.jpg

## Appendix: exact Azura reference deck, slides 1–14

This appendix preserves the completed source deck’s content, layout approach, and direct asset references so the VPS implementation can copy or intentionally diverge from it. The copy below belongs to Azura and must be adapted, not silently reused as VPS facts.

### Azura slide 1 — Introduction

- Approach: White-logo opener, resort image fades behind a brand wash, then a full-bleed editorial introduction with slow image movement.
- Copy: “Costa Rica. Adult Only Premium All Inclusive Resorts in Playa Samara Guanacaste.” Supporting labels: “Playa Samara, Guanacaste”; “Resort — Adults-only Stay”; “All-inclusive Setting — Beachfront.”
- Aerial view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hxRMYQU5WTCZ6wmqbf4VPDHiJaL8tKsOB3Egr
- Azura logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmNfiVgfQT1i9hXoPKMmScp3BRtFjGC7EkI5
- Secondary logo variant: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOENYlRPgfQT1i9hXoPKMmScp3BRtFjGC7EkI

### Azura slide 2 — About Azura

- Approach: White logo, full-bleed video, editorial overview copy, closing brand card.
- Copy: “About Azura. A peaceful adults-only escape in Playa Samara. A beachfront all-inclusive resort designed for couples, celebrations, and quiet moments in Guanacaste.” Information blocks: “Atmosphere — Peaceful, intimate, relaxing”; “Guests — Couples and adult travelers”; “Occasions — Birthdays, anniversaries, honeymoons.” Closing: “More than a hotel. A place where guests celebrate life’s special moments.”
- Video: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hJ6TzrNWuGxkIh6RYe03JQHEw1K7yXAUTVf4u
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmNfiVgfQT1i9hXoPKMmScp3BRtFjGC7EkI5
- Secondary brand image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOENYlRPgfQT1i9hXoPKMmScp3BRtFjGC7EkI

### Azura slide 3 — Accommodations opener

- Approach: Editorial overview with suite-count cards, grouped amenities, and a three-image room collage.
- Copy: “Accommodations for every adult escape. Suite categories range from relaxed ocean-view junior suites to signature luxury accommodations with private pools, rooftop space, and butler service.”
- Facts: “41 Junior suites”; “5 Luxury suite styles”; “1 Presidential suite.”
- Amenity groups: “Comfort — King or queen beds, living area, A/C, ceiling fans”; “Convenience — Room service, minibar, WiFi, USB charging, safe box”; “Bath — SPA-inspired bathroom, hot water, amenities, hairdryer.”
- Junior Suite Ocean View with Tub: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hDwGAWfshOAnrmgLXiUzqkdJjfbSRZK6Ge3uF
- Junior Suite Swim-Out: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hwzXvNlmOLSGaF2Z6V5kxNX3OK8u9AEI1ohbn
- Plunge Pool Suite: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVaw7zJZbahsm5cvRUHwDSQtAn7FgypJEqKT9

### Azura slide 4 — Junior Suite Garden View

- Approach: Large main room, secondary garden/balcony image, compact details panel.
- Copy: “A comfortable lead category with generous room space, flexible bedding, and a calm garden outlook.”
- Facts: “Bedding — 1 King Bed / 2 Queen Beds”; “View — Garden View”; “Size — 475 sq. ft. / 44 sq. meters”; “Accommodates — Up to four guests.”
- Bedroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7hLhItnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Balcony: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hZkKwa7pkyehVYL34mEWdinz29lgFTJjAxo0U

### Azura slide 5 — Junior Suite Ocean View with Tub

- Approach: Large ocean-view room, two supporting images, focused bathtub callout.
- Copy: “The same generous suite footprint, elevated with ocean views and a relaxing bathtub set on the balcony.”
- Facts: “Bedding — 1 King Bed / 2 Queen Beds”; “View — Ocean View”; “Size — 475 sq. ft. / 44 sq. meters”; “Signature detail — Balcony bathtub with an ocean view.”
- Main room: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hDwGAWfshOAnrmgLXiUzqkdJjfbSRZK6Ge3uF
- Balcony: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hBmiUpnSTheXk7wWvumlLtPBiIGD95rFa4Jxc
- Bathroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h1DgDoO2rXR3hJOSA4VoQmnxHisYzyGkWlDMZ

### Azura slide 6 — Junior Suite Swim-Out

- Approach: Large direct-pool-access image plus exterior and bedroom details.
- Copy: “A favorite category that pairs the junior suite layout with direct pool access from the private terrace.”
- Facts: “Bedding — 1 King Bed / 2 Queen Beds”; “View — Ocean View”; “Size — 475 sq. ft. / 44 sq. meters”; “Signature detail — Step from your terrace directly into the main pool.”
- Terrace and pool: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hwzXvNlmOLSGaF2Z6V5kxNX3OK8u9AEI1ohbn
- Exterior: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hooAYKO8rwCeYo6O7hkGpK9cvBa28QgZu5WXE
- Bedroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hgGQJ8izdqUGOtjH2icEwyA1o0b7SZ8rfVIhe

### Azura slide 7 — Luxury Suites opener

- Approach: Editorial section opener with three images, five-suite index, and summary facts.
- Copy: “A more elevated luxury suite collection. For guests looking for a higher-end stay, Azura’s luxury suites bring oceanfront settings, signature design touches, and more private indulgent experiences.”
- Suite index: Plunge Pool Suite; Island Suite; Azura Suite; Honeymoon Suite; Presidential Suite.
- Summary: “Views — Oceanfront settings with Chora Island outlooks”; “Features — Private pools, terrace tubs, rooftops, and signature layouts”; “Experience — Romantic, celebratory, and premium stay moments.”
- Plunge Pool Suite: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVaw7zJZbahsm5cvRUHwDSQtAn7FgypJEqKT9
- Island Suite: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hYdV2AsGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Azura Suite: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hfFBIu7RkXbfHVUAuz0q2n6LaOiv5s8RK79Ph

### Azura slide 8 — Plunge Pool Suite

- Approach: Luxury-suite profile with plunge pool and private-terrace emphasis.
- Copy: “One of Azura’s most distinctive categories, combining oceanfront views, direct pool access, a terrace bathtub, waterfall detail, and a private plunge pool.”
- Facts: “Bedding — 1 King Bed”; “View — Oceanfront with Chora Island View”; “Size — 600 sq. ft. / 56 sq. meters”; “Signature detail — Private plunge pool with direct terrace access.”
- Plunge pool: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVaw7zJZbahsm5cvRUHwDSQtAn7FgypJEqKT9
- Terrace bath: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hzi0a19ElKvZcLXVtDubfkeS1q0ydwjAF2JPQ
- Bedroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hHskdPVw9pVgFWequLzS4wiMT8a6BGr2nAdEP

### Azura slide 9 — Island Suite

- Approach: Oceanfront luxury profile centered on the Chora Island view.
- Copy: “A refined oceanfront suite designed around its direct view of beautiful Chora Island and the relaxed luxury of a king-bed retreat.”
- Facts: “Bedding — 1 King Bed”; “View — Oceanfront with Chora Island View”; “Size — 600 sq. ft. / 56 sq. meters”; “Signature detail — Direct views of Chora Island from an oceanfront suite.”
- Main room: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hYdV2AsGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Terrace: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hS7pCS8UzE0YT5ysejwhkcafOtoxmHXCKN36D
- Bedroom detail: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hTvthfa1GWmFZNajOkeBUAy6cKqgJL9D3bESw

### Azura slide 10 — Azura Suite

- Approach: Luxury profile highlighting the central glass bathroom and rotating TV.
- Copy: “Azura’s signature suite brings a more playful design language, centered on a glass bathroom concept and shared in-room moments for couples.”
- Facts: “Bedding — 1 King Bed”; “View — Oceanfront with Chora Island View”; “Size — 600 sq. ft. / 56 sq. meters”; “Signature detail — Central glass bathroom and rotating TV for shared viewing.”
- Main room: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hfFBIu7RkXbfHVUAuz0q2n6LaOiv5s8RK79Ph
- Bathroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h2c8oPDNorxCBYtSVnRlT8dwi3PODcF7JvAze
- Bedroom detail: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hQ9fDo4xc5WV79QnRsqyfgd2GAiYwbrz0DUTk

### Azura slide 11 — Honeymoon Suite

- Approach: Romantic luxury profile with celebration emphasis.
- Copy: “Designed for romantic stays, this suite layers oceanfront views with special details for celebrations, couples, and memorable occasions.”
- Facts: “Bedding — 1 King Bed”; “View — Oceanfront with Chora Island and Garden Views”; “Size — 600 sq. ft. / 56 sq. meters”; “Signature detail — Romantic setup with beach views, double showers, and double sinks.”
- Main room: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY4ZFYuGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Bathroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hnGCShhPyfldiHGeKQMkrnptL2ugqhZNbXxPV
- Romantic detail: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hulWL5Pc5TY7qt314aLovj8CimlXugSwO0fby

### Azura slide 12 — Presidential Suite

- Approach: Grand profile for the largest accommodation, using one large and five supporting images.
- Copy: “Azura’s most expansive and luxurious accommodation, designed as a multi-level private residence with entertainment, social, and outdoor living spaces throughout.”
- Facts: “Bedding — 3 King Beds in 3 separate bedrooms”; “View — Oceanfront with Chora Island View”; “Size — 5,920 sq. ft. / 550 sq. meters across 2 floors”; “Spaces — Kitchen, wine cellar, indoor dining, sunrise breakfast area”; “Outdoor — Rooftop entertainment area, jacuzzi, pool, sun deck”; “Signature detail — Azura’s ultimate luxury experience with private social and entertainment zones.”
- Main view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOEEHyM2gfQT1i9hXoPKMmScp3BRtFjGC7EkI
- Bedroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h9782EYgV125S7KdasCYMXz3EcGofjh0LmyQR
- Bathroom: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hG3lGIZDRUPsbJCTIWfuHdtV6zSAaNe5Bcxwi
- Dining area: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hndiHVNPyfldiHGeKQMkrnptL2ugqhZNbXxPV
- Outdoor area: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVWLKvzZbahsm5cvRUHwDSQtAn7FgypJEqKT9
- Entertainment space: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h52DaljbX6GrOmwgtn9FsaukcY05UMJfRPWQp

### Azura slide 13 — Restaurant concepts opener

- Approach: Short editorial section opener with all four restaurant logos.
- Copy: “Culinary Experiences. Four distinct restaurant concepts. Each venue brings its own atmosphere, rhythm, and flavor to the Azura experience.”
- Choras logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7XsAGVnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Chill & Grill logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hIrl0PO9s7GEXq4YnPrO0UuWHJm38ypZS2DzK
- Bocatto logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmiSvwgfQT1i9hXoPKMmScp3BRtFjGC7EkI5
- Tao logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOLICmbgfQT1i9hXoPKMmScp3BRtFjGC7EkI5

### Azura slide 14 — Choras

- Approach: Large venue image with secondary image, logo, and structured detail panel.
- Copy: “Our main buffet restaurant, named after Chora Island just in front of the resort, blends ocean views with broad local and international selections.”
- Facts: “Cuisine — Local and International”; “Capacity — 80 Guests”; “Service — Breakfast, Lunch, Dinner”; “Days — Monday to Sunday.”
- Closing: “‘Chora’ means shell, a reference that ties the venue back to the island and shoreline just beyond the dining room.”
- Main image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hbkmqZWhoxNb06i2zdkShqBtp7vTfyJPHcXQA
- Complementary image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hnZOLvSPyfldiHGeKQMkrnptL2ugqhZNbXxPV
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7XsAGVnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU

## Appendix: exact Azura reference deck, slides 15–28

### Azura slide 15 — Chill & Grill

- Approach: Restaurant profile with dual-image media area, logo, and structured detail panel.
- Copy: “A casual specialty restaurant focused on premium cuts of meat and fresh seafood, with an all-day atmosphere that moves easily from lunch into the evening.”
- Facts: “Cuisine — Seafood & Steakhouse”; “Capacity — 80 Guests”; “Service — Lunch, Dinner”; “Days — Monday to Sunday.”
- Closing: “Open from 12:00 noon until 11:00 PM, designed as a relaxed setting for premium cuts and seafood by the poolside.”
- Bar image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7jjAqFnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Complementary view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hRh78cUojOvxwUK6M2DieAVELnQhyqbgSIBzk
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hIrl0PO9s7GEXq4YnPrO0UuWHJm38ypZS2DzK

### Azura slide 16 — Bocatto

- Approach: Restaurant profile with dual-image media area, logo, and structured detail panel.
- Copy: “Our Italian specialty restaurant, offering a more intimate dinner setting centered on comforting classics and a refined evening atmosphere.”
- Facts: “Cuisine — Italian Cuisine”; “Capacity — 50 Guests”; “Service — Dinner”; “Days — Monday to Sunday.”
- Closing: “The name Bocatto speaks to something delicious and exquisite, setting the tone for a more polished dinner experience.”
- Main view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hazaiLmYe0rU7scA1WjpnBhmSD6dquk2F8zi9
- Complementary view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hfFikV6RkXbfHVUAuz0q2n6LaOiv5s8RK79Ph
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmiSvwgfQT1i9hXoPKMmScp3BRtFjGC7EkI5

### Azura slide 17 — Tao

- Approach: Restaurant profile with dual-image media area, logo, and structured detail panel.
- Copy: “Our Asian specialty restaurant, offering hot dishes and sushi rolls in a more intimate evening setting.”
- Facts: “Cuisine — Asian Fusion”; “Capacity — 50 Guests”; “Service — Dinner”; “Days — Monday to Sunday.”
- Closing: “A compact dinner concept centered on hot dishes and sushi, giving the restaurant collection a more contemporary flavor.”
- Main dining view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hNNZDoeiDWohM2E7gtwx9G5YTarJU3m1is0Kf
- Complementary view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hkSJ5VZfdiX7p6yfLgt3w2FHTeRAx5UNbl1IK
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOLICmbgfQT1i9hXoPKMmScp3BRtFjGC7EkI5

### Azura slide 18 — Dining reservation rhythm

- Approach: Four-logo recap with an editorial explanation and three large information blocks.
- Copy: “Dining with a reservation rhythm. The four specialty concepts are designed to feel distinct, while operating through one clear evening reservation system. Specialty restaurants operate with reservations and staggered seating times so guests can enjoy each concept with a more personal level of service.”
- Information blocks: “Access — Reservation. Specialty dining is organized through planned seating.” “Seating Times — 6:00 PM through 8:30 PM, with different dinner time options.” “Guest Experience — 4 Concepts. Built to help guests explore the full restaurant collection.”
- Closing: “The reservation flow supports more personalized service while creating room for guests to experience all four venues during their stay.”
- Choras logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7XsAGVnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Chill & Grill logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hIrl0PO9s7GEXq4YnPrO0UuWHJm38ypZS2DzK
- Bocatto logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmiSvwgfQT1i9hXoPKMmScp3BRtFjGC7EkI5
- Tao logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOLICmbgfQT1i9hXoPKMmScp3BRtFjGC7EkI5

### Azura slide 19 — Bar experiences

- Approach: Two-column image-led venue comparison.
- Intro copy: “Beyond the restaurants, Azura offers two different bar settings: one built around music and social energy, and one designed for easy beachfront relaxation.”
- Chill & Grill Bar: “Live Music. Features live music every night, creating a relaxed and social atmosphere where guests can gather, unwind, and keep the evening going. A more convivial setting for guests who want movement, music, and a stronger nighttime vibe.”
- Pool Bar: “Beachfront. Located around the pool and directly on the beach, allowing guests to fully relax without leaving their loungers or interrupting the pace of the day. The easiest drink service point for sun, sea views, and uninterrupted poolside time.”
- Chill & Grill Bar image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7jjAqFnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Pool Bar image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hAaspjHI7EZPc0rwfRyQM2tLO1X3KpqsuFxlC

### Azura slide 20 — Nikoa Beach Club

- Approach: Beach-club restaurant profile with dual-image media area, logo, and detail panel.
- Copy: “A beachfront culinary venue inspired by the Nicoyan region, bringing together seafood, pasta, meats, and fresh ceviches in a more open-air, sunset-facing setting.”
- Facts: “Cuisine — Mediterranean Fusion”; “Capacity — 80 Guests”; “Service — Lunch, Dinner”; “Days — Monday to Sunday.”
- Closing: “Guests can pair the culinary concept with the beachfront pool and fire pit area, making Nikoa feel as much like a sunset hangout as a dining venue.”
- Front view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hnO7U2GPyfldiHGeKQMkrnptL2ugqhZNbXxPV
- Complementary view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hShZbdzUzE0YT5ysejwhkcafOtoxmHXCKN36D
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hYXPsQ3GlNkEBSHwXAzRvM4fstdZ5GC0ihJIT

### Azura slide 21 — Fitness Center

- Approach: Large exterior image above a three-image strip, with the full text panel on the right.
- Copy: “Fitness Center. Azura introduced a brand-new, spacious gym designed for guests who want to keep a wellness routine during their stay. This part of the resort offering focuses on movement and daily energy, from the new fitness center to included court activities. A stronger daily-use amenity that expands the resort beyond beach and pool time. New this year.”
- Exterior: assets/gym-photos-web/Exterior/Gym-Exterior-Section-3.jpg
- Equipment: assets/gym-photos-web/Equipment/Gym-Equipment-Section-1.jpg
- Lobby: assets/gym-photos-web/Lobby/Gym-Lobby-Section-3.jpg
- Yoga: assets/gym-photos-web/Yoga/Gym-Yoga-Section-2.jpg
- Live exterior URL: https://www.azuraresorts.com/statements/presentation-no-audio/assets/gym-photos-web/Exterior/Gym-Exterior-Section-3.jpg
- Live equipment URL: https://www.azuraresorts.com/statements/presentation-no-audio/assets/gym-photos-web/Equipment/Gym-Equipment-Section-1.jpg
- Live lobby URL: https://www.azuraresorts.com/statements/presentation-no-audio/assets/gym-photos-web/Lobby/Gym-Lobby-Section-3.jpg
- Live yoga URL: https://www.azuraresorts.com/statements/presentation-no-audio/assets/gym-photos-web/Yoga/Gym-Yoga-Section-2.jpg

### Azura slide 22 — Pickleball & Paddleball

- Approach: Full-bleed looping court video with dark gradient, inset still image, and text panel.
- Copy: “Pickleball & Paddleball. Fully included courts give guests an easy, social activity option that adds movement and variety to the day. A casual sports offering that fits naturally into the resort rhythm. Included.”
- Local video: assets/paddle&pickleball-court-video/Hotel Villas Playa Samara - Drone Video (2025) (Version 2) - NO LOGO 1080p.mp4
- Remote still: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY07SsJGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Note for VPS: Rename the sport to Padel & Pickleball and do not carry over the “Included” claim without confirmation.

### Azura slide 23 — Britt Shop and Morpho Spa

- Approach: Image-led amenity comparison in the style of slide 19.
- Intro: “The stay also includes the practical and restorative touches that make the resort feel easier, calmer, and more complete.”
- Britt Shop: “Convenience. The on-site Britt store offers a straightforward stop for essentials, snacks, and last-minute travel needs. A practical amenity that helps the stay feel smooth and self-contained.”
- Morpho Spa: “Wellness. Spa services and personalized guest support bring the softer side of the experience, centered on comfort and relaxation. A quieter, restorative counterweight to the resort’s more active spaces.”
- Britt store: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hSvb6KDUzE0YT5ysejwhkcafOtoxmHXCKN36D
- Britt logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY3S8HPGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Morpho Spa image: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVnotofmZbahsm5cvRUHwDSQtAn7FgypJEqKT
- Morpho Spa logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hwzivqpZOLSGaF2Z6V5kxNX3OK8u9AEI1ohbn

### Azura slide 24 — Activities and experiences

- Approach: Dense 16-card image grid with editorial header.
- Copy: “From on-property activities to one-day regional adventures, Azura can connect guests with both easy resort outings and some of Costa Rica’s most iconic destinations.”
- Kayaking: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hEtexOsyJQt60eACfgu4nW5zo2lHsLhwT7cbq
- Paddleboard: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hiYNVBgqqQOncN5UD7g8LJZ4GzWtdE6fhvAHI
- Bicycle Rental: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hY3F1iHGlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- ATV Jungle Tour: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h97o9mEpV125S7KdasCYMXz3EcGofjh0LmyQR
- Sport Fishing: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h2qAhQ3JNorxCBYtSVnRlT8dwi3PODcF7JvAz
- Catamaran Tour: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hn4UmdCPyfldiHGeKQMkrnptL2ugqhZNbXxPV
- Horseback Riding: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hCn7179MpRoOydXUhB6LgzCv2D4bQ95MEnNYc
- Coffee Tour: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hg7ujJBzdqUGOtjH2icEwyA1o0b7SZ8rfVIhe
- Ponderosa Adventure: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hi0mTyAqqQOncN5UD7g8LJZ4GzWtdE6fhvAHI
- Sea Life Adventure: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h1naV1q2rXR3hJOSA4VoQmnxHisYzyGkWlDMZ
- Rincón de la Vieja: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hQc3Ztcxc5WV79QnRsqyfgd2GAiYwbrz0DUTk
- Palo Verde Tour: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hwMAlgjOLSGaF2Z6V5kxNX3OK8u9AEI1ohbni
- Arenal Volcano: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hitabvCqqQOncN5UD7g8LJZ4GzWtdE6fhvAHI
- Monteverde: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hHXVIjfw9pVgFWequLzS4wiMT8a6BGr2nAdEP
- Turtle Nesting: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h7qwH5snOi4f1aVZhGL5rl7HmMN6oTc9ujJgU
- Surf Lessons: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1heyJAPglIfbmJ7RTKGc4CzrwnMx9yaL8vs2ul

### Azura slide 25 — Daily recreational activities

- Approach: Eight-card included-activity grid with editorial header.
- Copy: “Alongside excursions and outings, Azura also offers a rotating set of included daily activities designed to keep the stay social, active, and fun.”
- Yoga Classes: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hJ6bWkC6uGxkIh6RYe03JQHEw1K7yXAUTVf4u
- Morning Walks to Playa Indio: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hXc2wwWsJA1iMT4m69EFjvVeOfLDNz2Z5QtBp
- Dance Lessons: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hVqe1fFZbahsm5cvRUHwDSQtAn7FgypJEqKT9
- Cooking Classes: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hDYC2B2shOAnrmgLXiUzqkdJjfbSRZK6Ge3uF
- Beach Volleyball: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hPGM8OdeaoMRD2Cd7BXhg0PlO4qz68KHNEZUy
- Aqua Aerobics: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hwku5xSOLSGaF2Z6V5kxNX3OK8u9AEI1ohbni
- Cocktail Classes: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hAV9JH4jI7EZPc0rwfRyQM2tLO1X3KpqsuFxl
- Final card: “…and many more activities.”

### Azura slide 26 — Nearby beaches and destinations

- Approach: Five tall destination cards in a single row.
- Copy: “Azura sits close to some of Guanacaste’s most beautiful coastal spots, each offering its own rhythm of clear water, sunsets, and quieter natural beauty.”
- Playa Sámara: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hHuRtWUw9pVgFWequLzS4wiMT8a6BGr2nAdEP
- Playa Carrillo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hGELAUEDRUPsbJCTIWfuHdtV6zSAaNe5Bcxwi
- Playa Barrigona: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hCfERXHMpRoOydXUhB6LgzCv2D4bQ95MEnNYc
- Playa Buena Vista: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hYg4Kp9GlNkEBSHwXAzRvM4fstdZ5GC0ihJIT
- Playa Indio: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h74xCuLnOi4f1aVZhGL5rl7HmMN6oTc9ujJgU

### Azura slide 27 — 2026 expansion

- Approach: Editorial future-development update with three stat cards and a four-image collage.
- Copy: “A new chapter for Azura. Azura is currently expanding its beachfront footprint to add more accommodation, more pool space, and more premium experiences for guests in 2026.”
- Facts: “56 new rooms”; “11 premium additions including 7 new swim-out suites and 4 new luxury suites”; “500+ additional square meters of swimming pool areas.”
- Closing: “The project is designed to expand Azura’s operated facilities while keeping the experience aligned with the resort’s more exclusive, luxury-driven positioning.”
- Beachfront front view: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hRNACrVojOvxwUK6M2DieAVELnQhyqbgSIBzk
- Suite 14: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1h8Uxf1WCM8z7OpXF540sqVKolRvYdfZUyjxA1
- Suite 16: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hcjeihX6sD3KLgXP2CSdYn7jvZ6yaG9kNwVoO

### Azura slide 28 — Closing

- Approach: Minimal closing slide with phased logo and thank-you message.
- Copy: “Thank you for joining us at Azura. Costa Rica.”
- Logo: https://gitupuyptj.ufs.sh/f/rD8z6cvavL1hOmNfiVgfQT1i9hXoPKMmScp3BRtFjGC7EkI5

## Final instruction to the implementing conversation

Use the Azura deck as a reference for pacing, information hierarchy, modular slide types, animation replay, full-screen controls, and the corrected auto-advance state. Use the Villas Playa Sámara website and repository as the authority for brand, content, terminology, and assets.

Before changing the VPS app, summarize any factual gaps you find. Implement the shell and the six visual-direction keyframes first, then pause for owner review. Do not deploy or perform unsolicited visual QA after making UI changes.
