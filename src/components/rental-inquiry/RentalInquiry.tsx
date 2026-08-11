import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import "./rental-inquiry.css";

const rentalOptions = [
  { value: "atv-jungle-tour", label: "ATV Jungle Tour" },
  { value: "fishing-trip", label: "Fishing Trip" },
  { value: "bike-rental", label: "Bike Rental" },
] as const;

type RentalInquiryProps = {
  selectedRental: string;
  onSelectedRentalChange: (rental: string) => void;
};

export function RentalInquiry({
  selectedRental,
  onSelectedRentalChange,
}: RentalInquiryProps) {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");
  const fieldId = (field: string) => `rental-inquiry-${field}`;

  return (
    <section
      className="accommodation-inquiry rental-inquiry"
      id="rental-inquiry"
      aria-labelledby="rental-inquiry-title"
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-experiences-motion="rentals-reveal"
      >
        <div className="accommodation-inquiry__intro">
          <h2 id="rental-inquiry-title">
            Let us help plan your rental adventure
          </h2>
          <p>
            Tell us which experience caught your eye, when you would like to
            go, and how many guests are joining. We&apos;ll help you confirm
            availability and departure conditions.
          </p>
        </div>

        <form
          className="accommodation-inquiry__form"
          aria-label="Ask about a rental experience"
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
            <label htmlFor={fieldId("rental")}>Preferred rental</label>
            <select
              id={fieldId("rental")}
              name="rental"
              value={selectedRental}
              onChange={(event) => onSelectedRentalChange(event.target.value)}
            >
              <option value="">Choose a rental experience</option>
              <option value="not-sure">I&apos;m not sure yet</option>
              {rentalOptions.map((rental) => (
                <option value={rental.value} key={rental.value}>
                  {rental.label}
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
            <label htmlFor={fieldId("time")}>Preferred time</label>
            <input
              id={fieldId("time")}
              name="preferredTime"
              type="time"
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
