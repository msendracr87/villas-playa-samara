import { useEffect, useRef } from "react";
import surfImageSmall from "../../../assets/images/optimized/homepage/experiences/surf-lessons-640.webp";
import surfImageLarge from "../../../assets/images/optimized/homepage/experiences/surf-lessons-1280.webp";
import kayakImageSmall from "../../../assets/images/optimized/homepage/experiences/isla-chora-kayak-640.webp";
import kayakImageLarge from "../../../assets/images/optimized/homepage/experiences/isla-chora-kayak-1280.webp";
import turtleImageSmall from "../../../assets/images/optimized/homepage/experiences/turtle-nesting-640.webp";
import turtleImageLarge from "../../../assets/images/optimized/homepage/experiences/turtle-nesting-1280.webp";
import sunsetImageSmall from "../../../assets/images/optimized/homepage/experiences/pacific-sunset-tour-640.webp";
import sunsetImageLarge from "../../../assets/images/optimized/homepage/experiences/pacific-sunset-tour-1280.webp";
import arenalImageSmall from "../../../assets/images/optimized/homepage/experiences/arenal-volcano-640.webp";
import arenalImageLarge from "../../../assets/images/optimized/homepage/experiences/arenal-volcano-1280.webp";
import monteverdeImageSmall from "../../../assets/images/optimized/homepage/experiences/monteverde-640.webp";
import monteverdeImageLarge from "../../../assets/images/optimized/homepage/experiences/monteverde-1280.webp";
import paloVerdeImageSmall from "../../../assets/images/optimized/homepage/experiences/palo-verde-640.webp";
import paloVerdeImageLarge from "../../../assets/images/optimized/homepage/experiences/palo-verde-1280.webp";
import coffeeImageSmall from "../../../assets/images/optimized/homepage/experiences/costa-rican-coffee-640.webp";
import coffeeImageLarge from "../../../assets/images/optimized/homepage/experiences/costa-rican-coffee-1280.webp";
import atvImageSmall from "../../../assets/images/optimized/homepage/experiences/atv-jungle-tour-640.webp";
import atvImageLarge from "../../../assets/images/optimized/homepage/experiences/atv-jungle-tour-1280.webp";
import "./experiences-showcase.css";

const experienceCards = [
  {
    title: "Surf Sámara",
    type: "Ocean & beach",
    copy: "Build confidence in the warm Pacific with a guided surf lesson at Sámara Beach.",
    href: "/experiences/activities#surf-lessons",
    image: { small: surfImageSmall, large: surfImageLarge },
  },
  {
    title: "Isla Chora by Kayak",
    type: "Ocean & beach",
    copy: "Paddle across Sámara Bay toward Isla Chora and explore the coast from the water.",
    href: "/experiences/activities#isla-chora-kayak-tour",
    image: { small: kayakImageSmall, large: kayakImageLarge },
  },
  {
    title: "Pacific Sunset",
    type: "Ocean tour",
    copy: "Watch the coastline change in the evening light during a relaxed sunset ocean tour.",
    href: "/experiences/day-tours#sunset-ocean-tour",
    image: { small: sunsetImageSmall, large: sunsetImageLarge },
  },
  {
    title: "ATV Jungle Tour",
    type: "Rentals & adventure",
    copy: "Follow jungle routes and discover more of the landscapes surrounding Sámara by ATV.",
    href: "/experiences/rentals#atv-jungle-tour",
    image: { small: atvImageSmall, large: atvImageLarge },
  },
  {
    title: "Arenal Volcano",
    type: "Day tour",
    copy: "Venture inland for a full-day look at one of Costa Rica’s most recognizable volcanic landscapes.",
    href: "/experiences/day-tours#arenal-volcano",
    image: { small: arenalImageSmall, large: arenalImageLarge },
  },
  {
    title: "Monteverde",
    type: "Day tour",
    copy: "Discover the misty trails, remarkable biodiversity, and elevated views of the cloud forest.",
    href: "/experiences/day-tours#monteverde-cloud-forest",
    image: { small: monteverdeImageSmall, large: monteverdeImageLarge },
  },
  {
    title: "Palo Verde",
    type: "Wildlife & nature",
    copy: "Explore a protected wetland landscape known for wildlife, river scenery, and abundant birdlife.",
    href: "/experiences/day-tours#palo-verde-boat-tour",
    image: { small: paloVerdeImageSmall, large: paloVerdeImageLarge },
  },
  {
    title: "Costa Rican Coffee",
    type: "Culture & flavor",
    copy: "Learn how Costa Rican coffee moves from plantation to cup while experiencing its local character.",
    href: "/experiences/day-tours#coffee-tour",
    image: { small: coffeeImageSmall, large: coffeeImageLarge },
  },
  {
    title: "Turtle Nesting",
    type: "Wildlife & nature",
    copy: "Experience the remarkable nesting season at Camaronal Wildlife Refuge with local guidance.",
    href: "/experiences/activities#turtle-nesting-tour",
    image: { small: turtleImageSmall, large: turtleImageLarge },
  },
] as const;

