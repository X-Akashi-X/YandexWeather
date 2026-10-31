import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export const useSwiperStepScroll = (
  stepWidth: number,
  stepPerClick: number,
  duration: number = 300,
) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateEdges = (s: SwiperType) => {
    setIsStart(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const scroll = (direction: 1 | -1) => {
    if (!swiper) return;

    const target = swiper.getTranslate() - direction * stepPerClick * stepWidth;
    const clamped = Math.max(
      swiper.maxTranslate(),
      Math.min(swiper.minTranslate(), target),
    );

    swiper.translateTo(clamped, duration);
  };

  const scrollToIndex = (index: number, speed = 0) => {
    if (!swiper) return;

    const target = -(index * stepWidth) + swiper.width / 2 - stepWidth / 2;
    const clamped = Math.max(
      swiper.maxTranslate(),
      Math.min(swiper.minTranslate(), target),
    );

    swiper.translateTo(clamped, speed, true, true);
  };

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
