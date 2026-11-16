import styles from "./moonMonth.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import useServices from "@services/useServices";
import { useSwiperStepScroll } from "@hooks/useSwiperStepScroll";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/store";
import { setActiveMonthIndex } from "@store/slices/moonCalendarSlice";
import { INDEXOF_NOT_FOUND } from "@constants/utils";

/**
 * Horizontal scrollable month selector built with Swiper for the lunar calendar.
 * Automatically scrolls to the active month slide after web fonts finish loading and updates the active month in Redux on click.
 *
 * @param props - Component properties.
 * @param props.active - The zero-based index (`0` to `11`) of the currently selected month.
 * @returns The rendered Swiper component containing clickable month slides.
 */
const MoonMonth = ({ active }: { active: number }) => {
  const { getMonthlyDailyData } = useServices();
  const dispatch: AppDispatch = useDispatch();
  const activeMonthIndex = getMonthlyDailyData.findIndex(
    (m) => m.monthlyIndex === active,
  );
  const { swiper, setSwiper, scrollToSlide } = useSwiperStepScroll(0, 1);

  useLayoutEffect(() => {
    if (!swiper || activeMonthIndex === INDEXOF_NOT_FOUND) return;

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      swiper.update();
      scrollToSlide(activeMonthIndex);
    });

    return () => {
      cancelled = true;
    };
  }, [swiper, scrollToSlide, activeMonthIndex]);

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      freeMode={true}
      touchRatio={1}
      navigation
      onSwiper={(s) => {
        setSwiper(s);
      }}
    >
      {getMonthlyDailyData.map(({ monthlyIndex, monthly }) => {
        const isActive = active === monthlyIndex;

        return (
          <SwiperSlide
            className={styles.slide}
            key={monthlyIndex}
            onClick={() => dispatch(setActiveMonthIndex(monthlyIndex))}
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
