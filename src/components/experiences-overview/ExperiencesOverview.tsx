import {
  useEffect,
  useRef,
  useState,
  type UIEvent,
} from "react";
import heroImageSmall from "../../../assets/images/optimized/experiences-overview/experiences-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/experiences-overview/experiences-hero-1294.webp";
import fishingImageSmall from "../../../assets/images/optimized/experiences-overview/rentals-fishing-960.webp";
import fishingImageLarge from "../../../assets/images/optimized/experiences-overview/rentals-fishing-1600.webp";
import fishingImageBlurred from "../../../assets/images/optimized/experiences-overview/backgrounds/rentals-fishing-blur-1920.webp";
import arenalImageSmall from "../../../assets/images/optimized/homepage/experiences/arenal-volcano-640.webp";
import arenalImageLarge from "../../../assets/images/optimized/homepage/experiences/arenal-volcano-1280.webp";
import arenalImageBlurred from "../../../assets/images/optimized/experiences-overview/backgrounds/arenal-volcano-blur-1920.webp";
import kayakImageSmall from "../../../assets/images/optimized/homepage/experiences/isla-chora-kayak-640.webp";
import kayakImageLarge from "../../../assets/images/optimized/homepage/experiences/isla-chora-kayak-1280.webp";
import kayakImageBlurred from "../../../assets/images/optimized/experiences-overview/backgrounds/isla-chora-kayak-blur-1920.webp";
import paloVerdeImageSmall from "../../../assets/images/optimized/homepage/experiences/palo-verde-640.webp";
import paloVerdeImageLarge from "../../../assets/images/optimized/homepage/experiences/palo-verde-1280.webp";
import coffeeImageSmall from "../../../assets/images/optimized/homepage/experiences/costa-rican-coffee-640.webp";
import coffeeImageLarge from "../../../assets/images/optimized/homepage/experiences/costa-rican-coffee-1280.webp";
import sunsetImageSmall from "../../../assets/images/optimized/homepage/experiences/pacific-sunset-tour-640.webp";
import sunsetImageLarge from "../../../assets/images/optimized/homepage/experiences/pacific-sunset-tour-1280.webp";
import puntaIndioImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-punta-indio-640.webp";
import puntaIndioImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-punta-indio-1200.webp";
import aquaAerobicsImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-aqua-aerobics-640.webp";
import aquaAerobicsImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-aqua-aerobics-1200.webp";
import beachSoccerImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-soccer-640.webp";
import beachSoccerImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-soccer-1200.webp";
import beachVolleyballImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-volleyball-640.webp";
import beachVolleyballImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-volleyball-1200.webp";
import beachWalkImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-walk-640.webp";
import beachWalkImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-walk-1200.webp";
import boardGamesImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-board-games-640.webp";
import boardGamesImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-board-games-1200.webp";
import bonfireImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-bonfire-640.webp";
import bonfireImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-bonfire-1200.webp";
import canvasTimeImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-canvas-time-640.webp";
import canvasTimeImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-canvas-time-1200.webp";
import cevicheImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-ceviche-640.webp";
import cevicheImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-ceviche-1200.webp";
import cocktailImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-cocktail-classes-640.webp";
import cocktailImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-cocktail-classes-1200.webp";
import coffeeTastingImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-coffee-tasting-640.webp";
import coffeeTastingImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-coffee-tasting-1200.webp";
import danceLessonsImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-dance-lessons-640.webp";
import danceLessonsImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-dance-lessons-1200.webp";
import morningStretchImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-morning-stretch-640.webp";
import morningStretchImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-morning-stretch-1200.webp";
import pickleballImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-pickleball-640.webp";
import pickleballImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-pickleball-1200.webp";
import poolVolleyballImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-pool-volleyball-640.webp";
import poolVolleyballImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-pool-volleyball-1200.webp";
import tennisImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-tennis-640.webp";
import tennisImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-tennis-1200.webp";
import tortillasImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-tortillas-time-640.webp";
import tortillasImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-tortillas-time-1200.webp";
import yogaImageSmall from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-yoga-classes-640.webp";
import yogaImageLarge from "../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-yoga-classes-1200.webp";
import monkeyToursLogoUrl from "../../../assets/svgs/logo/monkey-tours/monkeytours-logo-color-frame.png";
import { useExperiencesMotion } from "../../hooks/useExperiencesMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./experiences-overview.css";
import "./experiences-motion.css";

