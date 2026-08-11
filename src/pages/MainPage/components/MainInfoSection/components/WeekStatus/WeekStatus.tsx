import useServices from "@services/useSrvices";
import styles from "./weekStatus.module.scss";
import sourceData from "@assets/icons/mainInfoSection/sourceDataIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const WeakStatus = () => {
  const {
    todayMaxTemperature,
    todayMinTemperature,
    todayWindGusts,
    todayMinWindSpeed,
    todayMaxWindSpeed,
    todayWeatherEffect,
    todayWeatherInfo,
    todayWindCategory,
  } = useServices().getTodayData() || {};
  const {
    tomorrowWeatherEffect,
    tomorrowMinTemperature,
    tomorrowMaxTemperature,
    tomorrowMinWindSpeed,
    tomorrowMaxWindSpeed,
    tomorrowWindGusts,
    tomorrowWeatherInfo,
    tomorrowWindCategory,
  } = useServices().getTomorrowData() || {};
  const {
    weekMinTemperature,
    weekMaxTemperature,
    weekMinWindSpeed,
    weekMaxWindSpeed,
    weekWindGusts,
    weekWeatherEffect,
    weekWeatherInfo,
    weekWindCategory,
  } = useServices().getWeekData() || {};
  const {
    weekendMinTemperature,
    weekendMaxTemperature,
    weekendMinWindSpeed,
    weekendMaxWindSpeed,
    weekendWindGusts,
    weekendWeatherEffect,
    weekendWeatherInfo,
    weekendWindCategory,
  } = useServices().getWeekendData() || {};

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.status_wrapper}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={8}
        navigation
      >
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={todayWeatherEffect} alt="" />
              <h3>Сегодня</h3>
            </div>
            <p>
              {todayWeatherInfo}·{todayMinTemperature}...
              {todayMaxTemperature}° ·{todayWindCategory}
              &nbsp;
              {todayMinWindSpeed}-{todayMaxWindSpeed} м/с, порывы до
              {todayWindGusts} м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={tomorrowWeatherEffect} alt="" />
              <h3>Завтра</h3>
            </div>
            <p>
              {tomorrowWeatherInfo}·{tomorrowMinTemperature}...
              {tomorrowMaxTemperature}° ·{tomorrowWindCategory}
              &nbsp;
              {tomorrowMinWindSpeed}-{tomorrowMaxWindSpeed} м/с, порывы до
              {tomorrowWindGusts} м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={weekWeatherEffect} alt="" />
              <h3>На этой неделе</h3>
            </div>
            <p>
              {weekWeatherInfo}·{weekMinTemperature}
              ...
              {weekMaxTemperature}° ·{weekWindCategory}&nbsp;
              {weekMinWindSpeed}-{weekMaxWindSpeed}
              м/с, порывы до
              {weekWindGusts}
              м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={weekendWeatherEffect} alt="" />
              <h3>В выходные</h3>
            </div>
            <p>
              {weekendWeatherInfo}·{weekendMinTemperature}...
              {weekendMaxTemperature}° ·{weekendWindCategory}
              &nbsp;
              {weekendMinWindSpeed}-{weekendMaxWindSpeed} м/с, порывы до
              {weekendWindGusts} м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={sourceData} alt="" />
              <h3>Источник данных</h3>
            </div>
            <p>
              Нажмите чтобы посмотреть показания с источников погодных данных
            </p>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeakStatus;
