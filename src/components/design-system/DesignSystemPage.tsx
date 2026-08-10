import type { CSSProperties } from "react";
import { accommodations } from "../../data/accommodations";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { AccommodationCard } from "../accommodation-card/AccommodationCard";
import "../accommodation-inquiry/accommodation-inquiry.css";
import "../booking-call-to-action/booking-call-to-action.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../wellness-overview/wellness-overview.css";
import "./design-system-page.css";

const colorTokens = [
  { name: "--color-forest-950", role: "Deepest background" },
  { name: "--color-forest-900", role: "Primary dark surface" },
  { name: "--color-forest-800", role: "Secondary dark surface" },
  { name: "--color-forest-700", role: "Supporting forest tone" },
  { name: "--color-leaf", role: "Logo and botanical accent" },
  { name: "--color-lime", role: "High-contrast accent" },
  { name: "--color-brand-green-text", role: "Accessible green text" },
  { name: "--color-sand-50", role: "Primary light surface" },
  { name: "--color-sand-100", role: "Field and inset surface" },
  { name: "--color-sand-200", role: "Rules and subtle borders" },
  { name: "--color-ink", role: "Primary text" },
  { name: "--color-muted", role: "Secondary text" },
] as const;

const radiusInventory = [
  { value: "0", name: "Square", usage: "Buttons, forms, panels, dialogs, and imagery" },
  { value: "50%", name: "Circle", usage: "Identifiers, utility icons, and list markers only" },
] as const;

const componentInventory = [
  ["Header", "Global navigation", "Transparent overlay, outlined booking action", "src/components/header"],
  ["Hero", "Homepage introduction", "Full-viewport media, display copy, highlight rail", "src/components/hero"],
  ["HomeIntro", "Resort introduction", "Editorial copy, fact treatment, aerial media", "src/components/home-intro"],
  ["AccommodationsShowcase", "Homepage stay selector", "Split media, indexed navigation, text actions", "src/components/accommodations-showcase"],
  ["DiningShowcase", "Venue carousel", "Square media, large arrow controls, venue summaries", "src/components/dining-showcase"],
  ["ExperiencesShowcase", "Experience collection", "Dark feature surface, media cards, overlay copy", "src/components/experiences-showcase"],
  ["WellnessOverview", "Current and future wellness", "Square panel and statuses with circular utility icons", "src/components/wellness-overview"],
  ["GalleryPreview", "Homepage gallery", "Image-led grid with fine inset rules", "src/components/gallery-preview"],
  ["BookingCallToAction", "Homepage close", "Full-bleed media, square primary and text actions", "src/components/booking-call-to-action"],
  ["Footer", "Global close and navigation", "Deep forest surface and text actions", "src/components/footer"],
  ["AccommodationsOverview", "Rooms & Villas index", "Editorial grid, pattern surfaces, shared data", "src/components/accommodations-overview"],
  ["AccommodationCard", "Reusable stay summary", "Square media, icon-led key features, floor plan and gallery dialogs, three actions", "src/components/accommodation-card"],
  ["AccommodationDetail", "Reusable stay detail", "Full-bleed hero, facts, features, adjacent navigation", "src/components/accommodation-detail"],
  ["AccommodationInquiry", "Rooms & Villas lead form", "Square controls, two-column fields, disabled submit state", "src/components/accommodation-inquiry"],
] as const;

const iconNames = [
  "arrow_forward",
  "location_on",
  "king_bed",
  "wifi",
  "restaurant",
  "spa",
  "pool",
  "menu",
] as const;

function getTokenValue(token: string) {
  if (typeof document === "undefined") {
    return "";
  }

  return getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
}

