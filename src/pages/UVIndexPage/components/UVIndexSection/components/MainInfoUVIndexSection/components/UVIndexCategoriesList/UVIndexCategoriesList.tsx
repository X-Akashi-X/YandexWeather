import { UVCategories } from "./config";
import styles from "./UVIndexCategoriesList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

const UVIndexCategoriesList = () => {
  const config = UVCategories;

  return (
    <section className={styles.section_wrapeer}>
      <h3 className={styles.main_title}>Какой бывает УФ-индекс</h3>
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        freeMode={true}
        touchRatio={1}
        spaceBetween={6}
        className={styles.categories_wrapper}
      >
        {config.map(
          ({
            categoryImg,
            categoryRange,
            category,
            categoryAttributes,
            id,
          }) => (
            <SwiperSlide className={styles.categories_item} key={id}>
              <img className={styles.category_img} src={categoryImg} alt="" />
              <p className={styles.category_range}>{categoryRange}</p>
              <p>{category}</p>
              <div className={styles.attributes_wrapper}>
                {categoryAttributes.map((img) => (
                  <img src={img} alt="" key={img} />
                ))}
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default UVIndexCategoriesList;
