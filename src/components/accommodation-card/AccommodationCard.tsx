import {
  type Accommodation,
  getAccommodationPath,
} from "../../data/accommodations";
import "./accommodation-card.css";

type AccommodationCardProps = {
  accommodation: Accommodation;
  index: number;
};

export function AccommodationCard({
  accommodation,
  index,
}: AccommodationCardProps) {
  return (
    <article className="accommodation-card">
      <a
        className="accommodation-card__media"
        href={getAccommodationPath(accommodation)}
        aria-label={`View ${accommodation.name}`}
      >
        <img
          src={accommodation.image.large}
          srcSet={`${accommodation.image.small} 720w, ${accommodation.image.large} 1440w`}
          sizes="(max-width: 760px) 100vw, 50vw"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="accommodation-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </a>

      <div className="accommodation-card__body">
        <p>{accommodation.note}</p>
        <h2>
          <a href={getAccommodationPath(accommodation)}>
            {accommodation.name}
          </a>
        </h2>
        <dl className="accommodation-card__facts">
          <div>
            <dt>Sleeps</dt>
            <dd>{accommodation.sleeps}</dd>
          </div>
          <div>
            <dt>Setting</dt>
            <dd>{accommodation.view}</dd>
          </div>
        </dl>
        <p className="accommodation-card__summary">{accommodation.summary}</p>
        <a
          className="text-link accommodation-card__link"
          href={getAccommodationPath(accommodation)}
        >
          View accommodation
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  );
}
