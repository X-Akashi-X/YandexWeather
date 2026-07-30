import styles from "./currentWeather.module.scss";
import windSpeed from "@assets/icons/mainInfoSection/windSpeedIcon.svg";
import pressure from "@assets/icons/mainInfoSection/pressureIcon.svg";
import humidity from "@assets/icons/mainInfoSection/humidityIcon.svg";
import waterTemp from "@assets/icons/waterTempIcon.svg";
import {
  getWeatherEffect,
  getWeatherInfo,
  getRainChance,
} from "@utils/weatherEffects";
import { getWindDirection } from "@utils/weatherEffects";
import useServices from "@services/useSrvices";

const CurrentWeather = () => {
  const {
    getCurrentWeatherCode,
    getCurrentWindDirection,
    getCurrentTemperature,
    getCurrentApparent,
    getCurrentWindSpeed,
    getCurrentPressure,
    getCurrentHumidity,
    getHourlyTemperaturePrev,
    getDailyRainChance,
  } = useServices();

  const currentCode = getCurrentWeatherCode() ?? 0;
  const currentDirection = getCurrentWindDirection() ?? 0;
  const dailyChance = getDailyRainChance() ?? 0;
  const currentTemp = getCurrentTemperature() ?? 0;
  const currentApparent = getCurrentApparent() ?? 0;
  const hourlyTempPrev = getHourlyTemperaturePrev() ?? 0;
  const currentPressure = getCurrentPressure() ?? 0;

  const effect = getWeatherEffect(() => currentCode);
  const direction = getWindDirection(() => currentDirection);
  const info = getWeatherInfo(() => currentCode);
  const precipitation = getRainChance(() => dailyChance);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>
          <span>+</span>
          {Math.floor(currentTemp)}
          <span>°</span>
        </p>
        <img src={effect} alt="" />
        <div className={styles.summary}>
          <p className={styles.summary_item}>{info}</p>
          <p className={styles.summary_item}>Сегодня {precipitation}</p>
        </div>
      </div>
      <div className={styles.weather_details}>
        <div className={styles.degrees_details}>
          <p>Ощущается как {Math.floor(currentApparent)}°</p>
          <p>Вчера было {Math.floor(hourlyTempPrev)}°</p>
        </div>
        <div className={styles.effect_details}>
          <div className={styles.effect_details_item}>
            <img src={windSpeed} alt="" />
            <p>
              {Math.floor(getCurrentWindSpeed() / 3.6)} м/с, {direction}
            </p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={pressure} alt="" />
            <p>{Math.floor(currentPressure)}</p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={humidity} alt="" />
            {getCurrentHumidity()}%
          </div>
          <div className={styles.effect_details_item}>
            <img src={waterTemp} alt="" />
            <p>{Math.floor(currentTemp - 2)}°</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
