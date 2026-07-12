import useServices from "@services/useSrvices";
import styles from "./weekStatus.module.scss";
import sourceData from "@assets/icons/mainInfoSection/sourceData.svg";
import {
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/weatherEffects/weatherEffects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

  const currentCode = getCurrentWeatherCode() ?? 0;
  const tomorrowCode = getTomorrowWeatherCode() ?? 0;
  const currentMinTemperature = getCurrentMinTemperature() ?? 0;
  const currentMaxTemperature = getCurrentMaxTemperature() ?? 0;
  const tomorrowMinTemperature = getTomorrowMinTemperature() ?? 0;
  const tomorrowMaxTemperature = getTomorrowMaxTemperature() ?? 0;

  const effect = getWeatherEffect(() => currentCode);
  const info = getWeatherInfo(() => currentCode);
  const windCategory = getWindCategory(() => getCurrentWindSpeed() / 3.6);

  const effectTomorrow = getWeatherEffect(() => tomorrowCode);
  const infoTomorrow = getWeatherInfo(() => tomorrowCode);
  const windCategoryTomorrow = getWindCategory(
    () => getTomorrowWindSpeed() / 3.6,
  );

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
              <img src={effect} alt="" />
              <h3>Сегодня</h3>
            </div>
            <p>
              {info}·+{Math.floor(currentMinTemperature)}...+
              {Math.floor(currentMaxTemperature)} ·{windCategory}
              &nbsp;
              {Math.floor(getCurrentWindSpeed() / 3.6)} м/с, порывы до&nbsp;
              {Math.floor(getCurrentWindGusts() / 3.6)} м/с
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
              {infoTomorrow}·+{Math.floor(tomorrowMinTemperature)}...+
              {Math.floor(tomorrowMaxTemperature)} ·{windCategoryTomorrow}
              &nbsp;
              {Math.floor(getTomorrowWindSpeed() / 3.6)} м/с, порывы до&nbsp;
              {Math.floor(getTomorrowWindGusts() / 3.6)} м/с
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
              {weekMin !== null ? Math.floor(weekMin.avgDetails) : null}
              ...+
              {weekMax !== null ? Math.floor(weekMax.avgDetails) : null} ·
              {windCategoryWeek}&nbsp;
              {weekSpeed !== null
                ? Math.floor(weekSpeed.avgDetails / 3.6)
                : null}
              &nbsp; м/с, порывы до&nbsp;
              {weekGusts !== null
                ? Math.floor(weekGusts.avgDetails / 3.6)
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
              {infoWeekend}·+{weekendMin ? Math.floor(weekendMin) : null}...+
              {weekendMax ? Math.floor(weekendMax) : null} ·
              {windCategoryWeekend}&nbsp;
              {weekendSpeed ? Math.floor(weekendSpeed) : null} м/с, порывы
              до&nbsp;
              {weekendGusts ? Math.floor(weekendGusts) : null} м/с
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
