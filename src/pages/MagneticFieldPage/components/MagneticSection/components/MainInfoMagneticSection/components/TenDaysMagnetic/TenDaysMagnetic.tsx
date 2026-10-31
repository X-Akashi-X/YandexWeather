import useServices from "@services/useServices";
import MagneticForecastChart from "../MagneticForecastChart/MagneticForecastChart";
import styles from "./TenDaysMagnetic.module.scss";
import { tenDaysToMagneticChartItems } from "@adapters/magneticChartAdapters";

const TenDaysMagnetic = () => {
  const { getTenDaysData } = useServices();

  return (
    <section className={styles.section_wrapper}>
      <MagneticForecastChart
        data={tenDaysToMagneticChartItems(getTenDaysData)}
        title="Прогноз на 10 дней"
      />
    </section>
  );
};

export default TenDaysMagnetic;
