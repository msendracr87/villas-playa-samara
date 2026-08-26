import abaloneIconUrl from "../../../assets/svgs/allergens/abalone.svg";
import cashewIconUrl from "../../../assets/svgs/allergens/cashew.svg";
import celeryIconUrl from "../../../assets/svgs/allergens/celery.svg";
import crabIconUrl from "../../../assets/svgs/allergens/crab.svg";
import eggsIconUrl from "../../../assets/svgs/allergens/eggs.svg";
import fishIconUrl from "../../../assets/svgs/allergens/fish.svg";
import glutenIconUrl from "../../../assets/svgs/allergens/gluten.svg";
import milkIconUrl from "../../../assets/svgs/allergens/milk.svg";
import sesameIconUrl from "../../../assets/svgs/allergens/sesame.svg";
import sulphitesIconUrl from "../../../assets/svgs/allergens/sulfur-dioxide-and-sulphites.svg";
import {
  arrecifeMenuVenue,
  type DiningMenu,
  type DiningMenuVenue,
} from "../../data/diningMenus";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import "./arrecife-menu.css";

type DiningMenuPageProps = {
  menu: DiningMenu;
  venue: DiningMenuVenue;
};

type MenuBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "detail"; label: string; text: string }
  | { type: "notice"; text: string }
  | { type: "list"; items: string[] }
  | { type: "allergens"; allergens: string[]; note?: string }
  | { type: "rule" };

type MenuDocument = {
  venue: string;
  title: string;
  metadata: Array<{ label?: string; value: string }>;
  blocks: MenuBlock[];
};

const allergenIcons: Record<string, string> = {
  crustaceans: crabIconUrl,
  celery: celeryIconUrl,
  eggs: eggsIconUrl,
  fish: fishIconUrl,
  gluten: glutenIconUrl,
  milk: milkIconUrl,
  molluscs: abaloneIconUrl,
  nuts: cashewIconUrl,
  sesame: sesameIconUrl,
  sulphites: sulphitesIconUrl,
};

const stripInlineMarkdown = (value: string) =>
  value.replace(/\*\*/g, "").trim();

const isStructuralLine = (line: string) =>
  line === "---" ||
  line.startsWith("#") ||
  line.startsWith("- ") ||
  line.startsWith(">") ||
  /^\*\*[^*]+:\*\*/.test(line) ||
  line.startsWith("**Allergens:**");

function parseAllergens(value: string): Extract<MenuBlock, { type: "allergens" }> {
  const rawValue = value.replace("**Allergens:**", "").trim();
  const [allergenValue, ...dashNotes] = rawValue.split(/\s+—\s+/);
  const parts = allergenValue
    .split(/[,;]/)
    .map((part) => part.trim())
    .filter(Boolean);
  const allergens: string[] = [];
  const noteParts: string[] = [];

  parts.forEach((part) => {
    if (/^(when|depending on)\s+/i.test(part)) {
      noteParts.push(part);
      return;
    }

    const conditionalMatch = part.match(/^(.+?)\s+((?:when|depending on)\s+.+)$/i);

    if (conditionalMatch) {
      allergens.push(conditionalMatch[1].trim());
      noteParts.push(`${conditionalMatch[1].trim()} ${conditionalMatch[2].trim()}`);
      return;
    }

    allergens.push(part);
  });

  return {
    type: "allergens",
    allergens,
    ...([...noteParts, ...dashNotes].length > 0
      ? { note: [...noteParts, ...dashNotes].join(", ") }
      : {}),
  };
}

