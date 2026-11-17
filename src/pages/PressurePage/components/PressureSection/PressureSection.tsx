import HomeTabletButton from "@components/HomeTabletButton/HomeTabletButton";
import MainInfoPressureSection from "./components/MainInfoPressureSection/MainInfoPressureSection";
import styles from "./pressureSection.module.scss";

const PressureSection = () => {
  return (
    <>
      <HomeTabletButton style={{ marginBottom: "24px", marginLeft: "4px" }} />
      <section className={styles.section_wrapper}>
        <MainInfoPressureSection />
      </section>
    </>
  );
};

export default PressureSection;
