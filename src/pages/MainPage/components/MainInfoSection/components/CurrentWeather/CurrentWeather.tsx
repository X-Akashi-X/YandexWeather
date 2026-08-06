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
    weatherCode,
    windDirection,
    temperature,
    apparentTemperature,
    windSpeed,
    pressure,
    humidity,
  } = useServices().getCurrentData() || {};
  const { YesterdayCurrentTemp } = useServices().getYesterdayData() || {};
  const { rainChance } = useServices().getTodayData() || {};
  if (
    !weatherCode ||
    !windDirection ||
    !temperature ||
    !rainChance ||
    !apparentTemperature ||
    !YesterdayCurrentTemp
  )
    return null;

  const effect = getWeatherEffect(weatherCode);
  const direction = getWindDirection(windDirection);
  const info = getWeatherInfo(weatherCode);
  const precipitation = getRainChance(rainChance);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>
          {temperature > 0 ? `+${temperature}` : temperature}°
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
            {apparentTemperature > 0
              ? `+${apparentTemperature}`
              : apparentTemperature}
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
              {windSpeed} м/с, {direction}
            </p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Pressure} alt="" />
            <p>{pressure}</p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={Humidity} alt="" />
            {humidity}%
          </div>
          <div className={styles.effect_details_item}>
            <img src={WaterTemp} alt="" />
            <p>{temperature > 0 ? `+${temperature / 2}` : temperature / 2}°</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
