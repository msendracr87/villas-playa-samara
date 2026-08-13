import { useState } from "react";
import padelImageSmall from "../../../assets/images/optimized/activities/padel-and-pickleball-960.webp";
import padelImageLarge from "../../../assets/images/optimized/activities/padel-and-pickleball-1294.webp";
import padelBackdrop from "../../../assets/images/optimized/activities/padel-and-pickleball-blur-1807.webp";
import paddleboardImageSmall from "../../../assets/images/optimized/activities/isla-chora-paddleboard-960.webp";
import paddleboardImageLarge from "../../../assets/images/optimized/activities/isla-chora-paddleboard-1600.webp";
import paddleboardBackdrop from "../../../assets/images/optimized/activities/isla-chora-paddleboard-blur-1920.webp";
import kayakImageSmall from "../../../assets/images/optimized/activities/isla-chora-kayak-960.webp";
import kayakImageLarge from "../../../assets/images/optimized/activities/isla-chora-kayak-1600.webp";
import kayakBackdrop from "../../../assets/images/optimized/activities/isla-chora-kayak-blur-1920.webp";
import surfImageSmall from "../../../assets/images/optimized/activities/surf-lessons-960.webp";
import surfImageLarge from "../../../assets/images/optimized/activities/surf-lessons-1600.webp";
import surfBackdrop from "../../../assets/images/optimized/activities/surf-lessons-blur-1920.webp";
import turtleImageSmall from "../../../assets/images/optimized/activities/turtle-nesting-960.webp";
import turtleImageLarge from "../../../assets/images/optimized/activities/turtle-nesting-1600.webp";
import turtleBackdrop from "../../../assets/images/optimized/activities/turtle-nesting-blur-1920.webp";
import islandIconUrl from "../../../assets/svgs/others/island-island.svg";
import { useExperiencesMotion } from "../../hooks/useExperiencesMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { ActivitiesInquiry } from "../activities-inquiry/ActivitiesInquiry";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./activities-detail.css";

const activities = [
  {
    id: "padel-and-pickleball-courts",
    name: "Padel & Pickleball Courts",
    icon: "sports_tennis",
    kicker: "Courts at the resort",
    description:
      "Dedicated courts give guests space for padel and pickleball, from casual practice and friendly rallies to light competition during their stay.",
    summary: "Court access",
    details: [{ label: "Includes", values: ["Court access"] }],
    image: {
      small: padelImageSmall,
      large: padelImageLarge,
      backdrop: padelBackdrop,
      largeWidth: 1294,
    },
  },
  {
    id: "isla-chora-paddleboard-tour",
    name: "Isla Chora Paddleboard & Snorkel Tour",
    icon: islandIconUrl,
    iconType: "image",
    kicker: "Paddle toward Isla Chora",
    description:
      "Paddle to this secluded pink-sand island. Explore its beaches, discover hermit crabs, or snorkel among tropical marine life.",
    summary: "Subject to tide · Starting at $69 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Paddleboard",
          "Life vest",
          "Refreshments",
          "Guide",
          "Snorkeling equipment",
        ],
      },
      { label: "Departure", values: ["Subject to tide"] },
      { label: "Price", values: ["Starting at $69 p.p."] },
    ],
    image: {
      small: paddleboardImageSmall,
      large: paddleboardImageLarge,
      backdrop: paddleboardBackdrop,
      largeWidth: 1600,
    },
  },
  {
    id: "isla-chora-kayak-tour",
    name: "Isla Chora Kayak & Snorkel Tour",
    icon: "kayaking",
    kicker: "Kayak across the bay",
    description:
      "Kayak across calm waters to Isla Chora. Enjoy snorkeling, beach walks, and wildlife encounters in this stunning setting.",
    summary: "Subject to tide · Starting at $59 p.p.",
    details: [
      {
        label: "Includes",
        values: [
          "Transportation",
          "Kayak",
          "Paddle",
          "Life vest",
          "Refreshments",
          "Guide",
          "Snorkeling equipment",
        ],
      },
      { label: "Departure", values: ["Subject to tide"] },
      { label: "Price", values: ["Starting at $59 p.p."] },
    ],
    image: {
      small: kayakImageSmall,
      large: kayakImageLarge,
      backdrop: kayakBackdrop,
      largeWidth: 1600,
    },
  },
  {
    id: "surf-lessons",
    name: "Surf Lessons at Sámara Beach",
    icon: "surfing",
    kicker: "Meet the Pacific waves",
    description:
      "The perfect spot for beginners and intermediate surfers. Enjoy warm waters, mild waves, and expert instruction to get you riding in no time.",
    summary: "Subject to tide · From $79 p.p.",
    details: [
      {
        label: "Includes",
        values: ["Transportation", "Surfboard", "Instructor"],
      },
      { label: "Departure", values: ["Subject to tide"] },
      {
        label: "Price",
        values: ["$79 / 2 guests p.p.", "$99 / 1 guest p.p."],
      },
    ],
    image: {
      small: surfImageSmall,
      large: surfImageLarge,
      backdrop: surfBackdrop,
      largeWidth: 1600,
    },
  },
  {
    id: "turtle-nesting-tour",
    name: "Turtle Nesting Tour",
    icon: "cruelty_free",
    kicker: "Wildlife after dark",
    description:
      "At Camaronal Wildlife Refuge, witness the magic of sea turtles nesting on the beach. Depending on the season, you may see multiple turtles laying eggs in a single night—an unforgettable experience.",
    summary: "6:30 p.m. · Starting at $79 p.p.",
    details: [
      {
        label: "Includes",
        values: ["Transportation", "Guide", "Entrance fee"],
      },
      { label: "Departure", values: ["6:30 p.m."] },
      { label: "Price", values: ["Starting at $79 p.p."] },
    ],
    image: {
      small: turtleImageSmall,
      large: turtleImageLarge,
      backdrop: turtleBackdrop,
      largeWidth: 1600,
    },
  },
] as const;

