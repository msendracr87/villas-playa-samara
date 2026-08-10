import heroImageSmall from "../../../assets/images/optimized/dining-overview/dining-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/dining-overview/dining-hero-1920.webp";
import cevicheImageSmall from "../../../assets/images/optimized/dining-overview/dining-intro-ceviche-640.webp";
import cevicheImageLarge from "../../../assets/images/optimized/dining-overview/dining-intro-ceviche-1280.webp";
import cocktailsImageSmall from "../../../assets/images/optimized/dining-overview/dining-intro-cocktails-640.webp";
import cocktailsImageLarge from "../../../assets/images/optimized/dining-overview/dining-intro-cocktails-1280.webp";
import friedFishImageSmall from "../../../assets/images/optimized/dining-overview/dining-intro-fried-fish-640.webp";
import friedFishImageLarge from "../../../assets/images/optimized/dining-overview/dining-intro-fried-fish-1280.webp";
import nikoaDayImageSmall from "../../../assets/images/optimized/dining-overview/nikoa-beach-club-day-960.webp";
import nikoaDayImageLarge from "../../../assets/images/optimized/dining-overview/nikoa-beach-club-day-1600.webp";
import nikoaLogoUrl from "../../../assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-white.svg";
import arrecifeImageSmall from "../../../assets/images/optimized/homepage/dining/arrecife-restaurant-720.webp";
import arrecifeImageLarge from "../../../assets/images/optimized/homepage/dining/arrecife-restaurant-1440.webp";
import mexicanImageSmall from "../../../assets/images/optimized/homepage/dining/mexican-restaurant-720.webp";
import mexicanImageLarge from "../../../assets/images/optimized/homepage/dining/mexican-restaurant-1440.webp";
import italianImageSmall from "../../../assets/images/optimized/homepage/dining/italian-restaurant-720.webp";
import italianImageLarge from "../../../assets/images/optimized/homepage/dining/italian-restaurant-1440.webp";
import sportBarImageSmall from "../../../assets/images/optimized/homepage/dining/sport-bar-720.webp";
import sportBarImageLarge from "../../../assets/images/optimized/homepage/dining/sport-bar-1440.webp";
import arrecifeLogoUrl from "../../../assets/svgs/dining/arrecife/arrecife-logo-black-frame.svg";
import bajaAzulLogoUrl from "../../../assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-black-frame.svg";
import trattoriaLogoUrl from "../../../assets/svgs/dining/trattoria/Trattoria-logo-black.svg";
import verandaLogoUrl from "../../../assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-black-frame.svg";
import { useDiningMotion } from "../../hooks/useDiningMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./dining-overview.css";
import "./dining-motion.css";

const venues = [
  {
    name: "Arrecife",
    summary:
      "The resort’s main dining venue, offering seasonal buffet and à la carte service with international variety and Costa Rican character.",
    service: "Breakfast, lunch, and dinner",
    icon: "restaurant",
    logo: arrecifeLogoUrl,
    status: "Concept name and logo — subject to change",
    href: "/dining/arrecife",
    image: { small: arrecifeImageSmall, large: arrecifeImageLarge },
  },
  {
    name: "Baja Azul",
    summary:
      "A casual venue offering daytime snacks and a Mexican and Tex-Mex-inspired à la carte experience in the evening.",
    service: "Lunch, snacks, and dinner",
    icon: "lunch_dining",
    logo: bajaAzulLogoUrl,
    status: "Concept name and logo — subject to change",
    href: "/dining/baja-azul",
    image: { small: mexicanImageSmall, large: mexicanImageLarge },
  },
  {
    name: "Trattoria",
    summary:
      "A relaxed à la carte dinner experience featuring classic Italian favorites, including pizza, pasta, traditional desserts, and a selection of drinks.",
    service: "Dinner",
    icon: "local_pizza",
    logo: trattoriaLogoUrl,
    status: "Concept name and logo — subject to change",
    href: "/dining/trattoria",
    image: { small: italianImageSmall, large: italianImageLarge },
  },
  {
    name: "Veranda",
    summary:
      "A relaxed place for cocktails, cold drinks, sports, salty treats, and casual snacks from afternoon into the evening.",
    service: "Drinks and snacks",
    icon: "sports_bar",
    logo: verandaLogoUrl,
    status: "Concept name and logo — subject to change",
    href: "/dining/veranda",
    image: { small: sportBarImageSmall, large: sportBarImageLarge },
  },
] as const;

