import { accommodations } from "../../../data/accommodations";
import resortAerial from "../../../../assets/images/optimized/homepage/resort/samara-bay-aerial-1600.webp";
import resortBay from "../../../../assets/images/optimized/homepage/resort/samara-bay-booking-background-1920.webp";
import arrecifeImage from "../../../../assets/images/optimized/homepage/dining/arrecife-restaurant-1440.webp";
import bajaAzulImage from "../../../../assets/images/optimized/homepage/dining/mexican-restaurant-1440.webp";
import trattoriaImage from "../../../../assets/images/optimized/homepage/dining/italian-restaurant-1440.webp";
import verandaImage from "../../../../assets/images/optimized/homepage/dining/sport-bar-1440.webp";
import nikoaImage from "../../../../assets/images/optimized/dining-overview/nikoa-beach-club-day-1600.webp";
import nikoaNightImage from "../../../../assets/images/dining/nikoa-beach-club/Nikoa-night-firepit-1edited.jpg";
import nikoaLogo from "../../../../assets/images/dining/nikoa-beach-club/logo/nikoa-beach-club-logo-white.svg";
import beachfrontTerrace from "../../../../assets/images/optimized/homepage/gallery/beachfront-villa-terrace-1200.webp";
import outdoorYoga from "../../../../assets/images/optimized/homepage/gallery/outdoor-yoga-class-1200.webp";
import poolCocktails from "../../../../assets/images/optimized/homepage/gallery/poolside-cocktails-1200.webp";
import resortKayak from "../../../../assets/images/optimized/homepage/gallery/resort-kayak-experience-1200.webp";
import currentSpa from "../../../../assets/images/optimized/wellness/spa/massage-and-bodywork-2-1600.webp";
import futureSpa from "../../../../assets/images/optimized/wellness/overview/spa-overview-render-1507.webp";
import choraKayak from "../../../../assets/images/optimized/homepage/experiences/isla-chora-kayak-1280.webp";
import atvTour from "../../../../assets/images/optimized/homepage/experiences/atv-jungle-tour-1280.webp";
import arenalTour from "../../../../assets/images/optimized/homepage/experiences/arenal-volcano-1280.webp";
import coffeeTour from "../../../../assets/images/optimized/homepage/experiences/costa-rican-coffee-1280.webp";
import monteverdeTour from "../../../../assets/images/optimized/homepage/experiences/monteverde-1280.webp";
import paloVerdeTour from "../../../../assets/images/optimized/homepage/experiences/palo-verde-1280.webp";
import surfLessons from "../../../../assets/images/optimized/homepage/experiences/surf-lessons-1280.webp";
import sunsetTour from "../../../../assets/images/optimized/homepage/experiences/pacific-sunset-tour-1280.webp";
import aquaAerobics from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-aqua-aerobics-1200.webp";
import beachVolleyball from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-beach-volleyball-1200.webp";
import bonfire from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-bonfire-1200.webp";
import canvasTime from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-canvas-time-1200.webp";
import cocktailClass from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-cocktail-classes-1200.webp";
import danceLessons from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-dance-lessons-1200.webp";
import morningStretch from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-morning-stretch-1200.webp";
import poolVolleyball from "../../../../assets/images/optimized/experiences-overview/in-house/in-house-activities-pool-volleyball-1200.webp";
import arrecifeFuture from "../../../../assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-entrance-front-view.jpeg";
import arrecifeInteriorFuture from "../../../../assets/images/renders-future-development-not-for-website-presentation-only/VPS-arrecife-restaurant-inside-view-top-restaurant.jpeg";
import diningFuture from "../../../../assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-angle-photo.jpeg";
import diningFutureFront from "../../../../assets/images/renders-future-development-not-for-website-presentation-only/VPS-mexican-restaurant-and-sportbar-outsideview-front-photo.jpeg";
import arrecifeLogo from "../../../../assets/svgs/dining/arrecife/arrecife-logo-black-frame.svg";
import bajaAzulLogo from "../../../../assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-black-frame.svg";
import trattoriaLogo from "../../../../assets/svgs/dining/trattoria/Trattoria-logo-black.svg";
import verandaLogo from "../../../../assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-black-frame.svg";
import morphoLogo from "../../../../assets/svgs/logo/morpho/morpho-spa-logo-000-frame.svg";
import monkeyToursLogo from "../../../../assets/svgs/logo/monkey-tours/monkeytours-logo-color-frame.png";
import type { PresentationSlideProps } from "./PresentationSlides";
import "./additional-slides.css";