export function DesignSystemPage() {
  usePageMetadata(
    "Visual System Reference | Villas Playa Sámara",
    "Internal visual reference for the Villas Playa Sámara website design system.",
  );

  return (
    <div className="site-shell design-system-page">
      <Header />
      <main id="main-content">
        <section className="design-system-page__hero">
          <div className="content-wrap">
            <p>Internal visual reference</p>
            <h1>See the system before changing the system.</h1>
            <p>
              This page renders the site&apos;s current tokens, shared classes,
              controls, shapes, and representative components. Differences are
              shown intentionally so they can be reviewed before they are
              standardized.
            </p>
          </div>
        </section>

        <nav className="design-system-page__index" aria-label="Design system sections">
          <div className="content-wrap">
            <a href="#foundations">Foundations</a>
            <a href="#typography">Typography</a>
            <a href="#actions">Actions</a>
            <a href="#forms">Forms</a>
            <a href="#statuses-icons">Statuses &amp; icons</a>
            <a href="#cards">Cards</a>
            <a href="#inventory">Inventory</a>
          </div>
        </nav>

        <section className="design-system-page__section" id="foundations">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Foundations</p>
                <h2 className="section-title">Color, spacing, and shape</h2>
              </div>
              <p className="section-copy">
                Color and layout values come from the global CSS custom
                properties. Radius values are currently local conventions, not
                yet shared tokens.
              </p>
            </header>

            <div className="design-system-page__subsection">
              <div className="design-system-page__subsection-heading">
                <h3>Color tokens</h3>
                <code>src/styles/global.css</code>
              </div>
              <div className="design-system-page__colors">
                {colorTokens.map((token) => (
                  <article key={token.name}>
                    <div style={{ background: `var(${token.name})` }} />
                    <h4>{token.name}</h4>
                    <code>{getTokenValue(token.name)}</code>
                    <p>{token.role}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="design-system-page__subsection">
              <div className="design-system-page__subsection-heading">
                <h3>Layout tokens</h3>
                <code>Live CSS custom properties</code>
              </div>
              <dl className="design-system-page__token-list">
                {["--content-width", "--page-gutter", "--section-space", "--interaction-target-min"].map((token) => (
                  <div key={token}>
                    <dt>{token}</dt>
                    <dd>{getTokenValue(token)}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="design-system-page__subsection">
              <div className="design-system-page__subsection-heading">
                <h3>Shape system</h3>
                <code>Square by default; circles only for non-control markers</code>
              </div>
              <div className="design-system-page__shapes">
                {radiusInventory.map((radius) => (
                  <article key={radius.name}>
                    <div
                      style={{
                        "--design-system-radius": radius.value,
                      } as CSSProperties}
                    />
                    <h4>{radius.name}</h4>
                    <code>{radius.value}</code>
                    <p>{radius.usage}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="design-system-page__section design-system-page__section--sand" id="typography">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Typography</p>
                <h2 className="section-title">One family, several scales</h2>
              </div>
              <p className="section-copy">
                DM Sans carries display and body roles. Hierarchy comes from
                scale, weight, compact leading, and tracked uppercase labels.
              </p>
            </header>

            <div className="design-system-page__type-specimens">
              <article>
                <div><strong>Page display</strong><code>clamp(3rem, 7vw, 7rem) · 400 · 0.92</code></div>
                <p className="design-system-page__display">Ready for your stay in Sámara?</p>
              </article>
              <article>
                <div><strong>Section title</strong><code>.section-title · clamp(2.4rem, 5.1vw, 5rem)</code></div>
                <h3 className="section-title">Room to settle into Sámara</h3>
              </article>
              <article>
                <div><strong>Kicker</strong><code>.section-kicker · 0.72rem · 0.16em</code></div>
                <p className="section-kicker">Rooms, suites &amp; villas</p>
              </article>
              <article>
                <div><strong>Body copy</strong><code>.section-copy · 1–1.18rem · 1.75</code></div>
                <p className="section-copy">
                  A calm body style supports longer descriptions while keeping
                  generous space around display typography.
                </p>
              </article>
              <article>
                <div><strong>Label</strong><code>0.65–0.78rem · 600 · uppercase</code></div>
                <p className="design-system-page__label">Available now</p>
              </article>
              <article>
                <div><strong>Supporting text</strong><code>0.82–0.96rem · 1.6–1.7</code></div>
                <p className="design-system-page__supporting-copy">
                  Used for card descriptions, facts, operational notes, and
                  secondary context.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="design-system-page__section" id="actions">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Actions</p>
                <h2 className="section-title">Current button and link language</h2>
              </div>
              <p className="section-copy">
                These are the live variants causing the shape comparison. The
                labels beneath each specimen identify the owning selector and
                its current geometry.
              </p>
            </header>

            <div className="design-system-page__action-specimens">
              <article>
                <div className="design-system-page__action-stage">
                  <a className="button-link" href="#actions">Primary action</a>
                </div>
                <h3>Global solid action</h3>
                <code>.button-link · 54px min-height · 0 radius</code>
              </article>
              <article>
                <div className="design-system-page__action-stage design-system-page__action-stage--dark">
                  <a className="site-header__book" href="#actions">Book now</a>
                </div>
                <h3>Header outline action</h3>
                <code>.site-header__book · 52px min-height · 0 radius</code>
              </article>
              <article>
                <div className="design-system-page__action-stage design-system-page__action-stage--dark">
                  <button className="booking-call-to-action__primary" type="button">
                    Book now
                  </button>
                </div>
                <h3>Booking primary action</h3>
                <code>.booking-call-to-action__primary · 56px · 0 radius</code>
              </article>
              <article>
                <div className="design-system-page__action-stage">
                  <a className="text-link" href="#actions">
                    Explore rooms
                    <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                  </a>
                </div>
                <h3>Global text action</h3>
                <code>.text-link · 44px target · no container</code>
              </article>
              <article>
                <div className="design-system-page__action-stage">
                  <span className="text-link" aria-disabled="true">
                    Coming soon
                    <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                  </span>
                </div>
                <h3>Disabled text action</h3>
                <code>.text-link[aria-disabled] · 62% opacity</code>
              </article>
              <article>
                <div className="design-system-page__action-stage">
                  <button className="design-system-page__form-action" type="button">
                    Form action
                  </button>
                </div>
                <h3>Inquiry action direction</h3>
                <code>54px min-height · 0 radius</code>
              </article>
            </div>
          </div>
        </section>

        <section className="design-system-page__section design-system-page__section--forest" id="forms">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Form controls</p>
                <h2 className="section-title">Rooms &amp; Villas inquiry language</h2>
              </div>
              <p className="section-copy">
                The form uses visible labels, sand-100 input surfaces, sand-200
                borders, square corners, and a stronger green focus state.
              </p>
            </header>

            <form className="accommodation-inquiry__form design-system-page__form" onSubmit={(event) => event.preventDefault()}>
              <div className="accommodation-inquiry__field">
                <label htmlFor="design-system-text">Text input</label>
                <input id="design-system-text" type="text" placeholder="Example text" />
              </div>
              <div className="accommodation-inquiry__field">
                <label htmlFor="design-system-select">Select</label>
                <select id="design-system-select" defaultValue="">
                  <option value="">Choose an option</option>
                  <option value="example">Example option</option>
                </select>
              </div>
              <div className="accommodation-inquiry__field">
                <label htmlFor="design-system-date">Date input</label>
                <input id="design-system-date" type="date" />
              </div>
              <div className="accommodation-inquiry__field">
                <label htmlFor="design-system-number">Number input</label>
                <input id="design-system-number" type="number" min="1" />
              </div>
              <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
                <label htmlFor="design-system-textarea">Textarea</label>
                <textarea id="design-system-textarea" rows={4} placeholder="Longer message" />
              </div>
              <div className="accommodation-inquiry__actions accommodation-inquiry__field--full">
                <button type="button" disabled>Disabled submit</button>
                <p>Disabled states remain readable and clearly unavailable.</p>
              </div>
            </form>
          </div>
        </section>

        <section className="design-system-page__section" id="statuses-icons">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Statuses &amp; icons</p>
                <h2 className="section-title">Small signals with specific roles</h2>
              </div>
              <p className="section-copy">
                Material Symbols is the official icon system. Statuses use
                square geometry, while circles are reserved for identifiers,
                utility icons, and list markers.
              </p>
            </header>

            <div className="design-system-page__status-row">
              <div>
                <span className="wellness-overview__status wellness-overview__status--current">Available now</span>
                <code>Current status · 0 radius</code>
              </div>
              <div className="design-system-page__status-dark">
                <span className="wellness-overview__status">Under development</span>
                <code>Future status · 0 radius</code>
              </div>
            </div>

            <div className="design-system-page__icons">
              {iconNames.map((icon) => (
                <div key={icon}>
                  <span className="material-symbols-outlined wellness-overview__icon" aria-hidden="true">{icon}</span>
                  <code>{icon}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="design-system-page__section design-system-page__section--sand" id="cards">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Representative component</p>
                <h2 className="section-title">Accommodation card</h2>
              </div>
              <p className="section-copy">
                This is the real reusable card, rendered from the shared
                accommodation data. Changes to the production component appear
                here automatically.
              </p>
            </header>
            <div className="design-system-page__card-sample">
              <AccommodationCard accommodation={accommodations[0]} index={0} />
            </div>
          </div>
        </section>

        <section className="design-system-page__section" id="inventory">
          <div className="content-wrap">
            <header className="design-system-page__section-heading">
              <div>
                <p className="section-kicker">Component inventory</p>
                <h2 className="section-title">Current visual building blocks</h2>
              </div>
              <p className="section-copy">
                Large page sections are listed rather than duplicated at full
                size. Their source directories make each implementation easy
                to locate while refining the system.
              </p>
            </header>

            <div className="design-system-page__table-wrap">
              <table>
                <thead>
                  <tr><th>Component</th><th>Role</th><th>Visual attributes</th><th>Source</th></tr>
                </thead>
                <tbody>
                  {componentInventory.map(([name, role, attributes, source]) => (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td>{role}</td>
                      <td>{attributes}</td>
                      <td><code>{source}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
