import { useCallback, useEffect, useRef, useState } from "react";
import type { PresentationSlideConfig } from "./presentationSlides";

type NavigationDirection = "forward" | "backward";

export function usePresentationPlayback(
  slides: readonly PresentationSlideConfig[],
  enabled: boolean,
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visitKey, setVisitKey] = useState(0);
  const [direction, setDirection] =
    useState<NavigationDirection>("forward");
  const currentIndexRef = useRef(0);
  const isAutoPlayingRef = useRef(true);
  const remainingRef = useRef(slides[0]?.duration ?? 20_000);
  const deadlineRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const generationRef = useRef(0);

  const cancelTimer = useCallback(() => {
    generationRef.current += 1;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (nextIndex: number, nextDirection: NavigationDirection) => {
      if (slides.length === 0) {
        return;
      }

      cancelTimer();
      const normalizedIndex =
        ((nextIndex % slides.length) + slides.length) % slides.length;

      currentIndexRef.current = normalizedIndex;
      remainingRef.current = slides[normalizedIndex].duration;
      deadlineRef.current = 0;
      setDirection(nextDirection);
      setCurrentIndex(normalizedIndex);
      setVisitKey((value) => value + 1);
    },
    [cancelTimer, slides],
  );

  const next = useCallback(
    () => goTo(currentIndexRef.current + 1, "forward"),
    [goTo],
  );

  const previous = useCallback(
    () => goTo(currentIndexRef.current - 1, "backward"),
    [goTo],
  );

  const pause = useCallback(() => {
    if (!isAutoPlayingRef.current) {
      return;
    }

    isAutoPlayingRef.current = false;
    remainingRef.current = Math.max(
      1,
      deadlineRef.current - performance.now(),
    );
    cancelTimer();
    setIsAutoPlaying(false);
  }, [cancelTimer]);

  const play = useCallback(() => {
    if (isAutoPlayingRef.current) {
      return;
    }

    isAutoPlayingRef.current = true;
    setIsAutoPlaying(true);
  }, []);

  const togglePlayback = useCallback(() => {
    if (isAutoPlayingRef.current) {
      pause();
    } else {
      play();
    }
  }, [pause, play]);

  const restart = useCallback(() => {
    cancelTimer();
    currentIndexRef.current = 0;
    remainingRef.current = slides[0]?.duration ?? 20_000;
    deadlineRef.current = 0;
    isAutoPlayingRef.current = true;
    setDirection("backward");
    setCurrentIndex(0);
    setIsAutoPlaying(true);
    setVisitKey((value) => value + 1);
  }, [cancelTimer, slides]);

  useEffect(() => {
    if (!enabled || !isAutoPlaying || slides.length === 0) {
      return;
    }

    const delay = Math.max(1, remainingRef.current);
    const scheduledIndex = currentIndex;
    const scheduledGeneration = generationRef.current + 1;

    generationRef.current = scheduledGeneration;
    deadlineRef.current = performance.now() + delay;
    timeoutRef.current = window.setTimeout(() => {
      if (
        generationRef.current !== scheduledGeneration ||
        !isAutoPlayingRef.current ||
        currentIndexRef.current !== scheduledIndex
      ) {
        return;
      }

      goTo(scheduledIndex + 1, "forward");
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [currentIndex, enabled, goTo, isAutoPlaying, slides, visitKey]);

  useEffect(() => cancelTimer, [cancelTimer]);

  return {
    currentIndex,
    direction,
    isAutoPlaying,
    next,
    pause,
    play,
    previous,
    restart,
    togglePlayback,
    visitKey,
  };
}
