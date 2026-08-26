import useMocks from "@services/useMocks";
import styles from "./weatherJournal.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import { Link } from "react-router-dom";

const WeatherJournal = () => {
  const randomNews = useMocks().getRandomNews;

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.title_wrapper}>
        <h3>Журнал погоды</h3>
        <img src={Arrow} alt="" />
      </div>
      <Link to="/"
        className={styles.news_wrapper}
        style={{ backgroundImage: `url(${randomNews.cover_img})` }}
      >
        <p>{randomNews.title}</p>
      </Link>
    </section>
  );
};

export default WeatherJournal;
