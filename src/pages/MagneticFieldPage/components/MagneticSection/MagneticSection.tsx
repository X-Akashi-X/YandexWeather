import HomeTabletButton from "@components/HomeTabletButton/HomeTabletButton";
import MainInfoMagneticSection from "./components/MainInfoMagneticSection/MainInfoMagneticSection";
import styles from "./magneticSection.module.scss";

const MagneticSection = () => {
  return (
    <>
      <HomeTabletButton style={{ marginBottom: "24px", marginLeft: "4px" }} />
      <section className={styles.section_wrapper}>
        <MainInfoMagneticSection />
      </section>
    </>
  );
};

export default MagneticSection;
