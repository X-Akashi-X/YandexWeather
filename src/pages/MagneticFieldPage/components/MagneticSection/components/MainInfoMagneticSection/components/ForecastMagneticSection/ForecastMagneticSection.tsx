import useServices from "@services/useServices";
import MagneticForecastChart from "../MagneticForecastChart/MagneticForecastChart";
import styles from "./forecastMagneticSection.module.scss";

const ForecastMagneticSection = () => {
  const { getTwoWeekHourlyData } = useServices();
  const { threeDays } = getTwoWeekHourlyData;

  return (
    <section className={styles.section_wrapper}>
      {threeDays.map((data, i) => (
        <MagneticForecastChart data={data} key={data.date} index={i} />
      ))}
    </section>
  );
};

export default ForecastMagneticSection;
