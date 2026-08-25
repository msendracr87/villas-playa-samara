import { useEffect, useRef, useState } from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import {
  presentationSlides,
  presentationTotalSlides,
} from "./presentationSlides";
import { usePresentationPlayback } from "./usePresentationPlayback";
import "./presentation.css";

const canvasWidth = 1920;
const canvasHeight = 1080;
const controlBarHeight = 52;

function usePresentationLayout() {
  const [layout, setLayout] = useState({
    scale: 1,
    canvasTop: 0,
    controlsBottom: 18,
  });

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;

      const scale = Math.min(
        viewportWidth / canvasWidth,
        viewportHeight / canvasHeight,
      );
      const remainingHeight = Math.max(
        0,
        viewportHeight - canvasHeight * scale,
      );
      const canvasTop = Math.min(24, remainingHeight / 2);
      const lowerLetterbox = remainingHeight - canvasTop;
      const controlsBottom =
        lowerLetterbox >= controlBarHeight + 16
          ? (lowerLetterbox - controlBarHeight) / 2
          : 18;

      setLayout({ scale, canvasTop, controlsBottom });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, []);

  return layout;
}

function usePresentationAssetsReady(
  deckRef: React.RefObject<HTMLDivElement | null>,
) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const deck = deckRef.current;

    if (!deck) {
      return;
    }

    const imagePromises = Array.from(deck.querySelectorAll("img")).map(
      (image) => {
        if (image.complete) {
          return image.decode?.().catch(() => undefined) ?? Promise.resolve();
        }

        return new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      },
    );

    const videoPromises = Array.from(deck.querySelectorAll("video")).map(
      (video) => {
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          return Promise.resolve();
        }

        return new Promise<void>((resolve) => {
          video.addEventListener("loadeddata", () => resolve(), { once: true });
          video.addEventListener("error", () => resolve(), { once: true });
        });
      },
    );

    let cancelled = false;

    Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      ...imagePromises,
      ...videoPromises,
    ]).then(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [deckRef]);

  return isReady;
}

export function PresentationPage() {
  const deckRef = useRef<HTMLDivElement>(null);
  const layout = usePresentationLayout();
  const isReady = usePresentationAssetsReady(deckRef);
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));
  const {
    currentIndex,
    direction,
    isAutoPlaying,
    next,
    previous,
    restart,
    togglePlayback,
    visitKey,
  } = usePresentationPlayback(presentationSlides, isReady);
  const currentSlide = presentationSlides[currentIndex];

  usePageMetadata(
    "Villas Playa Sámara Presentation",
    "Discover Villas Playa Sámara through a self-running resort presentation.",
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const updateFullscreenState = () =>
      setIsFullscreen(Boolean(document.fullscreenElement));

    document.addEventListener("fullscreenchange", updateFullscreenState);
    return () =>
      document.removeEventListener("fullscreenchange", updateFullscreenState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("input, textarea, select, [contenteditable='true']")
      ) {
        return;
      }

      if (event.code === "Space") {
        if (
          event.target instanceof HTMLElement &&
          event.target.closest("button, a")
        ) {
          return;
        }

        event.preventDefault();
        togglePlayback();
      } else if (event.code === "ArrowLeft") {
        previous();
      } else if (event.code === "ArrowRight") {
        next();
      } else if (event.key.toLowerCase() === "r") {
        restart();
      } else if (event.key.toLowerCase() === "f") {
        void toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  }

  return (
    <main
      className={`presentation presentation--${direction}`}
      aria-label="Villas Playa Sámara presentation"
    >
      <a className="presentation__back" href="/">
        <span className="material-symbols-outlined" aria-hidden="true">
          arrow_back
        </span>
        <span>Back to website</span>
      </a>

      <div className="presentation__viewport">
        <div
          ref={deckRef}
          className="presentation__canvas"
          style={{
            top: `${layout.canvasTop}px`,
            transform: `translateX(-50%) scale(${layout.scale})`,
          }}
        >
          {presentationSlides.map((slide, index) => {
            const SlideComponent = slide.component;
            const state =
              index === currentIndex
                ? "active"
                : index < currentIndex
                  ? "before"
                  : "after";

            return (
              <section
                className={`presentation-slide presentation-slide--${state}`}
                aria-hidden={state !== "active"}
                aria-label={`Slide ${slide.number}: ${slide.title}`}
                key={slide.id}
              >
                <div
                  className="presentation-slide__content"
                  key={state === "active" ? visitKey : "inactive"}
                >
                  <SlideComponent isActive={state === "active"} />
                </div>
              </section>
            );
          })}

          {!isReady && (
            <div className="presentation__loading" role="status">
              <span className="presentation__loading-mark" aria-hidden="true" />
              <span>Preparing the presentation</span>
            </div>
          )}
        </div>
      </div>

      <p className="presentation__announcement" aria-live="polite">
        Slide {currentSlide.number} of {presentationTotalSlides}: {currentSlide.title}
      </p>

      <nav
        className="presentation__controls"
        aria-label="Presentation controls"
        style={{ bottom: `${layout.controlsBottom}px` }}
      >
        <button type="button" onClick={restart} disabled={!isReady} aria-label="Restart presentation">
          <span className="material-symbols-outlined" aria-hidden="true">restart_alt</span>
        </button>
        <button type="button" onClick={previous} disabled={!isReady} aria-label="Previous slide">
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        </button>
        <button
          className="presentation__playback"
          type="button"
          onClick={togglePlayback}
          disabled={!isReady}
          aria-label={isAutoPlaying ? "Pause automatic slide changes" : "Resume automatic slide changes"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isAutoPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
        <button type="button" onClick={next} disabled={!isReady} aria-label="Next slide">
          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </button>
        <span className="presentation__counter" aria-hidden="true">
          {String(currentSlide.number).padStart(2, "0")}
          <i />
          {presentationTotalSlides}
        </span>
        <button
          type="button"
          onClick={() => void toggleFullscreen()}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isFullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
        </button>
      </nav>
    </main>
  );
}
