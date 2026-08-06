import { useState } from "react";
import {
  type Accommodation,
  getAccommodationPath,
  getAccommodationTitleParts,
} from "../../data/accommodations";
import { AccommodationMediaDialog } from "./AccommodationMediaDialog";
import "./accommodation-card.css";

type AccommodationCardProps = {
  accommodation: Accommodation;
  index: number;
};

export function AccommodationCard({
  accommodation,
  index,
}: AccommodationCardProps) {
  const [dialogMode, setDialogMode] = useState<"floor-plan" | "gallery" | null>(
    null,
  );
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { bedConfiguration: bedSizeLabel, name: displayName } =
    getAccommodationTitleParts(accommodation);

  const openGallery = () => {
    setGalleryIndex(0);
    setDialogMode("gallery");
  };

  const showPreviousImage = () => {
    setGalleryIndex((current) =>
      (current - 1 + accommodation.gallery.length) %
      accommodation.gallery.length,
    );
  };

  const showNextImage = () => {
    setGalleryIndex(
      (current) => (current + 1) % accommodation.gallery.length,
    );
  };

  return (
    <article
      className="accommodation-card"
      data-accommodations-motion="stay"
    >
      <div className="accommodation-card__media">
        <a
          className="accommodation-card__media-link"
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
        </a>
        <span className="accommodation-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="accommodation-card__media-actions">
          <button
            className="accommodation-card__media-action"
            type="button"
            onClick={() => setDialogMode("floor-plan")}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              map
            </span>
            Floor plan
          </button>
          <button
            className="accommodation-card__media-action"
            type="button"
            onClick={openGallery}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              photo_library
            </span>
            Gallery
          </button>
        </div>
      </div>

      <div className="accommodation-card__body">
        <p>{accommodation.note}</p>
        <h2>
          <a href={getAccommodationPath(accommodation)}>
            <span>{displayName}</span>
            {bedSizeLabel ? (
              <span className="accommodation-card__bed-size">
                {bedSizeLabel}
              </span>
            ) : null}
          </a>
        </h2>
        <ul
          className="accommodation-card__key-features"
          aria-label={`${accommodation.name} key features`}
        >
          <li className="accommodation-card__key-feature--beds">
            <span className="material-symbols-outlined" aria-hidden="true">
              king_bed
            </span>
            <span>{accommodation.beds}</span>
          </li>
          <li className="accommodation-card__key-feature--guests">
            <span className="material-symbols-outlined" aria-hidden="true">
              group
            </span>
            <span>{accommodation.sleeps}</span>
          </li>
          <li className="accommodation-card__key-feature--view">
            <span className="material-symbols-outlined" aria-hidden="true">
              landscape
            </span>
            <span>{accommodation.view}</span>
          </li>
          <li className="accommodation-card__key-feature--size">
            <span className="material-symbols-outlined" aria-hidden="true">
              square_foot
            </span>
            <span>{accommodation.size}</span>
          </li>
        </ul>
        <p className="accommodation-card__summary">{accommodation.summary}</p>
        <div className="accommodation-card__actions">
          <button
            className="accommodation-card__action accommodation-card__action--book"
            type="button"
            disabled
            aria-label="Book now — online booking is not yet available"
          >
            Book now
          </button>
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
      </div>

      {dialogMode ? (
        <AccommodationMediaDialog
          accommodation={accommodation}
          galleryIndex={galleryIndex}
          mode={dialogMode}
          onClose={() => setDialogMode(null)}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
        />
      ) : null}
    </article>
  );
}
