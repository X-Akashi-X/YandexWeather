import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeakStatus from "./components/WeekStatus/WeekStatus";
import styles from "./mainInfoSection.module.scss";

const MainInfoSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <CurrentWeather />
      <WeakStatus />
    </section>
  );
};

export default MainInfoSection;
