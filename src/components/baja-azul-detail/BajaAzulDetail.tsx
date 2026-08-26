import heroImageSmall from "../../../assets/images/optimized/baja-azul/baja-azul-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/baja-azul/baja-azul-hero-1600.webp";
import outsideImageSmall from "../../../assets/images/optimized/baja-azul/baja-azul-outside-960.webp";
import outsideImageLarge from "../../../assets/images/optimized/baja-azul/baja-azul-outside-1600.webp";
import sideImageSmall from "../../../assets/images/optimized/baja-azul/baja-azul-side-960.webp";
import sideImageLarge from "../../../assets/images/optimized/baja-azul/baja-azul-side-1600.webp";
import fishTacosSmall from "../../../assets/images/optimized/baja-azul/baja-azul-fish-tacos-720.webp";
import fishTacosLarge from "../../../assets/images/optimized/baja-azul/baja-azul-fish-tacos-1440.webp";
import tacosTableSmall from "../../../assets/images/optimized/baja-azul/baja-azul-tacos-table-640.webp";
import tacosTableLarge from "../../../assets/images/optimized/baja-azul/baja-azul-tacos-table-960.webp";
import bajaAzulLogoUrl from "../../../assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-white-frame.svg";
import { useDiningMotion } from "../../hooks/useDiningMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../dining-detail/dining-detail.css";
import "./baja-azul-detail.css";

const serviceMoments = [
  { icon: "lunch_dining", label: "Lunch" },
  { icon: "tapas", label: "Snacks" },
  { icon: "dinner_dining", label: "Dinner" },
] as const;

const menus = [
  {
    name: "Snacks",
    description: "Easygoing daytime bites and light meals for a relaxed afternoon.",
    href: "/dining/baja-azul/menus/snacks",
  },
  {
    name: "À la carte dinner",
    description: "Mexican and Tex-Mex-inspired dishes served in the evening.",
    href: "/dining/baja-azul/menus/a-la-carte",
  },
  {
    name: "Drinks",
    description: "Cocktails, beers, wines, refreshments, coffee, and more.",
    href: "/dining/baja-azul/menus/drinks",
  },
] as const;