const journeys = [
  {
    id: "rentals",
    name: "Rentals",
    icon: "directions_car",
    kicker: "Explore independently",
    summary:
      "Discover Sámara at your own pace. From ATVs and bikes to fishing trips, rentals give you the freedom to explore the beaches, jungles, and ocean your way.",
    action: "View rentals",
    href: "/experiences/rentals",
    image: {
      small: fishingImageSmall,
      large: fishingImageLarge,
      blurred: fishingImageBlurred,
      smallWidth: 960,
      largeWidth: 1600,
    },
  },
  {
    id: "day-tours",
    name: "Day tours",
    icon: "landscape",
    kicker: "Beyond Sámara",
    summary:
      "Venture beyond Sámara with curated day trips to volcanoes, coffee farms, cloud forests, and wildlife safaris, each a unique glimpse into Costa Rica’s beauty.",
    action: "View tours",
    href: "/experiences/day-tours",
    image: {
      small: arenalImageSmall,
      large: arenalImageLarge,
      blurred: arenalImageBlurred,
      smallWidth: 640,
      largeWidth: 1280,
    },
  },
  {
    id: "activities",
    name: "Activities",
    icon: "surfing",
    kicker: "Play by the Pacific",
    summary:
      "Dive into hands-on adventures right here in Sámara. Paddle to Isla Chora, learn to surf, or witness sea turtles nesting, experiences that make memories for a lifetime.",
    action: "View activities",
    href: "/experiences/activities",
    image: {
      small: kayakImageSmall,
      large: kayakImageLarge,
      blurred: kayakImageBlurred,
      smallWidth: 640,
      largeWidth: 1280,
    },
  },
] as const;

const inHouseActivities = [
  {
    name: "Punta Indio",
    type: "Hiking experience",
    icon: "hiking",
    image: { small: puntaIndioImageSmall, large: puntaIndioImageLarge },
  },
  {
    name: "Aqua Aerobics",
    type: "Pool fitness experience",
    icon: "pool",
    image: { small: aquaAerobicsImageSmall, large: aquaAerobicsImageLarge },
  },
  {
    name: "Beach Soccer",
    type: "Beach sports experience",
    icon: "sports_soccer",
    image: { small: beachSoccerImageSmall, large: beachSoccerImageLarge },
  },
  {
    name: "Beach Volleyball",
    type: "Beach sports experience",
    icon: "sports_volleyball",
    image: {
      small: beachVolleyballImageSmall,
      large: beachVolleyballImageLarge,
    },
  },
  {
    name: "Beach Walk",
    type: "Morning beach experience",
    icon: "directions_walk",
    image: { small: beachWalkImageSmall, large: beachWalkImageLarge },
  },
  {
    name: "Board Games and Bingo",
    type: "Social games experience",
    icon: "casino",
    image: { small: boardGamesImageSmall, large: boardGamesImageLarge },
  },
  {
    name: "Beach Bonfire",
    type: "Evening beach experience",
    icon: "local_fire_department",
    image: { small: bonfireImageSmall, large: bonfireImageLarge },
  },
  {
    name: "Canvas Time",
    type: "Creative art experience",
    icon: "palette",
    image: { small: canvasTimeImageSmall, large: canvasTimeImageLarge },
  },
  {
    name: "Ceviche",
    type: "Costa Rican flavor experience",
    icon: "restaurant",
    image: { small: cevicheImageSmall, large: cevicheImageLarge },
  },
  {
    name: "Cocktail Course",
    type: "Mixology experience",
    icon: "local_bar",
    image: { small: cocktailImageSmall, large: cocktailImageLarge },
  },
  {
    name: "Coffee and National Drink Tasting",
    type: "Cultural tasting experience",
    icon: "coffee",
    image: { small: coffeeTastingImageSmall, large: coffeeTastingImageLarge },
  },
  {
    name: "Dance Lessons",
    type: "Music and movement experience",
    icon: "music_note",
    image: { small: danceLessonsImageSmall, large: danceLessonsImageLarge },
  },
  {
    name: "Morning Stretch",
    type: "Wellness experience",
    icon: "self_improvement",
    image: { small: morningStretchImageSmall, large: morningStretchImageLarge },
  },
  {
    name: "Padel and Pickleball Courts",
    type: "Racket sports experience",
    icon: "sports_tennis",
    image: { small: pickleballImageSmall, large: pickleballImageLarge },
  },
  {
    name: "Pool Volleyball",
    type: "Pool sports experience",
    icon: "sports_volleyball",
    image: { small: poolVolleyballImageSmall, large: poolVolleyballImageLarge },
  },
  {
    name: "Tennis",
    type: "Racket sports experience",
    icon: "sports_tennis",
    image: { small: tennisImageSmall, large: tennisImageLarge },
  },
  {
    name: "Tortillas Time",
    type: "Costa Rican food experience",
    icon: "outdoor_grill",
    image: { small: tortillasImageSmall, large: tortillasImageLarge },
  },
  {
    name: "Yoga",
    type: "Wellness experience",
    icon: "self_improvement",
    image: { small: yogaImageSmall, large: yogaImageLarge },
  },
] as const;

