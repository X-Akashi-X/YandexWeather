import styles from "./moonMonth.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import useServices from "@services/useServices";
import type { MoonStateActive } from "@ts/props";
import { useSwiperStepScroll } from "@hooks/useSwiperStepScroll";
import { useLayoutEffect, useRef } from "react";
import { INDEXOF_NOT_FOUND } from "@constants/utils";

const MoonMonth = ({ active, setActive }: MoonStateActive) => {
  const { getMontlyData } = useServices();
  const activeMonthIndex = getMontlyData.findIndex((m) => m.monthly === active);
  const { swiper, setSwiper, scrollToSlide } = useSwiperStepScroll(0, 1);

  const didInitialScroll = useRef(false);

  useLayoutEffect(() => {
    if (!swiper || didInitialScroll.current) return;
    if (activeMonthIndex === INDEXOF_NOT_FOUND) return;

    swiper.update();
    scrollToSlide(activeMonthIndex);
    didInitialScroll.current = true;
  }, [swiper, scrollToSlide, activeMonthIndex]);

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      spaceBetween={6}
      freeMode={true}
      touchRatio={1}
      navigation
      onSwiper={(s) => {
        setSwiper(s);
      }}
    >
      {getMontlyData.map(({ monthly }) => {
        const isActive = active === monthly;

        return (
          <SwiperSlide
            className={styles.slide}
            key={monthly}
            onClick={() => setActive?.(monthly)}
            style={isActive ? { backgroundColor: "rgba(38, 38, 51, 1)" } : {}}
          >
            <p
              className={styles.name}
              style={isActive ? { color: "white" } : {}}
            >
              {monthly}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MoonMonth;
