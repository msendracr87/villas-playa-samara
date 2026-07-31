import { useState } from "react";
import gardenKingImageSmall from "../../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-king-720.webp";
import gardenKingImageLarge from "../../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-king-1440.webp";
import juniorGardenImageSmall from "../../../assets/images/optimized/homepage/accommodations/junior-suite-garden-view-720.webp";
import juniorGardenImageLarge from "../../../assets/images/optimized/homepage/accommodations/junior-suite-garden-view-1440.webp";
import gardenQueensImageSmall from "../../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-two-queen-beds-720.webp";
import gardenQueensImageLarge from "../../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-two-queen-beds-1440.webp";
import juniorBeachfrontImageSmall from "../../../assets/images/optimized/homepage/accommodations/junior-suite-beachfront-720.webp";
import juniorBeachfrontImageLarge from "../../../assets/images/optimized/homepage/accommodations/junior-suite-beachfront-1440.webp";
import gardenVillaImageSmall from "../../../assets/images/optimized/homepage/accommodations/two-bedroom-garden-view-villa-720.webp";
import gardenVillaImageLarge from "../../../assets/images/optimized/homepage/accommodations/two-bedroom-garden-view-villa-1440.webp";
import beachfrontVillaImageSmall from "../../../assets/images/optimized/homepage/accommodations/two-bedroom-beachfront-villa-720.webp";
import beachfrontVillaImageLarge from "../../../assets/images/optimized/homepage/accommodations/two-bedroom-beachfront-villa-1440.webp";
import oceanKingImageSmall from "../../../assets/images/optimized/homepage/accommodations/deluxe-ocean-view-king-720.webp";
import oceanKingImageLarge from "../../../assets/images/optimized/homepage/accommodations/deluxe-ocean-view-king-1440.webp";
import luxuryVillaImageSmall from "../../../assets/images/optimized/homepage/accommodations/three-bedroom-beachfront-luxury-villa-720.webp";
import luxuryVillaImageLarge from "../../../assets/images/optimized/homepage/accommodations/three-bedroom-beachfront-luxury-villa-1440.webp";
import "./accommodations-showcase.css";

const accommodations = [
  {
    name: "Deluxe Garden View — King-Size Bed",
    note: "Cozy comfort for two",
    summary:
      "A comfortable room for couples or solo travelers, with a terrace or balcony overlooking the garden or pool area.",
    meta: "King bed · 2 guests · Garden or pool view",
    image: { small: gardenKingImageSmall, large: gardenKingImageLarge },
  },
  {
    name: "Junior Suite Garden View",
    note: "Spacious villa with nature views",
    summary:
      "A garden-view suite with flexible sleeping space, a shared living and dining area, a full kitchen, and a private terrace.",
    meta: "Flexible beds · Up to 4 guests · Garden view",
    image: { small: juniorGardenImageSmall, large: juniorGardenImageLarge },
  },
  {
    name: "Deluxe Garden View — Two Queen-Size Beds",
    note: "Comfort for small groups",
    summary:
      "A practical room with two Queen beds, light refreshment facilities, a sofa seating area, and an outdoor terrace or balcony.",
    meta: "Two Queen beds · 4 guests · Garden or pool view",
    image: { small: gardenQueensImageSmall, large: gardenQueensImageLarge },
  },
  {
    name: "Junior Suite Beachfront",
    note: "Steps from the sand",
    summary:
      "A beachfront suite with flexible sleeping space, shared living and dining, a full kitchen, and a terrace facing the Pacific.",
    meta: "Flexible beds · Up to 4 guests · Beachfront",
    image: {
      small: juniorBeachfrontImageSmall,
      large: juniorBeachfrontImageLarge,
    },
  },
  {
    name: "Two Bedroom Garden View Villa",
    note: "A spacious family retreat",
    summary:
      "A two-bedroom villa with private bathrooms, generous shared living space, a full kitchen, and a tropical garden terrace.",
    meta: "Two bedrooms · Up to 6 guests · Garden view",
    image: { small: gardenVillaImageSmall, large: gardenVillaImageLarge },
  },
  {
    name: "Two Bedroom Beachfront Villa",
    note: "An oceanfront family escape",
    summary:
      "A spacious two-bedroom villa with private bathrooms, a full kitchen, and an inviting terrace beside the Pacific.",
    meta: "Two bedrooms · Up to 6 guests · Beachfront",
    image: {
      small: beachfrontVillaImageSmall,
      large: beachfrontVillaImageLarge,
    },
  },
  {
    name: "Deluxe Ocean View — King-Size Bed",
    note: "A romantic ocean hideaway",
    summary:
      "An intimate ocean-view room for two with everyday refreshment amenities and a spacious beachfront terrace.",
    meta: "King bed · 2 guests · Ocean view",
    image: { small: oceanKingImageSmall, large: oceanKingImageLarge },
  },
  {
    name: "Three Bedroom Beachfront Luxury Villa",
    note: "A premium oceanfront stay",
    summary:
      "A generous three-bedroom villa with two bathrooms, a full kitchen, and abundant shared space right beside the sand.",
    meta: "Three bedrooms · Up to 8 guests · Beachfront",
    image: { small: luxuryVillaImageSmall, large: luxuryVillaImageLarge },
  },
] as const;

