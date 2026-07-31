import { type CSSProperties, useEffect, useState } from "react";
import arrecifeImageSmall from "../../../assets/images/optimized/homepage/dining/arrecife-restaurant-720.webp";
import arrecifeImageLarge from "../../../assets/images/optimized/homepage/dining/arrecife-restaurant-1440.webp";
import italianImageSmall from "../../../assets/images/optimized/homepage/dining/italian-restaurant-720.webp";
import italianImageLarge from "../../../assets/images/optimized/homepage/dining/italian-restaurant-1440.webp";
import mexicanImageSmall from "../../../assets/images/optimized/homepage/dining/mexican-restaurant-720.webp";
import mexicanImageLarge from "../../../assets/images/optimized/homepage/dining/mexican-restaurant-1440.webp";
import sportBarImageSmall from "../../../assets/images/optimized/homepage/dining/sport-bar-720.webp";
import sportBarImageLarge from "../../../assets/images/optimized/homepage/dining/sport-bar-1440.webp";
import "./dining-showcase.css";

const venues = [
  {
    name: "Arrecife Restaurant & Bar",
    type: "International & Costa Rican",
    copy: "The resort’s main dining venue, offering seasonal buffet and à la carte service with international variety and Costa Rican character.",
    image: { small: arrecifeImageSmall, large: arrecifeImageLarge },
  },
  {
    name: "Italian Restaurant",
    type: "Italian-inspired dinners",
    copy: "A relaxed dinner experience centered on familiar Italian flavors, including pizza, pasta, classic desserts, wines, and cocktails.",
    image: { small: italianImageSmall, large: italianImageLarge },
  },
  {
    name: "Mexican Restaurant & Snacks",
    type: "Daytime snacks & evening dining",
    copy: "A casual venue offering daytime snacks and a Mexican and Tex-Mex-inspired à la carte experience in the evening.",
    image: { small: mexicanImageSmall, large: mexicanImageLarge },
  },
  {
    name: "Sport Bar",
    type: "Cocktails, sports & casual bites",
    copy: "A relaxed place for cocktails, cold drinks, sports, salty treats, and casual snacks from afternoon into the evening.",
    image: { small: sportBarImageSmall, large: sportBarImageLarge },
  },
] as const;

type CarouselStyle = CSSProperties & {
  "--dining-carousel-offset": string;
};

function getCardsPerView() {
  return typeof window !== "undefined" &&
    window.matchMedia("(max-width: 760px)").matches
    ? 1
    : 2;
}

export function DiningShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const maximumIndex = venues.length - cardsPerView;
  const carouselStyle: CarouselStyle = {
    "--dining-carousel-offset": `${activeIndex * -25}%`,
  };

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 760px)");
    const updateCardsPerView = () =>
      setCardsPerView(compactViewport.matches ? 1 : 2);

    compactViewport.addEventListener("change", updateCardsPerView);
    return () =>
      compactViewport.removeEventListener("change", updateCardsPerView);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maximumIndex));
  }, [maximumIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const showNext = () => {
    setActiveIndex((current) => Math.min(current + 1, maximumIndex));
  };

  return (
    <section
      className="dining-showcase"
      id="dining"
      aria-labelledby="dining-title"
    >
      <div className="content-wrap dining-showcase__intro">
        <div data-home-motion="copy">
          <p className="section-kicker">Dining at Villas Playa Sámara</p>
          <h2 className="section-title" id="dining-title">
            Good food, with more ways to enjoy it
          </h2>
        </div>
        <div
          className="dining-showcase__copy"
          data-home-motion="copy"
          data-home-motion-delay="1"
        >
          <p className="section-copy">
            From relaxed buffet meals and daytime snacks to Italian and
            Mexican-inspired dinners, cocktails, and casual evenings, the
            resort’s four dining venues bring variety to each day while keeping
            everything close at hand.
          </p>
          <span
            className="text-link"
            role="link"
            aria-disabled="true"
            title="Dining page is not available yet"
          >
            Explore dining
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </span>
        </div>
      </div>

      <div
        className="content-wrap dining-showcase__carousel"
        aria-roledescription="carousel"
        aria-label="Dining venues"
        data-home-motion="carousel"
      >
        <button
          className="dining-showcase__control dining-showcase__control--previous"
          type="button"
          aria-label="Show previous restaurant"
          disabled={activeIndex === 0}
          onClick={showPrevious}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            chevron_left
          </span>
        </button>

        <div className="dining-showcase__viewport">
          <div
            className="dining-showcase__venues"
            style={carouselStyle}
            aria-live="polite"
          >
            {venues.map((venue, index) => {
              const isVisible =
                index >= activeIndex && index < activeIndex + cardsPerView;

              return (
                <article
                  className="dining-showcase__venue"
                  key={venue.name}
                  aria-label={`${venue.name}, restaurant ${index + 1} of ${venues.length}`}
                  aria-hidden={!isVisible}
                  inert={!isVisible}
                >
                  <div className="dining-showcase__image">
                    <img
                      src={venue.image.large}
                      srcSet={`${venue.image.small} 720w, ${venue.image.large} 1440w`}
                      sizes="(max-width: 760px) 90vw, 45vw"
                      alt={`${venue.name} at Villas Playa Sámara`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="dining-showcase__venue-copy">
                    <p>{venue.type}</p>
                    <h3>{venue.name}</h3>
                    <p>{venue.copy}</p>
                    <span
                      className="dining-showcase__venue-link"
                      role="link"
                      aria-disabled="true"
                      title={`${venue.name} page is not available yet`}
                    >
                      Explore restaurant
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <span className="dining-showcase__navigation-label">
          Navigate restaurants
        </span>

        <button
          className="dining-showcase__control dining-showcase__control--next"
          type="button"
          aria-label="Show next restaurant"
          disabled={activeIndex === maximumIndex}
          onClick={showNext}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            chevron_right
          </span>
        </button>
      </div>
    </section>
  );
}
