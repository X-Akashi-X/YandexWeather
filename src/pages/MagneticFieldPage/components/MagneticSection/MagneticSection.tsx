import MainInfoMagneticSection from "./components/MainInfoMagneticSection/MainInfoMagneticSection";
import styles from "./magneticSection.module.scss";


const MagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <MainInfoMagneticSection />
    </section>
  );
};

export default MagneticSection;
