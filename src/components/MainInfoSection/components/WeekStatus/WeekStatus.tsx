import useServices from "@services/useSrvices";
import styles from "./weekStatus.module.scss";
import sourceData from "@assets/icons/mainInfoSection/sourceData.svg";
import {
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/weatherEffects/weatherEffects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeakStatus = () => {
  const {
    getCurrentWeatherCode,
    getCurrentMinTemperature,
    getCurrentMaxTemperature,
    getCurrentWindSpeed,
    getCurrentWindGusts,
    getTomorrowWeatherCode,
    getTomorrowMinTemperature,
    getTomorrowMaxTemperature,
    getTomorrowWindSpeed,
    getTomorrowWindGusts,
    getWeekData,
    getWeekendData,
  } = useServices();

  const effect = getWeatherEffect(getCurrentWeatherCode);
  const info = getWeatherInfo(getCurrentWeatherCode);

  const effectTomorrow = getWeatherEffect(getTomorrowWeatherCode);
  const infoTomorrow = getWeatherInfo(getTomorrowWeatherCode);
  const windCategoryTomorrow = getWindCategory(getTomorrowWindSpeed);

  const { weekMin, weekMax, weekSpeed, weekEffect, weekGusts } = getWeekData();
  const infoWeek = weekEffect && getWeatherInfo(() => weekEffect.avgEffect);
  const effectWeek = weekEffect && getWeatherEffect(() => weekEffect.avgEffect);
  const windCategoryWeek =
    weekSpeed && getWindCategory(() => weekSpeed.avgDetails / 3.6);

  const weekend = getWeekendData();
  const first = weekend?.[0] ?? null;
  const { weekendMin, weekendMax, weekendSpeed, weekendEffect, weekendGusts } =
    first ?? {};
  const infoWeekend =
    weekendEffect !== undefined ? getWeatherInfo(() => weekendEffect) : null;
  const effectWeekend =
    weekendEffect !== undefined ? getWeatherEffect(() => weekendEffect) : null;
  const windCategoryWeekend =
    weekendSpeed !== undefined
      ? getWindCategory(() => weekendSpeed / 3.6)
      : null;

  return (
    <section>
      <Swiper
        className={styles.status_wrapper}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={8}
        navigation
      >
        <SwiperSlide className={styles.swiper_slide}>
          <a className={styles.status_item}>
            <div className={styles.status_title_wrapper}>
              <img src={effect} alt="" />
              <h3>Сегодня</h3>
            </div>
            <p>
              {info}·+{Math.round(getCurrentMinTemperature())}...+
              {Math.round(getCurrentMaxTemperature())} ·{windCategoryTomorrow}
              &nbsp;
              {Math.round(getCurrentWindSpeed())} м/с, порывы до&nbsp;
              {Math.round(getCurrentWindGusts())} м/с
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
              {infoTomorrow}·+{Math.round(getTomorrowMinTemperature())}...+
              {Math.round(getTomorrowMaxTemperature())} ·{windCategoryTomorrow}
              &nbsp;
              {Math.round(getTomorrowWindSpeed())} м/с, порывы до&nbsp;
              {Math.round(getTomorrowWindGusts())} м/с
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
              {infoWeek}·+
              {weekMin !== null ? Math.round(weekMin.avgDetails) : null}
              ...+
              {weekMax !== null ? Math.round(weekMax.avgDetails) : null} ·
              {windCategoryWeek}&nbsp;
              {weekSpeed !== null
                ? Math.round(weekSpeed.avgDetails / 3.6)
                : null}
              &nbsp; м/с, порывы до&nbsp;
              {weekGusts !== null
                ? Math.round(weekGusts.avgDetails / 3.6)
                : null}
              &nbsp; м/с
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
              {infoWeekend}·+{weekendMin ? Math.round(weekendMin) : null}...+
              {weekendMax ? Math.round(weekendMax) : null} ·
              {windCategoryWeekend}&nbsp;
              {weekendSpeed ? Math.round(weekendSpeed) : null} м/с, порывы
              до&nbsp;
              {weekendGusts ? Math.round(weekendGusts) : null} м/с
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
