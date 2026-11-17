import CurrentFeelings from "./components/CurrentFeelingsMagnetic/CurrentFeelingsMagnetic";
import FAQMagneticSection from "./components/FAQMagneticSection/FAQMagneticSection";
import ForecastMagneticSection from "./components/ForecastMagneticSection/ForecastMagneticSection";
import MagneticForecastFooter from "./components/MagneticForecastFooter/MagneticForecastFooter";
import TenDaysMagnetic from "./components/TenDaysMagnetic/TenDaysMagnetic";
import styles from "./mainInfoMagneticSection.module.scss";

const MainInfoMagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelings />
      <ForecastMagneticSection />
      <MagneticForecastFooter />
      <TenDaysMagnetic />
      <FAQMagneticSection />
    </section>
  );
};

export default MainInfoMagneticSection;
