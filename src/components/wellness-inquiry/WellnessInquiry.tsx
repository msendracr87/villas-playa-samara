import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import "./wellness-inquiry.css";

type WellnessInquiryVariant = "gym" | "spa";

type WellnessInquiryProps = {
  variant: WellnessInquiryVariant;
};

const inquiryContent = {
  gym: {
    title: "Let us help you plan your time at the GYM",
    description:
      "Share any questions about access, equipment, or fitting an independent workout into your stay.",
    subject: "GYM",
  },
  spa: {
    title: "Let us help you choose your treatment",
    description:
      "Tell us what kind of care you are looking for. Guest Services can help review current treatments and appointment availability.",
    subject: "Morpho Spa",
  },
} as const;

export function WellnessInquiry({ variant }: WellnessInquiryProps) {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");
  const content = inquiryContent[variant];
  const fieldId = (field: string) => `${variant}-inquiry-${field}`;

  return (
    <section
      className={`accommodation-inquiry wellness-inquiry wellness-inquiry--${variant}`}
      id={`${variant}-inquiry`}
      aria-labelledby={`${variant}-inquiry-title`}
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-wellness-motion="reveal"
      >
        <div className="accommodation-inquiry__intro">
          <h2 id={`${variant}-inquiry-title`}>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <form
          className="accommodation-inquiry__form"
          aria-label={`Ask Guest Services about ${content.subject}`}
          onSubmit={(event) => event.preventDefault()}
        >
          <input name="wellnessInterest" type="hidden" value={content.subject} />

          <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
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
            <label htmlFor={fieldId("phone")}>Phone number</label>
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
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
            <p id={fieldId("status")}>Inquiry delivery is not connected yet.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
