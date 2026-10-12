import type { AllergiesStateActive } from "@ts/props";
import styles from "./allergiesChartAndMap.module.scss";
import AllergiesWeekChart from "./components/AllergiesWeekChart/AllergiesWeekChart";

const AllergiesChartAndMap = ({ active }: AllergiesStateActive) => {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.chart_wrapper}>
        <h3>{active}</h3>
        <p>В ближайшие 7 дней активности не ожидается</p>
        <AllergiesWeekChart active={active} />
      </div>
    </section>
  );
};

export default AllergiesChartAndMap;
