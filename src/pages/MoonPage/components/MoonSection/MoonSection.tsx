import HomeTabletButton from "@components/HomeTabletButton/HomeTabletButton";
import styles from "./moonSection.module.scss";
import MainInfoMoonSection from "./components/MainInfoMoonSection/MainInfoMoonSection";

const MoonSection = () => {
  return (
    <>
      <HomeTabletButton style={{ marginBottom: "24px", marginLeft: "4px" }} />
      <section className={styles.section_wrapper}>
        <MainInfoMoonSection />
      </section>
    </>
  );
};

export default MoonSection;
