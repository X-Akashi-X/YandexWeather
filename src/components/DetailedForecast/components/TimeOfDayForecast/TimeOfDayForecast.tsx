import type { TimeOfDayItems } from "@ts/props";
import styles from "./timeOfDayForecast.module.scss";
import Arrow from "@assets/icons/detailedForecast/directionArrowIcon.svg";

const TimeOfDayForecast = ({
  temp,
  effect,
  info,
  apparentTemp,
  windSpeed,
  windDirection,
  windDirectionText,
  humidity,
  pressure,
}: TimeOfDayItems) => {
  return (
    <>
      <div className={`${styles.time_of_day} small_grey_text`}>Утром</div>
      <div className={styles.temp_wrapper}>
        <div className={styles.tmp_effect_wrapper}>
          <p className={styles.temperature}>{temp}°</p>
          <img src={effect} alt={info} />
          <p className={`${styles.info} small_grey_text`}>{info}</p>
        </div>
      </div>
      <div className={styles.apparent_wrapper}>
        <p>{apparentTemp}°</p>
      </div>
      <div className={styles.wind_wrapper}>
        <div className={styles.wind_anvanced_wrapper}>
          <p>{windSpeed}</p>
          <p className={styles.m_per_sec}>м/с</p>
          <img
            src={Arrow}
            style={{ transform: `rotate(${windDirection}deg)` }}
            alt="Стрелка"
          />
          <p className="small_grey_text">{windDirectionText}</p>
        </div>
      </div>
      <p className={styles.humidity_wrapper}>{humidity}%</p>
      <p className={styles.pressure_wrapper}>{pressure}</p>
    </>
  );
};

export default TimeOfDayForecast;
