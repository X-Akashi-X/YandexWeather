import CurrentFeelingsPressure from "./components/CurrentFeelingsPressure/CurrentFeelingsPressure";
import PressureGroups from "./components/PressureGroups/PressureGroups";
import styles from "./mainInfoPressureSection.module.scss";

const MainInfoPressureSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelingsPressure />
      <PressureGroups />
    </section>
  );
};

export default MainInfoPressureSection;
