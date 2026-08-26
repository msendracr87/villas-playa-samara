import { useState } from "react";
import sunsetImageSmall from "../../../assets/images/optimized/daytours/sunset-tour-960.webp";
import sunsetImageLarge from "../../../assets/images/optimized/daytours/sunset-tour-1600.webp";
import sunsetBackdrop from "../../../assets/images/optimized/daytours/sunset-tour-blur-1920.webp";
import horsebackImageSmall from "../../../assets/images/optimized/daytours/horseback-riding-960.webp";
import horsebackImageLarge from "../../../assets/images/optimized/daytours/horseback-riding-1600.webp";
import horsebackBackdrop from "../../../assets/images/optimized/daytours/horseback-riding-blur-1920.webp";
import seaLifeImageSmall from "../../../assets/images/optimized/daytours/sea-life-adventure-tour-960.webp";
import seaLifeImageLarge from "../../../assets/images/optimized/daytours/sea-life-adventure-tour-1600.webp";
import seaLifeBackdrop from "../../../assets/images/optimized/daytours/sea-life-adventure-tour-blur-1920.webp";
import adrenalineImageSmall from "../../../assets/images/optimized/daytours/jungle-adrenaline-day-pass-960.webp";
import adrenalineImageLarge from "../../../assets/images/optimized/daytours/jungle-adrenaline-day-pass-1600.webp";
import adrenalineBackdrop from "../../../assets/images/optimized/daytours/jungle-adrenaline-day-pass-blur-1920.webp";
import paloVerdeImageSmall from "../../../assets/images/optimized/daytours/palo-verde-tour-960.webp";
import paloVerdeImageLarge from "../../../assets/images/optimized/daytours/palo-verde-tour-1600.webp";
import paloVerdeBackdrop from "../../../assets/images/optimized/daytours/palo-verde-tour-blur-1920.webp";
import ponderosaImageSmall from "../../../assets/images/optimized/daytours/ponderosa-960.webp";
import ponderosaImageLarge from "../../../assets/images/optimized/daytours/ponderosa-1600.webp";
import ponderosaBackdrop from "../../../assets/images/optimized/daytours/ponderosa-blur-1920.webp";
import monteverdeImageSmall from "../../../assets/images/optimized/daytours/monte-verde-960.webp";
import monteverdeImageLarge from "../../../assets/images/optimized/daytours/monte-verde-1600.webp";
import monteverdeBackdrop from "../../../assets/images/optimized/daytours/monte-verde-blur-1920.webp";
import arenalImageSmall from "../../../assets/images/optimized/daytours/arenal-volcano-960.webp";
import arenalImageLarge from "../../../assets/images/optimized/daytours/arenal-volcano-1600.webp";
import arenalBackdrop from "../../../assets/images/optimized/daytours/arenal-volcano-blur-1920.webp";
import coffeeImageSmall from "../../../assets/images/optimized/daytours/coffee-tour-960.webp";
import coffeeImageLarge from "../../../assets/images/optimized/daytours/coffee-tour-1600.webp";
import coffeeBackdrop from "../../../assets/images/optimized/daytours/coffee-tour-blur-1920.webp";
import { useExperiencesMotion } from "../../hooks/useExperiencesMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { DayTourInquiry } from "../day-tour-inquiry/DayTourInquiry";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../experiences-detail/experiences-detail.css";
import "./day-tours-detail.css";

