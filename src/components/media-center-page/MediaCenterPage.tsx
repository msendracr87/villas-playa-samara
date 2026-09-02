import { useEffect, useMemo, useState } from "react";
import mediaCenterHero from "../../../assets/images/drone/drone-samara-duarte-dellarole-32.jpg";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./media-center-page.css";

const assetModules = import.meta.glob<string>(
  [
    "../../../assets/images/accommodations/**/*.{jpg,jpeg,png,webp}",
    "../../../assets/images/dining/**/*.{jpg,jpeg,png,webp,svg}",
    "../../../assets/images/drone/**/*.{jpg,jpeg,png,webp}",
    "../../../assets/images/experiences/**/*.{jpg,jpeg,png,webp}",
    "../../../assets/images/gallery/**/*.{jpg,jpeg,png,webp}",
    "../../../assets/images/gym-photos/**/*.{jpg,jpeg,png,webp}",
    "../../../assets/svgs/dining/**/*.{svg,png}",
    "../../../assets/svgs/logo/**/*.{svg,png}",
    "!../../../assets/images/accommodations/no-use-backup/**",
    "!../../../assets/images/**/1-complementary-blur/**",
    "!../../../assets/images/experiences/**/*blur*",
    "!../../../assets/images/dining/nikoa-beach-club/logo/**",
    "!../../../assets/**/*mockup*",
    "!../../../assets/**/*no-use*",
  ],
  { eager: true, query: "?url", import: "default" },
);

const categoryDefinitions = [
  {
    id: "accommodations",
    label: "Accommodations",
    description: "Rooms, suites, villas, and current accommodation blueprints.",
    path: "/assets/images/accommodations/",
  },
  {
    id: "dining-photos",
    label: "Dining photography",
    description: "Current restaurant, bar, food, and drink photography.",
    path: "/assets/images/dining/",
  },
  {
    id: "drone",
    label: "Drone & aerial",
    description: "Aerial views of the resort, beachfront, and Sámara Bay setting.",
    path: "/assets/images/drone/",
  },
  {
    id: "experiences",
    label: "Experiences",
    description: "Activities, tours, rentals, and in-resort experience photography.",
    path: "/assets/images/experiences/",
  },
  {
    id: "gallery",
    label: "Gallery",
    description: "The current curated Villas Playa Sámara gallery collection.",
    path: "/assets/images/gallery/",
  },
  {
    id: "gym",
    label: "Gym & yoga",
    description: "Gym exterior, lobby, equipment, and yoga photography.",
    path: "/assets/images/gym-photos/",
  },
  {
    id: "resort-logos",
    label: "Resort & partner logos",
    description: "Villas Playa Sámara, Morpho, and Monkey Tours logo files.",
    path: "/assets/svgs/logo/",
  },
  {
    id: "dining-logos",
    label: "Dining logos",
    description: "Arrecife, Baja Azul, Trattoria, and Veranda logo files.",
    path: "/assets/svgs/dining/",
  },
] as const;

type CategoryId = (typeof categoryDefinitions)[number]["id"];

type MediaAsset = {
  categoryId: CategoryId;
  filename: string;
  folder: string;
  path: string;
  type: string;
  url: string;
};

const excludedPathParts = [
  "/no-use-backup/",
  "/1-complementary-blur/",
  "mockup",
  "no-use",
] as const;

