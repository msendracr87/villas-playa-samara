# Villas Playa Sámara website

Design and development repository for the Villas Playa Sámara beachfront resort website in Sámara, Guanacaste, Costa Rica.

The project is currently an owner-review presentation, not a publication-ready website. Several names, menus, operational facts, destinations, policies, and image approvals still require confirmation before launch.

## Current progress

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

- Complete Wellness overview and dedicated GYM route.
- Clearly separates the currently available GYM, yoga, and Morpho treatments from the expanded retreat facilities under development.
- The dedicated Morpho treatment presentation, final schedules, booking process, operational details, and Guest Services destinations remain pending.

### HTML presentation

- Complete standalone 25-slide presentation at `/presentation` with self-running playback, accessible controls, keyboard navigation, and fullscreen support.
- Includes the current GYM photography, 2025 padel and pickleball courts video, and presentation-only future-development renders with permanent concept / under-development labels.
- Ready for owner review; it has not been deployed in this milestone.

### Design system

- Responsive React component system with square interface geometry.
- Shared typography, color, spacing, motion, navigation, buttons, and content patterns.
- Material Symbols are used as the official interface icon system.

## Review environment

The current hosted review build is available at [villasplayasamara.netlify.app](https://villasplayasamara.netlify.app/).

This environment is for review and must not be treated as the final public website while launch requirements remain unresolved.

## Project tracking and stakeholder visibility

Maintain these three project records together:

- [TO-DO.md](TO-DO.md) for unresolved content, approvals, operational facts, dependencies, and launch requirements.
- [`docs/progress/`](docs/progress/) for dated implementation and milestone history.
- [Villas Playa Sámara — Pages & Launch Tracker](https://docs.google.com/spreadsheets/d/1HoBfcvMqgzZ4CG-wrGlFJ_w3C2BcbocL4RitfCrPIGA/edit) for the stakeholder-facing inventory of pages, review rounds, missing pages, launch features, audits, priorities, owners, blockers, and completion criteria.

Update the Google Sheet after substantial work changes a page's implementation, content, stakeholder-review status, priority, ownership, blockers, or launch readiness. Stakeholders have access for visibility; editing is intentionally limited to the project owner and Codex. The Sheet summarizes project status and does not replace the canonical copy, `TO-DO.md`, or dated progress records.

## What remains before public launch

The complete working checklist is maintained in [TO-DO.md](TO-DO.md). The main outstanding areas are:

- Owner approval of final copy, imagery, positioning, and production alt text.
- Final booking engine, room booking links, Guest Services, contact, social, and CTA destinations.
- Approval of dining names, logos, menus, allergens, hours, prices, reservation policies, and seasonal availability.
- Final operational facts for accommodations, all-inclusive inclusions, resort amenities, experiences, and wellness.
- Privacy, cookies, terms, accessibility, reservation, cancellation, and other legal content.
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

Before making changes, read [AGENTS.md](AGENTS.md), the [current development handoff](docs/progress/2026-08-14-current-development-handoff.md), and [TO-DO.md](TO-DO.md). Use `docs/copy/` as the canonical content source and treat the latest `origin/main` commit as the resume point. A fresh clone should show a clean `git status` after installation and build.

## Repository structure

- `src/components/` — reusable page and interface components.
- `src/styles/` — application-wide styles and design foundations.
- `src/data/` — structured application data and Markdown menu configuration.
- `docs/copy/` — canonical implementation copy and menu content.
- `docs/progress/` — dated implementation and milestone records.
- `docs/deployment/` — hosting and launch-transition documentation.
- `assets/images/` — source and optimized website imagery.
- `assets/svgs/` — approved and concept vector assets.
- `TO-DO.md` — unresolved content, approvals, operational facts, and launch requirements.
- [Stakeholder tracker](https://docs.google.com/spreadsheets/d/1HoBfcvMqgzZ4CG-wrGlFJ_w3C2BcbocL4RitfCrPIGA/edit) — page inventory, stakeholder-review status, and launch-readiness tracking.

## Content status

Content is classified as `approved`, `draft`, `mockup-only`, or `future`. Dining menus remain mockup-only unless the project owner explicitly changes their status. Arrecife, Baja Azul, Trattoria, and Veranda are concept names and logos for review and may change before final approval.

For the latest implementation history and current handoff, see [Project progress](docs/progress/README.md).
