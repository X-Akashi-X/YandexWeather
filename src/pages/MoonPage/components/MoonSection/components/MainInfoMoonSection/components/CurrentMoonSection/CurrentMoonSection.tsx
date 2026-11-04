import styles from "./currentMoonSection.module.scss";
import MoonHeader from "./components/MoonHeader/MoonHeader";
import MoonDetails from "./components/MoonDetails/MoonDetails";

const CurrentMoonSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <MoonHeader />
      <MoonDetails />
    </section>
  );
};

export default CurrentMoonSection;
