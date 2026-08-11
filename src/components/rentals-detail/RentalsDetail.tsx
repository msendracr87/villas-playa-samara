import { useState } from "react";
import atvImageSmall from "../../../assets/images/optimized/rentals/rentals-atv-jungle-tour-960.webp";
import atvImageLarge from "../../../assets/images/optimized/rentals/rentals-atv-jungle-tour-1600.webp";
import atvBackdrop from "../../../assets/images/optimized/rentals/atv-jungle-tour-blur-1920.webp";
import fishingImageSmall from "../../../assets/images/optimized/rentals/rentals-fishing-960.webp";
import fishingImageLarge from "../../../assets/images/optimized/rentals/rentals-fishing-1600.webp";
import fishingBackdrop from "../../../assets/images/optimized/rentals/fishing-blur-1920.webp";
import bikeImageSmall from "../../../assets/images/optimized/rentals/rentals-bike-rental-960.webp";
import bikeImageLarge from "../../../assets/images/optimized/rentals/rentals-bike-rental-1600.webp";
import bikeBackdrop from "../../../assets/images/optimized/rentals/bike-rental-blur-1600.webp";
import { useExperiencesMotion } from "../../hooks/useExperiencesMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { RentalInquiry } from "../rental-inquiry/RentalInquiry";
import "./rentals-detail.css";

const rentals = [
  {
    id: "atv-jungle-tour",
    name: "ATV Jungle Tour",
    description:
      "Discover the Nicoya Peninsula in the most thrilling way! Ride through jungle trails, enjoy panoramic views, and spot monkeys, tropical birds, and the lush wildlife of Guanacaste.",
    details: [
      { label: "Includes", values: ["Refreshments"] },
      {
        label: "Departure",
        values: ["8:30 a.m. or 2:00 p.m.", "Subject to availability"],
      },
      { label: "Price", values: ["$169 solo p.p.", "$99 double p.p."] },
    ],
    image: {
      small: atvImageSmall,
      large: atvImageLarge,
      backdrop: atvBackdrop,
    },
  },
  {
    id: "fishing-trip",
    name: "Fishing Trip",
    description:
      "Head out aboard our fully equipped 23ft Angler boat for an unforgettable day at sea. Try your luck catching mahi-mahi, tuna, red snapper, and more.",
    details: [
      { label: "Includes", values: ["Fishing gear", "Snacks"] },
      {
        label: "Departure",
        values: [
          "Inshore Fishing — 7:30 a.m.",
          "Deep Sea Fishing — subject to tide",
        ],
      },
      {
        label: "Price",
        values: ["Inshore starting at $500", "Deep sea starting at $600"],
      },
    ],
    image: {
      small: fishingImageSmall,
      large: fishingImageLarge,
      backdrop: fishingBackdrop,
    },
  },
  {
    id: "bike-rental",
    name: "Bike Rental",
    description:
      "Explore Sámara town and nearby Carrillo Beach at your own pace. Perfect for sightseeing, beach hopping, and enjoying the local vibe.",
    details: [
      { label: "Includes", values: ["Helmet", "Padlock"] },
      { label: "Price", values: ["$10 / hour", "$30 / day"] },
    ],
    image: {
      small: bikeImageSmall,
      large: bikeImageLarge,
      backdrop: bikeBackdrop,
    },
  },
] as const;

export function RentalsDetail() {
  const [selectedRental, setSelectedRental] = useState("");

  useExperiencesMotion();
  usePageMetadata(
    "Adventure Rentals in Sámara | Villas Playa Sámara",
    "Explore Sámara and the Nicoya Peninsula with ATV adventures, bike rentals, and inshore or deep-sea fishing trips from Villas Playa Sámara.",
  );

  const inquireAboutRental = (rentalId: string) => {
    setSelectedRental(rentalId);

    const inquiry = document.getElementById("rental-inquiry");
    const rentalSelect = document.getElementById(
      "rental-inquiry-rental",
    ) as HTMLSelectElement | null;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    inquiry?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.requestAnimationFrame(() => {
      rentalSelect?.focus({ preventScroll: true });
    });
  };

  return (
    <div className="site-shell rentals-page">
      <Header />
      <main id="main-content">
        <section
          className="rentals-page__hero"
          aria-labelledby="rentals-page-title"
          data-experiences-motion="rentals-hero"
        >
          <img
            src={atvImageLarge}
            srcSet={`${atvImageSmall} 960w, ${atvImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="rentals-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap rentals-page__hero-content">
            <h1 id="rentals-page-title">
              Explore at <span>Your Own Pace</span>
            </h1>
            <p>
              Choose from ATVs, bikes, or boats and set off on your own
              adventure.
            </p>
            <div className="rentals-page__hero-actions">
              <a href="#rental-guide">
                Discover rentals
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="rentals-page__back-link" href="/experiences">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All experiences
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap rentals-page__introduction"
          aria-labelledby="rentals-introduction-title"
          data-experiences-motion="rentals-reveal"
        >
          <h2 id="rentals-introduction-title">
            Freedom to Discover Sámara and Beyond
          </h2>
          <p>
            Our rentals give you the flexibility to explore the beaches,
            jungles, and ocean at your own rhythm—whether it&apos;s a quick ride
            through town or a day chasing the horizon.
          </p>
          <p className="rentals-page__introduction-note">
            Availability and departure conditions vary by rental. Guest
            Services can confirm current details during your stay.
          </p>
        </section>

        <section
          className="rentals-page__guide"
          id="rental-guide"
          aria-labelledby="rentals-guide-title"
        >
          <div className="content-wrap rentals-page__guide-heading">
            <h2 id="rentals-guide-title">Choose how you explore</h2>
            <p>
              Take to jungle trails, head out on the Pacific, or move through
              Sámara and Carrillo at an easy pace.
            </p>
          </div>

          <div className="rentals-page__folios">
            {rentals.map((rental) => (
              <article
                className="rentals-page__folio"
                id={rental.id}
                key={rental.id}
                data-experiences-motion="rentals-folio"
              >
                <img
                  className="rentals-page__folio-backdrop"
                  src={rental.image.backdrop}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="rentals-page__folio-shade" aria-hidden="true" />

                <figure className="rentals-page__folio-media">
                  <img
                    src={rental.image.large}
                    srcSet={`${rental.image.small} 960w, ${rental.image.large} 1600w`}
                    sizes="(max-width: 860px) 100vw, 48vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="rentals-page__folio-copy">
                  <h2>{rental.name}</h2>
                  <p>{rental.description}</p>

                  <dl className="rentals-page__folio-details">
                    {rental.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>
                          {detail.values.map((value) => (
                            <span key={value}>{value}</span>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <button
                    className="rentals-page__folio-inquire"
                    type="button"
                    aria-label={`Inquire about ${rental.name}`}
                    onClick={() => inquireAboutRental(rental.id)}
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

        <RentalInquiry
          selectedRental={selectedRental}
          onSelectedRentalChange={setSelectedRental}
        />

        <nav className="content-wrap rentals-page__navigation" aria-label="Experience navigation">
          <a href="/experiences">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Back</small>
              All experiences
            </span>
          </a>
          <a href="/experiences/day-tours">
            <span>
              <small>Continue exploring</small>
              Day tours
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
