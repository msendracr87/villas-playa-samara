---
version: 1
slug: "src-components-arrecife-menu-arrecifemenu-tsx"
primary_target: "src/components/arrecife-menu/ArrecifeMenu.tsx"
related_targets: ["src/components/arrecife-menu/arrecife-menu.css","src/data/diningMenus.ts"]
---

## Scope and mode

Shared Arrecife, Baja Azul, Trattoria, and Veranda concept-menu routes under each restaurant's `/menus/` path. Visitor mode: Read.

## Audience, job, and action

Prospective resort guests and project reviewers can read each menu mockup, recognize allergen guidance where it is present in the canonical copy, switch between the available menus for the current venue, print or save a Letter-size version, and return to its restaurant page without navigating through the full website header or footer.

## Proof and constraints

Render the full digital and print content directly from the canonical Markdown documents in `docs/copy/dining/arrecife/menus/`, `docs/copy/dining/mexican-restaurant/menus/`, `docs/copy/dining/italian-restaurant/menus/`, and `docs/copy/dining/sportbar/menus/`; do not create separately maintained print copy. These menus are mockup-only and must remain visibly labeled as concept material rather than current restaurant offerings. Use the supplied allergen symbols with visible text labels; never infer allergens that are absent from the copy. Do not include the site header or footer. Use one dedicated sticky menu header with a return action, links to the other menus for that venue, and a Print version action. The initial print format is US Letter portrait and must hide all interactive website chrome.

## Direction and memorable moment

Treat the digital experience like a restrained menu rather than a conventional marketing page: a compact sand-colored utility header, a venue-colored title cover, a spacious long-form reading surface, and quiet compact metadata after the menu content. Arrecife uses deep green, Baja Azul uses coastal deep blue and teal, Trattoria uses deep wine and terracotta, and Veranda uses deep navy, muted teal, and amber. Compound schedule headings use the day as the primary title and the theme after an em dash as a smaller secondary line; the dash is structural source punctuation rather than a display element. Adapt that system for print with the current venue logo and menu title centered, a minimal concept-status line, economical two-column typography, logical page-break protection, and no website header, footer, or digital metadata block. Both formats retain the same menu hierarchy and allergen language.

## Unresolved decisions

All selections, ingredients, availability, restaurant branding, and publication approval remain pending. The concept pages must not be represented as current menus until the owner explicitly changes their status.
