import CurrentFeelings from "./components/CurrentFeelingsMagnetic/CurrentFeelingsMagnetic";
import ForecastMagneticSection from "./components/ForecastMagneticSection/ForecastMagneticSection";
import MagneticForecastFooter from "./components/MagneticForecastFooter/MagneticForecastFooter";
import styles from "./mainInfoMagneticSection.module.scss";

const MainInfoMagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelings />
      <ForecastMagneticSection />
      <MagneticForecastFooter />
    </section>
  );
};

export default MainInfoMagneticSection;
