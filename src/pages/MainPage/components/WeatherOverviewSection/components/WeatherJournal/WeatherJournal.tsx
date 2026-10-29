import useMocks from "@services/useMocks";
import styles from "./weatherJournal.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import { Link } from "react-router-dom";

const WeatherJournal = () => {
  const { getRandomNews } = useMocks();
  const { forecast } = getRandomNews;

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.title_wrapper}>
        <h3>Журнал погоды</h3>
        <img src={Arrow} alt="Стрелка" />
      </div>
      <Link
        to="/"
        className={styles.news_wrapper}
        style={{ backgroundImage: `url(${forecast.cover_img})` }}
      >
        <p className={styles.tilte_main}>{forecast.title}</p>
      </Link>
    </section>
  );
};

export default WeatherJournal;
