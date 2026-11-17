import { useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

/**
 * Custom React hook for controlling a Swiper instance with fixed pixel-step scrolling,
 * boundary detection (`isStart`, `isEnd`), and programmatic centering on specific items or slides.
 *
 * @param stepWidth - The width of a single step/item in pixels.
 * @param stepsPerClick - The number of steps to scroll per navigation action.
 * @param duration - The transition animation duration in milliseconds (defaults to `300`).
 * @returns An object containing the Swiper instance, state setter, edge flags, and scroll control callbacks.
 */
export const useSwiperStepScroll = (
  stepWidth: number,
  stepsPerClick: number,
  duration: number = 300,
) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateEdges = useCallback((s: SwiperType) => {
    setIsStart(s.isBeginning);
    setIsEnd(s.isEnd);
  }, []);

  const scroll = useCallback(
    (direction: 1 | -1) => {
      if (!swiper) return;

      const target =
        swiper.getTranslate() - direction * stepsPerClick * stepWidth;
      const clamped = Math.max(
        swiper.maxTranslate(),
        Math.min(swiper.minTranslate(), target),
      );

      swiper.translateTo(clamped, duration);
    },
    [swiper, stepWidth, stepsPerClick, duration],
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!swiper || !swiper.width) return;

      const target = -(index * stepWidth) + swiper.width / 2 - stepWidth / 2;
      const clamped = Math.max(
        swiper.maxTranslate(),
        Math.min(swiper.minTranslate(), target),
      );

      swiper.translateTo(clamped, 0);
      updateEdges(swiper);
    },
    [swiper, stepWidth, updateEdges],
  );

  const scrollToSlide = useCallback(
    (index: number) => {
      if (!swiper) return;
      swiper.slideTo(index, 0);
    },
    [swiper],
  );

  return {
    swiper,
    setSwiper,
    scroll,
    isEnd,
    isStart,
    updateEdges,
    scrollToIndex,
    scrollToSlide,
  };
};
