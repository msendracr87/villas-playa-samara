import { accommodations, type Accommodation } from "../../data/accommodations";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./accommodation-detail.css";

type AccommodationDetailProps = {
  accommodation: Accommodation;
};

export function AccommodationDetail({
  accommodation,
}: AccommodationDetailProps) {
  usePageMetadata(accommodation.pageTitle, accommodation.metaDescription);

  const currentIndex = accommodations.findIndex(
    (item) => item.slug === accommodation.slug,
  );
  const previousAccommodation =
    accommodations[(currentIndex - 1 + accommodations.length) % accommodations.length];
  const nextAccommodation =
    accommodations[(currentIndex + 1) % accommodations.length];

  return (
    <div className="site-shell accommodation-detail-page">
      <Header />
      <main id="main-content">
        <section
          className="accommodation-detail-page__hero"
          aria-labelledby="accommodation-detail-title"
        >
          <img
            src={accommodation.image.large}
            srcSet={`${accommodation.image.small} 720w, ${accommodation.image.large} 1440w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="content-wrap accommodation-detail-page__hero-content">
            <a href="/rooms-and-villas">
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_back
              </span>
              All rooms &amp; villas
            </a>
            <p>{accommodation.note}</p>
            <h1 id="accommodation-detail-title">{accommodation.name}</h1>
          </div>
        </section>

        <section
          className="accommodation-detail-page__facts"
          aria-label="Accommodation at a glance"
        >
          <dl className="content-wrap">
            <div>
              <dt>Category</dt>
              <dd>{accommodation.category}</dd>
            </div>
            <div>
              <dt>Beds</dt>
              <dd>{accommodation.beds}</dd>
            </div>
            <div>
              <dt>Sleeps</dt>
              <dd>{accommodation.sleeps}</dd>
            </div>
            <div>
              <dt>View</dt>
              <dd>{accommodation.view}</dd>
            </div>
            <div>
              <dt>Outdoor space</dt>
              <dd>{accommodation.outdoorSpace}</dd>
            </div>
          </dl>
        </section>

        <section
          className="content-wrap accommodation-detail-page__story"
          aria-labelledby="accommodation-story-title"
        >
          <div>
            <p className="section-kicker">Your stay</p>
            <h2 className="section-title" id="accommodation-story-title">
              {accommodation.note}
            </h2>
          </div>
          <div className="accommodation-detail-page__story-copy">
            {accommodation.detail.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          className="accommodation-detail-page__included"
          aria-labelledby="accommodation-included-title"
        >
          <div className="content-wrap accommodation-detail-page__included-layout">
            <div>
              <p>Inside your {accommodation.category.toLowerCase()}</p>
              <h2 id="accommodation-included-title">
                Included in your stay
              </h2>
            </div>
            <ul>
              {accommodation.features.map((feature) => (
                <li key={feature}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    check
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <nav
          className="content-wrap accommodation-detail-page__next"
          aria-label="Explore another accommodation"
        >
          <a href={`/rooms-and-villas/${previousAccommodation.slug}`}>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Previous stay</small>
              {previousAccommodation.shortName}
            </span>
          </a>
          <a href={`/rooms-and-villas/${nextAccommodation.slug}`}>
            <span>
              <small>Next stay</small>
              {nextAccommodation.shortName}
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
