import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import "./day-tour-inquiry.css";

const dayTourOptions = [
  { value: "sunset-ocean-tour", label: "Sunset Ocean Tour" },
  { value: "carrillo-horseback-riding", label: "Carrillo Horseback Riding" },
  { value: "sea-life-adventure-tour", label: "Sea Life Adventure Tour" },
  {
    value: "jungle-adrenaline-day-pass",
    label: "Costa Rican Jungle Adrenaline Day Pass",
  },
  {
    value: "palo-verde-boat-tour",
    label: "Palo Verde Boat Tour & Pottery Town",
  },
  { value: "costa-rican-safari", label: "Costa Rican Safari Adventure" },
  {
    value: "monteverde-cloud-forest",
    label: "Monteverde Cloud Forest & Sky Adventures",
  },
  { value: "arenal-volcano", label: "Arenal Volcano & Hot Springs" },
  { value: "coffee-tour", label: "Coffee Tour" },
] as const;

type DayTourInquiryProps = {
  selectedDayTour: string;
  onSelectedDayTourChange: (dayTour: string) => void;
};

export function DayTourInquiry({
  selectedDayTour,
  onSelectedDayTourChange,
}: DayTourInquiryProps) {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");
  const fieldId = (field: string) => `day-tour-inquiry-${field}`;

  return (
    <section
      className="accommodation-inquiry day-tour-inquiry"
      id="day-tour-inquiry"
      aria-labelledby="day-tour-inquiry-title"
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-experiences-motion="day-tours-reveal"
      >
        <div className="accommodation-inquiry__intro">
          <h2 id="day-tour-inquiry-title">
            Let us help plan your day in Costa Rica
          </h2>
          <p>
            Tell us which tour interests you, your preferred date, and how many
            guests are joining. We&apos;ll help you confirm availability,
            departure conditions, and the details of your day.
          </p>
        </div>

        <form
          className="accommodation-inquiry__form"
          aria-label="Ask about a Costa Rica day tour"
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
            <label htmlFor={fieldId("tour")}>Preferred day tour</label>
            <select
              id={fieldId("tour")}
              name="dayTour"
              value={selectedDayTour}
              onChange={(event) => onSelectedDayTourChange(event.target.value)}
            >
              <option value="">Choose a day tour</option>
              <option value="not-sure">I&apos;m not sure yet</option>
              {dayTourOptions.map((tour) => (
                <option value={tour.value} key={tour.value}>
                  {tour.label}
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
