import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import styles from "./mainInfoSection.module.scss";

const MainInfoSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <CurrentWeather />
    </section>
  );
};

export default MainInfoSection;
