# Current development handoff

## Resume point

- Repository: `https://github.com/msendracr87/villas-playa-samara`
- Active branch: `main`
- Resume from: the latest commit on `origin/main`
- Review deployment: [villasplayasamara.netlify.app](https://villasplayasamara.netlify.app/)
- Deployment status: owner-review presentation only; not approved for public launch

A new computer should clone the repository, run `npm ci`, then run `npm run build` before starting development with `npm run dev`. The application does not currently reference environment variables. Generated `dist/`, installed `node_modules/`, local tool metadata, and `misc/` content are intentionally excluded from version control.

## Implemented presentation scope

- Homepage with Rooms & Villas, Dining, Experiences, Wellness, Gallery preview, and booking sections.
- Rooms & Villas overview plus all eight approved accommodation-detail routes.
- Dining overview plus Arrecife, Baja Azul, Trattoria, and Veranda detail routes and Markdown-driven digital and printable concept menus.
- Experiences overview plus Rentals, Day Tours, and Activities detail routes with offering-specific inquiries.
- Wellness overview plus the dedicated GYM route.
- Shared responsive header, footer, typography, square interface geometry, motion, Material Symbols, inquiry patterns, and page metadata.

These areas are implemented for owner review, not necessarily editorially or operationally final. Browser and screenshot review remains with the project owner unless explicitly requested.

## Latest local work included in this resume point

- Refreshed the three blurred Experiences overview source images from PNG to smaller JPEG files and regenerated their 1920-pixel WebP delivery assets.
- Updated the editable Experiences overview design source and added the supporting `island-island.af` asset.
- Normalized existing CSS formatting in shared home motion, accommodation-detail motion, Rentals, Wellness, and global link styles without intentionally changing their interface behavior.
- Added `misc/` to the ignored local-only paths.
- Updated the root README, progress index, and implementation checklist so a fresh clone has an explicit cross-device resume workflow.

## Read before continuing

1. [`AGENTS.md`](../../AGENTS.md) for repository rules and content safety requirements.
2. [`README.md`](../../README.md) for project scope, setup, and current presentation status.
3. [`TO-DO.md`](../../TO-DO.md) for unresolved facts, approvals, content, links, and launch blockers.
4. [`docs/copy/`](../copy/) for canonical implementation copy. Do not let design research override it.
5. [`docs/deployment/netlify.md`](../deployment/netlify.md) before changing hosting or release configuration.

## Content and publishing boundaries

- Do not invent or silently resolve missing business facts, URLs, schedules, prices, policies, contact details, captions, or alt text.
- Dining menus and venue branding remain concept or mockup-only material until explicitly approved.
- Nikoa Beach Club is separate from the four resort dining concepts and from the all-inclusive plan.
- Current Wellness includes the GYM, yoga, and current Morpho treatments. Expanded retreat facilities remain under development and must stay labeled as future.
- Keep unresolved work in `TO-DO.md`; never publish placeholders or pending values as confirmed information.

## Suggested next work

The next implementation choice should come from the project owner. The clearest incomplete product areas are the dedicated Morpho treatment presentation and the full Gallery experience, while owner review and the unresolved launch requirements in `TO-DO.md` remain higher-level dependencies. Do not assume which of these should be next.

## Validation for this handoff

- `npm run build`
- `git diff --check`
- No automatic browser, screenshot, or visual inspection, following repository guidance.
