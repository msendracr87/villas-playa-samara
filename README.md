# Villas Playa Sámara website

Design and development repository for the Villas Playa Sámara beachfront resort website in Sámara, Guanacaste, Costa Rica.

The project is currently an owner-review presentation, not a publication-ready website. Several names, menus, operational facts, destinations, policies, and image approvals still require confirmation before launch.

[Open the Google Sheet — Pages & Launch Tracker](https://docs.google.com/spreadsheets/d/1HoBfcvMqgzZ4CG-wrGlFJ_w3C2BcbocL4RitfCrPIGA/edit) for page status, stakeholder reviews, pending work, and launch blockers.

## Current progress

Implementation summary updated September 3, 2026, against the current source and dated project records. Implementation status does not imply publication approval or deployment of the latest changes.

### Homepage

- Complete current presentation design and responsive implementation.
- Includes Rooms & Villas, Dining, Experiences, Wellness, Gallery, and booking sections.
- Ready for owner review; final imagery, links, business facts, and publication approvals remain pending.

### Rooms & Villas

- Complete overview page.
- Eight reusable accommodation-detail routes using the approved accommodation names and order.
- Includes key facts, floor plans, galleries, FAQs, and inquiry experiences.
- Final booking links, some occupancy details, form destinations, and additional photography remain pending.

### Dining

- Complete Dining overview with four resort concepts and a separate Nikoa Beach Club presentation.
- Dedicated pages for Arrecife, Baja Azul, Trattoria, and Veranda.
- Markdown-driven digital concept menus with sticky menu navigation and allergen guidance.
- US Letter print presentations generated from the same Markdown sources as the digital menus.
- Restaurant names, logos, menu selections, hours, policies, and operating details remain concept or unapproved content until confirmed.

### Experiences

- Complete Experiences overview with dedicated Rentals, Day Tours, and Activities routes.
- Includes responsive imagery, internal navigation, published owner-directed prices and departure details where documented, and offering-specific inquiry flows.
- Mini-Golf content, final schedules, operational details, and inquiry destinations remain pending.

### Wellness

- Complete Wellness overview and dedicated GYM (`/wellness/gym`) and Morpho Spa (`/wellness/spa`) routes.
- The Spa page includes the current treatment menu, durations, prices, and packages. GYM and Spa share inquiry forms and cross-page navigation.
- Clearly separates the currently available GYM, yoga, and Morpho treatments from the expanded retreat facilities under development.
- Final schedules, booking process, operational details, Guest Services destinations, and inquiry delivery remain pending.

### Gallery

- Dedicated `/gallery` page with 35 optimized images, randomized masonry layout, and a full-screen viewer with keyboard navigation.
- Categories, production captions and alt text, image rights, and drone-image approval remain pending.

### Visitor information and legal pages

- `/faq` uses the consolidated master FAQ with topic navigation and expandable answers.
- `/contact` includes supplied contact and social destinations, a location map, and a general inquiry form; form delivery remains disabled pending approval.
- Draft `/privacy-policy`, `/cookie-policy`, and `/terms` pages are implemented for review. Legal and operational approval, final business details, and cookie-consent implementation remain pending.
- A branded 404 page handles unknown routes and invalid detail slugs. The draft `/thank-you` page is ready for future form-success integration; forms are not yet connected to it.

### Media Center and Sitemap

- `/media-center` provides eight photography and logo collections with previews and individual downloads, derived from the project asset folders and loaded separately from the initial page bundle.
- Backup, no-use, mockup, and complementary-blur assets are excluded. Rights metadata and final publication approvals remain pending; ZIP packages and access controls are outside the first version.
- `/sitemap` groups current visitor-facing routes and excludes internal review tools, form-success and 404 states, concept menu routes, and deferred pages. An XML sitemap remains pending.
- Offers, Explore Sámara, Travel Professionals, and Case studies are deferred until after launch and depend on supplied content.

### HTML presentation

- Complete standalone 25-slide presentation at `/presentation` with self-running playback, accessible controls, keyboard navigation, and fullscreen support.
- Includes the current GYM photography, 2025 padel and pickleball courts video, and presentation-only future-development renders with permanent concept / under-development labels.
- Ready for owner review; deployment of the latest presentation changes requires confirmation.

### Design system

- Responsive React component system with square interface geometry.
- Shared typography, color, spacing, motion, navigation, buttons, and content patterns.
- Material Symbols are used as the official interface icon system.
- Shared restaurant-detail, experience-detail, and inquiry-form foundations are documented in [the design-system guide](docs/design-system.md) and displayed at `/design-system`.
- `npm run check:design-system` checks shared interface rules and runs automatically during production builds.
- Local simplification work recorded on September 2 consolidates scroll-reveal behavior and inquiry styles, removes unused code, and derives the presentation count from its slide configuration; see the [implementation record](docs/progress/2026-09-02-codebase-simplification.md). These application changes remain uncommitted as of this documentation update.

## Review environments and deployment

The documented Netlify owner-review address is [villasplayasamara.netlify.app](https://villasplayasamara.netlify.app/). See the [Netlify deployment record](docs/deployment/netlify.md) for confirmed settings and remaining ownership questions. The latest local or GitHub changes should not be assumed to be deployed there.

DreamHost development deployment to `dev.villasplayasamara.com` through GitHub Actions is planned and pending configuration. The immediate dependency is delegated DreamHost account access, followed by confirmed SSH details, the website directory, DNS/HTTPS, deployment credentials, routing configuration, and a tested workflow.

- [DreamHost + GitHub Actions stakeholder brief](docs/deployment/dreamhost-github-actions-stakeholder-brief.md) — required access, responsibilities, and next steps.
- [DreamHost deployment implementation guide](docs/deployment/dreamhost-github-actions-vite-dev-deployment-guide.md) — detailed setup instructions.

Review environments must not be treated as the final public website while launch requirements remain unresolved.

## Project tracking and stakeholder visibility

Maintain these three project records together:

- [TO-DO.md](TO-DO.md) for unresolved content, approvals, operational facts, dependencies, and launch requirements.
- [`docs/progress/`](docs/progress/) for dated implementation and milestone history.
- [Villas Playa Sámara — Pages & Launch Tracker](https://docs.google.com/spreadsheets/d/1HoBfcvMqgzZ4CG-wrGlFJ_w3C2BcbocL4RitfCrPIGA/edit) for the stakeholder-facing inventory of pages, review rounds, missing pages, launch features, audits, priorities, owners, blockers, and completion criteria.

Update the Google Sheet after substantial work changes a page's implementation, content, stakeholder-review status, priority, ownership, blockers, or launch readiness. Stakeholders have access for visibility; editing is intentionally limited to the project owner and Codex. The Sheet summarizes project status and does not replace the canonical copy, `TO-DO.md`, or dated progress records.

## What remains before public launch

The complete working checklist is maintained in [TO-DO.md](TO-DO.md). The main outstanding areas are:

- Owner approval of final copy, imagery, positioning, and production alt text.
- Final booking engine, room booking links, Guest Services, and CTA destinations, plus final approval of the supplied contact and social details.
- Approval of dining names, logos, menus, allergens, hours, prices, reservation policies, and seasonal availability.
- Final operational facts for accommodations, all-inclusive inclusions, resort amenities, experiences, and wellness.
- Approval and completion of the draft privacy, cookie, and terms pages, plus accessibility, reservation, cancellation, and other required legal content.
- Production forms, submission destinations, consent language, and success or error handling.
- Analytics, cookie consent, monitoring, custom domain, deployment ownership, and release procedures.
- Decision and workflow for Spanish localization.

Never publish placeholder, pending, future, draft, or mockup-only content as a current confirmed offering.

## Technology

- React 19
- TypeScript
- Vite
- Component-scoped CSS and shared global styles
- Markdown-based canonical website copy and dining menus
- Netlify review deployment
- Planned DreamHost static hosting with GitHub Actions deployment over SSH

## Local development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

The build runs the design-system check, TypeScript compilation, and Vite bundling. Run `npm run check:design-system` independently when checking shared interface rules. No separate lint or automated test command is configured.

Preview the production build locally:

```sh
npm run preview
```

## Continue development on another computer

Clone the latest `main` branch and recreate the local dependencies from the lockfile:

```sh
git clone https://github.com/msendracr87/villas-playa-samara.git
cd villas-playa-samara
npm ci
npm run build
npm run dev
```

No committed build output or local dependency directory is required: `dist/` and `node_modules/` are generated locally. No application environment variables are currently referenced by the source code.

Before making changes, read [AGENTS.md](AGENTS.md), the latest [dated progress records](docs/progress/), [the design-system guide](docs/design-system.md), and [TO-DO.md](TO-DO.md). The [August 14 handoff](docs/progress/2026-08-14-current-development-handoff.md) is historical context; later records and current source describe subsequent additions. Use `docs/copy/` as the canonical content source and treat the latest `origin/main` commit as the resume point. Local uncommitted work is not included in a fresh clone. A fresh clone should show a clean `git status` after installation and build.

## Repository structure

- `src/components/` — reusable page and interface components.
- `src/styles/` — application-wide styles and design foundations.
- `src/data/` — structured application data and Markdown menu configuration.
- `src/hooks/` — shared motion, page metadata, and interaction hooks.
- `scripts/` — build-time design-system checks.
- `docs/copy/` — canonical implementation copy and menu content.
- `docs/progress/` — dated implementation and milestone records.
- `docs/deployment/` — hosting and launch-transition documentation.
- `assets/images/` — source and optimized website imagery.
- `assets/svgs/` — approved and concept vector assets.
- `TO-DO.md` — unresolved content, approvals, operational facts, and launch requirements.
- [Stakeholder tracker](https://docs.google.com/spreadsheets/d/1HoBfcvMqgzZ4CG-wrGlFJ_w3C2BcbocL4RitfCrPIGA/edit) — page inventory, stakeholder-review status, and launch-readiness tracking.

## Content status

Content is classified as `approved`, `draft`, `mockup-only`, or `future`. Dining menus remain mockup-only unless the project owner explicitly changes their status. Arrecife, Baja Azul, Trattoria, and Veranda are concept names and logos for review and may change before final approval.

For implementation history, see the [dated progress records](docs/progress/) and [Project progress index](docs/progress/README.md).
