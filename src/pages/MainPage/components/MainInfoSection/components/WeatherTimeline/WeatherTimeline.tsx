import styles from "./weatherTimeline.module.scss";
import useServices from "@services/useSrvices";
import { getPlusOrNot, getWeatherEffect } from "@utils/weatherEffects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeatherTimeline = () => {
  const data = useServices().getTimeLineData() || [];

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.timeline_wrapper}
        modules={[Navigation]}
        slidesPerView={15}
        slidesPerGroup={3}
        navigation
      >
        {data.map((item, i) => {
          const { timeLineWeatherCode, timeLineDate, timeLineTime, timeLineTemperature } = item;
          const effect = getWeatherEffect(timeLineWeatherCode);

          const prev = data[i - 1];
          const isNewDay = prev && prev.timeLineDate !== timeLineDate;

          return (
            <SwiperSlide className={styles.swiper_slide} key={i}>
              {isNewDay && <div className={styles.day_separator}></div>}
              <div className={styles.weather_timeline_item}>
                <p>{isNewDay ? `Вт, ${timeLineTime}` : timeLineTime}</p>
                <img src={effect} alt="" />
                <p>{getPlusOrNot(timeLineTemperature)}°</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default WeatherTimeline;
