import useServices from "@services/useServices";
import MagneticForecastChart from "../MagneticForecastChart/MagneticForecastChart";
import styles from "./forecastMagneticSection.module.scss";
import { hourlyToMagneticChartItems } from "@adapters/magneticChartAdapters";
import { getDayItemDayLabel } from "@utils/formatters";

const ForecastMagneticSection = () => {
  const { getTwoWeekHourlyData } = useServices();
  const { threeDays } = getTwoWeekHourlyData;

  return (
    <section className={styles.section_wrapper}>
      {threeDays.map((data, i) => (
        <MagneticForecastChart
          data={hourlyToMagneticChartItems(data.hours)}
          title={getDayItemDayLabel(i, data.hours[0].twoWeekHourlyWeekday)}
          subTitle={data.hours[0].twoWeekHourlyDate}
          key={data.date}
        />
      ))}
    </section>
  );
};

export default ForecastMagneticSection;
