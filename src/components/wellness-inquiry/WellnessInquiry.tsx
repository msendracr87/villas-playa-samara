import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import { InquiryForm } from "../inquiry-form/InquiryForm";
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
          <h2 className="section-title" id={`${variant}-inquiry-title`}>
            {content.title}
          </h2>
          <p>{content.description}</p>
        </div>

        <InquiryForm
          idPrefix={`${variant}-inquiry`}
          ariaLabel={`Ask Guest Services about ${content.subject}`}
          hiddenFields={[{ name: "wellnessInterest", value: content.subject }]}
          includePhone
          fullNameFullWidth
          statusMessage="Inquiry delivery is not connected yet."
        />
      </div>
    </section>
  );
}