export function DiningOverview() {
  useDiningMotion();
  usePageMetadata(
    "Restaurants & Dining | Villas Playa Sámara",
    "Explore restaurants and bars at Villas Playa Sámara, from international and Costa Rican dining to Italian favorites, Mexican-inspired dishes, cocktails, and casual snacks.",
  );

  return (
    <div className="site-shell dining-page">
      <Header />
      <main id="main-content">
        <section
          className="dining-page__hero"
          aria-labelledby="dining-page-title"
          data-dining-motion="hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1920w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="content-wrap dining-page__hero-content">
            <p>Restaurants &amp; bars</p>
            <h1 id="dining-page-title">
              <span className="dining-page__script-accent">Dining</span> at
              Villas Playa Sámara
            </h1>
            <span>
              Fresh flavors, relaxed moments, and something for every appetite
            </span>
            <a href="#dining-venues" className="dining-page__hero-link">
              Explore our restaurants &amp; bars
              <span className="material-symbols-outlined" aria-hidden="true">
                south
              </span>
            </a>
          </div>
        </section>

        <section
          className="dining-page__intro"
          aria-labelledby="dining-intro-title"
        >
          <div
            className="content-wrap dining-page__intro-copy"
            data-dining-motion="intro"
          >
            <p className="section-kicker">Taste your stay</p>
            <h2 className="section-title" id="dining-intro-title">
              Gather around the table
            </h2>
            <div className="dining-page__intro-text">
              <p>
                Every day brings a new opportunity to enjoy good food and
                easygoing resort hospitality.
              </p>
              <p>
                Begin with breakfast at Arrecife, stop for a casual bite
                between the beach and pool, or settle in for an evening of
                familiar Italian favorites, Mexican-inspired flavors,
                cocktails, and conversation.
              </p>
              <p>
                Our restaurants and bars offer a range of settings and menus
                for couples, families, and friends—from relaxed all-day dining
                to lively social evenings.
              </p>
            </div>
          </div>

          <div
            className="content-wrap dining-page__collage"
            data-dining-motion="collage"
            aria-hidden="true"
          >
            <figure className="dining-page__collage-item dining-page__collage-item--ceviche">
              <img
                src={cevicheImageLarge}
                srcSet={`${cevicheImageSmall} 640w, ${cevicheImageLarge} 1280w`}
                sizes="(max-width: 760px) 92vw, 42vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="dining-page__collage-item dining-page__collage-item--cocktails">
              <img
                src={cocktailsImageLarge}
                srcSet={`${cocktailsImageSmall} 640w, ${cocktailsImageLarge} 1280w`}
                sizes="(max-width: 760px) 45vw, 26vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="dining-page__collage-item dining-page__collage-item--fish">
              <img
                src={friedFishImageLarge}
                srcSet={`${friedFishImageSmall} 640w, ${friedFishImageLarge} 1280w`}
                sizes="(max-width: 760px) 45vw, 26vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <p className="content-wrap dining-page__seasonal-note">
            Restaurant schedules, menus, and service formats may vary according
            to seasonality and availability. Contact Guest Services for the
            current dining program during your stay.
          </p>
        </section>

        <section
          className="dining-page__venues"
          id="dining-venues"
          aria-labelledby="dining-venues-title"
        >
          <div
            className="content-wrap dining-page__venues-heading"
            data-dining-motion="venues-heading"
          >
            <div>
              <p className="section-kicker">Find your table</p>
              <h2 className="section-title" id="dining-venues-title">
                Explore our dining experiences
              </h2>
            </div>
            <p>
              Choose from international variety, Costa Rican character,
              casual daytime selections, themed dinners, and relaxed drinks
              and snacks. The restaurant names and logos shown below are
              concepts for review and may change before launch.
            </p>
          </div>

          <div className="content-wrap dining-page__venue-list">
            {venues.map((venue) => (
              <article
                className="dining-page__venue"
                data-dining-motion="venue"
                key={venue.name}
              >
                <div className="dining-page__venue-media">
                  <img
                    src={venue.image.large}
                    srcSet={`${venue.image.small} 720w, ${venue.image.large} 1440w`}
                    sizes="(max-width: 760px) 100vw, 50vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="dining-page__venue-body">
                  <div className="dining-page__venue-service">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {venue.icon}
                    </span>
                    <span>{venue.service}</span>
                  </div>
                  <h3 className="dining-page__venue-logo">
                    <img src={venue.logo} alt={venue.name} />
                  </h3>
                  <p className="dining-page__venue-status">{venue.status}</p>
                  <p className="dining-page__venue-summary">{venue.summary}</p>
                  <a className="dining-page__venue-action" href={venue.href}>
                    Explore venue
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="dining-page__nikoa"
          aria-labelledby="nikoa-title"
          data-dining-motion="nikoa"
        >
          <div className="dining-page__nikoa-layout">
            <div className="dining-page__nikoa-feature-media">
              <img
                src={nikoaDayImageLarge}
                srcSet={`${nikoaDayImageSmall} 960w, ${nikoaDayImageLarge} 1600w`}
                sizes="(max-width: 900px) 100vw, 58vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="dining-page__nikoa-copy">
              <p>Beyond the all-inclusive plan</p>
              <h2 id="nikoa-title">
                <img src={nikoaLogoUrl} alt="Nikoa Beach Club" />
              </h2>
              <p>
                Nikoa Beach Club is a separate beachfront dining experience
                between Villas Playa Sámara and Azura Beach Resort, offering
                lunch, dinner, drinks, and Pacific views.
              </p>
              <p>
                Nikoa is not one of the four Villas Playa Sámara resort venues
                and is not included in the all-inclusive plan. Menu items and
                additional services are charged separately.
              </p>
              <dl>
                <div>
                  <dt>Service</dt>
                  <dd>Lunch and dinner</dd>
                </div>
                <div>
                  <dt>Plan</dt>
                  <dd>Additional charge</dd>
                </div>
              </dl>
              <a
                className="dining-page__nikoa-link"
                href="https://www.nikoabeachclub.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Nikoa Beach Club
                <span className="material-symbols-outlined" aria-hidden="true">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="dining-page__assistance"
          aria-labelledby="dining-assistance-title"
          id="dining-assistance"
        >
          <div
            className="content-wrap dining-page__assistance-copy"
            data-dining-motion="assistance-copy"
          >
            <p className="section-kicker">Here to help</p>
            <h2 id="dining-assistance-title">
              Questions about dining during your stay?
            </h2>
            <p>
              Our Guest Services team can help with current opening hours,
              seasonal service, reservation assistance, menu information, and
              questions about allergies or dietary requirements.
            </p>
            <span
              className="button-link dining-page__assistance-action"
              role="link"
              aria-disabled="true"
              title="Guest Services contact destination is pending"
            >
              Contact Guest Services
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
