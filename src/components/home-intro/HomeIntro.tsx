import resortAerialSmall from "../../../assets/images/optimized/homepage/resort/samara-bay-aerial-800.webp";
import resortAerialLarge from "../../../assets/images/optimized/homepage/resort/samara-bay-aerial-1600.webp";
import resortLogo from "../../../assets/svgs/logo/vps-logo-c4d658-58595b-frame.svg";
import "./home-intro.css";

export function HomeIntro() {
  return (
    <section className="home-intro" id="resort" aria-labelledby="intro-title">
      <div className="content-wrap home-intro__layout">
        <div className="home-intro__heading" data-home-motion="copy">
          <div className="home-intro__fact" aria-label="Resort at a glance">
            <strong>115</strong>
            <span>rooms and villas beside Sámara Bay</span>
          </div>
          <h2 className="section-title" id="intro-title">
            A relaxed stay, with room for everyone
          </h2>
        </div>

        <div
          className="home-intro__copy"
          data-home-motion="copy"
          data-home-motion-delay="1"
        >
          <p className="section-copy">
            At Villas Playa Sámara, days move at an easy pace. Stay close to the
            Pacific, enjoy meals without complicated planning, and choose from
            comfortable rooms, suites, and spacious villas designed for
            different ways of traveling.
          </p>
          <p className="section-copy">
            Whether you are visiting as a couple, family, or group, the resort
            offers a welcoming place to enjoy Sámara.
          </p>
          <a className="text-link" href="/rooms-and-villas">
            Explore rooms &amp; villas
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>

        <figure className="home-intro__aerial" data-home-motion="media">
          <img
            className="home-intro__aerial-image"
            src={resortAerialLarge}
            srcSet={`${resortAerialSmall} 800w, ${resortAerialLarge} 1600w`}
            sizes="(max-width: 760px) 100vw, 90vw"
            alt="Aerial view of Villas Playa Sámara, Sámara Bay, and Isla Chora"
            loading="lazy"
            decoding="async"
          />
          <img
            className="home-intro__aerial-logo"
            src={resortLogo}
            alt=""
            aria-hidden="true"
          />
        </figure>
      </div>
    </section>
  );
}
