import styles from "./pressureGroups.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import useServices from "@services/useServices";
import { getDayItemDayLabel, isFirstOnMonthDay } from "@utils/formatters";
import type { PressureStateActive } from "@ts/props";

const PressureGroups = ({ active, setActive }: PressureStateActive) => {
  const { getTwoWeekHourlyData } = useServices();
  const { twoWeeks } = getTwoWeekHourlyData;

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      spaceBetween={6}
      freeMode={true}
      touchRatio={1}
      navigation
    >
      {twoWeeks.map(({ dateKey, date, formatedDate }, i) => {
        const isActive = active === dateKey;

        return (
          <SwiperSlide
            className={styles.slide}
            key={dateKey}
            onClick={() => setActive?.(dateKey)}
            style={isActive ? { backgroundColor: "rgba(38, 38, 51, 1)" } : {}}
          >
            <p
              className={styles.name}
              style={isActive ? { color: "white" } : {}}
            >
              {isFirstOnMonthDay({
                i,
                date,
                dateKey,
                localDateData: {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                },
                fallback: getDayItemDayLabel(i, formatedDate),
              })}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PressureGroups;
