import heroImageSmall from "../../../assets/images/optimized/arrecife/arrecife-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/arrecife/arrecife-hero-1600.webp";
import exteriorImageSmall from "../../../assets/images/optimized/arrecife/arrecife-exterior-960.webp";
import exteriorImageLarge from "../../../assets/images/optimized/arrecife/arrecife-exterior-1600.webp";
import gardenImageSmall from "../../../assets/images/optimized/arrecife/arrecife-garden-960.webp";
import gardenImageLarge from "../../../assets/images/optimized/arrecife/arrecife-garden-1600.webp";
import welcomeImageSmall from "../../../assets/images/optimized/arrecife/arrecife-welcome-720.webp";
import welcomeImageLarge from "../../../assets/images/optimized/arrecife/arrecife-welcome-1440.webp";
import barImageSmall from "../../../assets/images/optimized/arrecife/arrecife-bar-720.webp";
import barImageLarge from "../../../assets/images/optimized/arrecife/arrecife-bar-1146.webp";
import arrecifeLogoUrl from "../../../assets/svgs/dining/arrecife/arrecife-logo-white-frame.svg";
import { useDiningMotion } from "../../hooks/useDiningMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./arrecife-detail.css";

const serviceMoments = [
  { icon: "breakfast_dining", label: "Breakfast" },
  { icon: "brunch_dining", label: "Lunch" },
  { icon: "dinner_dining", label: "Dinner" },
] as const;

