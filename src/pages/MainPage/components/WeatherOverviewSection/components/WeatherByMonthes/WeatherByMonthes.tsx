import useServices from "@services/useServices";
import styles from "./weatherByMonthes.module.scss";
import { Link } from "react-router-dom";

const WeatherByMonthes = () => {
  const { getMontlyData } = useServices();
  const data = getMontlyData;

  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.title_main}>Погода по месяцам</h3>
      <div className={styles.weather_wrapper}>
        {data.map((item) => (
          <Link
            to="/"
            className={styles.weather_wrapper_item}
            key={item.monthly}
          >
            <p>{item.monthly}</p>
            <div className={styles.tmp_and_effect_wrapper}>
              <p>{item.montlyAvgTemperature}°</p>
              <img
                src={item.montlyWeatherEffect}
                alt={item.montlyWeatherInfo}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WeatherByMonthes;
