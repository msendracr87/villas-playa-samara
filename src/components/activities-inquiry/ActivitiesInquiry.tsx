import { useParallaxBackground } from "../../hooks/useParallaxBackground";
import "../accommodation-inquiry/accommodation-inquiry.css";
import { InquiryForm } from "../inquiry-form/InquiryForm";
import "./activities-inquiry.css";

const activityOptions = [
  {
    value: "padel-and-pickleball-courts",
    label: "Padel & Pickleball Courts",
  },
  {
    value: "isla-chora-paddleboard-tour",
    label: "Isla Chora Paddleboard & Snorkel Tour",
  },
  {
    value: "isla-chora-kayak-tour",
    label: "Isla Chora Kayak & Snorkel Tour",
  },
  { value: "surf-lessons", label: "Surf Lessons at Sámara Beach" },
  { value: "turtle-nesting-tour", label: "Turtle Nesting Tour" },
] as const;

type ActivitiesInquiryProps = {
  selectedActivity: string;
  onSelectedActivityChange: (activity: string) => void;
};

export function ActivitiesInquiry({
  selectedActivity,
  onSelectedActivityChange,
}: ActivitiesInquiryProps) {
  const inquiryRef = useParallaxBackground("--inquiry-parallax-y");

  return (
    <section
      className="accommodation-inquiry activities-inquiry"
      id="activity-inquiry"
      aria-labelledby="activity-inquiry-title"
      ref={inquiryRef}
    >
      <div
        className="content-wrap accommodation-inquiry__layout"
        data-experiences-motion="day-tours-reveal"
      >
        <div className="accommodation-inquiry__intro">
          <h2 className="section-title" id="activity-inquiry-title">
            Let us help plan your time in Sámara
          </h2>
          <p>
            Tell us which activity interests you, your preferred date, and how
            many guests are joining. We&apos;ll help confirm availability and
            any departure conditions.
          </p>
        </div>

        <InquiryForm
          idPrefix="activity-inquiry"
          ariaLabel="Ask about an activity in Sámara"
          choice={{
            label: "Preferred activity",
            name: "activity",
            placeholder: "Choose an activity",
            options: [
              { value: "not-sure", label: "I'm not sure yet" },
              ...activityOptions,
            ],
            value: selectedActivity,
            onChange: (event) => onSelectedActivityChange(event.target.value),
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