function parseMenuSource(source: string): MenuDocument {
  const lines = source.replace(/\r/g, "").split("\n");
  const firstDivider = lines.findIndex((line) => line.trim() === "---");
  const venue = lines[0]?.replace(/^#\s+/, "").trim() || "Arrecife";
  const title = lines[1]?.replace(/^##\s+/, "").trim() || "Menu";
  const metadataLines = lines.slice(2, firstDivider);
  const metadata = metadataLines
    .filter((line) => line.startsWith(">"))
    .map((line) => stripInlineMarkdown(line.replace(/^>\s?/, "")))
    .filter(Boolean)
    .map((line) => {
      const separator = line.indexOf(":");

      if (separator === -1) {
        return { value: line };
      }

      return {
        label: line.slice(0, separator).trim(),
        value: line.slice(separator + 1).trim(),
      };
    });
  const bodyLines = lines.slice(firstDivider + 1);
  const blocks: MenuBlock[] = [];

  for (let index = 0; index < bodyLines.length; ) {
    const line = bodyLines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line === "---") {
      blocks.push({ type: "rule" });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "heading", level: 3, text: line.slice(4).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", level: 2, text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "heading", level: 1, text: line.slice(2).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("**Allergens:**")) {
      blocks.push(parseAllergens(line));
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      blocks.push({
        type: "notice",
        text: stripInlineMarkdown(line.replace(/^>\s?/, "")),
      });
      index += 1;
      continue;
    }

    const detailMatch = line.match(/^\*\*([^*]+):\*\*\s*(.+)$/);

    if (detailMatch) {
      blocks.push({
        type: "detail",
        label: detailMatch[1].trim(),
        text: stripInlineMarkdown(detailMatch[2]),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < bodyLines.length && bodyLines[index].trim().startsWith("- ")) {
        items.push(bodyLines[index].trim().slice(2).trim());
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;

    while (
      index < bodyLines.length &&
      bodyLines[index].trim() &&
      !isStructuralLine(bodyLines[index].trim())
    ) {
      paragraphLines.push(bodyLines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return { venue, title, metadata, blocks };
}

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const splitCompoundHeading = (value: string) => {
  const match = value.match(/^(.+?)\s+—\s+(.+)$/);

  if (!match) {
    return null;
  }

  return {
    primary: match[1].trim(),
    secondary: match[2].trim(),
  };
};

function AllergenList({
  allergens,
  note,
}: {
  allergens: string[];
  note?: string;
}) {
  return (
    <div className="arrecife-menu__allergens">
      <span>Allergens</span>
      <ul aria-label={`Allergens: ${allergens.join(", ")}${note ? `, ${note}` : ""}`}>
        {allergens.map((allergen) => {
          const iconUrl = allergenIcons[allergen.toLowerCase()];

          return (
            <li key={allergen}>
              {iconUrl ? <img src={iconUrl} alt="" aria-hidden="true" /> : null}
              <span>{allergen}</span>
            </li>
          );
        })}
      </ul>
      {note ? <small>{note}</small> : null}
    </div>
  );
}

function MenuContent({ blocks }: { blocks: MenuBlock[] }) {
  const renderBlock = (block: MenuBlock, index: number) => {
    const key = `${block.type}-${index}`;

    if (block.type === "heading") {
      const headingId = `${slugify(block.text)}-${index}`;
      const compoundHeading =
        block.level === 2 ? splitCompoundHeading(block.text) : null;

      if (block.level === 3) {
        return (
          <h3 id={headingId} key={key}>
            {block.text}
          </h3>
        );
      }

      return (
        <h2
          aria-label={
            compoundHeading
              ? `${compoundHeading.primary}: ${compoundHeading.secondary}`
              : undefined
          }
          className={
            block.level === 1
              ? "subsection-title arrecife-menu__lead-heading"
              : compoundHeading
                ? "subsection-title arrecife-menu__split-heading"
                : "subsection-title"
          }
          id={headingId}
          key={key}
        >
          {compoundHeading ? (
            <>
              <span aria-hidden="true" className="arrecife-menu__heading-primary">
                {compoundHeading.primary}
              </span>
              <span aria-hidden="true" className="arrecife-menu__heading-subtitle">
                {compoundHeading.secondary}
              </span>
            </>
          ) : (
            block.text
          )}
        </h2>
      );
    }

    if (block.type === "paragraph") {
      return <p key={key}>{block.text}</p>;
    }

    if (block.type === "detail") {
      return (
        <p className="arrecife-menu__detail" key={key}>
          <strong>{block.label}:</strong> {block.text}
        </p>
      );
    }

    if (block.type === "notice") {
      return (
        <p className="arrecife-menu__notice" key={key}>
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul className="arrecife-menu__item-list" key={key}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "allergens") {
      return (
        <AllergenList
          allergens={block.allergens}
          note={block.note}
          key={key}
        />
      );
    }

    return <hr key={key} />;
  };
  const content = [];

  for (let index = 0; index < blocks.length; ) {
    const block = blocks[index];

    if (block.type === "heading" && block.level === 3) {
      const entryStart = index;
      const entryBlocks: Array<{ block: MenuBlock; index: number }> = [];

      entryBlocks.push({ block, index });
      index += 1;

      while (
        index < blocks.length &&
        blocks[index].type !== "heading" &&
        blocks[index].type !== "rule"
      ) {
        entryBlocks.push({ block: blocks[index], index });
        index += 1;
      }

      content.push(
        <section className="arrecife-menu__entry" key={`entry-${entryStart}`}>
          {entryBlocks.map((entry) => renderBlock(entry.block, entry.index))}
        </section>,
      );
      continue;
    }

    content.push(renderBlock(block, index));
    index += 1;
  }

  return content;
}

export function DiningMenuPage({ menu, venue }: DiningMenuPageProps) {
  const document = parseMenuSource(menu.source);
  usePageMetadata(
    `${menu.label} | ${venue.name}`,
    `${menu.label} concept for ${venue.name} at Villas Playa Sámara.`,
  );

  return (
    <div className={`arrecife-menu arrecife-menu--${venue.slug}`}>
      <style media="print">
        {"@page { size: Letter portrait; margin: 0.5in 0.55in 0.58in; }"}
      </style>
      <a className="skip-link" href="#menu-content">
        Skip to menu content
      </a>

      <header className="arrecife-menu__header">
        <div className="arrecife-menu__header-primary">
          <a className="arrecife-menu__back" href={venue.restaurantPath}>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span className="arrecife-menu__back-label-full">Back to restaurant</span>
            <span className="arrecife-menu__back-label-short">Restaurant</span>
          </a>
          <a
            className="arrecife-menu__brand"
            href={venue.restaurantPath}
            aria-label={`${venue.name} restaurant page`}
          >
            <img src={venue.logoUrl} alt="" />
          </a>
          <div className="arrecife-menu__header-actions">
            <span className="arrecife-menu__concept-label">Concept menus</span>
            <button
              className="arrecife-menu__print-button"
              type="button"
              onClick={() => window.print()}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                print
              </span>
              <span className="arrecife-menu__print-label-full">Print version</span>
              <span className="arrecife-menu__print-label-short">Print</span>
            </button>
          </div>
        </div>

        <nav className="arrecife-menu__nav" aria-label={`${venue.name} menus`}>
          {venue.menus.map((navigationMenu) => (
            <a
              href={`${venue.restaurantPath}/menus/${navigationMenu.slug}`}
              aria-current={navigationMenu.slug === menu.slug ? "page" : undefined}
              key={navigationMenu.slug}
            >
              {navigationMenu.shortLabel}
            </a>
          ))}
        </nav>
      </header>

      <main id="menu-content">
        <div className="arrecife-menu__print-masthead" aria-hidden="true">
          <img src={venue.logoUrl} alt="" />
          <div>{document.title}</div>
          <small>Concept menu · Subject to change</small>
        </div>

        <section className="arrecife-menu__cover" aria-labelledby="menu-title">
          <div className="arrecife-menu__cover-inner">
            <h1 id="menu-title">{document.title}</h1>
          </div>
        </section>

        <article className="arrecife-menu__content">
          <MenuContent blocks={document.blocks} />
        </article>

        <section className="arrecife-menu__metadata" aria-label="Menu information">
          <dl>
            {document.metadata
              .filter((item) => item.label)
              .map((item, index) => (
                <div key={`${item.label}-${index}`}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
          </dl>
          <div className="arrecife-menu__metadata-notes">
            {document.metadata
              .filter((item) => !item.label)
              .map((item, index) => (
                <p key={`note-${index}`}>{item.value}</p>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export function ArrecifeMenuPage({ menu }: { menu: DiningMenu }) {
  return <DiningMenuPage menu={menu} venue={arrecifeMenuVenue} />;
}
