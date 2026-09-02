import styles from "./weatherTimeline.module.scss";
import { Link } from "react-router-dom";
import useServices from "@services/useServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const WeatherTimeline = () => {
  const { getTimeLineData } = useServices();
  const data = getTimeLineData;

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.timeline_wrapper}
        modules={[Navigation]}
        slidesPerView={8}
        spaceBetween={60}
        slidesPerGroup={3}
        navigation
        breakpoints={{
          781: {
            slidesPerView: 10,
          },
          601: {
            slidesPerView: 9,
          },
        }}
      >
        {data.map(
          (
            {
              timeLineDateKey,
              timeLineWeatherEffect,
              timeLineDate,
              timeLineTime,
              timeLineTemperature,
            },
            i,
          ) => {
            const prev = data[i - 1];
            const isNewDay = prev && prev.timeLineDate !== timeLineDate;
            const nextDayOfWeek = new Date(timeLineDate).toLocaleString(
              "ru-RU",
              {
                weekday: "short",
              },
            );

            return (
              <SwiperSlide
                className={styles.swiper_slide}
                key={timeLineDateKey}
              >
                {isNewDay && <div className={styles.day_separator}></div>}
                <Link to="/" className={styles.weather_timeline_item}>
                  <p>
                    {isNewDay
                      ? `${nextDayOfWeek}, ${timeLineTime}`
                      : timeLineTime}
                  </p>
                  <img src={timeLineWeatherEffect} alt="" />
                  <p>{timeLineTemperature}°</p>
                </Link>
              </SwiperSlide>
            );
          },
        )}
      </Swiper>
    </section>
  );
};

export default WeatherTimeline;