export function ActivitiesDetail() {
  const [selectedActivity, setSelectedActivity] = useState("");

  useExperiencesMotion();
  usePageMetadata(
    "Activities in Sámara | Villas Playa Sámara",
    "Discover activities in Sámara, including paddleboarding, kayaking, snorkeling, surf lessons, turtle nesting tours, and court sports.",
  );

  const inquireAboutActivity = (activityId: string) => {
    setSelectedActivity(activityId);

    const inquiry = document.getElementById("activity-inquiry");
    const activitySelect = document.getElementById(
      "activity-inquiry-activity",
    ) as HTMLSelectElement | null;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    inquiry?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.requestAnimationFrame(() => {
      activitySelect?.focus({ preventScroll: true });
    });
  };

  return (
    <div className="site-shell day-tours-page activities-page">
      <Header />
      <main id="main-content">
        <section
          className="day-tours-page__hero"
          aria-labelledby="activities-page-title"
          data-experiences-motion="day-tours-hero"
        >
          <img
            src={surfImageLarge}
            srcSet={`${surfImageSmall} 960w, ${surfImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="day-tours-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap day-tours-page__hero-content">
            <h1 id="activities-page-title">
              Play, Relax, and <span>Explore</span>
            </h1>
            <p>
              Paddle toward Isla Chora, learn to surf, meet nesting turtles,
              or make time for a friendly match on the resort courts.
            </p>
            <div className="day-tours-page__hero-actions">
              <a href="#activity-index">
                Discover activities
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="day-tours-page__back-link" href="/experiences">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All experiences
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap day-tours-page__introduction"
          aria-labelledby="activities-introduction-title"
          data-experiences-motion="day-tours-reveal"
        >
          <h2 id="activities-introduction-title">
            Make Every Moment Count in Sámara
          </h2>
          <p>
            Turn your stay into an unforgettable adventure with our
            activities. Paddleboard or kayak toward Isla Chora, learn to surf,
            explore the coast, or make time for a friendly match on the resort
            courts.
          </p>
          <p className="day-tours-page__introduction-note">
            Activities, departures, and conditions are subject to availability.
            Guest Services can confirm current details during your stay.
          </p>
        </section>

        <section
          className="day-tours-page__index"
          id="activity-index"
          aria-labelledby="activity-index-title"
        >
          <div
            className="content-wrap day-tours-page__index-heading"
            data-experiences-motion="day-tours-reveal"
          >
            <h2 id="activity-index-title">Five ways to move through Sámara</h2>
            <p>
              Take to the courts, cross the bay, meet the Pacific waves, or
              follow the coast after dark.
            </p>
          </div>

          <ol className="content-wrap day-tours-page__index-list">
            {activities.map((activity) => (
              <li
                key={activity.id}
                data-experiences-motion="day-tours-index-item"
              >
                <a href={`#${activity.id}`}>
                  <span className="day-tours-page__index-name">
                    <span className="day-tours-page__index-kicker">
                      {"iconType" in activity ? (
                        <img src={activity.icon} alt="" aria-hidden="true" />
                      ) : (
                        <span className="material-symbols-outlined" aria-hidden="true">
                          {activity.icon}
                        </span>
                      )}
                      {activity.kicker}
                    </span>
                    <span>{activity.name}</span>
                  </span>
                  <small>{activity.summary}</small>
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
          aria-label="Activities in Sámara"
        >
          <div className="day-tours-page__chapters">
            {activities.map((activity) => (
              <article
                className="day-tours-page__chapter"
                id={activity.id}
                key={activity.id}
                data-experiences-motion="day-tours-chapter"
              >
                <img
                  className="day-tours-page__chapter-backdrop"
                  src={activity.image.backdrop}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="day-tours-page__chapter-shade" aria-hidden="true" />

                <figure className="day-tours-page__chapter-media">
                  <img
                    src={activity.image.large}
                    srcSet={`${activity.image.small} 960w, ${activity.image.large} ${activity.image.largeWidth}w`}
                    sizes="(max-width: 960px) 100vw, 48vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="day-tours-page__chapter-copy">
                  <p className="day-tours-page__chapter-kicker">
                    {"iconType" in activity ? (
                      <img src={activity.icon} alt="" aria-hidden="true" />
                    ) : (
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {activity.icon}
                      </span>
                    )}
                    {activity.kicker}
                  </p>
                  <h2>{activity.name}</h2>
                  <p>{activity.description}</p>

                  <dl className="day-tours-page__chapter-details">
                    {activity.details.map((detail) => (
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
                    aria-label={`Inquire about ${activity.name}`}
                    onClick={() => inquireAboutActivity(activity.id)}
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

        <ActivitiesInquiry
          selectedActivity={selectedActivity}
          onSelectedActivityChange={setSelectedActivity}
        />

        <nav
          className="content-wrap day-tours-page__navigation"
          aria-label="Experience navigation"
        >
          <a href="/experiences/day-tours">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Back</small>
              Day tours
            </span>
          </a>
          <a href="/experiences/rentals">
            <span>
              <small>Continue exploring</small>
              Rentals
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
