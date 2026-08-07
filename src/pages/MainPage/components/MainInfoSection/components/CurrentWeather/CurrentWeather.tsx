import styles from "./currentWeather.module.scss";
import WindSpeed from "@assets/icons/mainInfoSection/windSpeedIcon.svg";
import Pressure from "@assets/icons/mainInfoSection/pressureIcon.svg";
import Humidity from "@assets/icons/mainInfoSection/humidityIcon.svg";
import WaterTemp from "@assets/icons/waterTempIcon.svg";
import {
  getWeatherEffect,
  getWeatherInfo,
  getRainChance,
  getWindDirection,
  getPlusOrNot,
} from "@utils/weatherEffects";
import useServices from "@services/useSrvices";

const CurrentWeather = () => {
  const {
    currentWeatherCode,
    currentWindDirection,
    currentTemperature,
    currentApparentTemperature,
    currentWindSpeed,
    currentPressure,
    currentHumidity,
  } = useServices().getCurrentData() || {};
  const { yesterdayCurrentTemp } = useServices().getYesterdayData() || {};
  const { todayRainChance } = useServices().getTodayData() || {};
  if (
    !currentWeatherCode ||
    !currentWindDirection ||
    !currentTemperature ||
    !todayRainChance ||
    !currentApparentTemperature ||
    !yesterdayCurrentTemp
  )
    return null;

  const effect = getWeatherEffect(currentWeatherCode);
  const direction = getWindDirection(currentWindDirection);
  const info = getWeatherInfo(currentWeatherCode);
  const precipitation = getRainChance(todayRainChance);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>{getPlusOrNot(currentTemperature)}°</p>
        <img src={effect} alt="" />
        <div className={styles.summary}>
          <p className={styles.summary_item}>{info}</p>
          <p className={styles.summary_item}>Сегодня {precipitation}</p>
        </div>
      </div>
      <div className={styles.weather_details}>
        <div className={styles.degrees_details}>
          <p>Ощущается как {getPlusOrNot(currentApparentTemperature)}°</p>
          <p>Вчера было {getPlusOrNot(yesterdayCurrentTemp)}°</p>
        </div>
        <div className={styles.effect_details}>
          <div className={styles.effect_details_item}>
            <img src={WindSpeed} alt="" />
            <p>
              {currentWindSpeed} м/с, {direction}
            </p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Pressure} alt="" />
            <p>{currentPressure}</p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Humidity} alt="" />
            {currentHumidity}%
          </div>
          <div className={styles.effect_details_item}>
            <img src={WaterTemp} alt="" />
            <p>{getPlusOrNot(currentTemperature - 2)}°</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
