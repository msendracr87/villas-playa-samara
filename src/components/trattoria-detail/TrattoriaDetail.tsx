import heroImageSmall from "../../../assets/images/optimized/trattoria/trattoria-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/trattoria/trattoria-hero-1600.webp";
import sideImageSmall from "../../../assets/images/optimized/trattoria/trattoria-side-960.webp";
import sideImageLarge from "../../../assets/images/optimized/trattoria/trattoria-side-1600.webp";
import pastaImageSmall from "../../../assets/images/optimized/trattoria/trattoria-pasta-640.webp";
import pastaImageLarge from "../../../assets/images/optimized/trattoria/trattoria-pasta-960.webp";
import pizzaImageSmall from "../../../assets/images/optimized/trattoria/trattoria-pizza-640.webp";
import pizzaImageLarge from "../../../assets/images/optimized/trattoria/trattoria-pizza-960.webp";
import wineImageSmall from "../../../assets/images/optimized/trattoria/trattoria-wine-640.webp";
import wineImageLarge from "../../../assets/images/optimized/trattoria/trattoria-wine-960.webp";
import trattoriaLogoUrl from "../../../assets/svgs/dining/trattoria/trattoria-logo-white-frame.svg";
import { useDiningMotion } from "../../hooks/useDiningMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./trattoria-detail.css";

const eveningMoments = [
  { icon: "restaurant", label: "À la carte dinner" },
  { icon: "wine_bar", label: "Wine & cocktails" },
  { icon: "groups", label: "Couples, families & groups" },
] as const;