type AccommodationProfileProps = {
  accommodationIndex: number;
  number: string;
  reverse?: boolean;
  singleImage?: boolean;
};

function AccommodationProfile({
  accommodationIndex,
  number,
  reverse = false,
  singleImage = false,
}: AccommodationProfileProps) {
  const accommodation = accommodations[accommodationIndex];
  const media = singleImage
    ? [accommodation.image.large]
    : [
        accommodation.image.large,
        ...accommodation.gallery.filter(
          (image) => image !== accommodation.image.large,
        ),
      ].slice(0, 3);

  return (
    <div
      className={`keyframe keyframe--profile${reverse ? " keyframe--profile-reverse" : ""}`}
    >
      <div
        className={`profile__media${singleImage ? " profile__media--single" : ""}`}
        aria-hidden="true"
      >
        {media.map((image, index) => (
          <figure
            className={`profile__image profile__image--${index + 1} slide-media-reveal`}
            key={image}
          >
            <img src={image} alt="" />
          </figure>
        ))}
      </div>

      <div className="profile__copy">
        <div className="profile__number slide-reveal slide-reveal--label">
          {number}
        </div>
        <p className="slide-label slide-reveal slide-reveal--label">
          {accommodation.note}
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          {accommodation.name}
        </h2>
        <p className="profile__summary slide-reveal slide-reveal--copy">
          {accommodation.homepageSummary}
        </p>
        <dl className="profile__facts slide-reveal slide-reveal--facts">
          <div>
            <dt>Bedding</dt>
            <dd>{accommodation.beds}</dd>
          </div>
          <div>
            <dt>Occupancy</dt>
            <dd>{accommodation.sleeps}</dd>
          </div>
          <div>
            <dt>Setting</dt>
            <dd>{accommodation.view}</dd>
          </div>
          <div>
            <dt>Outdoor space</dt>
            <dd>{accommodation.outdoorSpace}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function Slide02() {
  return (
    <div className="keyframe keyframe--overview">
      <img className="keyframe__background" src={resortAerial} alt="" />
      <div className="keyframe__shade overview__shade" />
      <div className="overview__copy">
        <p className="slide-label slide-reveal slide-reveal--label">
          Sámara Bay, Costa Rica
        </p>
        <h2 className="slide-reveal slide-reveal--title">
          A relaxed stay, with room for everyone.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          Stay close to the Pacific, enjoy meals without complicated planning,
          and choose from comfortable rooms, suites, and spacious villas made
          for different ways of traveling.
        </p>
      </div>
      <dl className="overview__rail slide-reveal slide-reveal--rail">
        <div>
          <dt>115</dt>
          <dd>Rooms and villas</dd>
        </div>
        <div>
          <dt>Sámara Bay</dt>
          <dd>Beachfront setting</dd>
        </div>
        <div>
          <dt>For every stay</dt>
          <dd>Couples, families, friends &amp; groups</dd>
        </div>
        <div>
          <dt>Two settings</dt>
          <dd>Garden and beachfront options</dd>
        </div>
      </dl>
    </div>
  );
}

export const Slide04 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={0} number="01" singleImage />
);
export const Slide05 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={1} number="02" reverse />
);
export const Slide06 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={2} number="03" singleImage />
);

export const Slide08 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={3} number="04" reverse />
);
export const Slide09 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={4} number="05" />
);
export const Slide10 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={5} number="06" reverse />
);
export const Slide11 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={6} number="07" />
);
export const Slide12 = (_props: PresentationSlideProps) => (
  <AccommodationProfile accommodationIndex={7} number="08" reverse />
);

type VenueProfileProps = {
  copy: string;
  cuisine: string;
  image: string;
  logo: string;
  name: string;
  service: string;
};

