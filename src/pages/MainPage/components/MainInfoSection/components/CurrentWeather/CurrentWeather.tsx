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
} from "@utils/weatherEffects";
import useServices from "@services/useSrvices";

const CurrentWeather = () => {
  const {
    CurrentWeatherCode,
    CurrentWindDirection,
    CurrentTemperature,
    CurrentApparentTemperature,
    CurrentWindSpeed,
    CurrentPressure,
    CurrentHumidity,
  } = useServices().getCurrentData() || {};
  const { YesterdayCurrentTemp } = useServices().getYesterdayData() || {};
  const { TodayRainChance } = useServices().getTodayData() || {};
  if (
    !CurrentWeatherCode ||
    !CurrentWindDirection ||
    !CurrentTemperature ||
    !TodayRainChance ||
    !CurrentApparentTemperature ||
    !YesterdayCurrentTemp
  )
    return null;

  const effect = getWeatherEffect(CurrentWeatherCode);
  const direction = getWindDirection(CurrentWindDirection);
  const info = getWeatherInfo(CurrentWeatherCode);
  const precipitation = getRainChance(TodayRainChance);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>
          {CurrentTemperature > 0 ? `+${CurrentTemperature}` : CurrentTemperature}°
        </p>
        <img src={effect} alt="" />
        <div className={styles.summary}>
          <p className={styles.summary_item}>{info}</p>
          <p className={styles.summary_item}>Сегодня {precipitation}</p>
        </div>
      </div>
      <div className={styles.weather_details}>
        <div className={styles.degrees_details}>
          <p>
            Ощущается как{" "}
            {CurrentApparentTemperature > 0
              ? `+${CurrentApparentTemperature}`
              : CurrentApparentTemperature}
            °
          </p>
          <p>
            Вчера было{" "}
            {YesterdayCurrentTemp > 0
              ? `+${YesterdayCurrentTemp}`
              : YesterdayCurrentTemp}
            °
          </p>
        </div>
        <div className={styles.effect_details}>
          <div className={styles.effect_details_item}>
            <img src={WindSpeed} alt="" />
            <p>
              {CurrentWindSpeed} м/с, {direction}
            </p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Pressure} alt="" />
            <p>{CurrentPressure}</p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Humidity} alt="" />
            {CurrentHumidity}%
          </div>
          <div className={styles.effect_details_item}>
            <img src={WaterTemp} alt="" />
            <p>{CurrentTemperature > 0 ? `+${CurrentTemperature / 2}` : CurrentTemperature / 2}°</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