export function BajaAzulDetail() {
  useDiningMotion();
  usePageMetadata(
    "Baja Azul | Villas Playa Sámara",
    "Discover the Baja Azul concept at Villas Playa Sámara, with casual daytime snacks and Mexican and Tex-Mex-inspired evening dining.",
  );

  return (
    <div className="site-shell dining-detail-page baja-page">
      <Header />
      <main id="main-content">
        <section
          className="dining-detail-page__hero baja-page__hero"
          aria-labelledby="baja-title"
          data-dining-motion="baja-hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="dining-detail-page__hero-shade baja-page__hero-shade" aria-hidden="true" />
          <div className="content-wrap dining-detail-page__hero-layout baja-page__hero-layout">
            <div className="dining-detail-page__identity baja-page__identity">
              <p>Concept name and logo · subject to change</p>
              <h1 id="baja-title">
                <img src={bajaAzulLogoUrl} alt="Baja Azul" />
              </h1>
              <span>Casual daytime bites and Mexican-inspired evenings</span>
            </div>
            <div className="dining-detail-page__hero-actions baja-page__hero-actions">
              <a className="text-link text-link--light text-link--down dining-detail-page__hero-link baja-page__hero-link" href="#baja-story">
                Discover Baja Azul
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="text-link text-link--light text-link--back dining-detail-page__back-link baja-page__back-link" href="/dining">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All dining
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap baja-page__intro"
          id="baja-story"
          aria-labelledby="baja-intro-title"
          data-dining-motion="baja-reveal"
        >
          <header>
            <p>Day to night</p>
            <h2 className="section-title" id="baja-intro-title">From relaxed snacks to flavorful evenings</h2>
          </header>
          <div className="baja-page__intro-copy">
            <p>
              Baja Azul moves with the easy rhythm of a resort day. Stop by for
              casual snacks and light meals, then return in the evening for a
              Mexican and Tex-Mex-inspired à la carte experience.
            </p>
            <p>
              The atmosphere stays relaxed and welcoming throughout, making it
              an approachable choice for couples, families, and friends.
            </p>
          </div>
          <ul className="baja-page__service-moments" aria-label="Baja Azul service occasions">
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
          className="baja-page__rhythm"
          aria-labelledby="baja-rhythm-title"
          data-dining-motion="baja-split"
        >
          <div className="baja-page__rhythm-media">
            <img
              src={outsideImageLarge}
              srcSet={`${outsideImageSmall} 960w, ${outsideImageLarge} 1600w`}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="baja-page__rhythm-copy">
            <p className="baja-page__kicker">Two easygoing rhythms</p>
            <h2 className="section-title" id="baja-rhythm-title">A casual spot that changes with the day</h2>
            <div className="baja-page__rhythm-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Daytime snacks</h3>
                  <p>
                    Keep the afternoon uncomplicated with casual snacks, light
                    meals, and refreshments in a relaxed setting.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Mexican-inspired evenings</h3>
                  <p>
                    As evening arrives, the experience shifts toward an à la
                    carte selection influenced by Mexican and Tex-Mex flavors.
                  </p>
                </div>
              </article>
            </div>
            <p className="baja-page__availability-note">
              Service formats, selections, and availability may change with the
              season. Guest Services can confirm the current dining program.
            </p>
          </div>
        </section>

        <section
          className="baja-page__menus"
          aria-labelledby="baja-menus-title"
          data-dining-motion="baja-menu"
        >
          <div className="content-wrap baja-page__menus-layout">
            <div className="baja-page__menus-copy">
              <p className="baja-page__kicker">Concept menus</p>
              <h2 className="section-title section-title--light" id="baja-menus-title">Find something for the moment</h2>
              <p>
                Explore the current mockup menus for daytime snacks, evening
                dining, and drinks. Selections remain subject to change.
              </p>
              <nav aria-label="Baja Azul menus">
                {menus.map((menu, index) => (
                  <a href={menu.href} key={menu.href}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>{menu.name}</strong>
                      <small>{menu.description}</small>
                    </span>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="baja-page__menus-media" aria-hidden="true">
              <figure className="baja-page__menus-landscape">
                <img
                  src={fishTacosLarge}
                  srcSet={`${fishTacosSmall} 720w, ${fishTacosLarge} 1440w`}
                  sizes="(max-width: 900px) 86vw, 36vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="baja-page__menus-portrait">
                <img
                  src={tacosTableLarge}
                  srcSet={`${tacosTableSmall} 640w, ${tacosTableLarge} 960w`}
                  sizes="(max-width: 900px) 44vw, 20vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          className="content-wrap baja-page__atmosphere"
          aria-labelledby="baja-atmosphere-title"
          data-dining-motion="baja-gallery"
        >
          <div className="baja-page__atmosphere-copy">
            <p className="baja-page__kicker">At the table</p>
            <h2 className="section-title" id="baja-atmosphere-title">Lively, comfortable, and easy to enjoy</h2>
            <p>
              Baja Azul is designed for a laid-back resort meal: a comfortable
              place to gather with family and friends and enjoy familiar flavors
              in a casual atmosphere.
            </p>
          </div>
          <figure>
            <img
              src={sideImageLarge}
              srcSet={`${sideImageSmall} 960w, ${sideImageLarge} 1600w`}
              sizes="(max-width: 900px) 100vw, 60vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section
          className="baja-page__visit"
          aria-labelledby="baja-visit-title"
          data-dining-motion="baja-reveal"
        >
          <div className="content-wrap baja-page__visit-layout">
            <div className="baja-page__dress-code">
              <span className="material-symbols-outlined" aria-hidden="true">apparel</span>
              <h2 className="subsection-title section-title--light">Casual resort attire</h2>
              <p>
                Comfortable resort wear is welcome. Appropriate cover-ups,
                shirts, and footwear are required inside the restaurant.
              </p>
            </div>
            <div className="baja-page__visit-copy">
              <p className="baja-page__kicker">Plan your evening</p>
              <h2 className="section-title" id="baja-visit-title">Joining us at Baja Azul?</h2>
              <p>
                Guest Services can help confirm the current service format,
                seasonal availability, and dining information during your stay.
              </p>
              <a className="button-link" href="/dining">Explore all dining</a>
            </div>
          </div>
        </section>

        <nav className="content-wrap baja-page__next" aria-label="Restaurant navigation">
          <a href="/dining/arrecife">
            <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            <span><small>Previous restaurant concept</small>Arrecife</span>
          </a>
          <a className="baja-page__next-venue" href="/dining/trattoria">
            <span><small>Next restaurant concept</small>Trattoria</span>
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </a>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
