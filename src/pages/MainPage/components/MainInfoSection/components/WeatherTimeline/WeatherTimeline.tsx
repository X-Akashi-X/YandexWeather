import styles from "./weatherTimeline.module.scss";
import { Link } from "react-router-dom";
import useServices from "@services/useServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { Fragment } from "react/jsx-runtime";

const WeatherTimeline = () => {
  const { getTimeLineData } = useServices();
  const data = getTimeLineData;

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.timeline_wrapper}
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        spaceBetween={0}
        slidesPerGroup={3}
        freeMode={true}
        touchRatio={1}
        navigation
      >
        {data.map(
          (
            {
              timeLineDateKey,
              timeLineWeatherEffect,
              timeLineDate,
              timeLineTime,
              timeLineTemperature,
              timeLineWeatherInfo,
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
              <Fragment key={timeLineDateKey}>
                {isNewDay && (
                  <SwiperSlide className={styles.line_slide}>
                    <div className={styles.day_separator}></div>
                  </SwiperSlide>
                )}
                <SwiperSlide className={styles.swiper_slide}>
                  <Link to="/" className={styles.weather_timeline_item}>
                    <p>
                      {isNewDay
                        ? `${nextDayOfWeek}, ${timeLineTime}`
                        : timeLineTime}
                    </p>
                    <img
                      src={timeLineWeatherEffect}
                      alt={timeLineWeatherInfo}
                    />
                    <p>{timeLineTemperature}°</p>
                  </Link>
                </SwiperSlide>
              </Fragment>
            );
          },
        )}
      </Swiper>
    </section>
  );
};

export default WeatherTimeline;
