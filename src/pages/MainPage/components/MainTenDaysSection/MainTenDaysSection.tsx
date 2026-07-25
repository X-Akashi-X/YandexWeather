import DetailedForecast from "@components/DetailedForecast/DetailedForecast";
import styles from "./mainTenDaysSection.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";

const TenDaysForecastSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <DetailedForecast />
      <button>
        Прогноз на месяц <img src={Arrow} alt="" />
      </button>
    </section>
  );
};

export default TenDaysForecastSection;
