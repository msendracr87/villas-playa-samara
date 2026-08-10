import heroImageSmall from "../../../assets/images/optimized/veranda/veranda-hero-960.webp";
import heroImageLarge from "../../../assets/images/optimized/veranda/veranda-hero-1600.webp";
import closeupImageSmall from "../../../assets/images/optimized/veranda/veranda-closeup-960.webp";
import closeupImageLarge from "../../../assets/images/optimized/veranda/veranda-closeup-1600.webp";
import verandaLogoUrl from "../../../assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-white-frame.svg";
import { useDiningMotion } from "../../hooks/useDiningMotion";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./veranda-detail.css";

const socialPlaybook = [
  {
    icon: "groups",
    title: "Meet",
    text: "An easygoing place to reconnect after a day around the resort.",
  },
  {
    icon: "live_tv",
    title: "Watch",
    text: "Settle in for available sports programming in a social atmosphere.",
  },
  {
    icon: "tapas",
    title: "Share",
    text: "Order familiar snacks and salty treats made for the table.",
  },
  {
    icon: "sports_bar",
    title: "Unwind",
    text: "Choose a cold drink, cocktail, or alcohol-free refreshment.",
  },
] as const;

export function VerandaDetail() {
  useDiningMotion();
  usePageMetadata(
    "Veranda Sport Bar | Villas Playa Sámara",
    "Discover the Veranda concept at Villas Playa Sámara, a relaxed sport bar for cocktails, cold drinks, shareable snacks, sports, and easygoing evenings.",
  );

  return (
    <div className="site-shell veranda-page">
      <Header />
      <main id="main-content">
        <section
          className="veranda-page__hero"
          aria-labelledby="veranda-title"
          data-dining-motion="veranda-hero"
        >
          <img
            src={heroImageLarge}
            srcSet={`${heroImageSmall} 960w, ${heroImageLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="veranda-page__hero-shade" aria-hidden="true" />
          <div className="content-wrap veranda-page__hero-layout">
            <div className="veranda-page__identity">
              <p>Concept name and logo · subject to change</p>
              <h1 id="veranda-title">
                <img src={verandaLogoUrl} alt="Veranda Sport Bar" />
              </h1>
              <span>Drinks, games, and easygoing evenings</span>
            </div>
            <div className="veranda-page__hero-actions">
              <a className="veranda-page__hero-link" href="#veranda-story">
                Discover Veranda
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a className="veranda-page__back-link" href="/dining">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All dining
              </a>
            </div>
          </div>
        </section>

        <section
          className="content-wrap veranda-page__intro"
          id="veranda-story"
          aria-labelledby="veranda-intro-title"
          data-dining-motion="veranda-reveal"
        >
          <header>
            <h2 id="veranda-intro-title">A casual place to meet, watch, and unwind</h2>
          </header>
          <div>
            <p>
              Veranda brings together drinks, sports, and a lively but
              comfortable atmosphere at Villas Playa Sámara.
            </p>
            <p>
              Whether stopping by for an afternoon drink or spending the evening
              with family and friends, the experience is informal, social, and
              easy to enjoy.
            </p>
          </div>
        </section>

        <section
          className="veranda-page__playbook"
          aria-labelledby="veranda-playbook-title"
          data-dining-motion="veranda-playbook"
        >
          <div className="content-wrap veranda-page__playbook-heading">
            <h2 id="veranda-playbook-title">Come for the game. Stay for the company.</h2>
            <p>
              Four simple ways to make Veranda part of an easygoing resort day.
            </p>
          </div>
          <div className="content-wrap veranda-page__playbook-band">
            {socialPlaybook.map((item) => (
              <article key={item.title}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="content-wrap veranda-page__program-note">
            Sports programming and evening entertainment may vary. Guest
            Services can confirm current information during your stay.
          </p>
        </section>

        <section
          className="veranda-page__atmosphere"
          aria-labelledby="veranda-atmosphere-title"
          data-dining-motion="veranda-split"
        >
          <figure>
            <img
              src={closeupImageLarge}
              srcSet={`${closeupImageSmall} 960w, ${closeupImageLarge} 1600w`}
              sizes="(max-width: 900px) 100vw, 58vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="veranda-page__atmosphere-copy">
            <h2 id="veranda-atmosphere-title">Relaxed enough to drop in. Social enough to stay.</h2>
            <p>
              Cocktails, beers, wines, non-alcoholic refreshments, and casual
              snacks come together in a comfortable setting made for shared
              tables and unhurried conversation.
            </p>
            <dl>
              <div>
                <dt>Service</dt>
                <dd>Drinks and snacks</dd>
              </div>
              <div>
                <dt>Atmosphere</dt>
                <dd>Informal and social</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className="veranda-page__menus"
          aria-labelledby="veranda-menus-title"
          data-dining-motion="veranda-menus"
        >
          <header className="content-wrap">
            <h2 id="veranda-menus-title">What will you bring to the table?</h2>
            <p>
              Explore Veranda’s current mockup selections. Menu items,
              ingredients, brands, and availability remain subject to change.
            </p>
          </header>
          <div className="veranda-page__menu-split">
            <article className="veranda-page__drinks-menu">
              <span className="material-symbols-outlined" aria-hidden="true">
                local_bar
              </span>
              <h3>Cold drinks &amp; cocktails</h3>
              <p>
                Beers, wines, spirits, classic cocktails, tropical combinations,
                mocktails, refreshments, and coffee.
              </p>
              <a href="/dining/veranda/menus/drinks">
                View drinks menu
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </article>
            <article className="veranda-page__snacks-menu">
              <span className="material-symbols-outlined" aria-hidden="true">
                lunch_dining
              </span>
              <h3>Snacks &amp; salty treats</h3>
              <p>
                Crispy favorites, nachos, shareables, burgers, sandwiches,
                lighter choices, and familiar game-day snacks.
              </p>
              <a href="/dining/veranda/menus/snacks">
                View snacks menu
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </article>
          </div>
        </section>

        <section
          className="veranda-page__visit"
          aria-labelledby="veranda-visit-title"
          data-dining-motion="veranda-reveal"
        >
          <div className="content-wrap veranda-page__visit-layout">
            <div className="veranda-page__dress-code">
              <span className="material-symbols-outlined" aria-hidden="true">
                apparel
              </span>
              <h2>Casual-elegant resort attire</h2>
              <p>
                Shirts or appropriate cover-ups and footwear are required.
                Bathing suits without a cover-up and shirtless entry are not
                permitted inside the bar.
              </p>
            </div>
            <div className="veranda-page__visit-copy">
              <h2 id="veranda-visit-title">Joining us at Veranda?</h2>
              <p>
                Guest Services can help with current seating availability, menu
                information, and details about available sports broadcasts or
                evening entertainment.
              </p>
              <a className="button-link" href="/dining">
                Explore all dining
              </a>
            </div>
          </div>
        </section>

        <nav
          className="content-wrap veranda-page__next"
          aria-label="Restaurant navigation"
        >
          <a href="/dining/trattoria">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            <span>
              <small>Previous restaurant concept</small>
              Trattoria
            </span>
          </a>
          <a className="veranda-page__all-venues" href="/dining">
            <span>
              <small>Continue exploring</small>
              All restaurants &amp; bars
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
