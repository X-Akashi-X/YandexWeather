import styles from "./weatherTimeline.module.scss";
import useServices from "@services/useSrvices";
import { getWeatherEffect } from "@utils/weatherEffects/weatherEffects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeatherTimeline = () => {
  const { getTimeLineData } = useServices();
  const data = getTimeLineData();

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.timeline_wrapper}
        modules={[Navigation]}
        slidesPerView={15}
        slidesPerGroup={3}
        navigation
      >
        {data?.map((item, i) => {
          const effectData = getWeatherEffect(() => item.effect);

          const prev = data[i - 1];
          const isNewDay = prev && prev.date !== item.date;

          return (
            <SwiperSlide className={styles.swiper_slide} key={i}>
              {isNewDay && <div className={styles.day_separator}></div>}
              <div className={styles.weather_timeline_item}>
                <p>{item.time}</p>
                <img src={effectData} alt="" />
                <p>+{Math.floor(item.temp)}°</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default WeatherTimeline;
