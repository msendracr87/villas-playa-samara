# Icon System

## Installation and Location

The official source is [Google Material Design Icons](https://github.com/google/material-design-icons). Its intended vendor location is `vendor/material-design-icons/`. When installed, use a shallow, sparse clone to avoid importing its multi-gigabyte asset collection into this research repository. Do not edit that directory; update it only by re-cloning or fetching upstream.

Before a production site imports icons, choose the smallest approved subset and commit only the required, licensed assets to the application's asset pipeline. This substantially reduces download and repository size. Material Symbols are preferred; use legacy Material Icons only when an equivalent Symbol is unavailable.

## Usage

For a web implementation, load the needed Material Symbols family and use its documented glyph name:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0">

<button type="button" aria-label="Open navigation">
  <span class="material-symbols-outlined" aria-hidden="true">menu</span>
</button>
```

Use the same Symbol family consistently within a component or page. If icons are bundled locally, preserve the upstream filename and license information, and reference the approved local asset instead of adding a second icon library.

## Naming and Accessibility

Use Material Symbol glyph names exactly as published, in lowercase snake_case: `menu`, `arrow_back`, `calendar_month`, `location_on`, and `check_circle`. Keep icons purposeful: they should clarify an action or status, not repeat visible text.

Icon-only controls must have an `aria-label` that states the action. When text already labels a control or an icon is purely visual, hide the icon from assistive technology:

```html
<a href="/contact">
  <span class="material-symbols-outlined" aria-hidden="true">call</span>
  Contact us
</a>
```

Do not introduce Font Awesome, Heroicons, Bootstrap Icons, Lucide, or another icon set unless the project owner explicitly requests it.
