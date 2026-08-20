import { useEffect, useState } from "react";
import "./hero.css";

const muxPlayerUrl =
  "https://player.mux.com/kAtsb5201cBP5MWAOZ00epa02i00JEzUnnJQv9ZzzTstDPs?autoplay=muted&muted=1&loop=1&controls=false&playsinline=1";

function getReducedMotionPreference() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getReducedMotionPreference,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updatePreference = () =>
      setPrefersReducedMotion(motionPreference.matches);

    motionPreference.addEventListener("change", updatePreference);
    return () =>
      motionPreference.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {!prefersReducedMotion && (
        <div className="hero__media" aria-hidden="true">
          <iframe
            src={muxPlayerUrl}
            title="Aerial views of Hotel Villas Playa Sámara"
            allow="autoplay"
            referrerPolicy="no-referrer"
            tabIndex={-1}
          />
        </div>
      )}

      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content">
        <h1 id="hero-title">
          <span className="hero__script-accent">Make</span> Yourself at Home by
          Playa <span className="hero__script-accent">Sámara</span>.
        </h1>
        <p className="hero__description">
          A welcoming all-inclusive resort with comfortable rooms and villas,
          relaxed days beside Sámara Bay, and experiences for families,
          couples, and groups.
        </p>

        <a className="hero__scroll-cue" href="#after-hero">
          <span>Discover</span>
          <span className="material-symbols-outlined" aria-hidden="true">
            south
          </span>
        </a>
      </div>

      <span id="after-hero" className="hero__anchor" aria-hidden="true" />

      <ul className="hero__highlights" aria-label="Resort highlights">
        <li>
          <span className="material-symbols-outlined" aria-hidden="true">
            beach_access
          </span>
          Beachfront setting
        </li>
        <li>
          <span className="material-symbols-outlined" aria-hidden="true">
            room_service
          </span>
          All-inclusive stay
        </li>
        <li>
          <span className="material-symbols-outlined" aria-hidden="true">
            villa
          </span>
          Rooms, suites &amp; villas
        </li>
        <li>
          <span className="material-symbols-outlined" aria-hidden="true">
            family_restroom
          </span>
          Family-friendly resort
        </li>
      </ul>
    </section>
  );
}
