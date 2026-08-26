# Interface design system

## Shared typography roles

- `display-title`: page-level display typography. Hero treatments may extend this role when the composition requires it.
- `section-title`: primary section headings. Its approved scale is `clamp(1.4rem, 4.1vw, 4rem)`.
- `subsection-title`: chapters and supporting feature headings inside a larger section.
- `card-title`: repeated card and collection-item headings.
- `brand-title`: headings whose visible content is a venue or resort logo.
- `section-kicker`: short contextual labels used by the established site language.
- `section-copy`: primary supporting copy for a section.

Contextual styles may change a role's color, width, or alignment. They should not redefine its font size, weight, tracking, or line height.

## Shared actions

- `text-link`: low-emphasis directional action.
- `text-link--light`: text link on a dark or photographic surface.
- `text-link--back`: link whose icon moves backward.
- `text-link--down`: link whose icon moves downward.
- `button-link`: primary rectangular call to action.

Page-specific classes may control placement, but should compose these shared action roles whenever the interaction has the same intent.

## Responsive standards

Use the smallest suitable breakpoint from the approved set:

- `1120px`: wide layout reduction.
- `1080px`: desktop navigation and dense multi-column layouts.
- `980px`: two-column detail layouts.
- `900px`: tablet composition.
- `820px`: compact tablet composition.
- `760px`: primary mobile layout.
- `620px`: compact mobile adjustment.
- `520px`: small mobile adjustment.
- `430px`: narrow-device exception.

The design-system check runs before every production build and rejects undocumented heading roles and new breakpoint values.
