import CalendarSection from "./components/CalendarSection/CalendarSection";
import CurrentMoonSection from "./components/CurrentMoonSection/CurrentMoonSection";
import styles from "./MainInfoMoonSection.module.scss";

const MainInfoMoonSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentMoonSection />
      <CalendarSection />
    </section>
  );
};

export default MainInfoMoonSection;
