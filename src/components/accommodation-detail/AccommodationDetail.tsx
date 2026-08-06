import { useState, type CSSProperties } from "react";
import {
  accommodations,
  type Accommodation,
  getAccommodationTitleParts,
} from "../../data/accommodations";
import { getAccommodationFaqs } from "../../data/accommodationFaqs";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import { AccommodationMediaDialog } from "../accommodation-card/AccommodationMediaDialog";
import { AccommodationInquiryForm } from "../accommodation-inquiry/AccommodationInquiry";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./accommodation-detail.css";

type AccommodationDetailProps = {
  accommodation: Accommodation;
};

const getFeatureIcon = (feature: string) => {
  const normalizedFeature = feature.toLowerCase();

  if (normalizedFeature.includes("bed")) return "king_bed";
  if (
    normalizedFeature.includes("sofa") ||
    normalizedFeature.includes("living")
  ) {
    return "chair";
  }
  if (normalizedFeature.includes("dining")) return "table_restaurant";
  if (normalizedFeature.includes("kitchen")) return "countertops";
  if (normalizedFeature.includes("fridge")) return "kitchen";
  if (normalizedFeature.includes("microwave")) return "microwave";
  if (normalizedFeature.includes("toaster")) return "breakfast_dining";
  if (normalizedFeature.includes("coffee")) return "coffee_maker";
  if (
    normalizedFeature.includes("cookware") ||
    normalizedFeature.includes("utensils") ||
    normalizedFeature.includes("mugs")
  ) {
    return "flatware";
  }
  if (normalizedFeature.includes("air conditioning")) return "ac_unit";
  if (normalizedFeature.includes("ceiling fan")) return "mode_fan";
  if (normalizedFeature.includes("bathroom amenities")) return "soap";
  if (normalizedFeature.includes("bathroom")) return "bathroom";
  if (normalizedFeature.includes("hair dryer")) return "air";
  if (normalizedFeature.includes("safe")) return "lock";
  if (normalizedFeature.includes("tv")) return "tv";
  if (normalizedFeature.includes("wi-fi")) return "wifi";
  if (normalizedFeature.includes("luggage")) return "luggage";
  if (
    normalizedFeature.includes("terrace") ||
    normalizedFeature.includes("balcony")
  ) {
    return "deck";
  }

  return "check";
};

