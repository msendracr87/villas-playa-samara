import bookingImageSmall from "../../../assets/images/optimized/homepage/resort/samara-bay-booking-background-960.webp";
import bookingImageLarge from "../../../assets/images/optimized/homepage/resort/samara-bay-booking-background-1920.webp";
import "./booking-call-to-action.css";

export function BookingCallToAction() {
  return (
    <section
      className="booking-call-to-action"
      id="book"
      aria-labelledby="booking-title"
      data-home-motion="booking"
    >
      <img
        src={bookingImageLarge}
        srcSet={`${bookingImageSmall} 960w, ${bookingImageLarge} 1920w`}
        sizes="100vw"
        alt="Sámara Bay and the Villas Playa Sámara beachfront"
        loading="lazy"
        decoding="async"
      />
      <div className="booking-call-to-action__shade" aria-hidden="true" />
      <div className="content-wrap booking-call-to-action__content">
        <p className="section-kicker">Your Pacific stay</p>
        <h2 className="section-title section-title--light" id="booking-title">Ready for your stay in Sámara?</h2>
        <p>
          Choose the room or villa that fits your trip and begin planning your
          time by the Pacific.
        </p>
        <div>
          <button
            className="booking-call-to-action__primary"
            type="button"
            disabled
            title="Online booking is not available yet"
          >
            Book now
          </button>
          <a
            className="booking-call-to-action__secondary"
            href="/rooms-and-villas"
          >
            View rooms &amp; villas
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