const humanize = (value: string) =>
  value
    .replace(/^\d+-/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const getFolderLabel = (path: string, categoryPath: string) => {
  const relativePath = path.split(categoryPath)[1] ?? "";
  const segments = relativePath.split("/").filter(Boolean);
  const folders = segments.slice(0, -1).filter((segment) => segment !== "png");

  if (folders.length === 0) {
    return "General collection";
  }

  return humanize(folders[folders.length - 1]);
};

const mediaAssets: readonly MediaAsset[] = Object.entries(assetModules)
  .filter(([path]) => {
    const normalizedPath = path.toLowerCase();
    return !excludedPathParts.some((part) => normalizedPath.includes(part));
  })
  .map(([path, url]) => {
    const category = categoryDefinitions.find((entry) => path.includes(entry.path));

    if (!category) {
      throw new Error(`Media Center category missing for ${path}`);
    }

    const filename = path.split("/").pop() ?? path;
    const type = filename.split(".").pop()?.toUpperCase() ?? "FILE";

    return {
      categoryId: category.id,
      filename,
      folder: getFolderLabel(path, category.path),
      path,
      type,
      url,
    };
  })
  .sort((first, second) =>
    `${first.folder}/${first.filename}`.localeCompare(
      `${second.folder}/${second.filename}`,
      undefined,
      { numeric: true },
    ),
  );

const mediaCenterDirectionContract = `
THESIS: A partner should move from category to file in seconds; the page refuses the sprawling media-kit portal.
OWN-WORLD: VPS forest, sand, lime, photographic fields, square controls, fine rules, and an orderly tabbed file library.
STORY: Partners understand the library, choose one collection, browse its existing folders, and download the exact source file they need.
FIRST VIEWPORT: A compact aerial hero names the Media Center and points directly into a sticky horizontal collection selector.
FORM: Tabbed library, third grounded structure; seed 976ffe67.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function MediaCenterPage() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>("accommodations");

  usePageMetadata(
    "Media Center | Villas Playa Sámara",
    "Download current Villas Playa Sámara photography and logo files for travel professionals, media, and partners.",
  );

  useEffect(() => {
    const contract = document.createComment(mediaCenterDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);
    return () => contract.remove();
  }, []);

  const activeCategory =
    categoryDefinitions.find((category) => category.id === activeCategoryId) ??
    categoryDefinitions[0];

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categoryDefinitions.map((category) => [
          category.id,
          mediaAssets.filter((asset) => asset.categoryId === category.id).length,
        ]),
      ) as Record<CategoryId, number>,
    [],
  );

  const groupedAssets = useMemo(() => {
    const assets = mediaAssets.filter(
      (asset) => asset.categoryId === activeCategoryId,
    );

    return Object.entries(
      assets.reduce<Record<string, MediaAsset[]>>((groups, asset) => {
        groups[asset.folder] ??= [];
        groups[asset.folder].push(asset);
        return groups;
      }, {}),
    );
  }, [activeCategoryId]);

  return (
    <div className="site-shell media-center-page">
      <Header showSticky={false} />

      <main id="main-content">
        <section
          className="media-center-page__hero"
          aria-labelledby="media-center-title"
        >
          <img
            src={mediaCenterHero}
            alt=""
            width={2500}
            height={1665}
            fetchPriority="high"
            decoding="async"
          />
          <div className="content-wrap media-center-page__hero-content">
            <h1 className="display-title display-title--light" id="media-center-title">
              Media Center
            </h1>
            <p>
              Current Villas Playa Sámara photography and logo files, organized
              for travel professionals, media, and partners.
            </p>
            <a className="text-link text-link--light text-link--down" href="#media-library">
              Browse the library
              <span className="material-symbols-outlined" aria-hidden="true">
                south
              </span>
            </a>
          </div>
        </section>

        <section
          className="media-center-page__library"
          id="media-library"
          aria-labelledby="media-library-title"
        >
          <header className="content-wrap media-center-page__library-intro">
            <div>
              <h2 className="section-title" id="media-library-title">
                Choose a collection.
              </h2>
            </div>
            <p className="section-copy">
              Preview the available files and use the download action on any
              item to save the original JPG, PNG, WebP, or SVG.
            </p>
          </header>

          <div className="media-center-page__tabs-shell">
            <div
              className="content-wrap media-center-page__tabs"
              role="group"
              aria-label="Media asset collections"
            >
              {categoryDefinitions.map((category) => (
                <button
                  className="media-center-page__tab"
                  id={`media-tab-${category.id}`}
                  key={category.id}
                  type="button"
                  aria-controls="media-panel"
                  aria-pressed={activeCategoryId === category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <span>{category.label}</span>
                  <span>{categoryCounts[category.id]}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="content-wrap media-center-page__panel"
            id="media-panel"
            aria-live="polite"
          >
            <header className="media-center-page__panel-heading">
              <div>
                <h2 className="subsection-title">{activeCategory.label}</h2>
                <p>{activeCategory.description}</p>
              </div>
              <p>
                <strong>{categoryCounts[activeCategory.id]}</strong>{" "}
                {categoryCounts[activeCategory.id] === 1 ? "file" : "files"}
              </p>
            </header>

            {groupedAssets.map(([folder, assets]) => (
              <section className="media-center-page__group" key={folder}>
                <header className="media-center-page__group-heading">
                  <h3>{folder}</h3>
                  <span>{assets.length}</span>
                </header>

                <div className="media-center-page__asset-grid">
                  {assets.map((asset) => {
                    const isLogo = asset.categoryId.endsWith("logos");

                    return (
                      <article className="media-center-page__asset" key={asset.path}>
                        <div
                          className={`media-center-page__preview${
                            isLogo ? " media-center-page__preview--logo" : ""
                          }`}
                        >
                          <img
                            src={asset.url}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span>{asset.type}</span>
                        </div>
                        <div className="media-center-page__asset-details">
                          <p title={asset.filename}>{asset.filename}</p>
                          <a
                            className="text-link"
                            href={asset.url}
                            download={asset.filename}
                          >
                            Download
                            <span className="material-symbols-outlined" aria-hidden="true">
                              download
                            </span>
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <aside className="media-center-page__usage" aria-labelledby="media-usage-title">
          <div className="content-wrap media-center-page__usage-layout">
            <h2 className="subsection-title subsection-title--light" id="media-usage-title">
              Use the files as supplied.
            </h2>
            <p>
              Use these assets only in materials relating to Villas Playa
              Sámara and its represented resort concepts. Keep logos in their
              supplied proportions and colors, and contact our team before
              altering a logo or using an asset outside that context.
            </p>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
