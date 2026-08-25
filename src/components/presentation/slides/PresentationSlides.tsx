import { useEffect, useRef } from "react";
import resortAerial from "../../../../assets/images/optimized/homepage/resort/samara-bay-aerial-1600.webp";
import gardenKing from "../../../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-king-1440.webp";
import juniorBeachfront from "../../../../assets/images/optimized/homepage/accommodations/junior-suite-beachfront-1440.webp";
import luxuryVilla from "../../../../assets/images/optimized/homepage/accommodations/three-bedroom-beachfront-luxury-villa-1440.webp";
import diningImage from "../../../../assets/images/optimized/dining-overview/dining-hero-1920.webp";
import gymExterior from "../../../../assets/images/gym-photos/Exterior/Gym-Exterior-Section-3.jpg";
import gymEquipment from "../../../../assets/images/gym-photos/Equipment/Gym-Equipment-Section-1.jpg";
import gymLobby from "../../../../assets/images/gym-photos/Lobby/Gym-Lobby-Section-3.jpg";
import gymYoga from "../../../../assets/images/gym-photos/Yoga/Gym-Yoga-Section-2.jpg";
import courtsVideo from "../../../../assets/images/paddle&pickleball-court-video/Hotel Villas Playa Samara - Drone Video (2025) (Version 2) - NO LOGO 1080p.mp4";
import courtsStill from "../../../../assets/images/experiences/activities/padel-and-pickleball.jpg";
import vpsLogo from "../../../../assets/svgs/logo/vps-logo-c4d658-fff-frame.svg";
import arrecifeLogo from "../../../../assets/svgs/dining/arrecife/arrecife-logo-black-frame.svg";
import bajaAzulLogo from "../../../../assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-black-frame.svg";
import trattoriaLogo from "../../../../assets/svgs/dining/trattoria/Trattoria-logo-black.svg";
import verandaLogo from "../../../../assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-black-frame.svg";

const muxPlayerUrl =
  "https://player.mux.com/kAtsb5201cBP5MWAOZ00epa02i00JEzUnnJQv9ZzzTstDPs?autoplay=muted&muted=1&loop=1&controls=false&playsinline=1";

export type PresentationSlideProps = {
  isActive: boolean;
};

export function Slide01({ isActive }: PresentationSlideProps) {
  return (
    <div className="keyframe keyframe--opening">
      <img className="keyframe__background" src={resortAerial} alt="" />
      {isActive && (
        <iframe
          className="keyframe__background keyframe__background--video"
          src={muxPlayerUrl}
          title="Aerial views of Villas Playa Sámara"
          allow="autoplay"
          referrerPolicy="no-referrer"
          tabIndex={-1}
        />
      )}
      <div className="keyframe__shade keyframe__shade--opening" />

      <div className="opening__masthead slide-reveal slide-reveal--logo">
        <img src={vpsLogo} alt="Villas Playa Sámara" />
      </div>

      <div className="opening__copy">
        <h1 className="slide-reveal slide-reveal--title">
          <span>Make</span> Yourself at Home by Playa <span>Sámara</span>.
        </h1>
        <p className="slide-reveal slide-reveal--copy">
          A welcoming all-inclusive resort with comfortable rooms and villas,
          relaxed days beside Sámara Bay, and experiences for families,
          couples, and groups.
        </p>
      </div>

      <ul className="opening__highlights slide-reveal slide-reveal--rail">
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
    </div>
  );
}

export function Slide03() {
  return (
    <div className="keyframe keyframe--accommodations">
      <div className="accommodations__copy">
        <p className="slide-label slide-reveal slide-reveal--label">
          Rooms, suites &amp; villas
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          Find the space that fits your stay.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          Choose a comfortable room for two, a family-friendly suite, or a
          multi-bedroom villa with shared living space and kitchen facilities.
        </p>
        <div className="accommodations__facts slide-reveal slide-reveal--facts">
          <strong>8 accommodation categories</strong>
          <span>Garden and beachfront settings</span>
          <span>Rooms, suites, and villas</span>
        </div>
      </div>

      <div className="accommodations__index slide-reveal slide-reveal--index">
        <span>01</span>
        <span>04</span>
        <span>08</span>
      </div>

      <div className="accommodations__collage" aria-hidden="true">
        <figure className="accommodations__image accommodations__image--one slide-media-reveal">
          <img src={gardenKing} alt="" />
        </figure>
        <figure className="accommodations__image accommodations__image--two slide-media-reveal">
          <img src={juniorBeachfront} alt="" />
        </figure>
        <figure className="accommodations__image accommodations__image--three slide-media-reveal">
          <img src={luxuryVilla} alt="" />
        </figure>
      </div>
    </div>
  );
}