export function ExperiencesOverview() {
  useExperiencesMotion();
  usePageMetadata(
    "Tours & Experiences in Sámara | Villas Playa Sámara",
    "Explore Sámara with rentals, day tours, ocean adventures, wildlife encounters, and in-house resort activities for every pace.",
  );

  const journeySectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselFrame = useRef(0);
  const [activeJourney, setActiveJourney] = useState<number | null>(null);
  const [activeActivity, setActiveActivity] = useState(0);
  const [visibleActivityCount, setVisibleActivityCount] = useState(1);
  const finalActivityStart = Math.max(
    inHouseActivities.length - visibleActivityCount,
    0,
  );

  useEffect(() => {
    const section = journeySectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      return;
    }

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".experiences-page__journey"),
    );

    const centeredCards = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target as HTMLElement);

          if (entry.isIntersecting) {
            centeredCards.add(index);
          } else {
            centeredCards.delete(index);
          }
        });

        if (centeredCards.size === 0) {
          setActiveJourney(null);
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        const closestIndex = Array.from(centeredCards).reduce(
          (closest, index) => {
            const bounds = cards[index].getBoundingClientRect();
            const distance = Math.abs(
              bounds.top + bounds.height / 2 - viewportCenter,
            );

            return distance < closest.distance
              ? { index, distance }
              : closest;
          },
          { index: -1, distance: Number.POSITIVE_INFINITY },
        ).index;

        setActiveJourney(closestIndex);
      },
      {
        rootMargin: "-36% 0px -36% 0px",
        threshold: 0,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const updateVisibleActivityCount = () => {
      const firstCard = carousel.firstElementChild as HTMLElement | null;

      if (!firstCard) {
        return;
      }

      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const visibleCount = Math.max(
        1,
        Math.round((carousel.clientWidth + gap) / (cardWidth + gap)),
      );

      setVisibleActivityCount(visibleCount);
      setActiveActivity((current) =>
        Math.min(current, inHouseActivities.length - visibleCount),
      );
    };

    updateVisibleActivityCount();
    const resizeObserver = new ResizeObserver(updateVisibleActivityCount);
    resizeObserver.observe(carousel);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(carouselFrame.current);
    };
  }, []);

  const scrollToActivity = (index: number) => {
    const carousel = carouselRef.current;
    const nextIndex = Math.min(Math.max(index, 0), finalActivityStart);
    const target = carousel?.children.item(nextIndex) as HTMLElement | null;

    if (!carousel || !target) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    carousel.scrollTo({
      left: target.offsetLeft - carousel.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const updateActiveActivity = (event: UIEvent<HTMLDivElement>) => {
    const carousel = event.currentTarget;

    window.cancelAnimationFrame(carouselFrame.current);
    carouselFrame.current = window.requestAnimationFrame(() => {
      const cards = Array.from(carousel.children) as HTMLElement[];
      const index = cards.reduce(
        (closest, card, cardIndex) => {
          const distance = Math.abs(
            card.offsetLeft - carousel.offsetLeft - carousel.scrollLeft,
          );
          return distance < closest.distance
            ? { index: cardIndex, distance }
            : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;

      setActiveActivity(Math.min(index, finalActivityStart));
    });
  };

  return (
    <div className="site-shell experiences-page">
      <Header />
      <main id="main-content">
        <section
          className="experiences-page__hero"
          aria-labelledby="experiences-page-title"
          data-experiences-motion="hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1294w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="content-wrap experiences-page__hero-content">
            <p className="section-kicker experiences-page__hero-kicker">
              Rentals, Day Tours &amp; Activities
            </p>
            <h1 id="experiences-page-title">
              Experience the <span>Pura Vida</span>
            </h1>
            <p>Explore Costa Rica’s wild beauty from Sámara Bay.</p>
            <a
              href="#experience-introduction"
              className="experiences-page__hero-link"
            >
              Begin exploring
              <span className="material-symbols-outlined" aria-hidden="true">
                south
              </span>
            </a>
          </div>
        </section>

        <section
          className="experiences-page__introduction"
          id="experience-introduction"
        >
          <div
            className="content-wrap experiences-page__introduction-layout"
            data-experiences-motion="introduction"
          >
            <div className="experiences-page__introduction-copy">
              <img
                className="experiences-page__introduction-logo"
                src={monkeyToursLogoUrl}
                alt=""
                width="500"
                height="270"
                loading="lazy"
                decoding="async"
              />
              <h2>Your gateway to adventure</h2>
              <div className="experiences-page__introduction-text">
                <p>
                  Embark on a journey of discovery with Monkey Tours, a
                  standalone tour operator based at Villas Playa Sámara and
                  serving destinations throughout Costa Rica and the Sámara
                  area. Expert guides bring the country’s landscapes, culture,
                  and wildlife to life through tours designed for different
                  interests and travel styles.
                </p>
                <p>
                  Questions and tour inquiries are handled through the Villas
                  Playa Sámara website so guests can plan an experience as part
                  of their stay.
                </p>
              </div>
            </div>

            <div className="experiences-page__introduction-media" aria-hidden="true">
              <figure className="experiences-page__introduction-image experiences-page__introduction-image--wildlife">
                <img
                  src={paloVerdeImageLarge}
                  srcSet={`${paloVerdeImageSmall} 640w, ${paloVerdeImageLarge} 1280w`}
                  sizes="(max-width: 760px) 92vw, 42vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="experiences-page__introduction-image experiences-page__introduction-image--coffee">
                <img
                  src={coffeeImageLarge}
                  srcSet={`${coffeeImageSmall} 640w, ${coffeeImageLarge} 1280w`}
                  sizes="(max-width: 760px) 45vw, 26vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="experiences-page__introduction-image experiences-page__introduction-image--coast">
                <img
                  src={sunsetImageLarge}
                  srcSet={`${sunsetImageSmall} 640w, ${sunsetImageLarge} 1280w`}
                  sizes="(max-width: 760px) 45vw, 26vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>

            <p className="experiences-page__introduction-note">
              Tour and activity schedules are subject to availability.
              Departure times for selected experiences may vary according to
              tide conditions. Contact Guest Services for current details
              during your stay.
            </p>
          </div>
        </section>

        <section
          className="experiences-page__journeys"
          aria-labelledby="experiences-journeys-title"
          ref={journeySectionRef}
        >
          <div className="experiences-page__journeys-backdrop" aria-hidden="true">
            {journeys.map((journey, index) => (
              <img
                className={`experiences-page__journeys-backdrop-image${activeJourney === index ? " is-active" : ""}`}
                src={journey.image.blurred}
                alt=""
                loading="lazy"
                decoding="async"
                key={journey.name}
              />
            ))}
          </div>

          <div className="experiences-page__journeys-story">
            <h2 id="experiences-journeys-title">From Sámara to Costa Rica</h2>
            <p>
              Choose your pace, then follow the landscape—from the Pacific coast
              to cloud forest and volcano country.
            </p>
          </div>

          <div className="content-wrap experiences-page__journey-flow">
            {journeys.map((journey) => (
              <article
                className="experiences-page__journey is-clickable"
                data-experiences-motion="journey"
                id={journey.id}
                key={journey.name}
              >
                <a
                  className="experiences-page__journey-card-link"
                  href={journey.href}
                  aria-label={`${journey.action}: ${journey.name}`}
                />
                <div className="experiences-page__journey-media">
                  <img
                    className="experiences-page__journey-image experiences-page__journey-image--sharp"
                    src={journey.image.large}
                    srcSet={`${journey.image.small} ${journey.image.smallWidth}w, ${journey.image.large} ${journey.image.largeWidth}w`}
                    sizes="(max-width: 760px) 100vw, (max-width: 1270px) 88vw, 1120px"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="experiences-page__journey-copy">
                  <p className="experiences-page__journey-kicker">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {journey.icon}
                    </span>
                    {journey.kicker}
                  </p>
                  <h3>{journey.name}</h3>
                  <p>{journey.summary}</p>
                  <span
                    className="experiences-page__journey-action is-link"
                    aria-hidden="true"
                  >
                    {journey.action}
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="experiences-page__in-house"
          aria-labelledby="in-house-activities-title"
        >
          <div
            className="content-wrap experiences-page__in-house-heading"
            data-experiences-motion="in-house-heading"
          >
            <div>
              <div className="experiences-page__in-house-title">
                <p className="section-kicker">At the resort</p>
                <h2 id="in-house-activities-title">
                  Make every resort day your own
                </h2>
              </div>
              <p>
                Join in-house experiences designed for relaxation, fun, and
                connection, from wellness activities to cultural moments and
                light entertainment for all guests to enjoy.
              </p>
            </div>

            <div className="experiences-page__carousel-controls">
              <p aria-live="polite">
                <span>{String(activeActivity + 1).padStart(2, "0")}</span>
                {visibleActivityCount > 1 ? (
                  <>
                    <span aria-hidden="true">–</span>
                    <span>
                      {String(
                        Math.min(
                          activeActivity + visibleActivityCount,
                          inHouseActivities.length,
                        ),
                      ).padStart(2, "0")}
                    </span>
                  </>
                ) : null}
                <span aria-hidden="true"> / </span>
                <span>{String(inHouseActivities.length).padStart(2, "0")}</span>
              </p>
              <div>
                <button
                  type="button"
                  aria-label="View previous in-house activity"
                  disabled={activeActivity === 0}
                  onClick={() => scrollToActivity(activeActivity - 1)}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">
                    west
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="View next in-house activity"
                  disabled={activeActivity === finalActivityStart}
                  onClick={() => scrollToActivity(activeActivity + 1)}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">
                    east
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            className="experiences-page__carousel"
            aria-label="In-house activities"
            data-experiences-motion="in-house-carousel"
            onScroll={updateActiveActivity}
            ref={carouselRef}
          >
            {inHouseActivities.map((activity) => (
              <article className="experiences-page__activity" key={activity.name}>
                <div className="experiences-page__activity-media">
                  <img
                    src={activity.image.large}
                    srcSet={`${activity.image.small} 640w, ${activity.image.large} 1200w`}
                    sizes="(max-width: 680px) 84vw, (max-width: 980px) 44vw, 31vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="experiences-page__activity-copy">
                  <p>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {activity.icon}
                    </span>
                    {activity.type}
                  </p>
                  <h3>{activity.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experiences-page__assistance">
          <div
            className="content-wrap experiences-page__assistance-copy"
            data-experiences-motion="assistance"
          >
            <p className="section-kicker">Plan your experience</p>
            <h2>Ready for your adventure?</h2>
            <p>
              Not sure where to start? Our team can help you plan the right mix
              of tours and activities to match your style.
            </p>
            <span
              className="button-link experiences-page__assistance-action"
              role="link"
              aria-disabled="true"
              title="The Guest Services contact destination is awaiting confirmation"
            >
              Contact us to begin
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
