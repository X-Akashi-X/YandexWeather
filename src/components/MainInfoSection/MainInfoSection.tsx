import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherTimeline from "./components/WeatherTimeline/WeatherTimeline";
import WeakStatus from "./components/WeekStatus/WeekStatus";
import styles from "./mainInfoSection.module.scss";

const MainInfoSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <CurrentWeather />
      <WeakStatus />
      <WeatherTimeline />
    </section>
  );
};

export default MainInfoSection;
