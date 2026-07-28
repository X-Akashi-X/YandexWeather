import styles from "./weatherJournal.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";

const WeatherJournal = () => {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.title_wrapper}>
        <h3>Журнал погоды</h3>
        <img src={Arrow} alt="" />
      </div>
      <a className={styles.news_wrapper}>
        <p>
          Клещи наступают! Как климатические изменения помогают паразитам...
        </p>
      </a>
    </section>
  );
};

export default WeatherJournal;
