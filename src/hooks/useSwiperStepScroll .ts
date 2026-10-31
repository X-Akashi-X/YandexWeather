import { useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

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
      if (!swiper) return;

      const target = -(index * stepWidth) + swiper.width / 2 - stepWidth / 2;
      const clamped = Math.max(
        swiper.maxTranslate(),
        Math.min(swiper.minTranslate(), target),
      );

      swiper.setTranslate(clamped);
      swiper.updateSlidesClasses();
    },
    [swiper, stepWidth],
  );

  return {
    swiper,
    setSwiper,
    scroll,
    isEnd,
    isStart,
    updateEdges,
    scrollToIndex,
  };
};
