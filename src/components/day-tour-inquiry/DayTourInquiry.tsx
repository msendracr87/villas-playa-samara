import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import { InquiryForm } from "../inquiry-form/InquiryForm";
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
          <h2 className="section-title" id="day-tour-inquiry-title">
            Let us help plan your day in Costa Rica
          </h2>
          <p>
            Tell us which tour interests you, your preferred date, and how many
            guests are joining. We&apos;ll help you confirm availability,
            departure conditions, and the details of your day.
          </p>
        </div>

        <InquiryForm
          idPrefix="day-tour-inquiry"
          ariaLabel="Ask about a Costa Rica day tour"
          choice={{
            label: "Preferred day tour",
            name: "dayTour",
            placeholder: "Choose a day tour",
            options: [
              { value: "not-sure", label: "I'm not sure yet" },
              ...dayTourOptions,
            ],
            value: selectedDayTour,
            onChange: (event) => onSelectedDayTourChange(event.target.value),
          }}
          numberField={{ label: "Participants", name: "participants" }}
          scheduleFields={[
            { label: "Preferred date", name: "preferredDate", type: "date" },
            { label: "Alternate date", name: "alternateDate", type: "date" },
          ]}
        />
      </div>
    </section>
  );
}
