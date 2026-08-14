import styles from "./weatherTimeline.module.scss";
import useServices from "@services/useSrvices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const WeatherTimeline = () => {
  const data = useServices().getTimeLineData || [];

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.timeline_wrapper}
        modules={[Navigation]}
        slidesPerView={10}
        spaceBetween={50}
        slidesPerGroup={3}
        navigation
      >
        {data.map((item, i) => {
          const {
            timeLineWeatherEffect,
            timeLineDate,
            timeLineTime,
            timeLineTemperature,
          } = item;

          const prev = data[i - 1];
          const isNewDay = prev && prev.timeLineDate !== timeLineDate;
          const nextDayOfWeek = new Date(timeLineDate).toLocaleString("ru-RU", {
            weekday: "short",
          });

          return (
            <SwiperSlide className={styles.swiper_slide} key={i}>
              {isNewDay && <div className={styles.day_separator}></div>}
              <div className={styles.weather_timeline_item}>
                <p>
                  {isNewDay
                    ? `${nextDayOfWeek}, ${timeLineTime}`
                    : timeLineTime}
                </p>
                <img src={timeLineWeatherEffect} alt="" />
                <p>{timeLineTemperature}°</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default WeatherTimeline;