function VenueProfile({
  copy,
  cuisine,
  image,
  logo,
  name,
  service,
}: VenueProfileProps) {
  return (
    <div className="keyframe keyframe--venue-profile">
      <div className="venue-profile__media" aria-hidden="true">
        <figure className="venue-profile__hero slide-media-reveal">
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="venue-profile__copy">
        <img className="venue-profile__logo slide-reveal slide-reveal--logo" src={logo} alt={name} />
        <p className="venue-profile__status slide-reveal slide-reveal--label">
          Concept name and logo — subject to change
        </p>
        <p className="venue-profile__summary slide-reveal slide-reveal--copy">
          {copy}
        </p>
        <dl className="venue-profile__facts slide-reveal slide-reveal--facts">
          <div>
            <dt>Cuisine</dt>
            <dd>{cuisine}</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{service}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export const Slide14 = (_props: PresentationSlideProps) => (
  <VenueProfile
    name="Arrecife"
    logo={arrecifeLogo}
    image={arrecifeImage}
    cuisine="International and Costa Rican"
    service="Breakfast, lunch, and dinner"
    copy="The resort’s main dining venue, offering seasonal buffet and à la carte service with international variety and Costa Rican character."
  />
);

export const Slide15 = (_props: PresentationSlideProps) => (
  <VenueProfile
    name="Baja Azul"
    logo={bajaAzulLogo}
    image={bajaAzulImage}
    cuisine="Mexican and Tex-Mex inspired"
    service="Lunch, snacks, and dinner"
    copy="A casual venue offering daytime snacks and a Mexican and Tex-Mex-inspired à la carte experience in the evening."
  />
);

export const Slide16 = (_props: PresentationSlideProps) => (
  <VenueProfile
    name="Trattoria"
    logo={trattoriaLogo}
    image={trattoriaImage}
    cuisine="Italian inspired"
    service="Dinner"
    copy="A relaxed dinner experience centered on familiar Italian flavors, including pizza, pasta, classic desserts, wines, and cocktails."
  />
);

export const Slide17 = (_props: PresentationSlideProps) => (
  <VenueProfile
    name="Veranda"
    logo={verandaLogo}
    image={verandaImage}
    cuisine="Drinks and casual bites"
    service="Afternoon and evening rhythm"
    copy="A relaxed place for cocktails, cold drinks, sports, salty treats, and casual snacks from afternoon into the evening."
  />
);

export function Slide19() {
  return (
    <div className="keyframe keyframe--nikoa">
      <img className="keyframe__background" src={nikoaImage} alt="" />
      <div className="nikoa__shade" />
      <div className="nikoa__copy">
        <img className="nikoa__logo slide-reveal slide-reveal--logo" src={nikoaLogo} alt="Nikoa Beach Club" />
        <h2 className="slide-reveal slide-reveal--title">
          Beachfront dining, with its own rhythm.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          A relaxed beachfront dining experience between Villas Playa Sámara
          and Azura Beach Resort, serving lunch, dinner, drinks, and Pacific
          views.
        </p>
        <p className="nikoa__qualifier slide-reveal slide-reveal--facts">
          Separate additional-charge venue; not included in the VPS
          all-inclusive plan.
        </p>
      </div>
      <figure className="nikoa__inset slide-media-reveal" aria-hidden="true">
        <img src={nikoaNightImage} alt="" />
      </figure>
    </div>
  );
}

const resortLifeImages = [
  { image: resortBay, label: "Sámara Bay" },
  { image: poolCocktails, label: "Poolside ease" },
  { image: beachfrontTerrace, label: "Room to gather" },
  { image: resortKayak, label: "Ocean time" },
  { image: outdoorYoga, label: "Movement and calm" },
];

export function Slide20() {
  return (
    <div className="keyframe keyframe--resort-life">
      <div className="resort-life__mosaic" aria-hidden="true">
        {resortLifeImages.map(({ image, label }) => (
          <figure className="slide-media-reveal" key={label}>
            <img src={image} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Slide23() {
  return (
    <div className="keyframe keyframe--wellness">
      <div className="wellness__heading">
        <img className="wellness__logo slide-reveal slide-reveal--logo" src={morphoLogo} alt="Morpho Wellness Retreat" />
        <h2 className="slide-reveal slide-reveal--title">
          Move, restore, and make time for yourself.
        </h2>
      </div>
      <div className="wellness__columns">
        <article className="wellness__column wellness__column--current slide-media-reveal">
          <img src={currentSpa} alt="" />
          <div>
            <p>Available now</p>
            <h3>Wellness for today</h3>
            <span>GYM · Guided yoga · Current Morpho treatments</span>
          </div>
        </article>
        <article className="wellness__column wellness__column--future slide-media-reveal">
          <img src={futureSpa} alt="" />
          <div>
            <p>Under development</p>
            <h3>A more expansive retreat</h3>
            <span>Additional treatment spaces · Sauna · Cold plunge · Beauty areas · Retreat pool</span>
          </div>
        </article>
      </div>
      <p className="wellness__note slide-reveal slide-reveal--status">
        Future additions are under development and are not yet available.
      </p>
    </div>
  );
}

const experienceCards = [
  { image: choraKayak, title: "Isla Chora kayak" },
  { image: surfLessons, title: "Surf lessons" },
  { image: atvTour, title: "ATV jungle tour" },
  { image: sunsetTour, title: "Pacific sunset" },
  { image: paloVerdeTour, title: "Palo Verde" },
  { image: arenalTour, title: "Arenal" },
  { image: monteverdeTour, title: "Monteverde" },
  { image: coffeeTour, title: "Coffee country" },
];

export function Slide24() {
  return (
    <div className="keyframe keyframe--experience-grid">
      <div className="experience-grid__heading">
        <div>
          <img src={monkeyToursLogo} alt="Monkey Tours" className="experience-grid__logo slide-reveal slide-reveal--logo" />
          <h2 className="slide-reveal slide-reveal--title">Your gateway to adventure.</h2>
        </div>
        <p className="slide-reveal slide-reveal--copy">
          With Monkey Tours based at the hotel, guests can move from Sámara
          Bay to volcanoes, cloud forests, wildlife reserves, coffee country,
          and more.
        </p>
      </div>
      <div className="experience-grid__cards">
        {experienceCards.map(({ image, title }) => (
          <figure className="slide-media-reveal" key={title}>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const activityCards = [
  { image: morningStretch, title: "Morning stretch" },
  { image: aquaAerobics, title: "Aqua aerobics" },
  { image: beachVolleyball, title: "Beach volleyball" },
  { image: danceLessons, title: "Dance lessons" },
  { image: cocktailClass, title: "Cocktail class" },
  { image: canvasTime, title: "Canvas time" },
  { image: bonfire, title: "Beach bonfire" },
  { image: poolVolleyball, title: "Pool volleyball" },
];

export function Slide25() {
  return (
    <div className="keyframe keyframe--activity-grid">
      <div className="activity-grid__heading">
        <h2 className="slide-reveal slide-reveal--title">Something different every day.</h2>
        <p className="slide-reveal slide-reveal--copy">
          A rotating program of movement, culture, games, and relaxed moments
          makes it easy to join in without leaving the resort.
        </p>
      </div>
      <div className="activity-grid__cards">
        {activityCards.map(({ image, title }) => (
          <figure className="slide-media-reveal" key={title}>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="activity-grid__note">Activities rotate; no fixed weekly schedule is shown.</p>
    </div>
  );
}

const futureRenders = [
  { image: arrecifeFuture, title: "Arrecife entrance" },
  { image: arrecifeInteriorFuture, title: "Arrecife dining space" },
  { image: diningFuture, title: "Baja Azul and Veranda exterior" },
  { image: diningFutureFront, title: "Future dining arrival" },
];

export function Slide27() {
  return (
    <div className="keyframe keyframe--future-development">
      <div className="future-development__heading">
        <p className="slide-label slide-reveal slide-reveal--label">What is taking shape</p>
        <h2 className="slide-reveal slide-reveal--title">
          A more expansive resort experience is taking shape.
        </h2>
        <p className="slide-reveal slide-reveal--copy">
          New dining settings and an expanded Morpho Wellness Retreat are
          being developed as the next chapter of Villas Playa Sámara.
        </p>
      </div>
      <div className="future-development__renders">
        {futureRenders.map(({ image, title }) => (
          <figure className="slide-media-reveal" key={title}>
            <img src={image} alt="" />
            <figcaption>
              <strong>{title}</strong>
              <span>Concept / under development</span>
            </figcaption>
          </figure>
        ))}
        <figure className="future-development__wellness slide-media-reveal">
          <img src={futureSpa} alt="" />
          <figcaption>
            <strong>Morpho Wellness Retreat</strong>
            <span>Concept / under development</span>
          </figcaption>
        </figure>
      </div>
      <p className="future-development__note">
        Concept imagery. Design, services, and opening information may evolve.
      </p>
    </div>
  );
}
