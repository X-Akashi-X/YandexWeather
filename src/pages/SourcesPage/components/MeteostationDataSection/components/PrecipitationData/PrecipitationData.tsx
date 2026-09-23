import styles from "./precipitationData.module.scss";

const PrecipitationData = () => {
  return (
    <section className={styles.section_wrapper}>
      <h3>Уточнение осадков</h3>
      <div className={styles.precipitation_wrapper}>
        <div className={styles.source_wrapper}>
          <p className={styles.title}>Радар</p>
          <p className="small_grey_text">1 час назад</p>
        </div>
        <div className={styles.source_wrapper}>
          <p className={styles.title}>Спутник</p>
          <p className="small_grey_text">1 час назад</p>
        </div>
      </div>
    </section>
  );
};

export default PrecipitationData;
