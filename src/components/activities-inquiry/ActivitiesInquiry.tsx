import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import "./activities-inquiry.css";

const activityOptions = [
  {
    value: "padel-and-pickleball-courts",
    label: "Padel & Pickleball Courts",
  },
  {
    value: "isla-chora-paddleboard-tour",
    label: "Isla Chora Paddleboard & Snorkel Tour",
  },
  {
    value: "isla-chora-kayak-tour",
    label: "Isla Chora Kayak & Snorkel Tour",
  },
  { value: "surf-lessons", label: "Surf Lessons at Sámara Beach" },
  { value: "turtle-nesting-tour", label: "Turtle Nesting Tour" },
] as const;

type ActivitiesInquiryProps = {
  selectedActivity: string;
  onSelectedActivityChange: (activity: string) => void;
};

export function ActivitiesInquiry({
  selectedActivity,
  onSelectedActivityChange,
}: ActivitiesInquiryProps) {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");
  const fieldId = (field: string) => `activity-inquiry-${field}`;

  return (
    <section
      className="accommodation-inquiry activities-inquiry"
      id="activity-inquiry"
      aria-labelledby="activity-inquiry-title"
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-experiences-motion="day-tours-reveal"
      >
        <div className="accommodation-inquiry__intro">
          <h2 id="activity-inquiry-title">
            Let us help plan your time in Sámara
          </h2>
          <p>
            Tell us which activity interests you, your preferred date, and how
            many guests are joining. We&apos;ll help confirm availability and
            any departure conditions.
          </p>
        </div>

        <form
          className="accommodation-inquiry__form"
          aria-label="Ask about an activity in Sámara"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("name")}>Full name</label>
            <input
              id={fieldId("name")}
              name="name"
              type="text"
              autoComplete="name"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("email")}>Email address</label>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("activity")}>Preferred activity</label>
            <select
              id={fieldId("activity")}
              name="activity"
              value={selectedActivity}
              onChange={(event) =>
                onSelectedActivityChange(event.target.value)
              }
            >
              <option value="">Choose an activity</option>
              <option value="not-sure">I&apos;m not sure yet</option>
              {activityOptions.map((activity) => (
                <option value={activity.value} key={activity.value}>
                  {activity.label}
                </option>
              ))}
            </select>
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("participants")}>Participants</label>
            <input
              id={fieldId("participants")}
              name="participants"
              type="number"
              min="1"
              inputMode="numeric"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("date")}>Preferred date</label>
            <input
              id={fieldId("date")}
              name="preferredDate"
              type="date"
              autoComplete="off"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor={fieldId("alternate-date")}>Alternate date</label>
            <input
              id={fieldId("alternate-date")}
              name="alternateDate"
              type="date"
              autoComplete="off"
            />
          </div>

          <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
            <label htmlFor={fieldId("message")}>
              What would you like us to know?
            </label>
            <textarea id={fieldId("message")} name="message" rows={5} />
          </div>

          <div className="accommodation-inquiry__actions accommodation-inquiry__field--full">
            <button
              type="submit"
              disabled
              aria-describedby={fieldId("status")}
            >
              Send inquiry
            </button>
            <p id={fieldId("status")}>
              Inquiry delivery is not connected yet. This form is available
              for layout review only.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
