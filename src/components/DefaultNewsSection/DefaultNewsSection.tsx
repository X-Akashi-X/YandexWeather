import styles from "./defaultNewsSection.module.scss";
import type { MockNewsDefault } from "@ts/mocks";

const DefaultNewsSection = ({news}: {news: MockNewsDefault[] }) => {
  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.main_title}>Статьи о погоде</h3>
      <div className={styles.news_wrapper}>
        {news.map(({ cover_img, title, id }) => (
          <div className={styles.item_wrapper} key={id}>
            <img src={cover_img} alt="" />
            <p className={styles.news_title}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DefaultNewsSection;