const dayTours = [
  {
    id: "sunset-ocean-tour",
    name: "Sunset Ocean Tour",
    icon: "wb_twilight",
    kicker: "Pacific sunset",
    description:
      "Sail along the coast of Sámara to spot dolphins and, during migration season, humpback whales. Afterwards, snorkel to discover vibrant underwater life.",
    departure: "3:30 p.m. · Subject to availability",
    price: "Starting at $69 p.p.",
    details: [
      { label: "Includes", values: ["Fruits", "Fresh water", "Beer"] },
      {
        label: "Departure",
        values: ["3:30 p.m.", "Subject to availability"],
      },
      { label: "Price", values: ["Starting at $69 p.p."] },
    ],
    image: {
      small: sunsetImageSmall,
      large: sunsetImageLarge,
      backdrop: sunsetBackdrop,
    },
  },
  {
    id: "carrillo-horseback-riding",
    name: "Carrillo Horseback Riding",
    icon: "pets",
    kicker: "Coastal horseback journey",
    description:
      "Ride along private trails overlooking Playa Carrillo. This scenic journey takes you to the highest viewpoints of Sámara, Carrillo, and Camaronal.",
    departure: "Subject to tide",
    price: "Starting at $69 p.p.",
    details: [
      { label: "Includes", values: ["Transportation", "Guide", "Horse"] },
      { label: "Departure", values: ["Subject to tide"] },
      { label: "Price", values: ["Starting at $69 p.p."] },
    ],
    image: {
      small: horsebackImageSmall,
      large: horsebackImageLarge,
      backdrop: horsebackBackdrop,
    },
  },
  {
    id: "sea-life-adventure-tour",
    name: "Sea Life Adventure Tour",
    icon: "scuba_diving",
    kicker: "Underwater encounters",
    description:
      "Meet dolphins, turtles, and colorful marine life while snorkeling in the warm Pacific waters. A perfect mix of adventure and relaxation.",
    departure: "Subject to tide",
    price: "Starting at $69 p.p.",
    details: [
      {
        label: "Includes",
        values: ["Transportation", "Refreshments", "Snorkel gear", "Snacks"],
      },
      { label: "Departure", values: ["Subject to tide"] },
      { label: "Price", values: ["Starting at $69 p.p."] },
    ],
    image: {
      small: seaLifeImageSmall,
      large: seaLifeImageLarge,
      backdrop: seaLifeBackdrop,
    },
  },
  {
    id: "jungle-adrenaline-day-pass",
    name: "Costa Rican Jungle Adrenaline Day Pass",
    icon: "vital_signs",
    kicker: "A full day of adrenaline",
    description:
      "Experience pure adventure: river tubing, zip-lining through canyons, horseback riding to waterfalls, and a rejuvenating visit to mud baths and hot springs.",
    departure: "6:00 a.m.",
    price: "Starting at $179 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Refreshments & lunch",
          "Horseback riding",
          "Zip-lining",
          "River tubing",
          "Hot springs & mud baths",
        ],
      },
      { label: "Departure", values: ["6:00 a.m."] },
      { label: "Price", values: ["Starting at $179 p.p."] },
    ],
    image: {
      small: adrenalineImageSmall,
      large: adrenalineImageLarge,
      backdrop: adrenalineBackdrop,
    },
  },
  {
    id: "palo-verde-boat-tour",
    name: "Palo Verde Boat Tour & Pottery Town",
    icon: "directions_boat",
    kicker: "River wildlife and culture",
    description:
      "Cruise the longest river in Costa Rica's Pacific northwest to spot monkeys, iguanas, crocodiles, and exotic birds. End the day in Guaitil, a pottery town with 800 years of history.",
    departure: "9:00 a.m.",
    price: "Starting at $149 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Refreshments",
          "Lunch",
          "Guaitil visit",
          "Park entrance",
        ],
      },
      { label: "Departure", values: ["9:00 a.m."] },
      { label: "Price", values: ["Starting at $149 p.p."] },
    ],
    image: {
      small: paloVerdeImageSmall,
      large: paloVerdeImageLarge,
      backdrop: paloVerdeBackdrop,
    },
  },
  {
    id: "costa-rican-safari",
    name: "Costa Rican Safari Adventure",
    icon: "park",
    kicker: "Wildlife and waterfalls",
    description:
      "A full day at Ponderosa Adventure Park with horseback riding, zip-lining, kayaking, and trails. Visit La Perla waterfall and encounter 22 animal species roaming in controlled freedom.",
    departure: "6:30 a.m.",
    price: "Starting at $149 p.p.",
    details: [
      {
        label: "Includes",
        values: ["Transportation", "Lunch", "Park entrance"],
      },
      { label: "Departure", values: ["6:30 a.m."] },
      { label: "Price", values: ["Starting at $149 p.p."] },
    ],
    image: {
      small: ponderosaImageSmall,
      large: ponderosaImageLarge,
      backdrop: ponderosaBackdrop,
    },
  },
  {
    id: "monteverde-cloud-forest",
    name: "Monteverde Cloud Forest & Sky Adventures",
    icon: "forest",
    kicker: "Above the cloud forest",
    description:
      "Soar above the canopy with SkyTrek zip lines, ride the SkyTram gondola, and explore the SkyWalk hanging bridges. A perfect mix of thrills and nature in the magical cloud forest.",
    departure: "6:30 a.m.",
    price: "Starting at $239 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Refreshments",
          "Lunch",
          "SkyTrek + SkyTram + SkyWalk",
        ],
      },
      { label: "Departure", values: ["6:30 a.m."] },
      { label: "Price", values: ["Starting at $239 p.p."] },
    ],
    image: {
      small: monteverdeImageSmall,
      large: monteverdeImageLarge,
      backdrop: monteverdeBackdrop,
    },
  },
  {
    id: "arenal-volcano",
    name: "Arenal Volcano & Hot Springs",
    icon: "volcano",
    kicker: "Volcano country",
    description:
      "Visit Costa Rica's most iconic volcano. Choose one adventure: Sloths Reserve, SkyTrek Zipline, or Hanging Bridges. Relax afterwards in natural hot springs.",
    departure: "6:30 a.m.",
    price: "Starting at $249 p.p.",
    details: [
      {
        label: "Includes",
        values: ["Transportation", "Lunch", "Hot springs", "+ 1 activity"],
      },
      { label: "Departure", values: ["6:30 a.m."] },
      { label: "Price", values: ["Starting at $249 p.p."] },
    ],
    image: {
      small: arenalImageSmall,
      large: arenalImageLarge,
      backdrop: arenalBackdrop,
    },
  },
  {
    id: "coffee-tour",
    name: "Coffee Tour",
    icon: "coffee",
    kicker: "From plantation to cup",
    description:
      "Learn the story of Costa Rican coffee, from plantation to cup. Discover how coffee is cultivated and processed while enjoying a guided tasting with local snacks.",
    departure: "8:30 a.m. or 12:30 p.m.",
    price: "Starting at $85 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Refreshments",
          "Bilingual guide",
          "Plantation tour",
          "Coffee tasting",
          "Typical snack",
        ],
      },
      { label: "Departure", values: ["8:30 a.m. or 12:30 p.m."] },
      { label: "Price", values: ["Starting at $85 p.p."] },
    ],
    image: {
      small: coffeeImageSmall,
      large: coffeeImageLarge,
      backdrop: coffeeBackdrop,
    },
  },
] as const;

