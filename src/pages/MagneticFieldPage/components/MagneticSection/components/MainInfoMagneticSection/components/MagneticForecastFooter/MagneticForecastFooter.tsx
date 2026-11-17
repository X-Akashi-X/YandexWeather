import { magneticConfig } from "./config";
import styles from "./magneticForecastFooter.module.scss";

const MagneticForecastFooter = () => {
  return (
    <section className={styles.section_wrapper}>
      {magneticConfig.map(({ color, category, id }) => (
        <div className={styles.category_wrapper} key={id}>
          <div className={styles.circle} style={{ backgroundColor: color }} />
          <p>{category}</p>
        </div>
      ))}
    </section>
  );
};

export default MagneticForecastFooter;
