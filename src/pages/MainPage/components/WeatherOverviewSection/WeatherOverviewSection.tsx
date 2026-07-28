import WeatherByMonthes from "./components/WeatherByMonthes/WeatherByMonthes";
import WeatherJournal from "./components/WeatherJournal/WeatherJournal";
import styles from "./weatherOverviewSection.module.scss";

const WeatherOverviewSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <WeatherJournal />
      <WeatherByMonthes />
    </section>
  )
};

export default WeatherOverviewSection;