export function DayToursDetail() {
  const [selectedDayTour, setSelectedDayTour] = useState("");

  useExperiencesMotion();
  usePageMetadata(
    "Costa Rica Day Tours from Sámara | Villas Playa Sámara",
    "Explore Costa Rica on day tours from Sámara, including volcanoes, cloud forests, wildlife, coffee, hot springs, ocean trips, and adventure parks.",
  );

  const inquireAboutDayTour = (tourId: string) => {
    setSelectedDayTour(tourId);

    const inquiry = document.getElementById("day-tour-inquiry");
    const tourSelect = document.getElementById(
      "day-tour-inquiry-tour",
    ) as HTMLSelectElement | null;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    inquiry?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.requestAnimationFrame(() => {
      tourSelect?.focus({ preventScroll: true });
    });
  };

  return (
    <div className="site-shell experiences-detail-page day-tours-page">
      <Header />
      <main id="main-content">
        <section
          className="experiences-detail-page__hero day-tours-page__hero"
          aria-labelledby="day-tours-page-title"
          data-experiences-motion="day-tours-hero"
        >
          <img
            src={arenalImageLarge}
            srcSet={`${arenalImageSmall} 960w, ${arenalImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="experiences-detail-page__hero-shade day-tours-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap experiences-detail-page__hero-content day-tours-page__hero-content">
            <h1 id="day-tours-page-title">
              Discover Costa Rica <span>in a Day</span>
            </h1>
            <p>
              Volcanoes, cloud forests, wildlife reserves, coffee country,
              and the Pacific—all within a day&apos;s journey from Sámara.
            </p>
            <div className="experiences-detail-page__hero-actions day-tours-page__hero-actions">
              <a className="text-link text-link--light text-link--down" href="#day-tour-index">
                Discover tours
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="text-link text-link--light text-link--back experiences-detail-page__back-link day-tours-page__back-link" href="/experiences">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All experiences
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap experiences-detail-page__introduction day-tours-page__introduction"
          aria-labelledby="day-tours-introduction-title"
          data-experiences-motion="day-tours-reveal"
        >
          <h2 className="section-title" id="day-tours-introduction-title">
            Adventures Beyond the Shores of Sámara
          </h2>
          <p>
            Step into a world of natural wonders with our curated day tours.
            From volcanic landscapes and cloud forests to coffee plantations
            and wildlife reserves, each tour is designed to bring you closer
            to Costa Rica&apos;s vibrant culture and breathtaking beauty.
          </p>
          <p className="experiences-detail-page__introduction-note day-tours-page__introduction-note">
            Tour schedules and departure conditions vary by experience. Guest
            Services can confirm current availability during your stay.
          </p>
        </section>

        <section
          className="experiences-detail-page__index day-tours-page__index"
          id="day-tour-index"
          aria-labelledby="day-tour-index-title"
        >
          <div
            className="content-wrap experiences-detail-page__index-heading day-tours-page__index-heading"
            data-experiences-motion="day-tours-reveal"
          >
            <h2 className="section-title" id="day-tour-index-title">Nine ways into Costa Rica</h2>
            <p>
              Choose the coast, wildlife, highlands, coffee country, or a full
              day of adrenaline—then follow the daybook to the details.
            </p>
          </div>

          <ol className="content-wrap day-tours-page__index-list">
            {dayTours.map((tour) => (
              <li key={tour.id} data-experiences-motion="day-tours-index-item">
                <a href={`#${tour.id}`}>
                  <span className="day-tours-page__index-name">
                    <span className="day-tours-page__index-kicker">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {tour.icon}
                      </span>
                      {tour.kicker}
                    </span>
                    <span>{tour.name}</span>
                  </span>
                  <small>
                    {tour.departure} · {tour.price}
                  </small>
                  <span
                    className="material-symbols-outlined day-tours-page__index-arrow"
                    aria-hidden="true"
                  >
                    south_east
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="day-tours-page__collection"
          aria-label="Costa Rica day tours"
        >
          <div className="day-tours-page__chapters">
            {dayTours.map((tour) => (
              <article
                className="day-tours-page__chapter"
                id={tour.id}
                key={tour.id}
                data-experiences-motion="day-tours-chapter"
              >
                <img
                  className="day-tours-page__chapter-backdrop"
                  src={tour.image.backdrop}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="day-tours-page__chapter-shade" aria-hidden="true" />

                <figure className="day-tours-page__chapter-media">
                  <img
                    src={tour.image.large}
                    srcSet={`${tour.image.small} 960w, ${tour.image.large} 1600w`}
                    sizes="(max-width: 960px) 100vw, 48vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="day-tours-page__chapter-copy">
                  <p className="day-tours-page__chapter-kicker">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {tour.icon}
                    </span>
                    {tour.kicker}
                  </p>
                  <h2 className="subsection-title subsection-title--light">{tour.name}</h2>
                  <p>{tour.description}</p>

                  <dl className="day-tours-page__chapter-details">
                    {tour.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>
                          <span className="material-symbols-outlined" aria-hidden="true">
                            {detail.label === "Includes"
                              ? "checklist"
                              : detail.label === "Departure"
                                ? "schedule"
                                : "payments"}
                          </span>
                          {detail.label}
                        </dt>
                        <dd>
                          {detail.values.map((value) => (
                            <span key={value}>{value}</span>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <button
                    className="day-tours-page__chapter-inquire"
                    type="button"
                    aria-label={`Inquire about ${tour.name}`}
                    onClick={() => inquireAboutDayTour(tour.id)}
                  >
                    Inquire
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      south
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DayTourInquiry
          selectedDayTour={selectedDayTour}
          onSelectedDayTourChange={setSelectedDayTour}
        />

        <nav
          className="content-wrap day-tours-page__navigation"
          aria-label="Experience navigation"
        >
          <a href="/experiences">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Back</small>
              All experiences
            </span>
          </a>
          <a href="/experiences/activities">
            <span>
              <small>Continue exploring</small>
              Activities
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
