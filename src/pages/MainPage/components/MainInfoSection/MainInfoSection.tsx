import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecastMonthLink from "./components/ForecastMonthLink/ForecastMonthLink";
import WeatherAndFeelings from "./components/WeatherAndFeelings/WeatherAndFeelings";
import WeatherChart from "./components/WeatherChart/WeatherChart";
import WeatherTimeline from "./components/WeatherTimeline/WeatherTimeline";
import WeakStatus from "./components/WeekStatus/WeekStatus";
import styles from "./mainInfoSection.module.scss";

const MainInfoSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <CurrentWeather />
      <WeakStatus />
      <WeatherTimeline />
      <WeatherAndFeelings />
      <ForecastMonthLink />
      <WeatherChart />
    </section>
  );
};

export default MainInfoSection;
