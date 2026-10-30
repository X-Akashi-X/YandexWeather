import StatusArc from "@components/StatusArc/StatusArc";
import styles from "./currentFeelingsPressure.module.scss";
import useServices from "@services/useServices";

const CurrentFeelingsPressure = () => {
  const { getCurrentData } = useServices();
  const { currentPressure, currentPressureCategory } = getCurrentData;

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.arc_wrapper}>
        <StatusArc category={currentPressureCategory} />
        <div className={styles.category_wrapper}>
          <p className={styles.category}>{currentPressure}</p>
          <p className="small_grey_text">мм рт.ст.</p>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <h2 className={styles.main_title}>Атмосферное давление в Минске</h2>
        <div className={styles.info_wrapper}>
          <p
            className={styles.info}
            style={{ color: currentPressureCategory.color }}
          >
            {currentPressureCategory.text}
          </p>
          <p>Норма: 751−765 мм рт. ст.</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentFeelingsPressure;
