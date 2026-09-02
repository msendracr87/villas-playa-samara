# Villas Playa Sámara — Media Center page direction

> **Purpose:** A simple, public download library for current Villas Playa Sámara photography and logo files.
> **Primary audience:** Travel professionals, media, vendors, designers, and approved partners.
> **Status:** Implementation direction.
> **Route:** `/media-center`

## Page goal

Help partners find and download the files already available in the project without navigating a complex media-kit experience or requesting each asset manually.

The page should answer three questions immediately:

- What asset categories are available?
- What files are inside each category?
- How can a partner download a file?

## Simple page structure

1. A compact introductory hero.
2. A category selector showing the file count for each collection.
3. The selected collection, grouped by its existing subfolders.
4. File previews with an individual download action.
5. A short usage note.

Do not add featured assets, media kits, partner logins, gated downloads, request forms, press releases, brochures, or a separate contact workflow at this stage.

The Media Center should use the standard opening header but disable the alternate header that normally appears when a visitor scrolls upward. Its category selector should stick directly to the top edge of the viewport with no reserved header gap.

## Asset categories

Use the current files from these project folders:

| Public category | Source folder |
| --- | --- |
| Accommodations | `assets/images/accommodations/` |
| Dining photography | `assets/images/dining/` |
| Drone & aerial | `assets/images/drone/` |
| Experiences | `assets/images/experiences/` |
| Gallery | `assets/images/gallery/` |
| Gym & yoga | `assets/images/gym-photos/` |
| Resort & partner logos | `assets/svgs/logo/` |
| Dining logos | `assets/svgs/dining/` |

Keep the source folders and filenames as the organization model. Display subfolder names as human-readable collection labels.

## Publishing exclusions

Do not expose:

- `.DS_Store` or project/source files such as Affinity, Photoshop, or Illustrator documents.
- `assets/images/accommodations/no-use-backup/`.
- All blurred variants in the Experiences collection, including files in `1-complementary-blur/` folders and filenames containing `blur`.
- Nikoa Beach Club logo files stored inside `assets/images/dining/nikoa-beach-club/logo/`; keep Nikoa photography in the Dining Photography collection.
- Files whose names explicitly identify them as mockups or no-use assets.
- Future-development imagery unless the project owner explicitly adds it to this page later.

## Download behavior

- Every visible file must have a direct **Download** action.
- Show JPG, PNG, WebP, and SVG files.
- Preserve the original filename when downloading.
- Clearly label file type and collection.
- Logo previews should sit on a split light/dark background so light and dark variants remain visible.
- Photography previews may use lazy loading.

Grouped ZIP packages are intentionally outside this first version. They would duplicate a large amount of source media and become stale whenever the asset folders change.

## Introductory copy

# Media Center

Current Villas Playa Sámara photography and logo files, organized for travel professionals, media, and partners.

Choose a collection, preview the available files, and download what you need.

## Usage note

Use these assets only in materials relating to Villas Playa Sámara and its represented resort concepts. Keep logos in their supplied proportions and colors. Contact the Villas Playa Sámara team before altering a logo or using an asset outside that context.

## Navigation and metadata

- Add **Media Center** to the footer navigation.
- Page title: `Media Center | Villas Playa Sámara`
- Meta description: `Download current Villas Playa Sámara photography and logo files for travel professionals, media, and partners.`

## Future additions

Only add these if a later requirement justifies them:

- Curated ZIP download packages.
- Fact sheets, brochures, press releases, or sales documents.
- Access controls or partner authentication.
- Asset rights, expiration dates, or approval-status metadata.
- A dedicated asset-request form.
