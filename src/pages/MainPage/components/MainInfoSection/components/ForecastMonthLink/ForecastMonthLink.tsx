import styles from "./forecastMonthLink.module.scss";
import { Link } from "react-router-dom";
import Calendar from "@assets/icons/chartSection/calendar.svg";
import Arrow from "@assets/icons/arrowMore.svg";
const ForecastMonthLink = () => {
  return (
    <Link to="/" className={styles.forecast_month}>
      <div className={styles.img_container}>
        <img src={Calendar} alt="" />
        <p>Прогноз на месяц</p>
      </div>
      <img src={Arrow} alt="" />
    </Link>
  );
};

export default ForecastMonthLink;
