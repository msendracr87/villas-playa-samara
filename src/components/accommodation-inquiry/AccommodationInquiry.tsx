import {
  accommodations,
  type Accommodation,
} from "../../data/accommodations";
import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import { InquiryForm } from "../inquiry-form/InquiryForm";
import "./accommodation-inquiry.css";

type AccommodationInquiryFormProps = {
  idPrefix?: string;
  selectedAccommodation?: Accommodation;
};

export function AccommodationInquiryForm({
  idPrefix = "accommodation-inquiry",
  selectedAccommodation,
}: AccommodationInquiryFormProps) {
  return (
    <InquiryForm
      idPrefix={idPrefix}
      ariaLabel={
        selectedAccommodation
          ? `Ask about ${selectedAccommodation.name}`
          : undefined
      }
      choice={{
        label: "Preferred room or villa",
        name: "accommodation",
        placeholder: "Choose an accommodation",
        options: [
          { value: "not-sure", label: "I'm not sure yet" },
          ...accommodations.map((accommodation) => ({
            value: accommodation.slug,
            label: accommodation.name,
          })),
        ],
        readOnlyValue: selectedAccommodation?.name,
        hiddenName: selectedAccommodation ? "accommodationSlug" : undefined,
        hiddenValue: selectedAccommodation?.slug,
      }}
      numberField={{ label: "Guests", name: "guests" }}
      scheduleFields={[
        { label: "Preferred arrival", name: "arrival", type: "date" },
        { label: "Preferred departure", name: "departure", type: "date" },
      ]}
    />
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
          <h2 className="section-title" id="accommodation-inquiry-title">
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
