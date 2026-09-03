import DetailedForecast from "@components/DetailedForecast/DetailedForecast";
import styles from "./mainTenDaysSection.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import { Link } from "react-router-dom";

const TenDaysForecastSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <DetailedForecast />
      <button>
        <Link to="/">
          Прогноз на месяц <img src={Arrow} alt="Стрелка" />
        </Link>
      </button>
    </section>
  );
};

export default TenDaysForecastSection;
