import styles from "./UVIndexCurrentDetails.module.scss";
import type { UVIndexStateActive } from "@ts/props";

const UVIndexCurrentDetails = ({ active }: UVIndexStateActive) => {
  return (
    <div className={styles.main_wrapper}>
      <div>
        <p className={styles.title}>УФ-индекс</p>
        <div className={styles.category_wrapper}>
          <p className={styles.category_text}>
            {active?.isToday ? "Сегодня" : "Будет"}{" "}
            {active?.twoWeekUVCategory.text}
          </p>
          <p
            className={styles.category_index}
            style={{ backgroundColor: active?.twoWeekUVCategory.color }}
          >
            {active?.twoWeekUV}
          </p>
        </div>
        <p className={styles.category_recommendation}>
          {active?.twoWeekUVCategory.advancedText}
        </p>
        <div className={styles.attributes}>
          {active?.twoWeekUVCategory.attributeImgs.map((img) => (
            <img src={img} alt="" key={img} />
          ))}
        </div>
      </div>
      <img src={active?.twoWeekUVCategory.imgUV} alt="" />
    </div>
  );
};

export default UVIndexCurrentDetails;
