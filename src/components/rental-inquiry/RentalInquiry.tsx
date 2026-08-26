import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import { InquiryForm } from "../inquiry-form/InquiryForm";
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
          <h2 className="section-title" id="rental-inquiry-title">
            Let us help plan your rental adventure
          </h2>
          <p>
            Tell us which experience caught your eye, when you would like to
            go, and how many guests are joining. We&apos;ll help you confirm
            availability and departure conditions.
          </p>
        </div>

        <InquiryForm
          idPrefix="rental-inquiry"
          ariaLabel="Ask about a rental experience"
          choice={{
            label: "Preferred rental",
            name: "rental",
            placeholder: "Choose a rental experience",
            options: [
              { value: "not-sure", label: "I'm not sure yet" },
              ...rentalOptions,
            ],
            value: selectedRental,
            onChange: (event) => onSelectedRentalChange(event.target.value),
          }}
          numberField={{ label: "Participants", name: "participants" }}
          scheduleFields={[
            { label: "Preferred date", name: "preferredDate", type: "date" },
            { label: "Preferred time", name: "preferredTime", type: "time" },
          ]}
        />
      </div>
    </section>
  );
}