export function AccommodationDetail({
  accommodation,
}: AccommodationDetailProps) {
  const [dialogMode, setDialogMode] = useState<"floor-plan" | "gallery" | null>(
    null,
  );
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const includedRef = useParallaxBackground("--included-parallax-y");
  usePageMetadata(accommodation.pageTitle, accommodation.metaDescription);

  const { bedConfiguration, name: displayName } =
    getAccommodationTitleParts(accommodation);
  const includedColumnCount = accommodation.features.length <= 15 ? 3 : 4;
  const includedRowCount = Math.ceil(
    accommodation.features.length / includedColumnCount,
  );
  const faqs = getAccommodationFaqs(accommodation);

  const currentIndex = accommodations.findIndex(
    (item) => item.slug === accommodation.slug,
  );
  const previousAccommodation =
    accommodations[(currentIndex - 1 + accommodations.length) % accommodations.length];
  const nextAccommodation =
    accommodations[(currentIndex + 1) % accommodations.length];

  const openGallery = () => {
    setGalleryIndex(0);
    setDialogMode("gallery");
  };

  const showPreviousImage = () => {
    setGalleryIndex((current) =>
      (current - 1 + accommodation.gallery.length) %
      accommodation.gallery.length,
    );
  };

  const showNextImage = () => {
    setGalleryIndex(
      (current) => (current + 1) % accommodation.gallery.length,
    );
  };

  return (
    <div className="site-shell accommodation-detail-page">
      <Header />
      <main id="main-content">
        <div className="accommodation-detail-page__hero" aria-hidden="true">
          <img
            src={accommodation.image.large}
            srcSet={`${accommodation.image.small} 720w, ${accommodation.image.large} 1440w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
        </div>

        <section
          className="content-wrap accommodation-detail-page__story"
          aria-labelledby="accommodation-detail-title"
        >
          <header className="accommodation-detail-page__story-heading">
            <p className="section-kicker">{accommodation.note}</p>
            <h1 id="accommodation-detail-title">
              <span>{displayName}</span>
              {bedConfiguration ? (
                <span className="accommodation-detail-page__bed-configuration">
                  {bedConfiguration}
                </span>
              ) : null}
            </h1>
          </header>

          <div className="accommodation-detail-page__story-copy">
            {accommodation.detail.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul
            className="accommodation-detail-page__story-facts"
            aria-label="Accommodation at a glance"
          >
            <li>
              <span className="material-symbols-outlined" aria-hidden="true">
                king_bed
              </span>
              <span>{accommodation.beds}</span>
            </li>
            <li>
              <span className="material-symbols-outlined" aria-hidden="true">
                group
              </span>
              <span>{accommodation.sleeps}</span>
            </li>
            <li>
              <span className="material-symbols-outlined" aria-hidden="true">
                landscape
              </span>
              <span>{accommodation.view}</span>
            </li>
            <li>
              <span className="material-symbols-outlined" aria-hidden="true">
                square_foot
              </span>
              <span>{accommodation.size}</span>
            </li>
          </ul>

          <div className="accommodation-detail-page__story-actions">
            <a href="/rooms-and-villas">
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_back
              </span>
              All rooms &amp; villas
            </a>
            <div className="accommodation-detail-page__story-media-actions">
              <button
                type="button"
                onClick={() => setDialogMode("floor-plan")}
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  map
                </span>
                Floor plan
              </button>
              <button type="button" onClick={openGallery}>
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  photo_library
                </span>
                Gallery
              </button>
            </div>
            <button
              className="accommodation-detail-page__story-book"
              type="button"
              disabled
              aria-label="Book now — online booking is not yet available"
            >
              Book now
            </button>
          </div>
        </section>

        {dialogMode ? (
          <AccommodationMediaDialog
            accommodation={accommodation}
            galleryIndex={galleryIndex}
            mode={dialogMode}
            onClose={() => setDialogMode(null)}
            onNext={showNextImage}
            onPrevious={showPreviousImage}
          />
        ) : null}

        <section
          className="accommodation-detail-page__included"
          aria-labelledby="accommodation-included-title"
          ref={includedRef}
        >
          <div className="content-wrap accommodation-detail-page__included-layout">
            <div>
              <p>Inside your {accommodation.category.toLowerCase()}</p>
              <h2 id="accommodation-included-title">
                Included in your stay
              </h2>
            </div>
            <ul
              style={{
                "--included-columns": includedColumnCount,
                "--included-rows": includedRowCount,
              } as CSSProperties}
            >
              {accommodation.features.map((feature) => (
                <li key={feature}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    {getFeatureIcon(feature)}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="content-wrap accommodation-detail-page__faqs"
          aria-labelledby="accommodation-faqs-title"
        >
          <header className="accommodation-detail-page__faqs-heading">
            <h2 id="accommodation-faqs-title">
              Questions about this stay
            </h2>
            <p>
              Practical details to help you choose the room, suite, or villa
              that fits your plans.
            </p>
          </header>

          <div className="accommodation-detail-page__faqs-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    add
                  </span>
                </summary>
                <div>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <button
            className="accommodation-detail-page__more-questions"
            type="button"
            aria-controls="accommodation-detail-inquiry"
            aria-expanded={isInquiryOpen}
            onClick={() => setIsInquiryOpen((isOpen) => !isOpen)}
          >
            More questions?
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>

          <div
            className="accommodation-detail-page__faqs-divider"
            aria-hidden="true"
          />

          <div
            className="accommodation-detail-page__faqs-inquiry"
            id="accommodation-detail-inquiry"
            hidden={!isInquiryOpen}
          >
            <AccommodationInquiryForm
              idPrefix={`accommodation-${accommodation.slug}-inquiry`}
              selectedAccommodation={accommodation}
            />
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
