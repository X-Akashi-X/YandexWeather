import useMocks from "@services/useMocks";
import styles from "./newsAllergiesSection.module.scss";

const NewsAllergiesSection = () => {
  const { getAllNews } = useMocks();
  const { newsAllergies } = getAllNews;

  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.main_title}>Статьи о погоде</h3>
      <div className={styles.news_wrapper}>
        {newsAllergies.map(({ cover_img, title, id }) => (
          <div className={styles.item_wrapper} key={id}>
            <img src={cover_img} alt="" />
            <p className={styles.news_title}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAllergiesSection;
