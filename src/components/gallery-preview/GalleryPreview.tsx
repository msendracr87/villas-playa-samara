import galleryResortImageSmall from "../../../assets/images/optimized/homepage/gallery/resort-kayak-experience-600.webp";
import galleryResortImageLarge from "../../../assets/images/optimized/homepage/gallery/resort-kayak-experience-1200.webp";
import galleryRoomImageSmall from "../../../assets/images/optimized/homepage/gallery/beachfront-villa-terrace-600.webp";
import galleryRoomImageLarge from "../../../assets/images/optimized/homepage/gallery/beachfront-villa-terrace-1200.webp";
import galleryDiningImageSmall from "../../../assets/images/optimized/homepage/gallery/poolside-cocktails-600.webp";
import galleryDiningImageLarge from "../../../assets/images/optimized/homepage/gallery/poolside-cocktails-1200.webp";
import galleryActivityImageSmall from "../../../assets/images/optimized/homepage/experiences/surf-lessons-640.webp";
import galleryActivityImageLarge from "../../../assets/images/optimized/homepage/experiences/surf-lessons-1280.webp";
import galleryWellnessImageSmall from "../../../assets/images/optimized/homepage/gallery/outdoor-yoga-class-600.webp";
import galleryWellnessImageLarge from "../../../assets/images/optimized/homepage/gallery/outdoor-yoga-class-1200.webp";
import "./gallery-preview.css";

const galleryImages = [
  {
    src: galleryResortImageLarge,
    srcSmall: galleryResortImageSmall,
    width: 1200,
    alt: "Guests preparing for a kayak experience from Sámara Beach",
  },
  {
    src: galleryRoomImageLarge,
    srcSmall: galleryRoomImageSmall,
    width: 1200,
    alt: "Beachfront terrace at a Villas Playa Sámara villa",
  },
  {
    src: galleryDiningImageLarge,
    srcSmall: galleryDiningImageSmall,
    width: 1200,
    alt: "Resort cocktails served beside the pool",
  },
  {
    src: galleryActivityImageLarge,
    srcSmall: galleryActivityImageSmall,
    width: 1280,
    alt: "Surf lesson in the warm Pacific waters near Sámara",
  },
  {
    src: galleryWellnessImageLarge,
    srcSmall: galleryWellnessImageSmall,
    width: 1200,
    alt: "Outdoor guided yoga class at the resort",
  },
] as const;

export function GalleryPreview() {
  return (
    <section
      className="gallery-preview"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="content-wrap gallery-preview__intro">
        <div data-home-motion="copy">
          <p className="section-kicker">A Closer Look</p>
          <h2 className="section-title" id="gallery-title">
            See your stay in Sámara
          </h2>
        </div>
        <div data-home-motion="copy" data-home-motion-delay="1">
          <p className="section-copy">
            Explore the beachfront setting, tropical grounds, rooms and villas,
            dining experiences, resort activities, and relaxed moments that
            shape a stay at Villas Playa Sámara.
          </p>
          <span
            className="text-link"
            role="link"
            aria-disabled="true"
            title="Gallery page is not available yet"
          >
            View gallery
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </span>
        </div>
      </div>

      <div data-home-motion="gallery">
        <div className="gallery-preview__grid">
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <img
                src={image.src}
                srcSet={`${image.srcSmall} ${image.width / 2}w, ${image.src} ${image.width}w`}
                sizes="(max-width: 760px) 90vw, 42vw"
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