export function ArrecifeDetail() {
  useDiningMotion();
  usePageMetadata(
    "Arrecife | Villas Playa Sámara",
    "Discover Arrecife at Villas Playa Sámara, offering seasonal buffet and à la carte dining with international dishes, Costa Rican flavors, and relaxed resort hospitality.",
  );

  return (
    <div className="site-shell arrecife-page">
      <Header />
      <main id="main-content">
        <section
          className="arrecife-page__hero"
          aria-labelledby="arrecife-title"
          data-dining-motion="arrecife-hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="arrecife-page__hero-shade" aria-hidden="true" />
          <div className="content-wrap arrecife-page__hero-layout">
            <div className="arrecife-page__identity">
              <p>Concept name and logo · subject to change</p>
              <h1 id="arrecife-title">
                <img src={arrecifeLogoUrl} alt="Arrecife" />
              </h1>
              <span>
                International variety, Costa Rican character, and relaxed
                resort dining
              </span>
            </div>
            <div className="arrecife-page__hero-actions">
              <a className="arrecife-page__hero-link" href="#arrecife-story">
                Discover Arrecife
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="arrecife-page__back-link" href="/dining">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All dining
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap arrecife-page__intro"
          id="arrecife-story"
          aria-labelledby="arrecife-intro-title"
          data-dining-motion="arrecife-reveal"
        >
          <header>
            <h2 id="arrecife-intro-title">
              A welcoming table for every part of the day
            </h2>
          </header>

          <div className="arrecife-page__intro-copy">
            <p>
              Arrecife is the main restaurant and bar at Villas Playa Sámara,
              bringing familiar favorites, local flavors, and international
              variety together in one comfortable setting.
            </p>
            <p>
              Depending on the season, guests can enjoy generous buffet
              service or a relaxed à la carte experience with international,
              Mediterranean, Italian-inspired, Costa Rican, and contemporary
              influences.
            </p>
          </div>

          <ul
            className="arrecife-page__service-moments"
            aria-label="Arrecife service occasions"
          >
            {serviceMoments.map((moment) => (
              <li key={moment.label}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {moment.icon}
                </span>
                <span>{moment.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="arrecife-page__formats"
          aria-labelledby="arrecife-formats-title"
          data-dining-motion="arrecife-split"
        >
          <div className="arrecife-page__formats-media">
            <img
              src={exteriorImageLarge}
              srcSet={`${exteriorImageSmall} 960w, ${exteriorImageLarge} 1600w`}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="arrecife-page__formats-copy">
            <h2 id="arrecife-formats-title">Seasonal service, familiar welcome</h2>
            <p>
              The dining format follows the rhythm of the season while keeping
              the atmosphere approachable for couples, families, and friends.
            </p>

            <div className="arrecife-page__format-list">
              <article>
                <span className="material-symbols-outlined" aria-hidden="true">
                  room_service
                </span>
                <div>
                  <h3>Buffet dining</h3>
                  <p>
                    A varied experience with familiar international dishes,
                    Costa Rican favorites, and rotating culinary directions.
                  </p>
                  <a
                    className="arrecife-page__menu-link"
                    href="/dining/arrecife/menus/buffet"
                  >
                    View buffet menu
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
              <article>
                <span className="material-symbols-outlined" aria-hidden="true">
                  restaurant_menu
                </span>
                <div>
                  <h3>À la carte dining</h3>
                  <p>
                    Available during selected periods, with a more composed
                    selection shaped by the current dining program.
                  </p>
                  <a
                    className="arrecife-page__menu-link"
                    href="/dining/arrecife/menus/a-la-carte"
                  >
                    View à la carte menu
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            </div>

            <p className="arrecife-page__availability-note">
              Service formats and culinary selections may vary according to
              seasonality and availability. Guest Services can confirm the
              current format during your stay.
            </p>
          </div>
        </section>

        <section
          className="arrecife-page__bar"
          aria-labelledby="arrecife-bar-title"
          data-dining-motion="arrecife-split"
        >
          <div className="content-wrap arrecife-page__bar-layout">
            <div className="arrecife-page__bar-copy">
              <h2 id="arrecife-bar-title">A drink, a conversation, a little longer</h2>
              <p>
                The integrated bar offers cocktails, wines, beers,
                non-alcoholic beverages, juices, coffee, and refreshments to
                accompany the day’s dining experience.
              </p>
              <p>Selections remain subject to seasonal availability.</p>
              <a
                className="arrecife-page__menu-link"
                href="/dining/arrecife/menus/drinks"
              >
                View drinks menu
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="arrecife-page__bar-media">
              <img
                src={barImageLarge}
                srcSet={`${barImageSmall} 720w, ${barImageLarge} 1146w`}
                sizes="(max-width: 900px) 100vw, 48vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section
          className="content-wrap arrecife-page__gallery"
          aria-labelledby="arrecife-gallery-title"
          data-dining-motion="arrecife-gallery"
        >
          <header>
            <h2 id="arrecife-gallery-title">A closer look at Arrecife</h2>
            <p>
              Restaurant atmosphere, welcoming service, and open-air resort
              surroundings come together around the table.
            </p>
          </header>

          <div className="arrecife-page__gallery-grid">
            <figure className="arrecife-page__gallery-welcome">
              <img
                src={welcomeImageLarge}
                srcSet={`${welcomeImageSmall} 720w, ${welcomeImageLarge} 1440w`}
                sizes="(max-width: 760px) 100vw, 38vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="arrecife-page__gallery-garden">
              <img
                src={gardenImageLarge}
                srcSet={`${gardenImageSmall} 960w, ${gardenImageLarge} 1600w`}
                sizes="(max-width: 760px) 100vw, 54vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section
          className="arrecife-page__visit"
          aria-labelledby="arrecife-visit-title"
          data-dining-motion="arrecife-reveal"
        >
          <div className="content-wrap arrecife-page__visit-layout">
            <div className="arrecife-page__dress-code">
              <span className="material-symbols-outlined" aria-hidden="true">
                apparel
              </span>
              <h2>Casual resort attire</h2>
              <p>
                Shirts or appropriate cover-ups and footwear are required.
                Bathing suits without a cover-up and shirtless entry are not
                permitted inside the restaurant.
              </p>
            </div>

            <div className="arrecife-page__visit-copy">
              <h2 id="arrecife-visit-title">Joining us at Arrecife?</h2>
              <p>
                Guest Services can help confirm current availability, seasonal
                service information, and whether buffet or à la carte dining is
                offered during your stay.
              </p>
              <div className="arrecife-page__visit-actions">
                <a className="button-link" href="/dining">
                  Explore all dining
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav className="content-wrap arrecife-page__next" aria-label="Restaurant navigation">
          <a href="/dining">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Back</small>
              All restaurants
            </span>
          </a>
          <a className="arrecife-page__next-venue" href="/dining/baja-azul">
            <span>
              <small>Next restaurant concept</small>
              Baja Azul
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
