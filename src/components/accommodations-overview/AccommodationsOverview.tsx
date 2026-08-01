import type { CSSProperties } from "react";
import { accommodations } from "../../data/accommodations";
import { useAccommodationsMotion } from "../../hooks/useAccommodationsMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import { AccommodationCard } from "../accommodation-card/AccommodationCard";
import { AccommodationInquiry } from "../accommodation-inquiry/AccommodationInquiry";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./accommodations-overview.css";
import "./accommodations-motion.css";

const commonAmenities = [
  { label: "King or Queen-size beds", icon: "king_bed" },
  { label: "Ceiling fans", icon: "mode_fan" },
  { label: "In-room safe", icon: "lock" },
  { label: "Air conditioning", icon: "ac_unit" },
  { label: "Flat-screen HD TV", icon: "tv" },
  { label: "Wi-Fi internet access", icon: "wifi" },
  { label: "Mini fridge", icon: "kitchen" },
  { label: "Hair dryer", icon: "air" },
  { label: "Bathroom amenities", icon: "soap" },
  { label: "Luggage rack", icon: "luggage" },
] as const;

export function AccommodationsOverview() {
  const amenitiesRef = useParallaxBackground("--amenities-parallax-y");
  useAccommodationsMotion();

  usePageMetadata(
    "Rooms & Villas in Sámara | Villas Playa Sámara",
    "Explore rooms, suites, and spacious villas at Villas Playa Sámara, with garden and beachfront options for couples, families, and groups.",
  );

  return (
    <div className="site-shell accommodations-page">
      <Header />
      <main id="main-content">
        <section
          className="accommodations-page__hero"
          aria-labelledby="accommodations-page-title"
          data-accommodations-motion="hero"
        >
          <img
            src={accommodations[7].image.large}
            srcSet={`${accommodations[7].image.small} 720w, ${accommodations[7].image.large} 1440w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="content-wrap accommodations-page__hero-content">
            <p>Rooms, suites &amp; villas</p>
            <h1 id="accommodations-page-title">
              Experience the best in comfort &amp; service by the beach
            </h1>
            <span>Eight accommodation categories · Garden and beachfront settings</span>
          </div>
        </section>

        <section
          className="accommodations-page__intro"
          aria-labelledby="accommodations-intro-title"
        >
          <div
            className="content-wrap accommodations-page__intro-content"
            data-accommodations-motion="intro"
          >
            <div>
              <p className="section-kicker">Find your stay</p>
              <h2 className="section-title" id="accommodations-intro-title">
                Room to settle into Sámara
              </h2>
            </div>
            <p className="section-copy">
              When it&apos;s time to truly relax, our 115 deluxe rooms and
              spacious villas invite you to a seaside escape where comfort,
              tropical charm, and serenity blend to make everyday worries
              disappear.
            </p>
          </div>
        </section>

        <section
          className="accommodations-page__amenities"
          aria-labelledby="common-amenities-title"
          ref={amenitiesRef}
        >
          <div
            className="content-wrap accommodations-page__amenities-layout"
            data-accommodations-motion="amenities"
          >
            <div>
              <p>Across the collection</p>
              <h2 id="common-amenities-title">Common in-room amenities</h2>
              <span>Amenities and layouts vary by accommodation category.</span>
            </div>
            <ul>
              {commonAmenities.map((amenity, index) => (
                <li
                  key={amenity.label}
                  style={{
                    "--amenity-delay": `${100 + index * 34}ms`,
                  } as CSSProperties}
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    {amenity.icon}
                  </span>
                  {amenity.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="content-wrap accommodations-page__collection"
          aria-labelledby="accommodation-collection-title"
        >
          <div
            className="accommodations-page__collection-heading"
            data-accommodations-motion="collection-heading"
          >
            <h2 id="accommodation-collection-title">Choose your setting and space</h2>
            <p>
              Compare all eight categories in their approved order, from
              garden-view rooms for two to multi-bedroom villas beside the
              Pacific.
            </p>
          </div>

          <div className="accommodations-page__grid">
            {accommodations.map((accommodation, index) => (
              <AccommodationCard
                accommodation={accommodation}
                index={index}
                key={accommodation.slug}
              />
            ))}
          </div>
        </section>

        <AccommodationInquiry />
      </main>
      <Footer />
    </div>
  );
}
