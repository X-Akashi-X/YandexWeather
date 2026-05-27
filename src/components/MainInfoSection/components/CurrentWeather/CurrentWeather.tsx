import axios from "axios";
import styles from "./currentWeather.module.scss";
import { useEffect, useState } from "react";
import windSpeed from "@assets/icons/mainInfoSection/windSpeedIcon.svg";
import pressure from "@assets/icons/mainInfoSection/pressureIcon.svg";
import humidity from "@assets/icons/mainInfoSection/humidityIcon.svg";
import waterTemp from "@assets/icons/mainInfoSection/waterTempIcon.svg";
import {
  getWeatherEffect,
  getWeatherInfo,
  getRainChance,
} from "@utils/weatherEffects/weatherEffects";
import { getWindDirection } from "@utils/windDirection/windDirection";

const CurrentWeather = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=53.9&longitude=27.56&timezone=auto&language=ru&past_days=1&forecast_days=14&current=temperature_2m,weather_code,cloud_cover,precipitation,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m&hourly=temperature_2m,weather_code,precipitation,precipitation_probability,cloud_cover,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant,uv_index_max",
        );

        setData(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке погоды:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!data) return;

  const effect = getWeatherEffect(data.current.weather_code);
  const direction = getWindDirection(data.current.wind_direction_10m);
  const info = getWeatherInfo(data.current.weather_code);
  const precipitation = getRainChance(
    data.daily.precipitation_probability_max[1],
  );

  return (
    <>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>
          <span>+</span>
          {Math.floor(data.current.temperature_2m)}
          <span>°</span>
        </p>
        <img src={effect} alt="" />
        <div className={styles.summary}>
          <p className={styles.summary_item}>{info}</p>
          <p className={styles.summary_item}>{precipitation}</p>
        </div>
      </div>
      <div className={styles.weather_details}>
        <div className={styles.degrees_details}>
          <p>Ощущается как {Math.floor(data.current.apparent_temperature)}°</p>
          <p>Вчера было {Math.floor(data.hourly.temperature_2m[10])}°</p>
        </div>
        <div className={styles.effect_details}>
          <div className={styles.effect_details_item}>
            <img src={windSpeed} alt="" />
            <p>
              {Math.floor(data.current.wind_speed_10m)} м/с, {direction}
            </p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={pressure} alt="" />
            <p>{Math.floor(data.current.pressure_msl)}</p>
          </div>
          <div className={styles.effect_details_item}>
            <img src={humidity} alt="" />
            {data.current.relative_humidity_2m}%
          </div>
          <div className={styles.effect_details_item}>
            <img src={waterTemp} alt="" />
            <p>{Math.floor(data.current.temperature_2m - 2)}°</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
