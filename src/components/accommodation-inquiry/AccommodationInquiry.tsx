import { accommodations } from "../../data/accommodations";
import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "./accommodation-inquiry.css";

export function AccommodationInquiry() {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");

  return (
    <section
      className="accommodation-inquiry"
      aria-labelledby="accommodation-inquiry-title"
      ref={inquiryRef}
    >
      <div className="content-wrap accommodation-inquiry__layout">
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

        <form
          className="accommodation-inquiry__form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-name">Full name</label>
            <input
              id="accommodation-inquiry-name"
              name="name"
              type="text"
              autoComplete="name"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-email">Email address</label>
            <input
              id="accommodation-inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-room">
              Preferred room or villa
            </label>
            <select
              id="accommodation-inquiry-room"
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
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-guests">Guests</label>
            <input
              id="accommodation-inquiry-guests"
              name="guests"
              type="number"
              min="1"
              inputMode="numeric"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-arrival">
              Preferred arrival
            </label>
            <input
              id="accommodation-inquiry-arrival"
              name="arrival"
              type="date"
              autoComplete="off"
            />
          </div>

          <div className="accommodation-inquiry__field">
            <label htmlFor="accommodation-inquiry-departure">
              Preferred departure
            </label>
            <input
              id="accommodation-inquiry-departure"
              name="departure"
              type="date"
              autoComplete="off"
            />
          </div>

          <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
            <label htmlFor="accommodation-inquiry-message">
              What would you like us to know?
            </label>
            <textarea
              id="accommodation-inquiry-message"
              name="message"
              rows={5}
            />
          </div>

          <div className="accommodation-inquiry__actions accommodation-inquiry__field--full">
            <button
              type="submit"
              disabled
              aria-describedby="accommodation-inquiry-status"
            >
              Send inquiry
            </button>
            <p id="accommodation-inquiry-status">
              Inquiry delivery is not connected yet. This form is available
              for layout review only.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
