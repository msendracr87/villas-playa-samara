import { useEffect } from "react";
import beachImageLarge from "../../../assets/images/optimized/homepage/resort/samara-bay-booking-background-1920.webp";
import beachImageSmall from "../../../assets/images/optimized/homepage/resort/samara-bay-booking-background-960.webp";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./not-found-page.css";

const recoveryLinks = [
  { label: "Rooms & Villas", href: "/rooms-and-villas" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Wellness", href: "/wellness" },
] as const;

const notFoundDirectionContract = `
THESIS: A misplaced path becomes a calm return to Sámara; it refuses the generic centered error card.
OWN-WORLD: Forest shadow, lime, white, square actions, fine rules, and a full-height Sámara Bay photograph extend the established resort language.
STORY: Visitors recognize the missing page, return home immediately, or choose a main section without losing confidence in the site.
FIRST VIEWPORT: The shared header overlays a dark shoreline composition; direct recovery copy anchors the lower left while an oversized 404 rests across the photographed bay.
FORM: Branded recovery state, shaped directly as a narrow extension of the incumbent visual system.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function NotFoundPage() {
  usePageMetadata(
    "Page not found | Villas Playa Sámara",
    "The requested page could not be found. Return to Villas Playa Sámara or explore rooms, dining, experiences, and wellness.",
  );

  useEffect(() => {
    const contract = document.createComment(notFoundDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);

    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell not-found-page">
      <Header />

      <main id="main-content">
        <section
          className="not-found-page__hero"
          aria-labelledby="not-found-title"
        >
          <picture className="not-found-page__media" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet={beachImageSmall} />
            <img
              src={beachImageLarge}
              alt=""
              width="1920"
              height="1079"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          <div className="not-found-page__shade" aria-hidden="true" />

          <div className="content-wrap not-found-page__layout">
            <div className="not-found-page__copy">
              <h1 id="not-found-title">
                This page drifted <span>out of view.</span>
              </h1>
              <p>
                We could not find the page you were looking for. Return to the
                resort homepage or choose another place to continue.
              </p>

              <div className="not-found-page__actions">
                <a className="not-found-page__home" href="/">
                  Return home
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>
                <a className="not-found-page__gallery" href="/gallery">
                  View the gallery
                </a>
              </div>
            </div>

            <p className="not-found-page__code" aria-hidden="true">
              404
            </p>

            <nav
              className="not-found-page__recovery"
              aria-label="Continue exploring Villas Playa Sámara"
            >
              {recoveryLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  <span>{link.label}</span>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