export function AccommodationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const activeAccommodation = accommodations[activeIndex];

  const toggleMobileAccommodation = (index: number) => {
    setActiveIndex(index);
    setExpandedIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <section
      className="accommodations-showcase"
      id="accommodation"
      aria-labelledby="accommodations-title"
    >
      <div className="content-wrap accommodations-showcase__intro">
        <div data-home-motion="copy">
          <p className="section-kicker">Rooms, Suites &amp; Villas</p>
          <h2 className="section-title" id="accommodations-title">
            Find the space that fits your stay
          </h2>
        </div>
        <div
          className="accommodations-showcase__intro-copy"
          data-home-motion="copy"
          data-home-motion-delay="1"
        >
          <p className="section-copy">
            Choose a comfortable room for two, a family-friendly suite, or a
            multi-bedroom villa with shared living space and kitchen
            facilities. Garden and beachfront options make it easier to find
            the layout and setting that feel right for your trip.
          </p>
          <span
            className="text-link"
            role="link"
            aria-disabled="true"
            title="Rooms and Villas page is not available yet"
          >
            Explore all rooms &amp; villas
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </span>
        </div>
      </div>

      <div
        className="accommodations-showcase__experience"
        data-home-motion="wide-media"
      >
        <div className="accommodations-showcase__media">
          <img
            key={activeAccommodation.image.large}
            src={activeAccommodation.image.large}
            srcSet={`${activeAccommodation.image.small} 720w, ${activeAccommodation.image.large} 1440w`}
            sizes="(max-width: 980px) 100vw, 73vw"
            alt={`${activeAccommodation.name} accommodation`}
            loading="lazy"
            decoding="async"
          />
          <div className="accommodations-showcase__caption">
            <p>{activeAccommodation.note}</p>
            <h3>{activeAccommodation.name}</h3>
            <span>{activeAccommodation.meta}</span>
            <p className="accommodations-showcase__summary">
              {activeAccommodation.summary}
            </p>
          </div>
          <span className="accommodations-showcase__count" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(accommodations.length).padStart(2, "0")}
          </span>
        </div>

        <div
          className="accommodations-showcase__selector accommodations-showcase__selector--desktop"
          aria-label="Choose an accommodation to preview"
        >
          {accommodations.map((accommodation, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                className="accommodations-showcase__option"
                key={accommodation.name}
              >
                <button
                  className={isActive ? "is-active" : undefined}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {accommodation.name}
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div
          className="accommodations-showcase__mobile-accordion"
          aria-label="Browse rooms, suites, and villas"
        >
          {accommodations.map((accommodation, index) => {
            const isExpanded = index === expandedIndex;
            const buttonId = `accommodation-mobile-trigger-${index}`;
            const panelId = `accommodation-mobile-panel-${index}`;

            return (
              <div
                className={`accommodations-showcase__mobile-item${
                  isExpanded ? " is-expanded" : ""
                }`}
                key={accommodation.name}
              >
                <button
                  id={buttonId}
                  className="accommodations-showcase__mobile-trigger"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleMobileAccommodation(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{accommodation.name}</span>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                <div
                  id={panelId}
                  className="accommodations-showcase__mobile-panel"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isExpanded}
                >
                  <div className="accommodations-showcase__mobile-panel-inner">
                    <figure>
                      <img
                        src={accommodation.image.small}
                        srcSet={`${accommodation.image.small} 720w, ${accommodation.image.large} 1440w`}
                        sizes="calc(100vw - 40px)"
                        alt={`${accommodation.name} accommodation`}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        <p>{accommodation.note}</p>
                        <span>{accommodation.meta}</span>
                        <p>{accommodation.summary}</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
