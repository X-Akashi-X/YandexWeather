import MainInfoPressureSection from "./components/MainInfoPressureSection/MainInfoPressureSection";
import styles from "./pressureSection.module.scss";

const PressureSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <MainInfoPressureSection />
    </section>
  );
};

export default PressureSection;
