import { UVCategories } from "./config";
import styles from "./UVIndexCategoriesList.module.scss";

const UVIndexCategoriesList = () => {
  const config = UVCategories;

  return (
    <section className={styles.section_wrapeer}>
      <h3 className={styles.main_title}>Какой бывает УФ-индекс</h3>
      <div className={styles.categories_wrapper}>
        {config.map(
          ({
            categoryImg,
            categoryRange,
            category,
            categoryAttributes,
            id,
          }) => (
            <div className={styles.categories_item} key={id}>
              <img className={styles.category_img} src={categoryImg} alt="" />
              <p className={styles.category_range}>{categoryRange}</p>
              <p>{category}</p>
              <div className={styles.attributes_wrapper}>
                {categoryAttributes.map((img) => (
                  <img src={img} alt="" key={img} />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default UVIndexCategoriesList;
