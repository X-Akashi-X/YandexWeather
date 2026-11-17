import styles from "./UVIndexDays.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import useServices from "@services/useServices";
import { getDayItemDayLabel, isFirstOnMonthDay } from "@utils/formatters";
import type { UVIndexStateActive } from "@ts/props";

const UVIndexDays = ({ activeDateKey, setActive }: UVIndexStateActive) => {
  const { getTwoWeekHourlyData } = useServices();
  const { tenDays } = getTwoWeekHourlyData;

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      spaceBetween={6}
      freeMode={true}
      touchRatio={1}
    >
      {tenDays.map(({ dateKey, date, formatedDate, twoWeekUVCategory }, i) => {
        const isActive = activeDateKey === dateKey;

        return (
          <SwiperSlide
            className={styles.slide}
            key={dateKey}
            onClick={() => setActive?.(dateKey)}
            style={isActive ? { backgroundColor: "rgba(38, 38, 51, 1)" } : {}}
          >
            <div
              className={styles.circle}
              style={{ backgroundColor: `${twoWeekUVCategory.color}` }}
            />
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

export default UVIndexDays;
