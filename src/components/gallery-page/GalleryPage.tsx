import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./gallery-page.css";

const galleryAssets = import.meta.glob<string>(
  "../../../assets/images/optimized/gallery/gallery-image-*-*.webp",
  { eager: true, query: "?url", import: "default" },
);

const imageSizes = [
  [1, 1600, 1280],
  [2, 1600, 1066],
  [3, 1171, 780],
  [4, 1200, 800],
  [5, 780, 1171],
  [6, 1200, 800],
  [7, 1200, 800],
  [8, 1365, 2048],
  [9, 1600, 1102],
  [10, 2500, 1665],
  [11, 2048, 1150],
  [12, 1200, 900],
  [13, 2500, 1875],
  [14, 1920, 1602],
  [15, 2500, 1667],
  [16, 2500, 1667],
  [17, 2500, 1656],
  [18, 1147, 1920],
  [19, 1920, 1280],
  [20, 1600, 1019],
  [21, 1600, 1019],
  [22, 1600, 1071],
  [23, 1600, 1060],
  [24, 1600, 1067],
  [25, 1600, 1068],
  [26, 1600, 1067],
  [27, 2500, 1668],
  [28, 1920, 1280],
  [29, 1920, 1280],
  [30, 1920, 1280],
  [31, 1920, 1280],
  [32, 1280, 1920],
  [33, 1254, 1980],
  [34, 1920, 1079],
  [35, 1920, 1470],
] as const;

type GalleryImage = {
  id: number;
  small: string;
  large: string;
  width: number;
  height: number;
};

const getAsset = (id: number, size: 720 | 1600) => {
  const match = Object.entries(galleryAssets).find(([path]) =>
    path.endsWith(`/gallery-image-${id}-${size}.webp`),
  );

  if (!match) {
    throw new Error(`Missing optimized gallery image ${id} at ${size}px`);
  }

  return match[1];
};

const galleryImages: readonly GalleryImage[] = imageSizes.map(
  ([id, width, height]) => ({
    id,
    small: getAsset(id, 720),
    large: getAsset(id, 1600),
    width,
    height,
  }),
);

const galleryHeroImage =
  galleryImages.find((image) => image.id === 35) ?? galleryImages[0];

const shuffleImages = (images: readonly GalleryImage[]) => {
  const shuffled = [...images];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

const galleryDirectionContract = `
THESIS: A living resort mosaic makes every visit feel newly discovered; it refuses a static brochure grid.
OWN-WORLD: VPS forest, sand, lime, white, square edges, fine rules, and image-led surfaces.
STORY: Visitors enter through Sámara Bay, wander a reshuffled visual collection, and open any moment at full scale.
FIRST VIEWPORT: One scenic photograph fills the screen beneath the shared header; grounded copy and a gallery cue sit low in the frame.
FORM: Living mosaic, fourth grounded structure; seed a2e7e6cf.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function GalleryPage() {
  usePageMetadata(
    "Gallery | Villas Playa Sámara",
    "Explore Villas Playa Sámara through its beachfront setting, tropical grounds, rooms and villas, dining, activities, and relaxed moments.",
  );

  const [images] = useState(() => shuffleImages(galleryImages));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);
  const lightboxOpen = selectedIndex !== null;

  useEffect(() => {
    const contract = document.createComment(galleryDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);

    return () => contract.remove();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => returnFocusRef.current?.focus());
    };
  }, [images.length, lightboxOpen]);

  const openImage = (index: number, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setSelectedIndex(index);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setSelectedIndex(null);
    }
  };

  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  return (
    <div className="site-shell gallery-page">
      <Header />

      <main id="main-content">
        <section className="gallery-page__hero" aria-labelledby="gallery-title">
          <img
            src={galleryHeroImage.large}
            srcSet={`${galleryHeroImage.small} 720w, ${galleryHeroImage.large} 1600w`}
            sizes="100vw"
            width={galleryHeroImage.width}
            height={galleryHeroImage.height}
            alt=""
            fetchPriority="high"
            decoding="async"
          />

          <div className="content-wrap gallery-page__hero-content">
            <h1 id="gallery-title">
              See your stay in{" "}
              <span className="gallery-page__script-accent">Sámara</span>
            </h1>
            <p>
              Explore the beachfront setting, tropical grounds, rooms and villas,
              dining experiences, resort activities, and relaxed moments that
              shape a stay at Villas Playa Sámara.
            </p>
            <a href="#gallery-collection">
              Explore the collection
              <span className="material-symbols-outlined" aria-hidden="true">
                south
              </span>
            </a>
          </div>
        </section>

        <section
          className="gallery-page__collection"
          id="gallery-collection"
          aria-labelledby="gallery-collection-title"
        >
          <header className="content-wrap gallery-page__collection-intro">
            <h2 className="section-title" id="gallery-collection-title">A different view, every visit.</h2>
            <p>
              This collection reshuffles whenever the page is refreshed, bringing
              a new mix of Sámara moments to the surface each time.
            </p>
          </header>

          <div className="gallery-page__mosaic">
            {images.map((image, index) => (
              <button
                className="gallery-page__tile"
                type="button"
                key={image.id}
                aria-label={`Open gallery image ${index + 1} of ${images.length}`}
                onClick={(event) => openImage(index, event.currentTarget)}
                style={{ "--tile-index": index } as CSSProperties}
              >
                <img
                  src={image.small}
                  srcSet={`${image.small} 720w, ${image.large} 1600w`}
                  sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  width={image.width}
                  height={image.height}
                  alt=""
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="gallery-page__tile-action" aria-hidden="true">
                  <span>View</span>
                  <span className="material-symbols-outlined">open_in_full</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {selectedImage && selectedIndex !== null && (
        <div
          className="gallery-page__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${selectedIndex + 1} of ${images.length}`}
          onMouseDown={closeOnBackdrop}
        >
          <div className="gallery-page__lightbox-toolbar">
            <p aria-live="polite">
              <span>Villas Playa Sámara</span>
              {selectedIndex + 1} / {images.length}
            </p>
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={() => setSelectedIndex(null)}
              autoFocus
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                close
              </span>
            </button>
          </div>

          <div className="gallery-page__lightbox-stage">
            <button
              className="gallery-page__lightbox-control gallery-page__lightbox-control--previous"
              type="button"
              aria-label="View previous image"
              onClick={showPrevious}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_back
              </span>
            </button>

            <img
              src={selectedImage.large}
              width={selectedImage.width}
              height={selectedImage.height}
              alt=""
              decoding="async"
            />

            <button
              className="gallery-page__lightbox-control gallery-page__lightbox-control--next"
              type="button"
              aria-label="View next image"
              onClick={showNext}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
