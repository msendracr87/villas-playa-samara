import gymImageSmall from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-960.webp";
import gymImageLarge from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-1448.webp";
import yogaImageSmall from "../../../assets/images/optimized/wellness/overview/vps-yoga-at-the-beach-960.webp";
import yogaImageLarge from "../../../assets/images/optimized/wellness/overview/vps-yoga-at-the-beach-1600.webp";
import futureImageSmall from "../../../assets/images/optimized/wellness/overview/spa-overview-render-960.webp";
import futureImageLarge from "../../../assets/images/optimized/wellness/overview/spa-overview-render-1507.webp";
import morphoImageSmall from "../../../assets/images/optimized/wellness/overview/morpho-massage-and-face-treatment-480.webp";
import morphoImageLarge from "../../../assets/images/optimized/wellness/overview/morpho-massage-and-face-treatment-800.webp";
import morphoLogoUrl from "../../../assets/svgs/logo/morpho/morpho-spa-logo-000-frame.svg";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useWellnessMotion } from "../../hooks/useWellnessMotion";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./wellness-page.css";

const yogaSchedule = [
  { day: "Monday", time: "4:30 p.m." },
  { day: "Tuesday", time: "4:30 p.m." },
  { day: "Thursday", time: "8:00 a.m." },
] as const;

const futureExperiences = [
  "Expanded treatment spaces",
  "Sauna and cold plunge",
  "Retreat pool",
  "Landscaped relaxation areas",
  "Beauty Bar",
  "Hair Studio",
  "Nail Bar",
  "Broader body-care experiences",
] as const;

