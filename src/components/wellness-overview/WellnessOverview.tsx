import "./wellness-overview.css";

const currentWellness = [
  {
    icon: "fitness_center",
    title: "GYM",
    copy: "A newly completed, air-conditioned space for independent workouts.",
  },
  {
    icon: "self_improvement",
    title: "Guided yoga",
    copy: "Mindful movement offered in selected resort spaces.",
  },
  {
    icon: "spa",
    title: "Morpho treatments",
    copy: "Current massages, body treatments, facials, exfoliations, and wellness packages.",
  },
] as const;

const futureWellness = [
  { icon: "spa", title: "Expanded treatment spaces" },
  { icon: "sauna", title: "Sauna & cold plunge" },
  { icon: "face_retouching_natural", title: "Beauty areas" },
  { icon: "pool", title: "Retreat pool" },
] as const;

export function WellnessOverview() {
  return (
    <section
      className="wellness-overview"
      id="wellness"
      aria-labelledby="wellness-title"
    >
      <div className="content-wrap">
        <div className="wellness-overview__intro" data-home-motion="copy">
          <p className="section-kicker">Wellness at Villas Playa Sámara</p>
          <h2 className="section-title" id="wellness-title">
            Move, restore, and make time for yourself
          </h2>
          <p className="section-copy">
            Wellness can be as active or as unhurried as you choose. Continue
            your routine in the GYM, join a guided yoga session, or explore
            Morpho’s current massage and body-care treatments.
          </p>
        </div>

        <div className="wellness-overview__summary">
          <article
            className="wellness-overview__current"
            data-home-motion="wellness-panel"
          >
            <span className="wellness-overview__status wellness-overview__status--current">
              Available now
            </span>
            <h3>Wellness for the way you feel today</h3>

            <ul className="wellness-overview__current-list">
              {currentWellness.map((item) => (
                <li key={item.title}>
                  <span
                    className="material-symbols-outlined wellness-overview__icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ul>

            <a className="text-link" href="/wellness">
              Explore current wellness
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </article>

          <article
            className="wellness-overview__future"
            data-home-motion="wellness-panel"
            data-home-motion-delay="1"
          >
            <span className="wellness-overview__status">
              Under development
            </span>
            <h3>A more expansive retreat is taking shape</h3>
            <p>
              Morpho Wellness Retreat is being expanded with more treatment
              spaces and nature-connected places to restore.
            </p>

            <ul className="wellness-overview__future-list">
              {futureWellness.map((item) => (
                <li key={item.title}>
                  <span
                    className="material-symbols-outlined wellness-overview__icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <small>
              These additions are future experiences and are not yet available.
            </small>
          </article>
        </div>
      </div>
    </section>
  );
}
