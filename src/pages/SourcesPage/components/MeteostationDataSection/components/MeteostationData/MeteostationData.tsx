import useServices from "@services/useServices";
import styles from "./meteostationData.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

const MeteostationData = () => {
  const { getCurrentData } = useServices();
  const { currentWeatherEffect, currentTemperature, currentWeatherInfo } =
    getCurrentData;
  const { cityName, stationDistance } = useSelector(
    (state: RootState) => state.geo,
  );

  return (
    <section className={styles.section_wrapper}>
      <h3>Метеостанция</h3>
      <div className={styles.meteostation_wrapper}>
        <div className={styles.location_wrapper}>
          <p className={styles.title}>
            {cityName}{" "}
            <span className="small_grey_text">{stationDistance} км</span>
          </p>
          <p className="small_grey_text">1 час назад</p>
        </div>
        <div className={styles.weather_wrapper}>
          <img src={currentWeatherEffect} alt={currentWeatherInfo} />
          <p>{currentTemperature}°</p>
        </div>
      </div>
    </section>
  );
};

export default MeteostationData;