export function WellnessPage() {
  useWellnessMotion();
  usePageMetadata(
    "Wellness, GYM, Yoga & Morpho | Villas Playa Sámara",
    "Explore wellness at Villas Playa Sámara with a 24-hour GYM, guided yoga sessions, current Morpho treatments, and a preview of the future Morpho Wellness Retreat.",
  );

  return (
    <div className="site-shell wellness-page">
      <Header />
      <main id="main-content">
        <section
          className="wellness-page__hero"
          id="yoga"
          aria-labelledby="wellness-page-title"
          data-wellness-motion="hero"
        >
          <div className="wellness-page__hero-media" aria-hidden="true">
            <img
              src={yogaImageLarge}
              srcSet={`${yogaImageSmall} 960w, ${yogaImageLarge} 1600w`}
              sizes="100vw"
              alt=""
              decoding="async"
            />
          </div>
          <div className="wellness-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap wellness-page__hero-intro">
            <div className="wellness-page__hero-copy">
              <div className="wellness-page__hero-copy-text">
                <h1 id="wellness-page-title">
                  Move. Breathe. <span>Restore.</span>
                </h1>
                <p>
                  Wellness can be as active or as unhurried as you choose. Make
                  time for movement, mindful breathing, or restorative care
                  during your stay.
                </p>
              </div>

              <nav className="wellness-page__hero-anchors" aria-label="Explore wellness">
                <a href="#gym">
                  GYM
                  <span className="material-symbols-outlined" aria-hidden="true">
                    south
                  </span>
                </a>
                <a href="#morpho">
                  Spa
                  <span className="material-symbols-outlined" aria-hidden="true">
                    south
                  </span>
                </a>
              </nav>
            </div>
          </div>

          <div className="content-wrap wellness-page__hero-yoga">
            <div className="wellness-page__hero-yoga-grid">
              <div className="wellness-page__schedule" data-wellness-motion="reveal">
                <div>
                  <h3>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      calendar_month
                    </span>
                    <span>Free yoga sessions</span>
                  </h3>
                  <p>Maximum 15 participants</p>
                </div>

                <table>
                  <caption className="wellness-page__sr-only">
                    Weekly free yoga schedule
                  </caption>
                  <tbody>
                    {yogaSchedule.map((session) => (
                      <tr
                        key={`${session.day}-${session.time}`}
                        data-wellness-motion="schedule-row"
                      >
                        <th scope="row">{session.day}</th>
                        <td>{session.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="wellness-page__locations" data-wellness-motion="reveal">
                <h3>Where sessions take place</h3>
                <ul>
                  <li>
                    <strong>Morning</strong>
                    <span>On the beach in front of Nikoa Beach Club</span>
                  </li>
                  <li>
                    <strong>Afternoon</strong>
                    <span>Above Arrecife Restaurant</span>
                  </li>
                  <li>
                    <strong>Bad weather</strong>
                    <span>An air-conditioned room above Arrecife Restaurant</span>
                  </li>
                </ul>
              </div>

              <div
                className="wellness-page__private-yoga"
                data-wellness-motion="reveal"
              >
                <h3>Prefer a private session?</h3>
                <p>
                  Contact Guest Services to arrange a more personal practice.
                  Schedules and locations may vary.
                </p>
                <div>
                  <a href="tel:+50689594747">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      call
                    </span>
                    +506 8959 4747
                  </a>
                  <a href="tel:+50685021221">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      call
                    </span>
                    +506 8502 1221
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section
          className="wellness-page__service wellness-page__gym"
          id="gym"
          aria-labelledby="wellness-gym-title"
        >
          <div className="content-wrap wellness-page__service-layout">
            <div className="wellness-page__service-copy" data-wellness-motion="reveal">
              <span className="section-kicker wellness-page__availability">
                <span className="material-symbols-outlined" aria-hidden="true">
                  fitness_center
                </span>
                Open 24 hours
              </span>
              <h2 id="wellness-gym-title">A space for your routine</h2>
              <p>
                Stay active in a newly completed, air-conditioned facility
                designed for independent workouts at any hour.
              </p>
              <p>
                Large windows bring natural light and garden views into a
                contemporary training space equipped for cardio, strength
                training, free weights, and functional movement.
              </p>
              <a className="button-link" href="/wellness/gym">
                Explore the GYM
              </a>
            </div>

            <figure className="wellness-page__service-media" data-wellness-motion="media-right">
              <img
                src={gymImageLarge}
                srcSet={`${gymImageSmall} 960w, ${gymImageLarge} 1448w`}
                sizes="(max-width: 900px) 100vw, 58vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section
          className="wellness-page__service wellness-page__morpho"
          id="morpho"
          aria-labelledby="wellness-morpho-title"
        >
          <div className="content-wrap wellness-page__service-layout">
            <div className="wellness-page__service-copy" data-wellness-motion="reveal">
              <img
                className="wellness-page__morpho-logo"
                src={morphoLogoUrl}
                alt="Morpho Wellness Retreat"
              />
              <h2 id="wellness-morpho-title">
                Time to slow down and care for yourself
              </h2>
              <p>
                Morpho’s current wellness offering creates space to pause,
                release tension, and enjoy restorative care during your stay.
              </p>
              <p>
                Choose from massages, body treatments, facials, exfoliations,
                and wellness packages. Contact Guest Services to review current
                availability and arrange an appointment.
              </p>
              <a className="button-link" href="/wellness/spa">
                Explore the Spa
              </a>
            </div>

            <figure className="wellness-page__service-media" data-wellness-motion="media-left" aria-hidden="true">
              <img
                src={morphoImageLarge}
                srcSet={`${morphoImageSmall} 480w, ${morphoImageLarge} 800w`}
                sizes="(max-width: 1080px) 100vw, 50vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section
          className="wellness-page__future"
          id="future-morpho"
          aria-labelledby="wellness-future-title"
        >
          <div className="wellness-page__future-media" data-wellness-motion="media-left">
            <img
              src={futureImageLarge}
              srcSet={`${futureImageSmall} 960w, ${futureImageLarge} 1507w`}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="wellness-page__future-copy" data-wellness-motion="reveal">
            <span className="section-kicker wellness-page__future-kicker">
              <span className="material-symbols-outlined" aria-hidden="true">
                construction
              </span>
              Under development
            </span>
            <h2 id="wellness-future-title">
              A more expansive retreat is taking shape
            </h2>
            <p>
              Building on the treatments available today, the future Morpho
              Wellness Retreat is planned to introduce more treatment, water,
              recovery, beauty, and relaxation spaces among tropical
              surroundings.
            </p>

            <ul>
              {futureExperiences.map((experience) => (
                <li key={experience} data-wellness-motion="future-row">
                  {experience}
                </li>
              ))}
            </ul>

            <small>
              These additions are future experiences and are not yet available.
              Images are conceptual, and the final design, services, policies,
              and opening information may evolve.
            </small>
          </div>
        </section>

        <section
          className="wellness-page__closing"
          aria-labelledby="wellness-closing-title"
        >
          <div className="content-wrap" data-wellness-motion="reveal">
            <h2 id="wellness-closing-title">How would you like to feel today?</h2>
            <p>
              Choose the path that fits your stay: independent movement in the
              GYM or restorative care with Morpho.
            </p>
            <div>
              <a className="button-link" href="/wellness/gym">
                Explore the GYM
              </a>
              <a className="button-link" href="/wellness/spa">
                Explore the Spa
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
