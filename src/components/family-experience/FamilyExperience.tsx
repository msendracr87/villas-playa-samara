import beachWalkImage from "../../../assets/images/experiences/in-house-activities/in-house-activities-beach-walk.jpg";
import canvasImage from "../../../assets/images/experiences/in-house-activities/in-house-activities-canvas-time.jpg";
import poolImage from "../../../assets/images/experiences/in-house-activities/in-house-activities-pool-volleyball.jpg";
import "./family-experience.css";

const familyBenefits = [
  {
    number: "01",
    title: "Space to stay together",
    copy: "Choose from family-friendly rooms, suites, and multi-bedroom villas designed for shared travel.",
  },
  {
    number: "02",
    title: "Easygoing meals",
    copy: "All-inclusive dining keeps planning simple while four distinct venues bring variety to each day.",
  },
  {
    number: "03",
    title: "Beach and pool days",
    copy: "Move easily between the pools, tropical resort grounds, and the calm shore of Sámara Bay.",
  },
  {
    number: "04",
    title: "Time to play",
    copy: "Join daily resort activities or spend time together on the padel and pickleball courts.",
  },
] as const;

export function FamilyExperience() {
  return (
    <section
      className="family-experience"
      aria-labelledby="family-experience-title"
    >
      <div className="content-wrap family-experience__layout">
        <div className="family-experience__intro">
          <p className="section-kicker">Why Families Love Staying Here</p>
          <h2 className="section-title" id="family-experience-title">
            Why families feel at home here
          </h2>
          <p className="section-copy">
            A family vacation feels easier when everyone has space, meals are
            close at hand, and the day can move at its own pace.
          </p>
        </div>

        <div className="family-experience__images" aria-hidden="true">
          <img src={beachWalkImage} alt="" loading="lazy" />
          <img src={canvasImage} alt="" loading="lazy" />
          <img src={poolImage} alt="" loading="lazy" />
        </div>

        <ol className="family-experience__benefits">
          {familyBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span>{benefit.number}</span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
