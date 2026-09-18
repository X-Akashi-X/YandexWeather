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
              timeLineKey,
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
              <Fragment key={timeLineKey}>
                {isNewDay && (
                  <SwiperSlide
                    className={styles.separator_slide}
                    key={`separator-${timeLineKey}`}
                  >
                    <div className={styles.day_separator} />
                  </SwiperSlide>
                )}
                <SwiperSlide
                  className={styles.swiper_slide}
                  key={`item-${timeLineKey}`}
                >
                  <Link to="/" className={styles.weather_timeline_item}>
                    <p className={styles.time}>
                      {isNewDay
                        ? `${nextDayOfWeek}, ${timeLineTime}`
                        : timeLineTime}
                    </p>
                    <img
                      src={timeLineWeatherEffect}
                      alt={timeLineWeatherInfo}
                    />
                    <p className={styles.temperature}>{timeLineTemperature}°</p>
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
