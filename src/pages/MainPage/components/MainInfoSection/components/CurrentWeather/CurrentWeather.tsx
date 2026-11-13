import EffectDetailsItem from "./components/EffectDetailsItem/EffectDetailsItem";
import { getEffectDetailsConfig } from "./config";
import styles from "./currentWeather.module.scss";
import useServices from "@services/useServices";

const CurrentWeather = () => {
  const { getCurrentData, getYesterdayData, getTodayData } = useServices();

  const {
    currentWeatherEffect,
    currentWeatherInfo,
    currentTemperature,
    currentApparentTemperature,
  } = getCurrentData;
  const { yesterdayCurrentTemp } = getYesterdayData;
  const { todayPrecipitationProbability } = getTodayData;

  const effectDetails = getEffectDetailsConfig(getCurrentData);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.temperature}>
          {currentTemperature}
          <span className={styles.degrees}>°</span>
        </p>
        <img src={currentWeatherEffect} alt={currentWeatherInfo} />
        <div className={styles.break} />
        <div className={styles.summary}>
          <p className={styles.summary_item}>{currentWeatherInfo}</p>
          <p className={styles.summary_item}>
            Сегодня {todayPrecipitationProbability}
          </p>
        </div>
      </div>
      <div className={styles.weather_details}>
        <div className={styles.degrees_details}>
          <p>Ощущается как {currentApparentTemperature}°</p>
          <p>Вчера было {yesterdayCurrentTemp}°</p>
        </div>
        <div className={styles.effect_details}>
          {effectDetails.map(({ icon, alt, text, id }) => (
            <EffectDetailsItem icon={icon} alt={alt} text={text} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