export function TrattoriaDetail() {
  useDiningMotion();
  usePageMetadata(
    "Trattoria | Villas Playa Sámara",
    "Discover the Trattoria concept at Villas Playa Sámara, a relaxed Italian-inspired dinner experience with pizza, pasta, classic desserts, wine, and cocktails.",
  );

  return (
    <div className="site-shell trattoria-page">
      <Header />
      <main id="main-content">
        <section
          className="trattoria-page__hero"
          aria-labelledby="trattoria-title"
          data-dining-motion="trattoria-hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="trattoria-page__hero-shade" aria-hidden="true" />
          <div className="content-wrap trattoria-page__hero-layout">
            <div className="trattoria-page__identity">
              <p>Concept name and logo · subject to change</p>
              <h1 id="trattoria-title">
                <img src={trattoriaLogoUrl} alt="Trattoria" />
              </h1>
              <span>Classic Italian flavors in a relaxed evening setting</span>
            </div>
            <div className="trattoria-page__hero-actions">
              <a className="trattoria-page__hero-link" href="#trattoria-story">
                Settle into the evening
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="trattoria-page__back-link" href="/dining">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All dining
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap trattoria-page__intro"
          id="trattoria-story"
          aria-labelledby="trattoria-intro-title"
          data-dining-motion="trattoria-reveal"
        >
          <header>
            <h2 id="trattoria-intro-title">A relaxed taste of Italy</h2>
          </header>
          <div className="trattoria-page__intro-copy">
            <p>
              Trattoria brings classic flavors, welcoming service, and a
              comfortable evening atmosphere to Villas Playa Sámara.
            </p>
            <p>
              Familiar Italian favorites—from freshly prepared pasta and pizza
              to satisfying main courses and traditional desserts—shape an
              experience that feels polished without becoming overly formal.
            </p>
          </div>
          <ul
            className="trattoria-page__evening-moments"
            aria-label="Trattoria dining experience"
          >
            {eveningMoments.map((moment) => (
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
          className="trattoria-page__arrival"
          aria-labelledby="trattoria-arrival-title"
          data-dining-motion="trattoria-split"
        >
          <div className="trattoria-page__arrival-copy">
            <p className="trattoria-page__act">Act I · Arrive</p>
            <h2 id="trattoria-arrival-title">Let the pace of the evening soften</h2>
            <p>
              The setting is comfortable and inviting: a place to come together,
              share conversation, and settle in before dinner begins.
            </p>
            <p>
              Designed for couples, families, and groups, Trattoria keeps the
              atmosphere refined yet approachable from the first moment.
            </p>
          </div>
          <figure>
            <img
              src={sideImageLarge}
              srcSet={`${sideImageSmall} 960w, ${sideImageLarge} 1600w`}
              sizes="(max-width: 900px) 100vw, 58vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section
          className="content-wrap trattoria-page__table"
          aria-labelledby="trattoria-table-title"
          data-dining-motion="trattoria-table"
        >
          <header>
            <p className="trattoria-page__act">Act II · Share</p>
            <h2 id="trattoria-table-title">Familiar dishes, gathered around the table</h2>
            <p>
              The à la carte concept brings together antipasti, salads, pizza,
              pasta, risotto, meat and seafood dishes, vegetarian options, and
              classic desserts for a relaxed resort dinner.
            </p>
            <a
              className="trattoria-page__menu-link"
              href="/dining/trattoria/menus/a-la-carte"
            >
              View à la carte menu
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </header>
          <div className="trattoria-page__table-images" aria-hidden="true">
            <figure className="trattoria-page__pasta">
              <img
                src={pastaImageLarge}
                srcSet={`${pastaImageSmall} 640w, ${pastaImageLarge} 960w`}
                sizes="(max-width: 760px) 72vw, 37vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="trattoria-page__pizza">
              <img
                src={pizzaImageLarge}
                srcSet={`${pizzaImageSmall} 640w, ${pizzaImageLarge} 960w`}
                sizes="(max-width: 760px) 56vw, 29vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section
          className="trattoria-page__wine"
          aria-labelledby="trattoria-wine-title"
          data-dining-motion="trattoria-wine"
        >
          <div className="content-wrap trattoria-page__wine-layout">
            <figure>
              <img
                src={wineImageLarge}
                srcSet={`${wineImageSmall} 640w, ${wineImageLarge} 960w`}
                sizes="(max-width: 900px) 100vw, 42vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="trattoria-page__wine-copy">
              <p className="trattoria-page__act">Act III · Linger</p>
              <h2 id="trattoria-wine-title">A glass of wine, then a little longer</h2>
              <p>
                Wines, classic Italian cocktails, familiar mixed drinks,
                non-alcoholic selections, coffee, and after-dinner refreshments
                accompany the evening.
              </p>
              <div className="trattoria-page__wine-links">
                <a href="/dining/trattoria/menus/wine">
                  <span>Wine menu</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a href="/dining/trattoria/menus/drinks">
                  <span>Drinks &amp; cocktails</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
              <small>
                Menus, ingredients, and available selections remain subject to
                seasonality and availability.
              </small>
            </div>
          </div>
        </section>

        <section
          className="trattoria-page__visit"
          aria-labelledby="trattoria-visit-title"
          data-dining-motion="trattoria-reveal"
        >
          <div className="content-wrap trattoria-page__visit-layout">
            <div className="trattoria-page__dress-code">
              <span className="material-symbols-outlined" aria-hidden="true">
                apparel
              </span>
              <h2>Casual-elegant resort attire</h2>
              <p>
                Shirts or appropriate cover-ups and footwear are required.
                Bathing suits without a cover-up and shirtless entry are not
                permitted inside the restaurant.
              </p>
            </div>
            <div className="trattoria-page__visit-copy">
              <h2 id="trattoria-visit-title">Joining us for dinner?</h2>
              <p>
                Guest Services can help confirm current availability, seasonal
                service information, and answer questions about the menu during
                your stay.
              </p>
              <a className="button-link" href="/dining">
                Explore all dining
              </a>
            </div>
          </div>
        </section>

        <nav
          className="content-wrap trattoria-page__next"
          aria-label="Restaurant navigation"
        >
          <a href="/dining/baja-azul">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Previous restaurant concept</small>
              Baja Azul
            </span>
          </a>
          <a className="trattoria-page__next-venue" href="/dining/veranda">
            <span>
              <small>Next restaurant concept</small>
              Veranda
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
