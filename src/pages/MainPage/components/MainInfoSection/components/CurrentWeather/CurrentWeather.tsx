import styles from "./currentWeather.module.scss";
import WindSpeed from "@assets/icons/mainInfoSection/windSpeedIcon.svg";
import Pressure from "@assets/icons/mainInfoSection/pressureIcon.svg";
import Humidity from "@assets/icons/mainInfoSection/humidityIcon.svg";
import WaterTemp from "@assets/icons/waterTempIcon.svg";
import useServices from "@services/useSrvices";

const CurrentWeather = () => {
  const {
    currentWeatherEffect,
    currentWeatherInfo,
    currentWindDirection,
    currentTemperature,
    currentApparentTemperature,
    currentWaterTemperature,
    currentWindSpeed,
    currentPressure,
    currentHumidity,
  } = useServices().getCurrentData || {};
  const { yesterdayCurrentTemp } = useServices().getYesterdayData || {};
  const { todayPrecipitationProbability } = useServices().getTodayData || {};

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.weather_summary}>
        <p className={styles.degrees}>
          {currentTemperature}
          <span>°</span>
        </p>
        <img src={currentWeatherEffect} alt="" />
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
          <div className={styles.effect_details_item}>
            <img src={WindSpeed} alt="" />
            <p>
              {currentWindSpeed} м/с, {currentWindDirection}
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
            <p>{currentWaterTemperature}°</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
