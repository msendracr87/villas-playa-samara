import { useEffect } from "react";
import resortAerialLarge from "../../../assets/images/optimized/homepage/resort/samara-bay-aerial-1600.webp";
import resortAerialSmall from "../../../assets/images/optimized/homepage/resort/samara-bay-aerial-800.webp";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./thank-you-page.css";

const continueLinks = [
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Wellness", href: "/wellness" },
  { label: "Gallery", href: "/gallery" },
] as const;

const thankYouDirectionContract = `
THESIS: A successful inquiry lands like an arrival note from Sámara; it refuses the generic checkmark card on an empty page.
OWN-WORLD: Forest and sand fields, lime confirmation, square geometry, fine rules, and one elevated aerial photograph extend the established resort language.
STORY: Visitors know their inquiry was received, return home or to accommodations, and can continue exploring without an invented response-time promise.
FIRST VIEWPORT: The shared header sits over forest; a direct thank-you anchors the dark left field while an aerial Sámara image and lime confirmation marker occupy the sand field.
FORM: Branded form-success state, shaped directly as a narrow extension of the incumbent visual system.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function ThankYouPage() {
  usePageMetadata(
    "Thank you | Villas Playa Sámara",
    "Your inquiry has been received by Villas Playa Sámara. Continue exploring rooms and villas, dining, experiences, wellness, and the resort gallery.",
  );

  useEffect(() => {
    const contract = document.createComment(thankYouDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);

    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell thank-you-page">
      <Header />

      <main id="main-content">
        <section
          className="thank-you-page__hero"
          aria-labelledby="thank-you-title"
        >
          <div className="content-wrap thank-you-page__layout">
            <div className="thank-you-page__copy">
              <h1 id="thank-you-title">
                <span>Thank you.</span> Your message is with us.
              </h1>
              <p>
                Your inquiry has been received. You can continue exploring
                Villas Playa Sámara while our team reviews the details you
                shared.
              </p>

              <div className="thank-you-page__actions">
                <a className="thank-you-page__home" href="/">
                  Return home
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>
                <a
                  className="thank-you-page__accommodations"
                  href="/rooms-and-villas"
                >
                  View rooms &amp; villas
                </a>
              </div>
            </div>

            <div className="thank-you-page__visual">
              <picture className="thank-you-page__media">
                <source media="(max-width: 760px)" srcSet={resortAerialSmall} />
                <img
                  src={resortAerialLarge}
                  alt=""
                  width="1600"
                  height="1225"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>

              <div className="thank-you-page__confirmation" role="status">
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  check
                </span>
                <span>Inquiry received</span>
              </div>

              <nav
                className="thank-you-page__continue"
                aria-label="Continue exploring Villas Playa Sámara"
              >
                {continueLinks.map((link) => (
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
