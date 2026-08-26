import useServices from "@services/useSrvices";
import styles from "./weatherByMonthes.module.scss";
import { Link } from "react-router-dom";

const WeatherByMonthes = () => {
  const dataArchive = useServices().getMontlyData || [];

  return (
    <section className={styles.section_wrapper}>
      <h3>Погода по месяцам</h3>
      <div className={styles.weather_wrapper}>
        {dataArchive.map((item, i) => (
          <Link to="/" className={styles.weather_wrapper_item} key={i}>
            <p>{item.monthly}</p>
            <div className={styles.tmp_and_effect_wrapper}>
              <p>{item.montlyAvgTemperature}°</p>
              <img src={item.montlyWeatherEffect} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WeatherByMonthes;
