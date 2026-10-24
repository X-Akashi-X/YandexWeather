import CurrentFeelings from "./components/CurrentFeelingsMagnetic/CurrentFeelingsMagnetic";
import ForecastMagneticSection from "./components/ForecastMagneticSection/ForecastMagneticSection";
import styles from "./mainInfoMagneticSection.module.scss";

const MainInfoMagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelings />
      <ForecastMagneticSection />
    </section>
  );
};

export default MainInfoMagneticSection;
