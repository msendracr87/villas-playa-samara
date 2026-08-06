import {
  accommodations,
  type Accommodation,
} from "../../data/accommodations";
import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "./accommodation-inquiry.css";

type AccommodationInquiryFormProps = {
  idPrefix?: string;
  selectedAccommodation?: Accommodation;
};

export function AccommodationInquiryForm({
  idPrefix = "accommodation-inquiry",
  selectedAccommodation,
}: AccommodationInquiryFormProps) {
  const fieldId = (field: string) => `${idPrefix}-${field}`;

  return (
    <form
      className="accommodation-inquiry__form"
      aria-label={
        selectedAccommodation
          ? `Ask about ${selectedAccommodation.name}`
          : undefined
      }
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
        <label htmlFor={fieldId("room")}>Preferred room or villa</label>
        {selectedAccommodation ? (
          <>
            <input
              id={fieldId("room")}
              name="accommodation"
              type="text"
              value={selectedAccommodation.name}
              readOnly
            />
            <input
              name="accommodationSlug"
              type="hidden"
              value={selectedAccommodation.slug}
            />
          </>
        ) : (
          <select
            id={fieldId("room")}
            name="accommodation"
            defaultValue=""
          >
            <option value="">Choose an accommodation</option>
            <option value="not-sure">I&apos;m not sure yet</option>
            {accommodations.map((accommodation) => (
              <option value={accommodation.slug} key={accommodation.slug}>
                {accommodation.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="accommodation-inquiry__field">
        <label htmlFor={fieldId("guests")}>Guests</label>
        <input
          id={fieldId("guests")}
          name="guests"
          type="number"
          min="1"
          inputMode="numeric"
        />
      </div>

      <div className="accommodation-inquiry__field">
        <label htmlFor={fieldId("arrival")}>Preferred arrival</label>
        <input
          id={fieldId("arrival")}
          name="arrival"
          type="date"
          autoComplete="off"
        />
      </div>

      <div className="accommodation-inquiry__field">
        <label htmlFor={fieldId("departure")}>Preferred departure</label>
        <input
          id={fieldId("departure")}
          name="departure"
          type="date"
          autoComplete="off"
        />
      </div>

      <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
        <label htmlFor={fieldId("message")}>
          What would you like us to know?
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
        />
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
          Inquiry delivery is not connected yet. This form is available for
          layout review only.
        </p>
      </div>
    </form>
  );
}

export function AccommodationInquiry() {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");

  return (
    <section
      className="accommodation-inquiry"
      aria-labelledby="accommodation-inquiry-title"
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-accommodations-motion="inquiry"
      >
        <div className="accommodation-inquiry__intro">
          <h2 id="accommodation-inquiry-title">
            Let us help you find the right room or villa
          </h2>
          <p>
            Tell us which accommodation caught your eye and share a few details
            about your trip. We&apos;ll help you explore the options that suit
            your stay in Sámara.
          </p>
        </div>

        <AccommodationInquiryForm />
      </div>
    </section>
  );
}
