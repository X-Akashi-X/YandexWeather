import useServices from "@services/useSrvices";
import styles from "./weekStatus.module.scss";
import sourceData from "@assets/icons/mainInfoSection/sourceDataIcon.svg";
import {
  getPlusOrNot,
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/weatherEffects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeakStatus = () => {
  const {
    todayMaxTemperature,
    todayMinTemperature,
    todayWindGusts,
    todayWindSpeed,
    todayWeatherCode,
  } = useServices().getTodayData() || {};
  const {
    tomorrowWeatherCode,
    tomorrowMinTemperature,
    tomorrowMaxTemperature,
    tomorrowWindSpeed,
    tomorrowWindGusts,
  } = useServices().getTomorrowData() || {};
  const {
    weekMinTemperature,
    weekMaxTemperature,
    weekWindSpeed,
    weekWindGusts,
    weekWeatherCode,
  } = useServices().getWeekData() || {};
  const {
    weekendMinTemperature,
    weekendMaxTemperature,
    weekendWindSpeed,
    weekendWindGusts,
    weekendWeatherCode,
  } = useServices().getWeekendData() || {};

  if (
    !todayWeatherCode ||
    !todayWindSpeed ||
    !todayMinTemperature ||
    !todayMaxTemperature ||
    !tomorrowWeatherCode ||
    !tomorrowWindSpeed ||
    !tomorrowMinTemperature ||
    !tomorrowMaxTemperature ||
    !weekWeatherCode ||
    !weekWindSpeed ||
    !weekMinTemperature ||
    !weekMaxTemperature ||
    !weekendWeatherCode ||
    !weekendWindSpeed ||
    !weekendMinTemperature ||
    !weekendMaxTemperature
  )
    return null;

  const effectToday = getWeatherEffect(todayWeatherCode);
  const infoToday = getWeatherInfo(todayWeatherCode);
  const windCategoryToday = getWindCategory(todayWindSpeed);

  const infoTomorrow = getWeatherInfo(tomorrowWeatherCode);
  const effectTomorrow = getWeatherEffect(tomorrowWeatherCode);
  const windCategoryTomorrow = getWindCategory(tomorrowWindSpeed);

  const infoWeek = getWeatherInfo(weekWeatherCode);
  const effectWeek = getWeatherEffect(weekWeatherCode);
  const windCategoryWeek = getWindCategory(weekWindSpeed);

  const infoWeekend = getWeatherInfo(weekendWeatherCode);
  const effectWeekend = getWeatherEffect(weekendWeatherCode);
  const windCategoryWeekend = getWindCategory(weekendWindSpeed);

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
              <img src={effectToday} alt="" />
              <h3>Сегодня</h3>
            </div>
            <p>
              {infoToday}·{getPlusOrNot(todayMinTemperature)}...
              {getPlusOrNot(todayMaxTemperature)}° ·{windCategoryToday}
              &nbsp;
              {todayWindSpeed} м/с, порывы до
              {todayWindGusts} м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={effectTomorrow} alt="" />
              <h3>Завтра</h3>
            </div>
            <p>
              {infoTomorrow}·{getPlusOrNot(tomorrowMinTemperature)}...
              {getPlusOrNot(tomorrowMaxTemperature)}° ·{windCategoryTomorrow}
              &nbsp;
              {tomorrowWindSpeed} м/с, порывы до
              {tomorrowWindGusts} м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={effectWeek || undefined} alt="" />
              <h3>На этой неделе</h3>
            </div>
            <p>
              {infoWeek}·{getPlusOrNot(weekMinTemperature)}
              ...
              {getPlusOrNot(weekMaxTemperature)}° ·{windCategoryWeek}&nbsp;
              {weekWindSpeed}
              м/с, порывы до
              {weekWindGusts}
              м/с
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={effectWeekend || undefined} alt="" />
              <h3>В выходные</h3>
            </div>
            <p>
              {infoWeekend}·{getPlusOrNot(weekendMinTemperature)}...
              {getPlusOrNot(weekendMinTemperature)}° ·{windCategoryWeekend}&nbsp;
              {weekendWindSpeed} м/с, порывы до
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
