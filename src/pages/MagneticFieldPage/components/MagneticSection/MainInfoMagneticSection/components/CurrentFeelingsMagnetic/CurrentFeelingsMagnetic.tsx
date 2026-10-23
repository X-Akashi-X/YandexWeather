import StatusArc from "@components/StatusArc/StatusArc";
import styles from "./currentFeelings.module.scss";
import useServices from "@services/useServices";

const CurrentFeelings = () => {
  const { getTodayData } = useServices();
  const { todayMagneticFieldCategory, todayMagneticField } = getTodayData;

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.arc_wrapper}>
        <StatusArc category={todayMagneticFieldCategory} />
        <div className={styles.category_wrapper}>
          <p className={styles.category}>{todayMagneticField}</p>
          <p className="small_grey_text">Кр</p>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <h2 className={styles.main_title}>Геомагнитное поле в Минске</h2>
        <p className={styles.info}>{todayMagneticFieldCategory.text}</p>
      </div>
    </section>
  );
};

export default CurrentFeelings;
