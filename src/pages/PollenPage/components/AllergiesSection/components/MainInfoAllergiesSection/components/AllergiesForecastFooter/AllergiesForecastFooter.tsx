import styles from "./allergiesForecastFooter.module.scss";
import { allergiesConfig } from "./config";
import About from "@assets/icons/aboutIcon.svg";

const AllergiesForecastFooter = () => {
  return (
    <section className={styles.allergies_forecast_footer}>
      <div className={styles.categories_wrapper}>
        {allergiesConfig.map(({ color, category, id }) => (
          <div className={styles.category_wrapper} key={id}>
            <div className={styles.circle} style={{ backgroundColor: color }} />
            <p>{category}</p>
          </div>
        ))}
      </div>
      <div className={styles.about}>
        <img src={About} alt="О прогнозе" />
        <p>О прогнозе</p>
      </div>
    </section>
  );
};

export default AllergiesForecastFooter;