const cardColumns = [
  [experienceCards[0], experienceCards[3], experienceCards[6]],
  [experienceCards[1], experienceCards[4], experienceCards[7]],
  [experienceCards[2], experienceCards[5], experienceCards[8]],
] as const;

export function ExperiencesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const story = storyRef.current;

    if (!section || !story) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const updateStoryFade = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        story.style.opacity = "1";
        story.style.transform = "none";
        return;
      }

      const sectionBounds = section.getBoundingClientRect();
      const fadeDistance = Math.max(
        section.offsetHeight - window.innerHeight * 0.7,
        1,
      );
      const progress = Math.min(
        Math.max(-sectionBounds.top / fadeDistance, 0),
        1,
      );
      const fadeProgress = Math.pow(progress, 1.35);

      story.style.opacity = String(1 - fadeProgress);
      story.style.transform = `translate3d(0, ${progress * -28}px, 0)`;
    };

    const requestStoryFade = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateStoryFade);
      }
    };

    updateStoryFade();
    window.addEventListener("scroll", requestStoryFade, { passive: true });
    window.addEventListener("resize", requestStoryFade);
    reducedMotion.addEventListener("change", requestStoryFade);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestStoryFade);
      window.removeEventListener("resize", requestStoryFade);
      reducedMotion.removeEventListener("change", requestStoryFade);
    };
  }, []);

  return (
    <section
      className="experiences-showcase"
      id="experiences"
      aria-labelledby="experiences-title"
      ref={sectionRef}
    >
      <div className="content-wrap">
        <div
          className="experiences-samara-beach"
          ref={storyRef}
          aria-describedby="experiences-description"
        >
          <p className="section-kicker">Experience</p>
          <h2 id="experiences-title">Sámara Beach</h2>
          <p id="experiences-description">
            From the shore of Sámara Bay, paddle to Isla Chora, learn to surf,
            or follow the Pacific into sunset. With Monkey Tours based at the
            hotel, you can also venture inland to volcanoes, cloud forests,
            wildlife reserves, coffee country, and more.
          </p>
        </div>

        <div
          className="experiences-showcase__gallery"
          aria-label="Featured tours, activities, and places"
          data-home-motion="discoveries"
        >
          {cardColumns.map((column, columnIndex) => (
            <div
              className={`experiences-showcase__column experiences-showcase__column--${columnIndex + 1}`}
              key={columnIndex}
            >
              {column.map((experience) => {
                const cardContent = (
                  <>
                    <img
                      src={experience.image.large}
                      srcSet={`${experience.image.small} 640w, ${experience.image.large} 1280w`}
                      sizes="(max-width: 680px) calc(100vw - 40px), 30vw"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="experiences-showcase__card-details">
                      <span className="experiences-showcase__card-type">
                        {experience.type}
                      </span>
                      <strong>{experience.title}</strong>
                      <span className="experiences-showcase__card-copy">
                        {experience.copy}
                      </span>
                      <span className="experiences-showcase__card-action">
                        View details
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          arrow_forward
                        </span>
                      </span>
                    </span>
                  </>
                );

                return (
                  <a
                    className="experiences-showcase__card"
                    href={experience.href}
                    aria-label={`View details for ${experience.title}`}
                    key={experience.title}
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="experiences-showcase__footer"
          data-home-motion="copy"
        >
          <p>
            Every pace has a place here, from an unhurried pool day to a full-day
            Costa Rican adventure.
          </p>
          <a className="text-link" href="/experiences">
            Explore experiences
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