const diningVenues = [
  { name: "Arrecife", logo: arrecifeLogo },
  { name: "Baja Azul", logo: bajaAzulLogo },
  { name: "Trattoria", logo: trattoriaLogo },
  { name: "Veranda", logo: verandaLogo },
] as const;

export function Slide13() {
  return (
    <div className="keyframe keyframe--dining">
      <div className="dining__media slide-media-reveal" aria-hidden="true">
        <img src={diningImage} alt="" />
      </div>
      <div className="dining__shade" aria-hidden="true" />

      <div className="dining__copy">
        <p className="slide-label slide-reveal slide-reveal--label">
          Dining at Villas Playa Sámara
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          Good food, with more ways to enjoy it.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          Four resort venues bring international and Costa Rican variety,
          daytime snacks, Italian- and Mexican-inspired dinners, cocktails,
          and casual evenings into one easy resort rhythm.
        </p>
      </div>

      <div className="dining__logos slide-reveal slide-reveal--logos">
        {diningVenues.map((venue) => (
          <div key={venue.name}>
            <img src={venue.logo} alt={venue.name} />
          </div>
        ))}
      </div>

      <p className="dining__status slide-reveal slide-reveal--status">
        Concept names and logos shown for owner review; subject to change.
      </p>
    </div>
  );
}

export function Slide21() {
  return (
    <div className="keyframe keyframe--gym">
      <div className="gym__gallery" aria-hidden="true">
        <figure className="gym__hero slide-media-reveal">
          <img src={gymExterior} alt="" />
        </figure>
        <figure className="gym__support slide-media-reveal">
          <img src={gymEquipment} alt="" />
        </figure>
        <figure className="gym__support slide-media-reveal">
          <img src={gymLobby} alt="" />
        </figure>
        <figure className="gym__support slide-media-reveal">
          <img src={gymYoga} alt="" />
        </figure>
      </div>

      <div className="gym__copy">
        <p className="slide-label slide-reveal slide-reveal--label">
          Available now
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          Space to keep moving.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          A newly completed, air-conditioned GYM gives guests a comfortable
          place for independent workouts and everyday movement during their
          stay.
        </p>
        <dl className="gym__details slide-reveal slide-reveal--facts">
          <div>
            <dt>Setting</dt>
            <dd>Bright, contemporary interiors</dd>
          </div>
          <div>
            <dt>Movement</dt>
            <dd>Cardio, strength &amp; functional training</dd>
          </div>
          <div>
            <dt>Atmosphere</dt>
            <dd>Natural light and garden views</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function Slide22({ isActive }: PresentationSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isActive) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }

    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, [isActive]);

  return (
    <div className="keyframe keyframe--courts">
      <video
        ref={videoRef}
        className="keyframe__background"
        src={courtsVideo}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="keyframe__shade keyframe__shade--courts" />

      <div className="courts__copy">
        <p className="slide-label slide-reveal slide-reveal--label">
          Resort life
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          Padel <span>&amp;</span> Pickleball.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          Easy, social court time adds movement and variety to a day beside the
          Pacific.
        </p>
      </div>

      <figure className="courts__still slide-media-reveal">
        <img src={courtsStill} alt="Padel and pickleball courts at the resort" />
        <figcaption>Two ways to play, one social setting.</figcaption>
      </figure>
    </div>
  );
}

export function Slide28() {
  return (
    <div className="keyframe keyframe--closing">
      <img className="keyframe__background" src={resortAerial} alt="" />
      <div className="keyframe__shade keyframe__shade--closing" />
      <div className="closing__content">
        <img
          className="closing__logo slide-reveal slide-reveal--logo"
          src={vpsLogo}
          alt="Villas Playa Sámara"
        />
        <div className="closing__rule slide-reveal slide-reveal--rule" />
        <h2 className="slide-reveal slide-reveal--title">
          Make yourself at home in <span>Sámara</span>.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          Thank you for discovering Villas Playa Sámara.
        </p>
      </div>
    </div>
  );
}
