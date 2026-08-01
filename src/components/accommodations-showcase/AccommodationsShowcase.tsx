import { useState } from "react";
import {
  accommodations,
  getAccommodationPath,
} from "../../data/accommodations";
import "./accommodations-showcase.css";

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
          <a className="text-link" href="/rooms-and-villas">
            Explore all rooms &amp; villas
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
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
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="accommodations-showcase__caption">
            <div className="accommodations-showcase__caption-copy">
              <p>{activeAccommodation.note}</p>
              <h3>{activeAccommodation.name}</h3>
              <span>{activeAccommodation.homepageMeta}</span>
              <p className="accommodations-showcase__summary">
                {activeAccommodation.homepageSummary}
              </p>
            </div>
            <a
              className="accommodations-showcase__view-more accommodations-showcase__desktop-view-more"
              href={getAccommodationPath(activeAccommodation)}
            >
              View more
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
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
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        <p>{accommodation.note}</p>
                        <span>{accommodation.homepageMeta}</span>
                        <p className="accommodations-showcase__mobile-summary">
                          {accommodation.homepageSummary}
                        </p>
                        <a
                          className="accommodations-showcase__view-more accommodations-showcase__mobile-view-more"
                          href={getAccommodationPath(accommodation)}
                          tabIndex={isExpanded ? undefined : -1}
                        >
                          View more
                          <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                          >
                            arrow_forward
                          </span>
                        </a>
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
