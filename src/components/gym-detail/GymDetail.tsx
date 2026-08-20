import gymEntranceSmall from "../../../assets/images/optimized/wellness/gym/gym-entrance-1-960.webp";
import gymEntranceLarge from "../../../assets/images/optimized/wellness/gym/gym-entrance-1-1448.webp";
import gymLobbySmall from "../../../assets/images/optimized/wellness/gym/gym-lobby-2-960.webp";
import gymLobbyLarge from "../../../assets/images/optimized/wellness/gym/gym-lobby-2-1448.webp";
import gymTrainingSmall from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-960.webp";
import gymTrainingLarge from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-1448.webp";
import gymMovementSmall from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-4-960.webp";
import gymMovementLarge from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-4-1448.webp";
import spaBodyworkSmall from "../../../assets/images/optimized/wellness/spa/massage-and-bodywork-2-960.webp";
import spaBodyworkLarge from "../../../assets/images/optimized/wellness/spa/massage-and-bodywork-2-1600.webp";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useWellnessMotion } from "../../hooks/useWellnessMotion";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { WellnessCrossLink } from "../wellness-cross-link/WellnessCrossLink";
import { WellnessInquiry } from "../wellness-inquiry/WellnessInquiry";
import "./gym-detail.css";

const gymHighlights = [
  "Open 24 hours",
  "Air-conditioned indoor facility",
  "Large windows with garden views",
  "Cardio and strength-training equipment",
  "Free weights, benches, and functional workout space",
] as const;

const equipmentGroups = [
  {
    title: "Cardio",
    description:
      "Equipment for a steady warm-up, a focused session, or maintaining your usual endurance routine.",
  },
  {
    title: "Strength",
    description:
      "Strength-training machines, free weights, and benches for structured independent workouts.",
  },
  {
    title: "Functional movement",
    description:
      "Open workout areas give you room for mobility, bodyweight work, and a more flexible training rhythm.",
  },
] as const;

export function GymDetail() {
  useWellnessMotion();
  usePageMetadata(
    "GYM | Wellness at Villas Playa Sámara",
    "Stay active at Villas Playa Sámara with a 24-hour air-conditioned GYM featuring cardio, strength, free weights, and functional training space.",
  );

  return (
    <div className="site-shell gym-page">
      <Header />
      <main id="main-content">
        <section
          className="gym-page__hero"
          aria-labelledby="gym-page-title"
          data-wellness-motion="hero"
        >
          <img
            src={gymTrainingLarge}
            srcSet={`${gymTrainingSmall} 960w, ${gymTrainingLarge} 1448w`}
            sizes="100vw"
            alt="Guests training inside the Villas Playa Sámara GYM"
            decoding="async"
          />
          <div className="gym-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap gym-page__hero-content">
            <h1 id="gym-page-title">
              Stay active, surrounded by <span>natural light</span>
            </h1>
            <p>
              A bright, air-conditioned fitness space designed for independent
              workouts on your own schedule.
            </p>
            <div className="gym-page__hero-actions">
              <a href="#inside-the-gym">
                Explore the GYM
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a href="/wellness">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All wellness
              </a>
            </div>
          </div>

          <dl className="gym-page__hero-facts">
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                  schedule
                </span>
                <span>Access</span>
              </dt>
              <dd>Open 24 hours</dd>
            </div>
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                  ac_unit
                </span>
                <span>Setting</span>
              </dt>
              <dd>Air-conditioned</dd>
            </div>
            <div>
              <dt>
                <span className="material-symbols-outlined" aria-hidden="true">
                  fitness_center
                </span>
                <span>Training</span>
              </dt>
              <dd>Cardio, strength & functional</dd>
            </div>
          </dl>
        </section>

        <section
          className="content-wrap gym-page__introduction"
          aria-labelledby="gym-introduction-title"
          data-wellness-motion="reveal"
        >
          <h2 id="gym-introduction-title">
            Move, recharge, and make time for yourself
          </h2>
          <p>
            Wellness can be as active or as unhurried as you choose. Continue
            your fitness routine in our newly completed GYM, or simply create
            space in your day to move, breathe, and reset.
          </p>
        </section>

        <section
          className="gym-page__inside"
          id="inside-the-gym"
          aria-labelledby="gym-inside-title"
        >
          <div className="content-wrap gym-page__inside-layout">
            <figure data-wellness-motion="media-left">
              <img
                src={gymEntranceLarge}
                srcSet={`${gymEntranceSmall} 960w, ${gymEntranceLarge} 1448w`}
                sizes="(max-width: 900px) 100vw, 52vw"
                alt="Entrance to the Villas Playa Sámara GYM"
                loading="lazy"
                decoding="async"
              />
              <figcaption>A dedicated space within easy reach of the hotel.</figcaption>
            </figure>

            <div className="gym-page__inside-copy" data-wellness-motion="reveal">
              <h2 id="gym-inside-title">Inside the GYM</h2>
              <p>
                Large windows overlook the surrounding greenery, bringing
                natural light into the workout space while creating an open
                connection with the resort grounds.
              </p>
              <p>
                Warm wood details, natural stone, contemporary finishes, and a
                dedicated reception area give the facility a polished yet
                welcoming character.
              </p>

              <ul>
                {gymHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="gym-page__training"
          aria-labelledby="gym-training-title"
        >
          <div className="content-wrap gym-page__training-heading" data-wellness-motion="reveal">
            <h2 id="gym-training-title">A space for your routine</h2>
            <p>
              From a quick morning session to a more complete workout, the GYM
              supports different ways to keep moving during your stay.
            </p>
          </div>

          <div className="content-wrap gym-page__training-layout">
            <figure data-wellness-motion="media-right">
              <img
                src={gymMovementLarge}
                srcSet={`${gymMovementSmall} 960w, ${gymMovementLarge} 1448w`}
                sizes="(max-width: 900px) 100vw, 58vw"
                alt="Guests using strength and functional training equipment"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="gym-page__equipment-list">
              {equipmentGroups.map((group) => (
                <article key={group.title} data-wellness-motion="equipment">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="gym-page__reception"
          aria-labelledby="gym-reception-title"
        >
          <div className="content-wrap gym-page__reception-layout">
            <div data-wellness-motion="reveal">
              <h2 id="gym-reception-title">A welcoming arrival</h2>
              <p>
                A dedicated reception area, natural finishes, and garden-facing
                windows carry the calm character of the resort into the GYM.
              </p>
            </div>
            <figure data-wellness-motion="media-left">
              <img
                src={gymLobbyLarge}
                srcSet={`${gymLobbySmall} 960w, ${gymLobbyLarge} 1448w`}
                sizes="(max-width: 900px) 100vw, 60vw"
                alt="Reception area inside the Villas Playa Sámara GYM"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <WellnessInquiry variant="gym" />

        <WellnessCrossLink
          className="gym-page__closing"
          imageSmall={spaBodyworkSmall}
          imageLarge={spaBodyworkLarge}
          imageLargeWidth={1600}
          primaryHref="/wellness/spa"
          primaryLabel="Explore Spa"
        />
      </main>
      <Footer />
    </div>
  );
}
