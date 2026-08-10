# Repository Guidelines

## Project Structure & Content Organization

This repository contains a React 19, TypeScript, and Vite application for the Villas Playa Sámara website alongside its design and content research.

- `src/components/` contains reusable interface components. Keep each component in a named directory with its component and scoped stylesheet.
- `src/styles/` contains application-wide styles rather than component-specific rules.
- `docs/copy/` contains the website's implementation copy. Treat it as the primary content source for application work.
- `docs/copy/accommodations/Accommodations-overview.md` is the canonical source for accommodation names, ordering, occupancy, and summary features.
- `docs/deployment/` records hosting environments, confirmed build settings, deployment ownership, and launch-transition requirements.
- `docs/progress/` contains dated implementation and milestone records. Add a new record after substantial project work instead of rewriting historical entries.
- `TO-DO.md` tracks missing content, unresolved operational facts, approvals, and implementation dependencies. Do not silently resolve its items by guessing.
- `docs/asset-duplicates.md` records intentional backup and cross-category duplicate assets.
- `assets/images/` contains property, accommodation, dining, experience, gallery, and wellness imagery used by the application and copy documents.
- `assets/svgs/logo/` stores approved logo variants used by the application.
- `docs/research/docs/example/pages/` holds page-by-page reference briefs.
- `docs/research/assets/inspirational/images/` contains visual references. Put page-specific images in a matching subdirectory.
- `docs/vendor/` contains locally saved third-party platform documentation, such as the Mux fundamentals.

Keep application imports relative and portable; do not embed machine-specific absolute paths in source code. Keep Markdown image links relative to the document that uses them.

## Content Source of Truth

Use content in this order:

1. Explicit instructions from the project owner.
2. Canonical copy in `docs/copy/`.
3. Page briefs in `docs/research/docs/example/pages/`.
4. Existing application placeholders.

Research briefs provide design direction and may contain outdated names or facts. Do not use them to override canonical copy.

Current approved terminology:

- Use the eight accommodation names and their order from `docs/copy/accommodations/Accommodations-overview.md`.
- The four resort dining concepts are Arrecife, Baja Azul, Trattoria, and Veranda. All four names and their supplied logos are concept branding for owner review and may change before final approval.
- Nikoa Beach Club is a separate, additional-charge beachfront venue and is not one of the four resort dining venues or part of the all-inclusive plan.
- Use `Monkey Tours` for the on-property standalone tour operator. Tour inquiries and lead capture remain within the Villas Playa Sámara website; do not route them to an external operator website.
- Distinguish the padel and pickleball courts from paddleboard and kayak activities to Isla Chora.
- Distinguish wellness available now from facilities under development. Available now includes the GYM, yoga, and current Morpho treatments. The expanded retreat, sauna, cold plunge, beauty areas, and retreat pool are under development.

Avoid duplicating volatile facts such as operating hours, prices, accommodation sizes, maximum occupancy, booking URLs, and schedules. Link to or derive from the canonical source where practical. When duplication is necessary, update every occurrence in the same change.

## Content Status and Publishing Safety

Classify content as one of:

- `approved`: cleared for publication.
- `draft`: usable for layout and review but still needs editorial or owner approval.
- `mockup-only`: illustrative content that must not be published as a real offering.
- `future`: planned or under-development content that must be clearly labeled.

Dining menus in `docs/copy/dining/**/menus/` are mockup-only unless the project owner explicitly changes their status. Venue hours, prices, menu selections, reservation policies, seasonal schedules, and inferred corrections remain pending until approved.

Never publish:

- `XXX`, `TBD`, placeholder, pending, or assumed values.
- Concept menus as current restaurant menus.
- Concept venue names or logos as final branding without their documented status.
- Future facilities as currently available.
- Unverified testimonials or review excerpts.

Record unresolved items in `TO-DO.md`. Do not invent missing business facts, contact details, policies, URLs, captions, or alt text.

## Asset Usage

- Use `assets/images/accommodations/no-use-backup/` only as a backup source. Do not import it into the application or link to it from active copy.
- Use `assets/images/00-others-no-use/` only when the project owner explicitly reactivates an asset.
- Treat `assets/images/wellness/spa-underdevelopment/` as future-development imagery. Do not present its contents as completed facilities.
- Exact copies in `assets/images/gallery/` may intentionally duplicate source-category images so the Gallery can remain a curated collection.
- Add a meaningful caption and alt-text direction before placing an image in production content.
- Do not delete or consolidate intentional backup or Gallery duplicates without explicit approval.

## Local Development & Validation

Install dependencies once after copying or cloning the project:

```sh
npm install
```

Available commands:

- `npm run dev` starts the local Vite development server.
- `npm run build` type-checks the application and creates the production build in `dist/`.
- `npm run preview` serves the production build locally.

No lint or automated test commands are configured yet. Validate changes proportionally:

- Run `npm run build` after application code or configuration changes.
- Confirm all local Markdown links and image paths resolve in both `docs/copy/` and `docs/research/docs/example/pages/`.
- Check changed copy against `TO-DO.md` and ensure unresolved placeholders remain clearly marked as non-publishable.
- Confirm accommodation names and summaries match `docs/copy/accommodations/Accommodations-overview.md`.
- Open added SVGs to confirm they render and preserve the intended color variant.
- Check that referenced websites and copied factual details are current and appropriate for the brief.

Do not automatically run browser checks, screenshots, or visual inspection for UI changes unless the user explicitly requests them. After UI changes, pause and summarize for review.

## Markdown, Asset & Naming Conventions

Use ATX headings (`## Section`) and short, descriptive sections. Preserve the existing page-brief pattern: a page title, `Example Structure`, visual examples, and source URLs. Use sentence-style headings and concise bullet lists for requirements.

Name active assets and their directories in lowercase kebab-case with a meaningful page or section prefix: `dining-intro-example-3.png`, `vps-logo-fff-frame.svg`. Avoid spaces, underscores, ampersands, uppercase letters, and unexplained numeric-only names. Legacy files inside explicitly excluded backup directories may retain their original names. Do not rename existing assets without updating every relative reference. Prefer SVG for logos and icons; use PNG only when preserving a raster reference is necessary.

## UI Icon System

Google's Material Design Icons and Material Symbols are the project's official icon system. Its upstream source belongs at `vendor/material-design-icons/`; treat that directory as a read-only third-party dependency and never modify its files. See `docs/icon-system.md` for installation and usage details.

Prefer Material Symbols to legacy Material Icons. Use them sparingly for navigation, buttons, forms, status, contact details, and common actions. Do not add Font Awesome, Heroicons, Bootstrap Icons, Lucide, or another icon library unless explicitly requested.

When an icon is requested, follow this workflow in order:

1. Search Google's Material Symbols and Material Icons first and use a suitable icon from that official system whenever one is available. Do not begin by searching local folders or alternative icon libraries.
2. If no suitable Google icon exists, stop and ask the project owner to add or provide the required icon in the source files. Do not silently substitute an icon from another library or create an unapproved replacement.

Every icon-only button needs a clear `aria-label`; mark purely decorative icons with `aria-hidden="true"`. When a future application needs only a few icons, extract or serve that approved subset rather than importing the complete upstream asset collection.

## Review & Change Management

Use short imperative commits scoped to the change if version control is added, for example: `ui: add video hero` or `assets: add dark logo variant`.

For review, describe the affected component or page brief and list added or changed asset paths. Include the source URL for each new inspiration image or copied content. For operational copy, record the content owner, approval status, source, and last verification date when available. Call out assumptions, broken external links, pending facts, mockup-only material, future content, or licensing restrictions. Avoid mixing unrelated changes.
