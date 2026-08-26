import { type KeyboardEvent, useEffect, useRef } from "react";
import type { Accommodation } from "../../data/accommodations";

type AccommodationMediaDialogProps = {
  accommodation: Accommodation;
  galleryIndex: number;
  mode: "floor-plan" | "gallery";
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function AccommodationMediaDialog({
  accommodation,
  galleryIndex,
  mode,
  onClose,
  onNext,
  onPrevious,
}: AccommodationMediaDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isGallery = mode === "gallery";
  const hasMultipleImages = accommodation.gallery.length > 1;
  const titleId = `${accommodation.slug}-${mode}-title`;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!isGallery || !hasMultipleImages) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    }
  };

  return (
    <dialog
      className={`accommodation-card__dialog accommodation-card__dialog--${mode}`}
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog();
        }
      }}
    >
      <div className="accommodation-card__dialog-content">
        <header className="accommodation-card__dialog-header">
          <div>
            <p>{isGallery ? "Accommodation gallery" : "Accommodation layout"}</p>
            <h2 className="subsection-title" id={titleId}>{accommodation.name}</h2>
          </div>
          <button type="button" onClick={closeDialog} aria-label="Close">
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </header>

        {isGallery ? (
          <div className="accommodation-card__gallery-viewer">
            <img
              src={accommodation.gallery[galleryIndex]}
              alt={`${accommodation.name}, gallery image ${galleryIndex + 1} of ${accommodation.gallery.length}`}
              decoding="async"
            />
            {hasMultipleImages ? (
              <>
                <button
                  className="accommodation-card__gallery-control accommodation-card__gallery-control--previous"
                  type="button"
                  onClick={onPrevious}
                  aria-label="Previous image"
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_back
                  </span>
                </button>
                <button
                  className="accommodation-card__gallery-control accommodation-card__gallery-control--next"
                  type="button"
                  onClick={onNext}
                  aria-label="Next image"
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </button>
              </>
            ) : null}
            <p aria-live="polite">
              {galleryIndex + 1} / {accommodation.gallery.length}
            </p>
          </div>
        ) : (
          <picture className="accommodation-card__floor-plan">
            <source
              media="(max-width: 760px)"
              srcSet={accommodation.floorPlan.portrait}
            />
            <img
              src={accommodation.floorPlan.landscape}
              alt={`${accommodation.name} floor plan`}
              decoding="async"
            />
          </picture>
        )}
      </div>
    </dialog>
  );
}
