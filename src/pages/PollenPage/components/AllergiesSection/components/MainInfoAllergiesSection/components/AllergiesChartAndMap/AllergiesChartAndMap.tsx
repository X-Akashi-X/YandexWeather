import type { AllergiesStateActive } from "@ts/props";
import styles from "./allergiesChartAndMap.module.scss";
import AllergiesWeekChart from "./components/AllergiesWeekChart/AllergiesWeekChart";
import { getPollenCategory } from "@utils/categories/categories";
import AllergiesMap from "./components/AllergiesMap/AllergiesMap";
import AllergiesForecastFooter from "../AllergiesForecastFooter/AllergiesForecastFooter";

const AllergiesChartAndMap = ({ active }: AllergiesStateActive) => {
  const value = active ? active.value : 0;
  const category = getPollenCategory(value);

  return (
    <>
      <section className={styles.section_wrapper}>
        <div className={styles.chart_wrapper}>
          <h3>{active?.name}</h3>
          <p className={styles.forecast_text}>
            В ближайшие 7 дней {category.text}
          </p>
          <AllergiesWeekChart active={active} />
        </div>
        <AllergiesMap />
      </section>
      <AllergiesForecastFooter />
    </>
  );
};

export default AllergiesChartAndMap;
