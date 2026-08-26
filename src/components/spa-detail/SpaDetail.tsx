import spaBodyworkSmall from "../../../assets/images/optimized/wellness/spa/massage-and-bodywork-2-960.webp";
import spaBodyworkLarge from "../../../assets/images/optimized/wellness/spa/massage-and-bodywork-2-1600.webp";
import spaTreatmentSmall from "../../../assets/images/optimized/wellness/spa/massage-and-face-treatment-1-720.webp";
import spaTreatmentLarge from "../../../assets/images/optimized/wellness/spa/massage-and-face-treatment-1-1200.webp";
import gymTrainingSmall from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-960.webp";
import gymTrainingLarge from "../../../assets/images/optimized/wellness/gym/gym-people-using-equipment-3-1448.webp";
import morphoLogoUrl from "../../../assets/svgs/logo/morpho/morpho-spa-logo-FFFFFF-frame.svg";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useWellnessMotion } from "../../hooks/useWellnessMotion";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { WellnessCrossLink } from "../wellness-cross-link/WellnessCrossLink";
import { WellnessInquiry } from "../wellness-inquiry/WellnessInquiry";
import "./spa-detail.css";

type MenuItem = {
  name: string;
  duration: string;
  price: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type Package = MenuItem & {
  inclusions: string[];
};

const menuGroups: MenuGroup[] = [
  {
    title: "Massages",
    items: [
      { name: "Reflexology", duration: "45 Minutes", price: "$65" },
      { name: "Relaxing Massage", duration: "60 Minutes", price: "$80" },
      { name: "Hot Stone Massage", duration: "80 Minutes", price: "$99" },
      {
        name: "Relaxing Therapeutic + Stretching",
        duration: "60 Minutes",
        price: "$75",
      },
      { name: "Deep Tissue Massage", duration: "60 Minutes", price: "$90" },
      {
        name: "Back, Neck, and Shoulders",
        duration: "45 Minutes",
        price: "$60",
      },
    ],
  },
  {
    title: "Special Massages",
    items: [
      { name: "Chocolate", duration: "60 Minutes", price: "$115" },
      {
        name: "Honey and Milk Massage",
        duration: "60 Minutes",
        price: "$120",
      },
      {
        name: "Tropical Fruit Massage",
        duration: "60 Minutes",
        price: "$95",
      },
    ],
  },
  {
    title: "Body Treatments",
    items: [
      { name: "Clay Wrap", duration: "60 Minutes", price: "$110" },
      {
        name: "Aloe or Chamomile Insolation Wrap",
        duration: "60 Minutes",
        price: "$120",
      },
      {
        name: "Coffee, Chocolate or Coconut Exfoliation",
        duration: "30 Minutes",
        price: "$75",
      },
      {
        name: "Chocolate or Clay Facial",
        duration: "30 Minutes",
        price: "$35",
      },
    ],
  },
];

const packages: Package[] = [
  {
    name: "Morpho's Pack",
    duration: "90 Minutes",
    price: "$185",
    inclusions: [
      "Coconut or coffee corporal exfoliation",
      "Hot stone relaxing massage",
      "Moisturizer facial",
    ],
  },
  {
    name: "Villas Celestial",
    duration: "90 Minutes",
    price: "$170",
    inclusions: [
      "Corporal exfoliation",
      "Relaxing massage",
      "Clay wrap",
      "Aromatic facial",
    ],
  },
  {
    name: "Chora's",
    duration: "80 Minutes",
    price: "$145",
    inclusions: [
      "Chocolate corporal exfoliation",
      "Relaxing massage",
      "Aromatic facial",
    ],
  },
];

export function SpaDetail() {
  useWellnessMotion();
  usePageMetadata(
    "Morpho Spa Treatments | Villas Playa Sámara",
    "Explore current massages, body treatments, facials, exfoliations, and wellness packages available at Morpho Spa at Villas Playa Sámara.",
  );

  return (
    <div className="site-shell spa-page">
      <Header />
      <main id="main-content">
        <section
          className="spa-page__hero"
          aria-labelledby="spa-page-title"
          data-wellness-motion="hero"
        >
          <img
            src={spaBodyworkLarge}
            srcSet={`${spaBodyworkSmall} 960w, ${spaBodyworkLarge} 1600w`}
            sizes="100vw"
            alt=""
            decoding="async"
          />
          <div className="spa-page__hero-shade" aria-hidden="true" />

          <div className="content-wrap spa-page__hero-content">
            <p className="section-kicker spa-page__hero-kicker">
              Massage, bodywork &amp; restorative care
            </p>
            <h1 className="spa-page__hero-brand" id="spa-page-title">
              <img
                className="spa-page__hero-logo"
                src={morphoLogoUrl}
                alt="Morpho Spa"
              />
            </h1>
            <p>
              Make space for restorative care in a dedicated treatment
              location within Villas Playa Sámara.
            </p>
            <div className="spa-page__hero-actions">
              <a href="#treatment-menu">
                View the treatment menu
                <span className="material-symbols-outlined" aria-hidden="true">
                  south
                </span>
              </a>
              <a href="/wellness">
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_back
                </span>
                All wellness
              </a>
            </div>
          </div>
        </section>

        <section
          className="spa-page__introduction"
          aria-labelledby="spa-introduction-title"
        >
          <div className="content-wrap spa-page__introduction-layout">
            <figure data-wellness-motion="media-left" aria-hidden="true">
              <img
                src={spaTreatmentLarge}
                srcSet={`${spaTreatmentSmall} 720w, ${spaTreatmentLarge} 1200w`}
                sizes="(max-width: 960px) 100vw, 52vw"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="spa-page__introduction-copy" data-wellness-motion="reveal">
              <h2 className="section-title" id="spa-introduction-title">
                Care shaped around the way you want to feel
              </h2>
              <p>
                Some days call for gentle relaxation. Others invite deeper
                bodywork, focused care for the back and shoulders, or a longer
                ritual that brings several treatments together.
              </p>
              <p>
                Morpho Spa offers massages, special massages, body treatments,
                facials, exfoliations, and combined packages in a dedicated
                location at the resort.
              </p>
              <a className="text-link" href="#treatment-menu">
                Choose your treatment
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="spa-page__menu"
          id="treatment-menu"
          aria-labelledby="spa-menu-title"
        >
          <div className="content-wrap spa-page__menu-heading" data-wellness-motion="reveal">
            <h2 className="section-title" id="spa-menu-title">
              Choose your time to <span>restore</span>
            </h2>
            <p>
              Select a single treatment or make more time for a complete
              wellness experience. Prices are presented as listed in the
              current treatment menu.
            </p>
          </div>

          <div className="content-wrap spa-page__menu-groups">
            {menuGroups.map((group) => (
              <section
                className="spa-page__menu-group"
                key={group.title}
                aria-labelledby={`spa-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                data-wellness-motion="reveal"
              >
                <h3 id={`spa-${group.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {group.title}
                </h3>
                <dl>
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <dt>{item.name}</dt>
                      <dd>
                        <span>{item.duration}</span>
                        <span>{item.price}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

          <section
            className="content-wrap spa-page__packages"
            aria-labelledby="spa-packages-title"
          >
            <h3 id="spa-packages-title" data-wellness-motion="reveal">
              Packages
            </h3>
            <div className="spa-page__package-grid">
              {packages.map((spaPackage) => (
                <article key={spaPackage.name} data-wellness-motion="equipment">
                  <div>
                    <h4>{spaPackage.name}</h4>
                    <strong>{spaPackage.price}</strong>
                  </div>
                  <p>{spaPackage.duration}</p>
                  <ul>
                    {spaPackage.inclusions.map((inclusion) => (
                      <li key={inclusion}>{inclusion}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <p className="content-wrap spa-page__menu-notice">
            Menu availability and appointment times may vary. Contact Guest
            Services during your stay to review availability and arrange your
            treatment.
          </p>
        </section>

        <WellnessInquiry variant="spa" />

        <WellnessCrossLink
          className="spa-page__closing"
          imageSmall={gymTrainingSmall}
          imageLarge={gymTrainingLarge}
          imageLargeWidth={1448}
          primaryHref="/wellness/gym"
          primaryLabel="Explore the GYM"
        />
      </main>
      <Footer />
    </div>
  );
}
